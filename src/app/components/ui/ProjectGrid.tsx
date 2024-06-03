// import { cn } from "../../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { projectsData } from "@/app/utils/constants";

export function ProjectBentoGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {projectsData.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          className={item.className}
          href={item.href}
          codeHref={item.codeHref}
        />
      ))}
    </BentoGrid>
  );
}
