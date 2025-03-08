import { memo, SVGProps } from 'react';

const Vector230Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M32.3927 0.428579C31.5968 1.06531 32.0611 5.4694 32.3927 7.59184L39.1581 19.7296L17.6682 23.9082C9.64269 23.1786 -4.49813 21.5204 3.14269 20.7245C10.7835 19.9286 16.6733 10.3112 18.6631 5.60205C19.459 2.41837 33.3876 -0.36734 32.3927 0.428579Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(Vector230Icon);
export { Memo as Vector230Icon };
