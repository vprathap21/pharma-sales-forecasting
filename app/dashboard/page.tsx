"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink, Links } from "../../components/ui/sidebar";
import {
  IconChartBar,
  IconPackage,
  IconLogout,
  IconFileAnalytics,
  IconChartLine,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Predictions from "@/components/Predictions";
import ForecastingSection from "@/components/ForecastingSection";
import Inventory from "@/components/Inventory";
import dashboard3 from "@/public/dasboard1.jpg"; // Corrected the typo in the import statement

interface InternalLinkProps {
  link: Links;
  className?: string;
  onClick?: () => void;
}

interface LinkItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  section: string;
}

export default function SidebarDemo() {
  const [activeSection, setActiveSection] = useState<string>("dashboard");
  const [open, setOpen] = useState<boolean>(false);

  const links: LinkItem[] = [
    {
      label: "Sales Dashboard",
      href: "#",
      icon: (
        <IconChartBar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      section: "dashboard",
    },
    {
      label: "Statistical Insights",
      href: "#",
      icon: (
        <IconFileAnalytics className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      section: "insights",
    },
    {
      label: "Forecasting",
      href: "#",
      icon: (
        <IconChartLine className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      section: "forecasting",
    },
    {
      label: "Inventory Management",
      href: "#",
      icon: (
        <IconPackage className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      section: "inventory",
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconLogout className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      section: "logout",
    },
  ];

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className={cn("flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full h-full overflow-hidden")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 p-4">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-4">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link as Links}
                  onClick={() => handleSectionChange(link.section)} // Pass onClick to SidebarLink
                />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <SidebarLink
              link={{
                label: "User Profile",
                href: "#",
                icon: (
                  <Image
                    src={dashboard3}
                    className="h-8 w-8 flex-shrink-0 rounded-full"
                    width={32}
                    height={32}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <Dashboard activeSection={activeSection} />
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20"
    >
      <div className="h-6 w-6 bg-blue-600 dark:bg-emerald-500 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        SalesPro Insights
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-6 w-6 bg-blue-600 dark:bg-emerald-500 rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

const Dashboard = ({ activeSection }: { activeSection: string }) => {
  return (
    <div className="flex flex-1 flex-col md:flex-row overflow-y-auto">
      <div className="p-4 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-4 flex-1 w-full min-h-screen">
        {activeSection === "dashboard" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...new Array(4)].map((_, i) => (
              <div
                key={"first-array" + i}
                className="h-24 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div>
        )}

        {activeSection === "insights" && (
          <div className="h-auto antialiased min-h-screen">
            <section className="container mx-auto py-4 px-4 sm:px-6 md:px-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                Sales Trends for Top 3 Most Sold Drugs
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="shadow-lg rounded-lg overflow-hidden">
                  <h2 className="text-2xl font-semibold mb-4 text-center text-gray-200">
                    Monthly Sales Trends
                  </h2>
                  <div className="flex justify-center p-4 bg-white dark:bg-neutral-800 rounded-lg">
                    <iframe
                      src="/sales_trends_graph.html"
                      width="100%"
                      height="450px"
                      style={{ border: "none" }}
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
                <div className="shadow-lg rounded-lg overflow-hidden">
                  <h2 className="text-2xl font-semibold mb-4 text-center text-gray-200">
                    Yearly Sales Comparison
                  </h2>
                  <div className="flex justify-center p-4 bg-white dark:bg-neutral-800 rounded-lg">
                    <iframe
                      src="/sales_trends_comparison.html"
                      width="100%"
                      height="450px"
                      style={{ border: "none" }}
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === "forecasting" && (
          <div className="min-h-screen px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Forecasting Section
            </h1>
            <ForecastingSection />
          </div>
        )}

        {activeSection === "inventory" && (
          <div className="min-h-screen px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">
              Inventory Management
            </h1>
            <Inventory activeSection={activeSection} />
          </div>
        )}

        {activeSection === "logout" && (
          <div className="min-h-screen px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Logout Section</h1>
            <p>Handle the logout process here.</p>
          </div>
        )}
      </div>
    </div>
  );
};
