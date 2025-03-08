import { memo, SVGProps } from 'react';

const Rectangle3469Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1183 608' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1183V488.913C781.581 656.189 395.874 638.969 0 488.913V0Z' fill='url(#paint0_radial_29_3167)' />
    <defs>
      <radialGradient
        id='paint0_radial_29_3167'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(601.05 414.346) rotate(-90) scale(168.967 327.92)'
      >
        <stop stopColor='#210544' />
        <stop offset={0.505208} stopColor='#170544' stopOpacity={0.71} />
        <stop offset={1} stopColor='#170544' stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);

const Memo = memo(Rectangle3469Icon);
export { Memo as Rectangle3469Icon };
