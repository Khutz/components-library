import { type SVGProps } from 'react';

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#a)'>
      <path
        d='M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103.384.04.765.105 1.141.195v3.325a8.62 8.62 0 0 0-.653-.036c-.244-.006-.489-.01-.733-.009-.707 0-1.259.096-1.675.309-.28.14-.515.356-.679.622-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v24H0z' fill='transparent' />
      </clipPath>
    </defs>
  </svg>
);
