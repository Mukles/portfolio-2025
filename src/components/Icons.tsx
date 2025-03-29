import React from "react";

function Wave(props: React.SVGProps<SVGSVGElement>) {
  const {
    className,
    d = "M60.3899 6.0428C37.4036 0.99442 0.440909 6.88871 1.21207 18.2696C1.98323 29.6506 28.6003 33.5501 42.7834 32.9388C56.9666 32.3275 69.5591 29.6691 76.5295 25.6033C83.5 21.5376 86.8001 15.2114 84.3547 10.9336C81.9093 6.65572 76.0404 1.98562 59.4119 1.15217C42.7834 0.318714 34.9583 2.98611 18.8188 7.26564",
    width = 87,
    height = 34,
    ...rest
  } = props;
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      {...rest}
    >
      <path stroke="#F5C3B4" strokeLinecap="round" strokeWidth={2} d={d} />
    </svg>
  );
}

export const Icons = {
  Wave,
};
