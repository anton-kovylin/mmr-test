import type { Meta, StoryObj } from "@storybook/react"
import { BreadcrumbGroup } from "./breadcrumb-group"
import { Circle } from "lucide-react"

const meta: Meta<typeof BreadcrumbGroup> = {
  title: "Components/BreadcrumbGroup/With Circles",
  component: BreadcrumbGroup,
  parameters: {
    docs: {
      description: {
        component:
          "This version of the `BreadcrumbGroup` component includes circular icons next to each breadcrumb item. These circular icons enhance the visual appearance and provide an intuitive way to represent each level in the breadcrumb path. You can customize the icon and separator styles for each level of the breadcrumb.",
      },
    },
  },
}
export default meta

export const WithCircles: StoryObj<typeof BreadcrumbGroup> = {
  name: "With Circles (Levels 1-3)",
  render: () => (
    <div className="space-y-6 p-6">
      <BreadcrumbGroup
        items={[
          { label: "Active-level-name", icon: Circle },
        ]}
      />

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
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates how the `BreadcrumbGroup` component renders with circular icons at each level. This is a visual variation that gives each level a distinct, circular icon, making the breadcrumb path easy to follow. The separators used in this example are slashes (`/`).",
      },
    },
  },
}
