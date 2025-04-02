import React from "react";

function Wave(props: React.SVGProps<SVGSVGElement>) {
  const {
    className,
    d = "M60.3899 6.0428C37.4036 0.99442 0.440909 6.88871 1.21207 18.2696C1.98323 29.6506 28.6003 33.5501 42.7834 32.9388C56.9666 32.3275 69.5591 29.6691 76.5295 25.6033C83.5 21.5376 86.8001 15.2114 84.3547 10.9336C81.9093 6.65572 76.0404 1.98562 59.4119 1.15217C42.7834 0.318714 34.9583 2.98611 18.8188 7.26564",
    width = 87,
    height = 34,
    strokeWidth = 2,
    vectorEffect,
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
      <path
        stroke="#F5C3B4"
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        vectorEffect={vectorEffect}
        d={d}
      />
    </svg>
  );
}

function Line(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={374}
      height={7}
      fill="none"
      className="squiggle2"
      viewBox="0 0 374 7"
      {...props}
    >
      <path
        stroke="#F5C3B4"
        strokeLinecap="round"
        strokeWidth={4}
        d="M2 5c36.098-1.973 135.366-1.973 179.761-1.973 55.287 0 141.87-2.31 172.074 0m15.138 1.422L372 5"
        style={{
          strokeDasharray: 354.96,
          strokeDashoffset: 0,
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Squiggle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="504"
      height="28"
      viewBox="0 0 504 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 25.1847C60.9623 19.1647 132.16 13.6506 204.83 8.62805C277.5 3.6055 415.679 0.0895689 426.057 3.60546C436.434 7.12135 346.811 14.6551 326.057 20.6822C305.302 26.7093 448.698 15.6597 502 11.1394"
        stroke="#F5C3B4"
        strokeWidth="4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  );
}

export const Icons = {
  Wave,
  Line,
  Squiggle,
};
