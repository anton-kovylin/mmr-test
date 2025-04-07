import type { Meta, StoryObj } from "@storybook/react"
import { BreadcrumbGroup } from "./breadcrumb-group"
import {
  Folder,
  Users,
  FileText,
  MessageSquare,
  BookOpen,
  Paperclip,
  Link,
  PanelRightOpen,
  MessageCircleQuestion,
  ListTodo
} from "lucide-react"

const meta: Meta<typeof BreadcrumbGroup> = {
  title: "Components/BreadcrumbGroup/With Icons",
  component: BreadcrumbGroup,
  parameters: {
    layout: "padded",
  },
}

export default meta

export const ExamplesWithIcons: StoryObj<typeof BreadcrumbGroup> = {
  name: "Examples (With Icons)",
  render: () => (
    <div className="space-y-6 bg-white p-6 rounded-xl">
      <BreadcrumbGroup
        leadingIcon={PanelRightOpen}
        leadingSeparator="vertical"
        trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
        items={[
          { label: "Organisations", href: "#"},
          { label: "Projects", href: "#", },
        ]}
      />

      <BreadcrumbGroup
        leadingIcon={PanelRightOpen}
        leadingSeparator="vertical"
        trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
        items={[
          { label: "Organisations", href: "#" },
          { label: "Projects", href: "#" },
          { label: "Services", href: "#" },
        ]}
      />

      <BreadcrumbGroup
        leadingIcon={PanelRightOpen}
        leadingSeparator="vertical"
        trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
        items={[
          { label: "All items", href: "/items", icon: MessageCircleQuestion },
          { label: "MCQ", href: "/items/mcq", icon: ListTodo },
        ]}
      />

      <BreadcrumbGroup
        leadingIcon={PanelRightOpen}
        leadingSeparator="vertical"
        trailingIcon={<Link className="w-4 h-4 text-muted-foreground opacity-50" />}
        items={[
          { label: "All items", href: "/items", icon: MessageCircleQuestion },
          { label: "MCQ", href: "/items/mcq", icon: ListTodo },
          { label: "RTP-ITEM-3772" },
        ]}
      />
    </div>
  ),
}
