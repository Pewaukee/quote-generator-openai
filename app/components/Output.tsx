'use client';

import React, { useState } from 'react';

export default function Output() {
  const [output, setOutput] = useState('');
  return (
    <div className='flex justify-center items-center mt-[25px] font-space-mono text-lg'>
      <p>Test output from the chatgpt bot goes here.</p>
    </div>
  );
}
