'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const StorySubmissionSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  author: z.string().min(2, 'Author name must be at least 2 characters'),
  content: z.string().min(50, 'Story must be at least 50 characters'),
  genre: z.string().optional(),
  location: z.string().optional(),
  date: z.string().optional(),
  witness: z.string().optional()
});

export default function SubmitPage() {
  const [submissionStatus, setSubmissionStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<z.infer<typeof StorySubmissionSchema>>({
    resolver: zodResolver(StorySubmissionSchema)
  });

  const onSubmit = async (data: z.infer<typeof StorySubmissionSchema>) => {
    try {
      setSubmissionStatus(null);
      
      // Log submission data for debugging
      console.log('Submitting story:', JSON.stringify(data, null, 2));

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers));

      // Handle non-200 responses
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      // Attempt to parse JSON
      let result;
      try {
        result = await response.json();
        console.log('Parsed response:', result);
      } catch (parseError) {
        console.error('JSON parsing error:', parseError);
        throw new Error('Failed to parse server response');
      }

      // Check for success in response
      if (result.success) {
        setSubmissionStatus({
          success: true,
          message: result.message || 'Your dark tale has been recorded...'
        });
        reset();
      } else {
        throw new Error(result.error || 'Shadows consumed your story...');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus({
        success: false,
        message: error instanceof Error 
          ? error.message 
          : 'The void rejected your narrative...'
      });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen gothic-container py-24 relative overflow-hidden">
        {/* Atmospheric overlay */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto mt-8"
        >
          <h1 
            className="title-container text-center mb-2 text-6xl font-gothic tracking-wider leading-relaxed absolute inset-0 z-20"
            style={{
              color: '#4B0082', 
              textShadow: `
                0 0 5px #9400D3,
                0 0 10px #9400D3
              `,
              WebkitTextStroke: '1px #2F0743',
              fontFamily: 'var(--font-modern)',
              opacity: 1,
              display: 'block',
              position: 'relative',
              transform: 'translateZ(0)',
              willChange: 'opacity, transform',
              whiteSpace: 'nowrap',
              wordWrap: 'normal',
              overflow: 'visible'
            }}
          >
            Submit Your Tale
          </h1>

          <h1 className="text-4xl text-center mb-12 text-red-500">
            Submit Your Gothic Tale
          </h1>

          <style>
            {`
              input, textarea, select {
                color: #8B0000; /* Blood-red color */
                text-shadow: 0 0 5px rgba(139, 0, 0, 0.8), 0 0 10px rgba(139, 0, 0, 0.6);
                background-color: #1E1E1E; /* Darker gray background */
                font-weight: 900; /* Thicker font */
              }
              input:focus, textarea:focus, select:focus {
                text-shadow: 0 0 10px rgba(139, 0, 0, 0.8), 0 0 20px rgba(139, 0, 0, 0.6);
              }
            `}
          </style>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-gothic-300 mb-2">
                Story Title
              </label>
              <input 
                {...register('title')}
                id="title"
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-3"
                placeholder="The Whispers in the Shadows"
              />
              {errors.title && (
                <p className="text-red-500 mt-1">{errors.title.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="author" className="block text-gothic-300 mb-2">
                Author Name
              </label>
              <input 
                {...register('author')}
                id="author"
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-3"
                placeholder="Your Haunting Pseudonym"
              />
              {errors.author && (
                <p className="text-red-500 mt-1">{errors.author.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="content" className="block text-gothic-300 mb-2">
                Your Dark Narrative
              </label>
              <textarea 
                {...register('content')}
                id="content"
                rows={6}
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-3"
                placeholder="Describe the horrors that haunt your imagination..."
              />
              {errors.content && (
                <p className="text-red-500 mt-1">{errors.content.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="genre" className="block text-gothic-300 mb-2">
                Genre (Optional)
              </label>
              <select 
                {...register('genre')}
                id="genre"
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-3"
                style={{
                  color: '#8B0000', 
                  textShadow: '0 0 5px rgba(139, 0, 0, 0.8), 0 0 10px rgba(139, 0, 0, 0.6)',
                  backgroundColor: '#1E1E1E', 
                  fontWeight: 900
                }}
              >
                <option value="">Select a Genre</option>
                <option value="horror">Horror</option>
                <option value="gothic">Gothic</option>
                <option value="supernatural">Supernatural</option>
                <option value="psychological">Psychological</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="block text-gothic-300 mb-2">
                Location (Optional)
              </label>
              <input 
                {...register('location')}
                id="location"
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-3"
                placeholder="Where did this occur?"
              />
              {errors.location && (
                <p className="text-red-500 mt-1">{errors.location.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="date" className="block text-gothic-300 mb-2">
                Date (Optional)
              </label>
              <input 
                {...register('date')}
                id="date"
                type="date"
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-3"
              />
              {errors.date && (
                <p className="text-red-500 mt-1">{errors.date.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="witness" className="block text-gothic-300 mb-2">
                Witness Name (Optional)
              </label>
              <input 
                {...register('witness')}
                id="witness"
                className="w-full bg-gothic-900/50 border border-red-900/20 rounded-lg p-3"
                placeholder="Your name or 'Anonymous'"
              />
              {errors.witness && (
                <p className="text-red-500 mt-1">{errors.witness.message}</p>
              )}
            </div>

            {submissionStatus && (
              <div 
                className={`p-4 rounded-lg ${
                  submissionStatus.success 
                    ? 'bg-green-900/50 text-green-300' 
                    : 'bg-red-900/50 text-red-300'
                }`}
              >
                {submissionStatus.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-red-900/20 hover:bg-red-900/30 text-red-500 border border-red-900/40 rounded-lg py-3 transition-colors"
            >
              {isSubmitting ? 'Summoning Your Tale...' : 'Submit Dark Tale'}
            </button>
          </form>

          {/* Test Submit Button Removed */}
        </motion.div>
      </div>
    </PageTransition>
  );
}