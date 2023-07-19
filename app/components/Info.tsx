import React from 'react';
import {Popover} from '@mui/material';

export default function Info() {
  return (
    <div className='w-full flex flex-col items-center justify-center px-10 font-space-mono'>
      <h2 className='text-2xl font-space-mono text-center pt-10 pb-4'>
        Fill out the text boxes and hit
      </h2>
      <h1 className='text-3xl font-space-mono text-center'>GENERATE</h1>
      <h2 className='text-2xl font-space-mono text-center pt-4'>
        to get an AI generated quote using OpenAI&apos;s API!
      </h2>
      <p className='mt-6'>
        Prompt format: &apos;Generate a quote about &#123;SUBJECT&#125; inspired by &#123;INSPRIRATION&#125;.&apos;
      </p>
    </div>
  );
}
