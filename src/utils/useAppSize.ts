import { useEffect, useState } from "react";

export type AppSize = "small" | "medium" | "large";

export function useAppSize() {
  const getSize = (): AppSize => {
    const w = window.innerWidth;
    if (w < 600) return "small";
    if (w < 800) return "medium";
    return "large";
  };

  const [size, setSize] = useState<AppSize>(getSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}