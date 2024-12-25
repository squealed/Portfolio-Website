"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Card className="overflow-hidden bg-black/50 border-gray-800 hover:border-purple-500 transition-colors">
          <div className="relative h-48">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white">{title}</CardTitle>
            <CardDescription className="text-gray-400">{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-purple-400 text-sm">Learn more →</div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}