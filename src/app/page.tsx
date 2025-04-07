"use client"

import { BreadcrumbGroup } from "@/components/breadcrumb/breadcrumb-group"
import {
  Circle,
  PanelRightOpen,
  Link,
  MessageCircleQuestion,
  ListTodo,
} from "lucide-react"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function Page() {
  return (
    <TooltipProvider delayDuration={300}>
      <main className="space-y-10 p-10 bg-white text-sm">
        <h1 className="text-2xl font-semibold">BreadcrumbGroup Demo</h1>
        <section className="space-y-4">
          <h2 className="font-semibold text-gray-700">With Circles</h2>
          <BreadcrumbGroup items={[{ label: "Active-level-name", icon: Circle }]} />
          <BreadcrumbGroup
            items={[
              { label: "Level-name", icon: Circle },
              { label: "Active-level-name", icon: Circle },
            ]}
          />
          <BreadcrumbGroup
            items={[
              { label: "Level-name", icon: Circle },
              { label: "Level-name", icon: Circle },
              { label: "Active-level-name", icon: Circle },
            ]}
          />
        </section>
        <section className="space-y-4">
          <h2 className="font-semibold text-gray-700">With Icons</h2>
          <BreadcrumbGroup
            leadingIcon={PanelRightOpen}
            leadingSeparator="vertical"
            trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
            items={[
              { label: "Organisations" },
              { label: "Projects" },
            ]}
          />
          <BreadcrumbGroup
            leadingIcon={PanelRightOpen}
            leadingSeparator="vertical"
            trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
            items={[
              { label: "Organisations" },
              { label: "Projects" },
              { label: "Services" },
            ]}
          />
          <BreadcrumbGroup
            leadingIcon={PanelRightOpen}
            leadingSeparator="vertical"
            trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
            items={[
              { label: "All items", icon: MessageCircleQuestion },
              { label: "MCQ", icon: ListTodo },
            ]}
          />
          <BreadcrumbGroup
            leadingIcon={PanelRightOpen}
            leadingSeparator="vertical"
            trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
            items={[
              { label: "All items", icon: MessageCircleQuestion },
              { label: "MCQ", icon: ListTodo },
              { label: "RTP-ITEM-3772" },
            ]}
          />
        </section>
        <section className="space-y-4">
          <h2 className="font-semibold text-gray-700">Without Icons</h2>
          <BreadcrumbGroup
            leadingSeparator="vertical"
            items={[{ label: "Active-level-name" }]}
          />
          <BreadcrumbGroup
            leadingSeparator="vertical"
            items={[
              { label: "Level-name" },
              { label: "Active-level-name" },
            ]}
          />
          <BreadcrumbGroup
            leadingSeparator="vertical"
            items={[
              { label: "Level-name" },
              { label: "Level-name" },
              { label: "Active-level-name" },
            ]}
          />
        </section>
        <section className="space-y-4">
          <h2 className="font-semibold text-gray-700">Tooltip + Truncation</h2>

          <BreadcrumbGroup
            leadingSeparator="vertical"
            trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
            items={[
              {
                label: "TruncatedIfNameForTheLevelExceeds28px—TooltipShowsFullLength",
                href: "#",
              },
            ]}
          />

          <BreadcrumbGroup
            leadingSeparator="vertical"
            trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
            items={[
              {
                label: "TruncatedIfNameForTheLevelExceeds28px—TooltipShowsFullLength",
                href: "#",
              },
              {
                label: "TruncatedIfNameForTheLevelExceeds28px—TooltipShowsFullLength",
                href: "#",
              },
            ]}
          />
          <BreadcrumbGroup
            leadingSeparator="vertical"
            trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
            items={[
              {
                label: "TruncatedIfNameForTheLevelExceeds28px—TooltipShowsFullLength",
                icon: Circle,
                href: "#",
              },
              {
                label: "TruncatedIfNameForTheLevelExceeds28px—TooltipShowsFullLength",
                icon: Circle,
                href: "#",
              },
              {
                label: "TruncatedIfNameForTheLevelExceeds28px—TooltipShowsFullLength",
                icon: Circle,
                href: "#",
              },
            ]}
          />
        </section>
      </main>
    </TooltipProvider>
  )
}
