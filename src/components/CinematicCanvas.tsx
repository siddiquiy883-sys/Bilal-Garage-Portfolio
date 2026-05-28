"use client";

import { useEffect, useRef, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface CinematicCanvasProps {
  pathPrefix: string;
  frameCount: number;
  padLength?: number;
  extension?: string;
  /** Number of viewport-heights tall the scroll container should be */
  heightMultiplier?: number;
  children?: React.ReactNode;
}

export default function CinematicCanvas({
  pathPrefix,
  frameCount,
  padLength = 3,
  extension = ".jpg",
  heightMultiplier = 5,
  children,
}: CinematicCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Direct mapping — no spring lag, scroll = frame
  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, frameCount - 1]
  );

  // Paint a single frame
  const paint = useCallback(
    (idx: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = imagesRef.current[idx];
      if (!img || !img.complete || !img.naturalWidth) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      
      // On desktop (landscape), use 'cover' (Math.max) to fill the screen.
      // On mobile (portrait), use 'contain' (Math.min) so the car/subject fully fits,
      // and seamlessly blends into the #050505 background above and below.
      const isMobile = cw < ch;
      const scale = isMobile ? Math.min(cw / iw, ch / ih) : Math.max(cw / iw, ch / ih);
      
      const dw = iw * scale;
      const dh = ih * scale;

      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, cw, ch);
      
      // Draw centered
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
      frameRef.current = idx;
    },
    []
  );

  // Size the canvas drawing buffer to the viewport
  const resize = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    paint(frameRef.current);
  }, [paint]);

  // Preload images
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `${pathPrefix}${String(i + 1).padStart(padLength, "0")}${extension}`;
      if (i === 0) {
        img.onload = () => {
          resize();
          paint(0);
        };
      }
      imgs.push(img);
    }
    imagesRef.current = imgs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathPrefix, frameCount, padLength, extension]);

  // Window resize
  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize]);

  // Scroll → draw frame
  useMotionValueEvent(frameIndex, "change", (v) => {
    const idx = Math.min(frameCount - 1, Math.max(0, Math.round(v)));
    if (idx !== frameRef.current) {
      paint(idx);
    }
  });

  const totalHeight = `${heightMultiplier * 100}vh`;

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: totalHeight }}
    >
      {/* Pinned full-screen canvas */}
      <div className="sticky top-0 h-screen w-full z-0">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Text overlay — positioned absolutely so it scrolls with the container
          while the canvas stays pinned */}
      <div
        className="absolute top-0 left-0 w-full z-10 pointer-events-none"
        style={{ height: totalHeight }}
      >
        {children}
      </div>
    </div>
  );
}
