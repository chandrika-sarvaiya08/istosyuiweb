// "use client"
// import React, { useEffect, useState } from 'react';

// const Curser: React.FC = () => {
//   const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

//   // Track cursor movement
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setCursorPosition({ x: e.pageX, y: e.pageY });
//     };

//     document.addEventListener('mousemove', handleMouseMove);

//     // Clean up the event listener on component unmount
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="cursor"
//         style={{
//           left: `${cursorPosition.x}px`,
//           top: `${cursorPosition.y}px`,
//         }}
//       ></div>

//       <style jsx>{`
//         body {
//           margin: 0;
//           height: 100vh;
//           background-color: #f0f0f0;
//           overflow: hidden;
//         }

//         .cursor {
//           position: absolute;
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           background-color: rgba(56, 149, 211, 0.7);
//           pointer-events: none;
//           transform: translate(-50%, -50%);
//           transition: transform 0.1s ease-in-out;
//           animation: pulse 1s infinite alternate;
//         }

//         @keyframes pulse {
//           0% {
//             transform: scale(1);
//           }
//           100% {
//             transform: scale(1.7);
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Curser;
"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Curser.module.css"; // Adjust the path to where your CSS file is located

const Curser: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Track cursor movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className={styles.cursor}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </>
  );
};

export default Curser;
