
# Breadcrumb Group Component with Storybook

This repository contains the `BreadcrumbGroup` component, built with **Next.js**, **Tailwind CSS**, and **ShadCN UI**. It supports customizable breadcrumb navigation with icons, separators, tooltips, and accessibility features.

---

## Getting Started (Local Setup)

Follow these steps to run the project and Storybook locally on your machine.

### Install Dependencies

Using **npm**:

```bash
npm install
```

### Run Storybook

```bash
npm run storybook
```
Once Storybook is running, access it at:

```bash
http://localhost:6006
```

## Optional: Run Next.js Dev Server

```bash
npm run dev
# or
yarn dev
```

## Optional: Build Storybook

```bash
npm run build-storybook
```

---

### BreadcrumbGroup Component Overview

This is a composable, accessible breadcrumb navigation component designed according to Figma references and built with ShadCN UI and Tailwind CSS.

It supports:

- Custom leading icons (e.g. folders, users)
- Vertical or slash separators (based on `leadingSeparator`)
- Per-item icons (optional)
- Tooltip for long/truncated labels
- A trailing link icon 🔗 aligned to the far right (not part of the breadcrumb items)
- Full accessibility with ARIA roles and keyboard navigation
- Responsive layout with consistent height (40px) and dynamic width

### Architecture & Design Decisions

- **React Component (`BreadcrumbGroup`)** is isolated inside `src/components/breadcrumb/`, making it reusable and testable.
- **Separation of Concerns:** UI primitives like `<Breadcrumb>`, `<Tooltip>`, and `<Separator>` are pulled from `@/components/ui/`, following ShadCN conventions.
- **Layout Fidelity:** The component adheres strictly to Figma specs:
  - `height: 40px`, `width: 1376px`, and internal paddings match design.
  - Custom vertical separator: `12px` wide, rotated `-90°`, colored `#E4E4E7`.
- **Trailing link icon** is rendered outside of the breadcrumb list and flex-aligned using `justify-between`.
- **Accessibility:**
  - Uses `role="navigation"` and `aria-label="Breadcrumb"`
  - `aria-current` for current item
  - `aria-describedby` for tooltips on truncated labels

### Storybook Stories

The following variants are available in Storybook:

- One-level, two-level, three-level breadcrumbs
- With/without leading icon
- Slash / vertical / first vertical separator
- Active, hover, focus states (visually observable via Tailwind)
- Truncated long labels with tooltips
- Trailing link icon aligned separately

All stories are grouped by category and follow consistent naming.

### Props

```ts
interface BreadcrumbGroupProps {
  items: {
    label: string
    href?: string
    icon?: LucideIcon | false
  }[]
  leadingIcon?: LucideIcon
  leadingSeparator?: "slash" | "vertical"
}
```
- items: The breadcrumb path
- leadingIcon: An icon before the list (e.g. Folder)
- leadingSeparator: "slash" or "vertical" between leading icon and items