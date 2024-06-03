"use client";
import { TextGenerateEffect } from "./text-generate-effect";

export function TextEffect({ words }: { words: string }) {
  return <TextGenerateEffect words={words} />;
}
