import { memo, SVGProps } from 'react';

const VuesaxBoldMobileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M27.0667 3.33333H12.9333C8.33333 3.33333 6.66667 5 6.66667 9.68333V30.3167C6.66667 35 8.33333 36.6667 12.9333 36.6667H27.05C31.6667 36.6667 33.3333 35 33.3333 30.3167V9.68333C33.3333 5 31.6667 3.33333 27.0667 3.33333ZM20 32.1667C18.4 32.1667 17.0833 30.85 17.0833 29.25C17.0833 27.65 18.4 26.3333 20 26.3333C21.6 26.3333 22.9167 27.65 22.9167 29.25C22.9167 30.85 21.6 32.1667 20 32.1667ZM23.3333 10.4167H16.6667C15.9833 10.4167 15.4167 9.85 15.4167 9.16667C15.4167 8.48333 15.9833 7.91667 16.6667 7.91667H23.3333C24.0167 7.91667 24.5833 8.48333 24.5833 9.16667C24.5833 9.85 24.0167 10.4167 23.3333 10.4167Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VuesaxBoldMobileIcon);
export { Memo as VuesaxBoldMobileIcon };
