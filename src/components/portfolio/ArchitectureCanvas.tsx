import { motion } from "framer-motion";
import { useState } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  description: string;
}

const nodes: Node[] = [
  { id: "ui", label: "UI Layer", x: 220, y: 40, color: "hsl(175, 75%, 45%)", description: "React Components, JSX, Styling" },
  { id: "components", label: "Components", x: 80, y: 140, color: "hsl(195, 80%, 50%)", description: "Reusable, composable design system" },
  { id: "state", label: "State", x: 360, y: 140, color: "hsl(215, 70%, 55%)", description: "Redux, Context API, local state" },
  { id: "hooks", label: "Hooks", x: 220, y: 230, color: "hsl(175, 60%, 40%)", description: "Custom hooks, side effects, memoization" },
  { id: "api", label: "API Layer", x: 220, y: 330, color: "hsl(240, 50%, 55%)", description: "REST integration, caching, error handling" },
  { id: "testing", label: "Testing", x: 420, y: 280, color: "hsl(280, 50%, 55%)", description: "Jest, Cypress, Playwright, CI/CD" },
];

const connections: [string, string][] = [
  ["ui", "components"],
  ["ui", "state"],
  ["components", "hooks"],
  ["state", "hooks"],
  ["hooks", "api"],
  ["state", "testing"],
  ["api", "testing"],
];

const getNode = (id: string) => nodes.find((n) => n.id === id)!;

const ArchitectureCanvas = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      <svg viewBox="0 0 500 420" className="w-full h-full">
        {/* Connections */}
        {connections.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          const isHighlighted = hoveredNode === from || hoveredNode === to;
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y + 20}
              x2={b.x}
              y2={b.y}
              stroke={isHighlighted ? "hsl(175, 75%, 45%)" : "hsl(222, 15%, 22%)"}
              strokeWidth={isHighlighted ? 2 : 1}
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
              style={{
                animation: isHighlighted ? "dash-flow 1s linear infinite" : undefined,
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isHovered = hoveredNode === node.id;
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
            >
              {/* Glow */}
              {isHovered && (
                <circle
                  cx={node.x}
                  cy={node.y + 10}
                  r="45"
                  fill={node.color}
                  opacity={0.08}
                />
              )}
              {/* Background */}
              <rect
                x={node.x - 52}
                y={node.y - 8}
                width="104"
                height="36"
                rx="8"
                fill={isHovered ? "hsl(222, 20%, 14%)" : "hsl(222, 20%, 10%)"}
                stroke={isHovered ? node.color : "hsl(222, 15%, 18%)"}
                strokeWidth={isHovered ? 1.5 : 1}
              />
              {/* Label */}
              <text
                x={node.x}
                y={node.y + 14}
                textAnchor="middle"
                fill={isHovered ? node.color : "hsl(220, 15%, 70%)"}
                fontSize="12"
                fontFamily="Space Grotesk, sans-serif"
                fontWeight="500"
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoveredNode && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card rounded-lg px-4 py-2 text-sm text-center"
        >
          <span className="text-primary font-heading font-medium">{getNode(hoveredNode).label}</span>
          <span className="text-muted-foreground ml-2">{getNode(hoveredNode).description}</span>
        </motion.div>
      )}
    </div>
  );
};

export default ArchitectureCanvas;
