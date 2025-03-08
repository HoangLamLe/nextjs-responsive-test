import { memo, SVGProps } from 'react';

const VuesaxBoldLocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M34.3667 14.0833C32.6167 6.38333 25.9 2.91667 20 2.91667C20 2.91667 20 2.91667 19.9833 2.91667C14.1 2.91667 7.36667 6.36667 5.61667 14.0667C3.66667 22.6667 8.93333 29.95 13.7 34.5333C15.4667 36.2333 17.7333 37.0833 20 37.0833C22.2667 37.0833 24.5333 36.2333 26.2833 34.5333C31.05 29.95 36.3167 22.6833 34.3667 14.0833ZM20 22.4333C17.1 22.4333 14.75 20.0833 14.75 17.1833C14.75 14.2833 17.1 11.9333 20 11.9333C22.9 11.9333 25.25 14.2833 25.25 17.1833C25.25 20.0833 22.9 22.4333 20 22.4333Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VuesaxBoldLocationIcon);
export { Memo as VuesaxBoldLocationIcon };
