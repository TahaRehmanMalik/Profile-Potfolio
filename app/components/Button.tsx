"use client";

import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Button = () => {
  const [mounted, setMounted] = useState(false);
  const {setTheme,resolvedTheme } = useTheme();

  // Wait until mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      alt="Loading..."
    />
  );


  return (
    <div>
      {resolvedTheme === "dark" ? (
        <FiSun onClick={() => setTheme("light")} />
      ) : (
        <FiMoon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default Button;
