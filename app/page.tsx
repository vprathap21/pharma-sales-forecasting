"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-2";
import dasboard1 from "@/public/240_F_504402560_XrHikKNW2Y18gBmpZkloptskYMWSUBSw.jpg";
import dashboard2 from "@/public/SalesTrendAnalysis2.png";
import dashboard3 from "@/public/dasboard1.jpg";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TailwindcssButton2, TailwindcssButtons } from "@/components/TailwindcssButtons";

const CardComponent = ({ title, description, imageSrc, imageAlt }: any) => (
  <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[18rem] md:w-[20rem] h-auto rounded-lg p-3 md:p-4 border">
      <CardItem translateZ="50" className="text-center text-lg font-bold text-neutral-600 dark:text-white">
        {title}
      </CardItem>
      <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
        {description}
      </CardItem>
      <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-3">
        <Image src={imageSrc} height="400" width="400" className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl" alt={imageAlt} />
      </CardItem>
      <div className="flex justify-center items-center mt-6">
        <CardItem translateZ={20} translateX={-40} as="button" className="px-3 py-2 rounded-lg text-xs font-normal dark:text-white">
          Try now →
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
);

export default function HomePage() {

  

  return (
    <div className="min-h-screen dark:bg-neutral-950 antialiased">
      <BackgroundBeams />
      <section className="container mx-auto py-10 md:py-20 flex flex-col justify-between items-center text-center px-4 sm:px-6 md:px-8">
        <div className="w-full">
          <h1 className="w-full relative z-10 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Transform Your Pharma Sales Strategy
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm md:text-md relative z-10">
            Utilize cutting-edge AI to forecast sales trends, optimize inventory, and enhance your revenue strategy.
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard">
              <TailwindcssButton2 />
            </Link>
            </div>

          <div className="flex flex-wrap justify-center md:justify-between mt-8 md:mt-10 gap-4">
            <CardComponent
              title="Sales Analysis Insights"
              description="Dive deep into your sales data with powerful analysis tools to uncover trends and patterns."
              imageSrc={dasboard1}
              imageAlt="Sales Analysis Thumbnail"
            />
            <CardComponent
              title="Statistical Forecasting"
              description="Utilize advanced statistical models to predict future sales and make data-driven decisions."
              imageSrc={dashboard2}
              imageAlt="Forecasting Thumbnail"
            />
            <CardComponent
              title="Efficient Inventory Management"
              description="Optimize your inventory with real-time insights to reduce waste and meet demand accurately."
              imageSrc={dashboard3}
              imageAlt="Inventory Management Thumbnail"
            />
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Key Features</h2>
        <FeaturesSectionDemo />
      </section>

      <section id="benefits" className="container mx-auto py-12 md:py-16 px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Why Choose Us?</h2>
        <p className="mb-6 md:mb-8 text-sm md:text-lg">
          Our platform is designed to provide pharmaceutical companies with the insights they need to optimize sales and maximize revenue.
        </p>
        <InfiniteMovingCards
          items={[
            {
              quote: "Tailored Solutions",
              name: "Our analytics tools are customized to meet the specific",
              title: "needs of your business.",
            },
            {
              quote: "User-Friendly Interface",
              name: "Navigate through your data with ease using our intuitive",
              title: "dashboard.",
            },
            {
              quote: "Real-Time Data",
              name: "Access up-to-the-minute data for precise",
              title: "decision-making.",
            },
          ]}
        />
      </section>

      <section id="cta" className="container mx-auto py-12 md:py-16 px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Ready to Transform Your Sales Strategy?</h2>
        <div className="flex justify-center">
          <TailwindcssButtons />
        </div>
      </section>
    </div>
  );
}
