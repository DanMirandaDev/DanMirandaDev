"use client";

import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/app/data/products";


export default function HeroParallaxDemo() {
 return <HeroParallax products={products} />;
}

