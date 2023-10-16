import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import  { Hero } from '@/components/landing/cn/hero'
import  { Features } from '@/components/landing/cn/features'
import { TabsFeatures } from "@/components/landing/tabsFeatures"
import  { Roadmap } from '@/components/landing/cn/roadmap'
import  { Stats } from '@/components/landing/cn/stats'
import { Theme } from '@radix-ui/themes';

export default async function IndexPage() {

  return (
    <Theme>
      <Hero/>
      <Features/>
      <Stats/>
      <Roadmap/>
    </Theme>
  )
}
