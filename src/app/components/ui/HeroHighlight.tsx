"use client";
import { HeroHighlight } from "../ui/hero-highlight";
import { ReactNode } from "react";

export function HeroHighlightBackground({
  children,
  title,
}: {
  children?: ReactNode;
  title?: string;
}) {
  return <HeroHighlight>{children}</HeroHighlight>;
}
