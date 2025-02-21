import type { CSSProperties, ComponentPropsWithoutRef } from "react";

type SpinnerProps = ComponentPropsWithoutRef<"svg"> & {
  fill?: string;
  color?: string;
  size?: CSSProperties["width"] | CSSProperties["height"];
};

export const Spinner = (props: SpinnerProps) => {
  const { fill, className, size, color, ...rest } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" {...rest}>
      <radialGradient
        id="a11"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset="0" stopColor={color ?? "#888888"}></stop>
        <stop
          offset=".3"
          stopColor={color ?? "#888888"}
          stopOpacity=".9"
        ></stop>
        <stop
          offset=".6"
          stopColor={color ?? "#888888"}
          stopOpacity=".6"
        ></stop>
        <stop
          offset=".8"
          stopColor={color ?? "#888888"}
          stopOpacity=".3"
        ></stop>
        <stop offset="1" stopColor={color ?? "#888888"} stopOpacity="0"></stop>
      </radialGradient>

      <circle
        transform-origin="center"
        fill="none"
        stroke="url(#a11)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeDasharray="200 1000"
        strokeDashoffset="0"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="2"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>

      <circle
        transform-origin="center"
        fill="none"
        opacity=".2"
        stroke={color ?? "#888888"}
        strokeWidth="16"
        strokeLinecap="round"
        cx="100"
        cy="100"
        r="70"
      ></circle>
    </svg>
  );
};
