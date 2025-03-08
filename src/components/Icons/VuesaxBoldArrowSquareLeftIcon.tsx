import { memo, SVGProps } from 'react';

const VuesaxBoldArrowSquareLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26.9833 3.33333H13.0167C6.95 3.33333 3.33333 6.95 3.33333 13.0167V26.9667C3.33333 33.05 6.95 36.6667 13.0167 36.6667H26.9667C33.0333 36.6667 36.65 33.05 36.65 26.9833V13.0167C36.6667 6.95 33.05 3.33333 26.9833 3.33333ZM22.9833 25C23.4667 25.4833 23.4667 26.2833 22.9833 26.7667C22.7333 27.0167 22.4167 27.1333 22.1 27.1333C21.7833 27.1333 21.4667 27.0167 21.2167 26.7667L15.3333 20.8833C14.85 20.4 14.85 19.6 15.3333 19.1167L21.2167 13.2333C21.7 12.75 22.5 12.75 22.9833 13.2333C23.4667 13.7167 23.4667 14.5167 22.9833 15L17.9833 20L22.9833 25Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VuesaxBoldArrowSquareLeftIcon);
export { Memo as VuesaxBoldArrowSquareLeftIcon };
