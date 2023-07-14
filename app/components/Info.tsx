import React from 'react';

export default function Info() {
  return (
    <div className='w-full flex flex-col items-center justify-center px-10 font-space-mono'>
      <h2 className='text-2xl font-space-mono text-center pt-10 pb-4'>
        Fill out the text boxes and hit
      </h2>
      <h1 className='text-3xl font-space-mono text-center'>GENERATE</h1>
      <h2 className='text-2xl font-space-mono text-center pt-4'>
        to get an AI generated quote!
      </h2>
    </div>
  );
}
