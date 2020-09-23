/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <circle cx="162" cy="128" r="34" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <circle cx="162" cy="128" r="34" opacity="0.2"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" opacity="0.2"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" opacity="0.2"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" opacity="0.2"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" opacity="0.2"/>
  <circle cx="162" cy="128" r="34" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M186.61523,94.00049A41.97934,41.97934,0,0,0,162,18.001H94A41.97934,41.97934,0,0,0,69.38477,94.00049a41.93894,41.93894,0,0,0,.00048,67.99939A41.9892,41.9892,0,1,0,136,195.99951V160.948a41.97356,41.97356,0,1,0,50.61523-66.94751ZM120,86.001H94a26,26,0,0,1-26-26h0a26,26,0,0,1,26-26h26ZM162,154a26,26,0,1,1,26-26A26,26,0,0,1,162,154Z"/>

</>)
    case "light":
      return (<>
  <circle cx="162" cy="128" r="34" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <circle cx="162" cy="128" r="34" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <circle cx="162" cy="128" r="34" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,94V26.00089H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,161.99911V94H94a34,34,0,0,0,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,94V26.00089h34a34,34,0,0,1,0,68Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,161.99911v34.00044A34,34,0,1,1,94,162Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Figma = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  ); 
});

Figma.displayName = "Figma";

export default Figma;