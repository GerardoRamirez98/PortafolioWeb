// src/components/TextType.tsx
"use client"; // MUY IMPORTANTE para Next.js 13+

import React, { useEffect, useState } from "react";

interface TextTypeProps {
  texts: string[];
  speed?: number;
  loop?: boolean;
}

export default function TextType({ texts, speed = 100, loop = true }: TextTypeProps) {
  const [mounted, setMounted] = useState(false); // solo render cliente
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || texts.length === 0) return;

    const timeout = setTimeout(() => {
      setDisplayedText(texts[index].slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, speed);

    if (charIndex === texts[index].length) {
      clearTimeout(timeout);
      setTimeout(() => {
        setCharIndex(0);
        setIndex(loop ? (index + 1) % texts.length : index);
        setDisplayedText("");
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, index, texts, speed, loop, mounted]);

  return <span>{mounted ? displayedText : ""}</span>;
}
