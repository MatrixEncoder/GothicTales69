import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const submissionsPath = path.join(process.cwd(), 'data', 'submissions.json');

// Ensure file exists
if (!fs.existsSync(submissionsPath)) {
  fs.writeFileSync(submissionsPath, '[]');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API handler called');
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);

  if (req.method === 'POST') {
    const { title, author, content, genre, location, date, witness } = req.body;

    // Basic validation
    if (!title || !author || !content) {
      return res.status(400).json({ success: false, error: 'Title, author, and content are required.' });
    }

    const submission = {
      id: Date.now(),
      title,
      author,
      content,
      genre,
      location,
      date,
      witness,
      timestamp: new Date().toISOString()
    };

    try {
      const submissions = JSON.parse(fs.readFileSync(submissionsPath, 'utf-8'));
      submissions.push(submission);
      fs.writeFileSync(submissionsPath, JSON.stringify(submissions, null, 2));
      console.log('Submission saved:', submission);

      // Create a Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: 'your-email@example.com',
          pass: 'your-email-password'
        },
      });

      console.log('Nodemailer transporter configuration:', transporter.options);

      try {
        // Send email
        const info = await transporter.sendMail({
          from: 'your-email@example.com',
          to: 'user-email@example.com',
          subject: 'New Story Submission',
          text: `A new story has been submitted:\n\nTitle: ${title}\nAuthor: ${author}\nContent: ${content}`,
        });

        console.log('Email sent successfully', info);

        // Respond with success
        return res.status(200).json({ 
          success: true, 
          message: 'Your tale is forever etched in our archives... Email sent.' 
        });
      } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ 
          success: false, 
          error: 'The ancient tome refused your story... Failed to send email.' 
        });
      }
    } catch (error) {
      console.error('Storage error details:', {
        error: error.message,
        path: submissionsPath,
        cwd: process.cwd()
      });
      return res.status(500).json({ 
        success: false, 
        error: `Archive failure: ${error.message}` 
      });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
