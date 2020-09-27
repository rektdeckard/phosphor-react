/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M192,216H40a8,8,0,0,1-8-8V88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <polyline
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M192,216H40a8,8,0,0,1-8-8V88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <path d="M192,208H40V88a8,8,0,0,0-16,0V208a16.01833,16.01833,0,0,0,16,16H192a8,8,0,0,0,0-16Z" />
            <path d="M230.18311,109.0752c.09106-.11084.17114-.22706.25537-.3418.07055-.09522.14477-.188.21093-.28662.085-.12647.15894-.25782.23584-.38819.05567-.09423.11524-.186.16724-.2832.06909-.12891.12817-.26172.1897-.39355.04931-.10547.10205-.209.147-.31641.05225-.127.095-.25586.14063-.38477.042-.11816.08764-.23437.12426-.355.03907-.1289.06787-.25976.10034-.39013.03052-.12305.06519-.24414.09009-.36914.03-.15186.04859-.30469.06983-.45752.01465-.106.03515-.20948.04565-.3169a8.02276,8.02276,0,0,0,0-1.584c-.0105-.10742-.031-.21094-.04565-.3169-.02124-.15283-.0398-.30566-.06983-.45752-.0249-.125-.05957-.24609-.09009-.36914-.03247-.13037-.06127-.26123-.10034-.39013-.03662-.12061-.08227-.23682-.12426-.355-.04566-.12891-.08838-.25782-.14063-.38477-.04492-.10742-.09766-.21094-.147-.31641-.06153-.13183-.12061-.26464-.1897-.39355-.052-.09717-.11157-.189-.16724-.2832-.0769-.13037-.15087-.26172-.23584-.38819-.06616-.09863-.14038-.1914-.21093-.28662-.08423-.11474-.16431-.231-.25537-.3418-.116-.14111-.242-.27343-.36719-.40625-.05445-.0581-.1023-.11914-.15869-.17578l-48-48a8.00053,8.00053,0,0,0-11.31446,11.31446L204.68628,96H168A103.9414,103.9414,0,0,0,67.27734,174.00586a7.99961,7.99961,0,1,0,15.49414,3.98828A87.94718,87.94718,0,0,1,168,112h36.68628l-34.34351,34.34277a8.00053,8.00053,0,0,0,11.31446,11.31446l48-48c.05639-.05664.10424-.11768.15869-.17578C229.94116,109.34863,230.06714,109.21631,230.18311,109.0752Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M192,216H40a8,8,0,0,1-8-8V88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <polyline
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M192,216H40a8,8,0,0,1-8-8V88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <polyline
            points="176 152 224 104 176 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M192,216H40a8,8,0,0,1-8-8V88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M75.0245,175.99967A96.04041,96.04041,0,0,1,168,104h56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Share = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

Share.displayName = "Share";

export default Share;
