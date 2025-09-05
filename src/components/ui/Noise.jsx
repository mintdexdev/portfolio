import { useEffect, useRef } from 'react';

export default function Noise() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const newNoise = () => {
      // size setup
      const width = window.innerWidth;
      const height = window.innerHeight;

      // canvas size setup
      canvas.width = width * window.devicePixelRatio / 1;
      canvas.height = height * window.devicePixelRatio / 1;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      // create noise using image data
      const imageData = ctx.createImageData(width, height);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        // ~5% chance pixel is white, else transparent
        if (Math.random() < 0.05) buffer[i] = 0xffffffff;
      }

      ctx.putImageData(imageData, 0, 0);
    }

    // run on load
    newNoise();

    // run on every resize
    window.addEventListener("resize", newNoise);

    return () => {
      window.removeEventListener("resize", newNoise);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        opacity: "0.1",
        zIndex: "999",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // so it doesn’t block clicks
        zIndex: 9999, // put it above or below content as needed
      }}
    />
  );
}
