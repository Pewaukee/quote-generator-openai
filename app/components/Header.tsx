import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div className='min-h-[100px] w-full flex items-center bg-gradient-to-r from-blue-400 to-blue-900'>
      <div className='pl-10'>
        <p className='text-yellow-500 underline font-space-mono text-4xl italic uppercase font-extrabold drop-shadow-lg'>
          <Image
            src='/svg/quote.svg'
            alt='quote picture'
            width={75}
            height={75}
            className='inline-block mr-4'
          />
          Quote Generator
        </p>
      </div>
    </div>
  );
}
