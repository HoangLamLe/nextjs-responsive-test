import { memo, SVGProps } from 'react';

const ImageIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.9998 22.0708L19.414 20.6566L13.7571 14.9998L19.414 9.34292L17.9998 7.92871L10.9287 14.9998L17.9998 22.0708Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(ImageIcon3);
export { Memo as ImageIcon3 };
