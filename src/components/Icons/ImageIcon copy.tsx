import { memo, SVGProps } from 'react';

const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 10.8284L3.47451 6.30295L4.60588 5.17158L8 8.56569L11.3941 5.17158L12.5255 6.30295L8 10.8284Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(ImageIcon);
export { Memo as ImageIcon };
