import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto prose prose-invert"
      >
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Shield className="w-8 h-8 text-blood-red" />
          <h1 className="horror-title creepy-text text-3xl" style={{ color: '#ffcc00' }}>Privacy Policy</h1>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="creepy-text text-2xl mb-4">1. Information We Collect</h2>
            <p>We collect the following information when you use GothicTales:</p>
            <ul>
              <li>Name and email address when submitting stories</li>
              <li>Story submissions and comments</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="creepy-text text-2xl mb-4">2. How We Use Your Information</h2>
            <p>Your information is used for:</p>
            <ul>
              <li>Publishing and attributing stories</li>
              <li>Communicating about your submissions</li>
              <li>Improving our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="creepy-text text-2xl mb-4">3. Data Security</h2>
            <p>
              We implement security measures to protect your data. However, no internet transmission
              is completely secure. We strive to protect your personal information but cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="creepy-text text-2xl mb-4">4. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="creepy-text text-2xl mb-4">5. Contact Us</h2>
            <p>
              For privacy-related questions, contact us at:{' '}
              <a href="mailto:suryanshsri69.gdscmmmut@gmail.com" className="text-blood-red hover:text-red-400">
                suryanshsri69.gdscmmmut@gmail.com
              </a>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;