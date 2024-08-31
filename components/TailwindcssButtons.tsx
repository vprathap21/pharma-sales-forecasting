"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast } from "sonner";
import { ButtonsCard } from "./ui/ButtonCard";

export function TailwindcssButtons() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch(() => {
        toast.error("Error copying to clipboard");
      });
  };

  const copy = (button: JSX.Element) => {
    const buttonString = reactElementToJSXString(button);
    copyToClipboard(buttonString);
  };

  return (
    <div>
      <ButtonsCard onClick={() => copy(buttons[0].component)}>
        {buttons[0].component}
      </ButtonsCard>
    </div>
  );
}
export function TailwindcssButton2() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch(() => {
        toast.error("Error copying to clipboard");
      });
  };

  const copy = (button: JSX.Element) => {
    const buttonString = reactElementToJSXString(button);
    copyToClipboard(buttonString);
  };

  return (
    <div>
      <ButtonsCard onClick={() => copy(buttons[1].component)}>
        {buttons[1].component}
      </ButtonsCard>
    </div>
  );
}

export const buttons = [
  {
    name: "Figma Outline",
    description: "Figma Outline button for your website",
    component: (
      <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        Request Demo
      </button>
    ),
  },
  {
    name: "Border Magic",
    description: "Border Magic button for your website",
    showDot: false,
    component: (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className=" inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Get Started
        </span>
      </button>
    ),
  },
];
