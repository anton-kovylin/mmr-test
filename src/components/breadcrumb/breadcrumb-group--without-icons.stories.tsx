import type { Meta, StoryObj } from "@storybook/react"
import { BreadcrumbGroup } from "./breadcrumb-group"

const meta: Meta<typeof BreadcrumbGroup> = {
  title: "Components/BreadcrumbGroup/Without Icons",
  component: BreadcrumbGroup,
  parameters: {
    docs: {
      description: {
        component:
          "The `BreadcrumbGroup` component without icons is designed for simpler breadcrumb navigation. This version uses only text labels and separators, providing a clean and minimalist navigation experience. The separators can be customized to either a slash or vertical separator.",
      },
    },
  },
}
export default meta

export const BreadcrumbExamples: StoryObj<typeof BreadcrumbGroup> = {
  name: "Levels 1-3",
  render: () => (
    <div className="space-y-6 p-6">
      <BreadcrumbGroup
        leadingSeparator="vertical"
        items={[{ label: "Active-level-name", href: "/active" }]}
      />

      <BreadcrumbGroup
        leadingSeparator="vertical"
        items={[
          { label: "Level-name", href: "/level" },
          { label: "Active-level-name", href: "/active" },
        ]}
      />

      <BreadcrumbGroup
        leadingSeparator="vertical"
        items={[
          { label: "Level-name", href: "/level1" },
          { label: "Level-name", href: "/level2" },
          { label: "Active-level-name", href: "/active" },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates how the `BreadcrumbGroup` component can be used without any icons. The breadcrumb items are separated by vertical separators (`|`) and represent a simple, clean breadcrumb navigation structure. This version can be ideal for minimalistic designs where icons are not necessary.",
      },
    },
  },
}
