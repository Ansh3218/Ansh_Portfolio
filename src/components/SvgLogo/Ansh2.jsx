// "use client";

// import { forwardRef, useEffect, useRef } from "react";

// const Ansh2 = forwardRef(function Ansh2(
//   {
//     width = 160,
//     height = 160,
//     stroke = "black",
//     strokeWidth = 10,
//     className = "",
//     duration = 10, // animation speed
//     ...props
//   },
//   ref
// ) {
//   const pathRef = useRef(null);

//   useEffect(() => {
//     const path = pathRef.current;
//     const length = path.getTotalLength();

//     // stroke setup
//     path.style.strokeDasharray = length;
//     path.style.strokeDashoffset = length;

//     // trigger draw animation
//     requestAnimationFrame(() => {
//       path.style.transition = `stroke-dashoffset ${duration}s ease`;
//       path.style.strokeDashoffset = "0";
//     });
//   }, [duration]);

//   return (
//     <svg
//       ref={ref}
//       width={width}
//       height={height}
//       className={className}
//       viewBox="0 0 1024 1024"
//       fill="none"
//       stroke={stroke}
//       strokeWidth={strokeWidth}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       {/* ⭐ Entire ANSH SVG converted into stroke outline ⭐ */}
//       <path
//         ref={pathRef}
//         d="M7554 7072 c-12 -2 -31 -13 -42 -25 -83 -91 -528 -1032 -759 -1604 
//         -3 -7 -44 -36 -92 -65 -47 -29 -114 -72 -147 -95 -34 -24 -66 -43 -71 -43 -13
//         0 -115 124 -130 158 -19 42 -16 127 6 171 23 45 85 88 139 97 34 5 43 2 75
//         -26 31 -26 39 -30 57 -20 39 21 52 97 25 149 -45 88 -255 84 -374 -7 -79 -59
//         -141 -157 -141 -220 0 -99 -378 -452 -483 -452 -44 0 -47 48 -16 227 27 156
//         29 258 6 300 -40 74 -128 83 -227 26 -64 -38 -239 -202 -353 -332 -32 -35 -60
//         -61 -63 -58 -4 4 21 87 55 185 33 98 64 199 67 224 6 41 4 48 -17 61 -13 9
//         -43 19 -65 23 -39 6 -43 4 -67 -28 -62 -80 -206 -458 -241 -630 -41 -199 -4
//         -308 104 -308 51 0 68 16 116 113 69 137 156 258 278 384 96 101 223 213 240
//         213 13 0 5 -56 -25 -173 -53 -209 -43 -323 34 -381 39 -29 147 -34 217 -11
//         109 36 260 159 384 313 32 39 62 72 66 72 9 0 160 -161 160 -170 0 -3 -52 -32
//         -115 -64 -188 -98 -277 -182 -311 -294 -19 -65 -13 -110 23 -153 129 -153 491
//         -33 606 201 27 55 32 75 32 140 0 41 -3 94 -7 117 l-8 41 87 56 c47 31 90 56
//         96 56 5 0 7 -12 4 -27 -23 -110 -30 -193 -19 -230 16 -54 51 -84 104 -90 37
//         -4 50 0 92 29 48 32 74 62 255 291 83 106 257 283 299 306 28 15 28 15 2 -119
//         -12 -61 -21 -146 -21 -204 0 -89 3 -105 28 -155 38 -77 77 -101 161 -101 150
//         0 341 86 544 246 146 114 171 148 152 198 -7 19 -48 21 -66 3 -26 -26 -195
//         -135 -278 -179 -175 -94 -287 -122 -310 -79 -15 28 -12 128 6 250 19 123 14
//         252 -10 299 -42 81 -155 82 -274 0 -70 -48 -231 -207 -340 -337 -53 -62 -98
//         -109 -99 -104 -7 21 224 566 399 943 53 113 157 329 232 481 78 155 140 292
//         143 315 4 32 1 43 -19 60 -27 25 -74 41 -104 36z"
//       />
//     </svg>
//   );
// });

// export default Ansh2;


import React from 'react'

const Ansh2 = () => {
  return (
    <div>
      
    </div>
  )
}

export default Ansh2
