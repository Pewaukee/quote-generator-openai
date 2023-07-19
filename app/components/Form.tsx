'use client';

import generatePrompt from '@/pages/api/generate';
import { LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Form() {
  const [prompt, setPrompt] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { loading, createPrompt } = generatePrompt();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPrompt(e.target.value);
  };

  useEffect(() => {
    if (prompt.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [prompt]);

  const handleClick = async () => {
    console.log('clicked');
    await createPrompt({prompt});
  };

  return (
    <div className='w-full px-6 py-4 flex flex-col items-center justify-center'>
      <input
        type='text'
        className='w-[50%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent text-black font-space-mono text-lg'
        placeholder='Enter a prompt here...'
        onChange={handleChange}
      ></input>
      <button
        className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold font-space-mono text-2xl py-2 px-4 rounded disabled:bg-gray-400'
        disabled={disabled || loading}
        onClick={handleClick}
      >
        {loading ? <LinearProgress /> : 'GENERATE'}
      </button>
    </div>
  );
}
