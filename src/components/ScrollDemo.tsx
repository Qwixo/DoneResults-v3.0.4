import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Email Isn't Dead. It's <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-[#26a269]">
                Dominating.
              </span>
            </h1>
            <p className="text-lg mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
              Email marketing is expected to hit <strong>$13.7B</strong> in revenue by 2025 — and that's just the beginning.
            </p>
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-10 h-full">
          <div className="flex flex-col justify-center">
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 flex-shrink-0 mt-1">✅</span>
                <span>Direct line to decision-makers</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 flex-shrink-0 mt-1">✅</span>
                <span>Unmatched personalization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 flex-shrink-0 mt-1">✅</span>
                <span>One of the most trusted & measurable marketing channels</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-3 flex-shrink-0 mt-1">✅</span>
                <span>Still growing year after year</span>
              </li>
            </ul>
            
            <p className="text-center italic text-muted-foreground mt-8">
              So if email is booming… how do you actually make it work?
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img
                src="https://i.imgur.com/bxOf3E1.jpeg"
                alt="Email Marketing Revenue Growth"
                className="rounded-lg object-cover w-full max-w-[500px] shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/images/email-marketing-growth-chart.png";
                }}
              />
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Source: Statista, Global Industry Analysts (2022)
              </p>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
