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
// import { BackgroundBeamsDemo } from "@/components/Bgdemo";
import { BackgroundBeams } from "@/components/ui/background-beams";
const CardComponent = ({ title, description, imageSrc, imageAlt }:any) => (
  <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[25rem] h-auto rounded-xl p-4 border">
      <CardItem translateZ="50" className="text-lg font-bold text-neutral-600 dark:text-white">
        {title}
      </CardItem>
      <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
        {description}
      </CardItem>
      <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
        <Image src={imageSrc} height="500" width="500" className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt={imageAlt} />
      </CardItem>
      <div className="flex justify-between items-center mt-10">
        <CardItem translateZ={20} translateX={-40} as="button" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
          Try now →
        </CardItem>
        <CardItem translateZ={20} translateX={40} as="button" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
          Sign up
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
);

export default function HomePage() {
  return (
    <div className="min-h-screen  dark:bg-neutral-950 antialiased">
      {/* Hero Section */}
      {/* <BackgroundBeamsDemo /> */}
      <BackgroundBeams />
      <section className="container text-center py-48 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center w-full">
           <h1 className="w-full  relative z-10 text-md md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Transform Your Pharma Sales Strategy
        </h1>
<p className="text-neutral-500 max-w-xl mx-auto my-2 text-md text-center relative z-10">
        Utilize cutting-edge AI to forecast sales trends, optimize inventory, and enhance your revenue strategy.
        </p>
        <div className="relative z-10 mt-4">
            <Link href="/dashboard">
            <Button className="px-6 py-3 rounded-md cursor-pointer">Get Started</Button>
            </Link>
          </div>
          
          <div className="flex justify-between mt-12 space-x-4">
            <CardComponent
              title="Make things float in air"
              description="Hover over this card to unleash the power of CSS perspective"
              imageSrc={dasboard1}
              imageAlt="Thumbnail 1"
            />
            <CardComponent
              title="Make things float in air"
              description="Hover over this card to unleash the power of CSS perspective"
              imageSrc={dashboard2}
              imageAlt="Thumbnail 2"
            />
            <CardComponent
              title="Make things float in air"
              description="Hover over this card to unleash the power of CSS perspective"
              imageSrc={dashboard3}
              imageAlt="Thumbnail 3"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Key Features</h2>
        <FeaturesSectionDemo />
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <p className="mb-10 text-lg">
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

      {/* Call to Action */}
      <section id="cta" className="container mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Sales Strategy?</h2>
        <Button className="px-6 py-3 rounded-md">Request a Demo</Button>
      </section>
    </div>
  );
}
