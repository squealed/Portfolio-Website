"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function TechStack() {
  const technologies = [
    { category: "Languages", items: ["TypeScript", "JavaScript", "Golang", "Python", "C++"] },
    { category: "Frameworks", items: ["Node.js", "Express.js", "Next.js", "NextAuth", "+ more"] },
    { category: "Frontend", items: ["TailwindCSS", "React"] },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-black/50 border-gray-800">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.items.map((item) => (
                  <li key={item} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}