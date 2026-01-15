'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { submitRSVP } from '@/app/actions';

const RSVPForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const result = await submitRSVP(email);

            if (result?.success) {
                setStatus('success');
                setMessage('Thank you! Your RSVP has been received.');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(result?.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('A network error occurred. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-[881px]">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center gap-6"
            >
                {/* Email Input */}
                <div className="flex-1 relative flex items-center h-[81px] rounded-[8px] border border-black/5 bg-[#FDFDFD] shadow-sm w-full">
                    <Mail className="absolute left-6 text-gray-400 w-6 h-6" />

                    <input
                        type="email"
                        placeholder="Enter your work email to confirm your attendance"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') setStatus('idle');
                            if (message) setMessage('');
                        }}
                        disabled={status === 'loading'}
                        className="
              w-full h-full
              pl-16 pr-6
              bg-transparent
              text-black
              placeholder:text-gray-400
              text-[18px] font-medium
              border-none
              focus:outline-none focus:ring-0
            "
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="
            w-full md:w-[251px] h-[81px]
            rounded-[8px]
            bg-[#F5AB40]
            text-white font-bold text-xl
            flex items-center justify-center
            transition-all
            disabled:opacity-70
            shadow-[0_10px_30px_rgba(245,171,64,0.3)]
            hover:brightness-105
          "
                >
                    {status === 'loading' ? 'Processing...' : 'RSVP Now'}
                </button>
            </form>

            {/* Status Message */}
            {message && (
                <p
                    className={`mt-4 text-center font-medium ${status === 'success' ? 'text-green-500' : 'text-red-500'
                        }`}
                >
                    {message}
                </p>
            )}
        </div>
    );

};

export default RSVPForm;
