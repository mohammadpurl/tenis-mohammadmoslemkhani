"use client";
import React from 'react'
import { motion } from 'framer-motion';

const CourtDiagram = () => {
    return (
        <div className="border border-border bg-card/30 p-6 flex items-center justify-center">
          <svg viewBox="0 0 360 480" className="w-full max-w-xs">
            {/* Court outline */}
            <rect x="40" y="40" width="280" height="400" fill="none" stroke="oklch(0.4 0 0)" strokeWidth="1.5" />
            {/* Singles lines */}
            <rect x="70" y="40" width="220" height="400" fill="none" stroke="oklch(0.4 0 0)" strokeWidth="1" />
            {/* Net */}
            <line x1="40" y1="240" x2="320" y2="240" stroke="var(--neon)" strokeWidth="2" />
            {/* Service boxes */}
            <line x1="70" y1="160" x2="290" y2="160" stroke="oklch(0.4 0 0)" strokeWidth="1" />
            <line x1="70" y1="320" x2="290" y2="320" stroke="oklch(0.4 0 0)" strokeWidth="1" />
            <line x1="180" y1="160" x2="180" y2="320" stroke="oklch(0.4 0 0)" strokeWidth="1" />
    
            {/* X movement pattern */}
            <motion.path
              d="M 90 380 L 270 380 L 90 100 L 270 100"
              fill="none"
              stroke="var(--neon)"
              strokeWidth="2"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
    
            {/* Player dots */}
            <circle cx="90" cy="380" r="5" fill="var(--neon)" />
            <circle cx="270" cy="100" r="5" fill="var(--neon)" />
    
            <text x="180" y="465" textAnchor="middle" fontSize="9" fill="oklch(0.6 0 0)" fontFamily="monospace" letterSpacing="2">
              X · MOVEMENT · PATTERN
            </text>
          </svg>
        </div>
      );
}

export default CourtDiagram