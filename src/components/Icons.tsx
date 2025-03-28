import React from "react";

function Wave (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={87}
    height={35}
    className={props.className}
  >
    <path
      stroke="#F5C3B4"
      strokeLinecap="round"
      strokeWidth={2}
      d="M60.39 6.043C37.404.994.44 6.889 1.212 18.27 1.983 29.65 28.6 33.55 42.783 32.939c14.184-.611 26.776-3.27 33.746-7.336 6.971-4.065 10.271-10.392 7.826-14.67-2.446-4.277-8.315-8.947-24.943-9.78C42.783.318 34.958 2.985 18.819 7.265"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
  )
}

export const Icons = {
  Wave,
};
