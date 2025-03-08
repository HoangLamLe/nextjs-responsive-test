import { memo, SVGProps } from 'react';

const VuesaxBoldArrowSquareRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M26.9833 3.33333H13.0167C6.95 3.33333 3.33333 6.95 3.33333 13.0167V26.9667C3.33333 33.05 6.95 36.6667 13.0167 36.6667H26.9667C33.0333 36.6667 36.65 33.05 36.65 26.9833V13.0167C36.6667 6.95 33.05 3.33333 26.9833 3.33333ZM24.65 20.8833L18.7667 26.7667C18.5167 27.0167 18.2 27.1333 17.8833 27.1333C17.5667 27.1333 17.25 27.0167 17 26.7667C16.5167 26.2833 16.5167 25.4833 17 25L22 20L17 15C16.5167 14.5167 16.5167 13.7167 17 13.2333C17.4833 12.75 18.2833 12.75 18.7667 13.2333L24.65 19.1167C25.15 19.6 25.15 20.4 24.65 20.8833Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VuesaxBoldArrowSquareRightIcon);
export { Memo as VuesaxBoldArrowSquareRightIcon };
