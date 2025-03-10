import { memo, SVGProps } from 'react';

const AntDesignFacebookFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M34.3758 4.375H5.62585C4.93444 4.375 4.37585 4.93359 4.37585 5.625V34.375C4.37585 35.0664 4.93444 35.625 5.62585 35.625H34.3758C35.0673 35.625 35.6258 35.0664 35.6258 34.375V5.625C35.6258 4.93359 35.0673 4.375 34.3758 4.375ZM30.7665 13.4961H28.2704C26.3133 13.4961 25.9344 14.4258 25.9344 15.793V18.8047H30.6063L29.9969 23.5195H25.9344V35.625H21.0633V23.5234H16.9891V18.8047H21.0633V15.3281C21.0633 11.293 23.5282 9.09375 27.1298 9.09375C28.8563 9.09375 30.3368 9.22266 30.7704 9.28125V13.4961H30.7665Z'
      fill='white'
    />
  </svg>
  
);

const Memo = memo(AntDesignFacebookFilledIcon);
export { Memo as AntDesignFacebookFilledIcon };
