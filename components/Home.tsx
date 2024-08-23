import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-2";
import dasboard1 from "@/public/dasboard1.jpg";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { GlobeDemo } from "@/components/ui/glob";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container text-center  py-48 flex flex-col md:flex-row justify-between items-center ">
        <div className="text-center w-full">
          <h1 className="text-6xl font-bold mb-6">
            Transform Your Pharma Sales Strategy
          </h1>
          <p className="mb-10 text-lg">
            Utilize cutting-edge AI to forecast sales trends, optimize
            inventory, and enhance your revenue strategy.
          </p>
          <Button className="px-6 py-3 rounded-md">Get Started</Button>
        </div>
      </section>
     

      {/* Features Section */}
      <section id="features" className="container mx-auto py-20">
        <h2 className="text-4xl font-bold mb-8 text-center">Key Features</h2>
        <FeaturesSectionDemo />
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <p className="mb-10 text-lg">
          Our platform is designed to provide pharmaceutical companies with the
          insights they need to optimize sales and maximize revenue.
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
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold">Real-Time Data</h3>
            <p>Access up-to-the-minute data for precise decision-making.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Tailored Solutions</h3>
            <p>
              Our analytics tools are customized to meet the specific needs of
              your business.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
            <p>
              Navigate through your data with ease using our intuitive
              dashboard.
            </p>
          </div>
        </div> */}
      </section>
    
      {/* Call to Action */}
      <section id="cta" className="container mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Ready to Transform Your Sales Strategy?
        </h2>
        <Button className="px-6 py-3 rounded-md">Request a Demo</Button>
      </section>
    </div>
  );
}