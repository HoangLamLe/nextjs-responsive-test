import { memo, SVGProps } from "react";

const MoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="15" y="14" width="18" height="2" fill="white" />
    <rect x="15" y="20" width="18" height="2" fill="white" />
    <rect x="15" y="26" width="18" height="2" fill="white" />
  </svg>
);

const Memo = memo(MoreIcon);
export { Memo as MoreIcon };
