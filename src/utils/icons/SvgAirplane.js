import * as React from "react"

function SvgAirplane({ height, width, ...rest }) {
  return (
    <svg
      baseProfile="basic"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70.87 55.15"
      width={width ? width : 11}
      {...rest}
    >
      <path
        fill="#2F86BB"
        d="M69.35 55.15H1.56c-.84 0-1.51-.68-1.51-1.51 0-.84.68-1.51 1.51-1.51h67.79c.84 0 1.51.68 1.51 1.51.01.84-.67 1.51-1.51 1.51zM5.97 4.95c1.97-1.16 3.86-2.5 5.94-3.38.89-.38 2.25.06 3.3.4 8.64 2.79 17.27 5.57 25.86 8.52 2.08.71 3.73.57 5.58-.55 4.28-2.6 8.63-5.08 13.01-7.51 1.09-.61 2.35-1.13 3.57-1.24 2.75-.25 5.34 1.65 6.16 4.22.85 2.68-.18 5.47-2.99 7.15-4.69 2.81-9.49 5.47-14.24 8.18-5.66 3.23-11.49 6.21-16.96 9.76-6.1 3.96-13.18 4.35-19.85 6.22-.61.17-1.44-.02-2.03-.3-4.21-2.03-7.58-5.17-11.73-8.36 3.43-2.17 5.87-4.86 9.83-3 .31.15.67.21.99.35 3.14 1.43 5.97 1.01 8.78-1.05 2.11-1.55 4.52-2.69 7.31-4.31-7.86-4.87-15.22-9.42-22.58-13.98.02-.38.03-.75.05-1.12z"
      />
      <path
        fill="#3E92C2"
        d="M38.9 35.33c-.07 1.55-.93 2.29-2.44 2.25-1.35-.04-2.16-.77-2.2-2.14-.05-1.53.86-2.48 2.28-2.48 1.35-.01 2.44.71 2.36 2.37z"
      />
      <path
        fill="#3C91C1"
        d="M45.78 31.85c-.07 1.49-.81 2.26-2.38 2.26-1.38-.01-2.17-.63-2.27-2-.11-1.53.69-2.4 2.17-2.51 1.53-.12 2.31.75 2.48 2.25z"
      />
    </svg>
  )
}

export default SvgAirplane