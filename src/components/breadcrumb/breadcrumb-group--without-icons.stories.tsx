// src/components/breadcrumb/breadcrumb-group--without-icons.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { BreadcrumbGroup } from "./breadcrumb-group"

const meta: Meta<typeof BreadcrumbGroup> = {
  title: "Components/BreadcrumbGroup/Without Icons",
  component: BreadcrumbGroup,
}
export default meta

export const OneLevel = {
  name: "One Level",
  render: () => (
    <BreadcrumbGroup
      leadingSeparator="vertical"
      items={[{ label: "Active-level-name", href: "/active" }]}
    />
  ),
} satisfies StoryObj<typeof BreadcrumbGroup>

export const TwoLevels = {
  name: "Two Levels",
  render: () => (
    <BreadcrumbGroup
      leadingSeparator="vertical"
      items={[
        { label: "Level-name", href: "/level" },
        { label: "Active-level-name", href: "/active" },
      ]}
    />
  ),
} satisfies StoryObj<typeof BreadcrumbGroup>

export const ThreeLevels = {
  name: "Three Levels",
  render: () => (
    <BreadcrumbGroup
      leadingSeparator="vertical"
      items={[
        { label: "Level-name", href: "/level1" },
        { label: "Level-name", href: "/level2" },
        { label: "Active-level-name", href: "/active" },
      ]}
    />
  ),
} satisfies StoryObj<typeof BreadcrumbGroup>
