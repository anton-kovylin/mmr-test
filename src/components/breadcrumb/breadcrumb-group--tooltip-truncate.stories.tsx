import type { Meta, StoryObj } from "@storybook/react"
import { BreadcrumbGroup } from "@/components/breadcrumb/breadcrumb-group"
import { Circle } from "lucide-react"

const meta: Meta<typeof BreadcrumbGroup> = {
  title: "Components/BreadcrumbGroup/Tooltip + Truncation",
  component: BreadcrumbGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Demonstrates how long breadcrumb labels are truncated and show a full tooltip on hover if the label exceeds 28 characters. This improves accessibility and preserves layout.",
      },
    },
  },
}
export default meta

export const TruncatedWithTooltip: StoryObj<typeof BreadcrumbGroup> = {
  name: "Long Label Truncation with Tooltip",
  render: () => (
    <div className="space-y-6 p-6 max-w-[800px]">
      <BreadcrumbGroup
        items={[
          { label: "TruncatedIfNameForTheLevelExceeds280px—TooltipShowsFullLength" },
        ]}
      />
      <BreadcrumbGroup
        items={[
          { label: "TruncatedIfNameForTheLevelExceeds280px—TooltipShowsFullLength" },
          { label: "TruncatedIfNameForTheLevelExceeds280px—TooltipShowsFullLength" },
        ]}
      />
      <BreadcrumbGroup
        items={[
          { label: "TruncatedIfNameForTheLevelExceeds280px—TooltipShowsFullLength", icon: Circle },
          { label: "TruncatedIfNameForTheLevelExceeds280px—TooltipShowsFullLength", icon: Circle },
        ]}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story illustrates the truncation logic in the `BreadcrumbGroup` component. If a label exceeds 28 characters, it will truncate with an ellipsis (`…`) and show the full label in a tooltip on hover.",
      },
    },
  },
}
