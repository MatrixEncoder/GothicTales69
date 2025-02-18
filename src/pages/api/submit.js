import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);

  if (req.method === 'POST') {
    const { title, author, content, genre, location, date, witness } = req.body;

    // Basic validation
    if (!title || !author || !content) {
      return res.status(400).json({ success: false, error: 'Title, author, and content are required.' });
    }

    // Here you would typically save the story to a database
    console.log('Received story submission:', { title, author, content, genre, location, date, witness });

    // Respond with success
    return res.status(200).json({ success: true, message: 'Story submitted successfully!' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
