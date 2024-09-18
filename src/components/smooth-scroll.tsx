"use client";

import {} from "lenis";
import { ReactLenis } from "lenis/react";

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      options={{
        lerp: 0.03,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
