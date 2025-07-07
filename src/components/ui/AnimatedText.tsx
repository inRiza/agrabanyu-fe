"use client";

import { useState, useEffect } from "react";

interface AnimatedTextProps {
  className?: string;
}

export default function AnimatedText({ className = "" }: AnimatedTextProps) {
  const words = ["Assets", "Contracts", "Profits"]; // hanya bagian berubah
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let text = "";
    const word = words[currentIndex];

    const typingInterval = setInterval(() => {
      if (text.length < word.length) {
        text += word[text.length];
        setCurrentText(text);
      } else {
        clearInterval(typingInterval);

        // Delay before deleting
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (text.length > 0) {
              text = text.slice(0, -1);
              setCurrentText(text);
            } else {
              clearInterval(deletingInterval);
              setCurrentIndex((prev) => (prev + 1) % words.length);
            }
          }, 30);
        }, 2000);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex]);

  return (
    <span className={`inline-block ${className}`}>
      <span className="text-white mr-2">Secure</span>
      <span className="relative inline-block">
        <span className="relative z-10 text-black bg-green-main px-2">{currentText}</span>
        <span className="absolute inset-0 bg-green-main rounded-md -z-10 transition-all duration-300" />
      </span>
    </span>
  );
}
