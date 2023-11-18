import * as React from "react"
const Waves = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1920}
    height={560}
    preserveAspectRatio="none"
    {...props}
  >
    <g fill="none" mask='url("#a")'>
      <path
        fill="rgba(20, 184, 166, 1)"
        d="M0 231c128-24 384-124.8 640-120 256 4.8 384 154 640 144s512-155.2 640-194v499H0z"
      />
      <path
        fill="rgba(37, 171, 255, 1)"
        d="M0 555c192-49.8 576-224.8 960-249 384-24.2 768 102.4 960 128v126H0z"
      />
    </g>
    <defs>
      <mask id="a">
        <path fill="#fff" d="M0 0h1920v560H0z" />
      </mask>
    </defs>
  </svg>
)
export default Waves

  