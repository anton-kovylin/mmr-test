// src/components/breadcrumb/breadcrumb-group--with-circles.stories.tsx
import type { Meta, StoryObj } from "@storybook/react"
import { BreadcrumbGroup } from "./breadcrumb-group"
import { Circle } from "lucide-react"

const meta: Meta<typeof BreadcrumbGroup> = {
  title: "Components/BreadcrumbGroup/With Circles",
  component: BreadcrumbGroup,
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
  }
  
