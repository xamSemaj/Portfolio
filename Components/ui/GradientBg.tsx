"use client";

import { useEffect, useRef, useState, useMemo } from "react";

export const GradientBg = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  const gradientSettings = useMemo(
    () => ({
      gradientBackgroundStart,
      gradientBackgroundEnd,
      firstColor,
      secondColor,
      thirdColor,
      fourthColor,
      fifthColor,
      pointerColor,
      size,
      blendingValue,
    }),
    [
      gradientBackgroundStart,
      gradientBackgroundEnd,
      firstColor,
      secondColor,
      thirdColor,
      fourthColor,
      fifthColor,
      pointerColor,
      size,
      blendingValue,
    ]
  );

  useEffect(() => {
    Object.entries(gradientSettings).forEach(([key, value]) => {
      document.body.style.setProperty(`--${key}`, value);
    });
  }, [gradientSettings]);

  useEffect(() => {
    const move = () => {
      setCurX((prevX) => prevX + (tgX - prevX) / 20);
      setCurY((prevY) => prevY + (tgY - prevY) / 20);
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
    };

    move();
  }, [tgX, tgY, curX, curY]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = interactiveRef.current?.getBoundingClientRect();
      if (rect) {
        setTgX(event.clientX - rect.left);
        setTgY(event.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={className} ref={interactiveRef}>
      {children}
    </div>
  );
};
