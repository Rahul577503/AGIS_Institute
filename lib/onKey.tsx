import { useState, useEffect } from "react";

export const useKeyPress = (callback: (key: string) => void): string | undefined => {
  const [keyPressed, setKeyPressed] = useState<string | undefined>(undefined);

  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      const { key } = event;
      if (key.length === 1 || key === "Backspace") {
        setKeyPressed(key);
        callback && callback(key);
      }
    };

    const upHandler = () => {
      setKeyPressed(undefined);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [callback]);

  return keyPressed;
};
