"use client";

import {
  ArrowRight,
  ImageIcon,
  PaintRoller,
  Puzzle,
  ArchiveRestore,
  PaintBucket,
  ScanLine,
  UserRoundMinus,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image",
    desc: "Generate images using AI technology",
  },
  {
    label: "Generate Fill",
    icon: PaintBucket,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/generate-fill",
    desc: "Enhance an image's dimensions using AI outpainting",
  },
  {
    label: "Image Restore",
    icon: ArchiveRestore,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
    desc: "Refine images by removing noise and imperfections",
  },
  {
    label: "Object Remove",
    icon: ScanLine,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image",
    desc: "Identify and eliminate unwanted objects from images",
  },
  {
    label: "Object Recolor",
    icon: PaintRoller,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/video",
    desc: "Identify and recolor objects in images using Ai Tech",
  },
  {
    label: "Background Remove",
    icon: UserRoundMinus,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code",
    desc: "Remove the background from images using AI, ",
  },
];

const ImageToolsPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Image Tools
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex justify-items-stretch gap-4 selection:flex hover:shadow-md transition cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold w-full">
                {tool.label}
                <p className="text-sm text-gray-500  text-wrap">
                  {tool.desc}
                </p>{" "}
                {/* Description */}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageToolsPage;
