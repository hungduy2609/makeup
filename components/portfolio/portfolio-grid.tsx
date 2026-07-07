"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";

import { PortfolioModal } from "@/components/portfolio/portfolio-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type PortfolioItem = {
  id: string;
  category: string;
  title: string;
  image: { src: string; alt: string; width: number; height: number };
};

type PortfolioGridProps = {
  tabs: Array<{ value: string; label: string }>;
  items: PortfolioItem[];
};

export function PortfolioGrid({ tabs, items }: PortfolioGridProps) {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedTab === "all") {
      return items;
    }

    return items.filter((item) => item.category === selectedTab);
  }, [items, selectedTab]);

  return (
    <>
      <Tabs
        value={selectedTab}
        onValueChange={setSelectedTab}
        className="w-full"
      >
        <div className="flex justify-center">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value={selectedTab} forceMount>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*:not(:first-child)]:mt-4">
            {filteredItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                onClick={() => setSelectedItem(item)}
                className={cn(
                  "group relative block w-full break-inside-avoid overflow-hidden rounded-[1.8rem] border border-primary/45 bg-[rgba(255,255,255,0.75)] text-left shadow-[0_8px_30px_rgba(251,207,202,0.16)] backdrop-blur-xl",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55"
                )}
              >
                <div className="absolute right-4 top-4 z-20 grid size-10 place-items-center rounded-full border border-primary/50 bg-white/80 text-body opacity-0 shadow-sm backdrop-blur transition duration-300 group-hover:opacity-100">
                  <Expand className="size-4" />
                </div>
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0)_45%,rgba(249,158,203,0.18)_100%)]" />
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    loading="lazy"
                    className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <PortfolioModal
        item={selectedItem}
        open={Boolean(selectedItem)}
        onOpenChange={(open) => !open && setSelectedItem(null)}
      />
    </>
  );
}
