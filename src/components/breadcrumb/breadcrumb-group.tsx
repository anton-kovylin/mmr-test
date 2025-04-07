import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash, Link as LinkIcon } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { useId } from "react"
import type { LucideIcon } from "lucide-react"

interface BreadcrumbGroupProps {
  items: {
    label: string
    href?: string
    icon?: LucideIcon | false
  }[]
  leadingIcon?: LucideIcon
  leadingSeparator?: "slash" | "vertical",
  trailingIcon?: React.ReactNode
}

export function BreadcrumbGroup({
  items,
  leadingIcon: LeadingIcon,
  leadingSeparator = "slash",
}: BreadcrumbGroupProps) {
  const tooltipId = useId();

  return (
    <nav
      aria-label="Breadcrumb"
      role="navigation"
      className="flex items-center justify-between w-[1376px] h-[40px] px-4 border gap-3"
    >
      <Breadcrumb>
        <BreadcrumbList className="flex flex-wrap items-center gap-x-[10px] gap-y-1">
          {LeadingIcon && (
            <div className="flex items-center gap-x-[10px]">
              <LeadingIcon
                className="h-4 w-4 text-muted-foreground shrink-0"
                aria-hidden
              />
              {leadingSeparator === "vertical" ? (
                <div
                  className="w-[12px] h-px border border-[#E4E4E7] rotate-[-90deg]"
                  aria-hidden
                />
              ) : (
                <BreadcrumbSeparator>
                  <Slash className="w-4 h-4 text-muted-foreground" aria-hidden />
                </BreadcrumbSeparator>
              )}
            </div>
          )}
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1
            const showTooltip = item.label.length > 28
            const Icon = item.icon

            return (
              <div className="flex items-center gap-x-[10px]" key={idx}>
                <BreadcrumbItem>
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <BreadcrumbLink
                          href={item?.href || "#"}
                          aria-describedby={showTooltip ? tooltipId : undefined}
                          aria-current={isLast ? "page" : undefined}
                          className={cn(
                            "inline-flex items-center gap-1 truncate px-3 py-1 text-sm font-semibold rounded-md h-[28px]",
                            "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B]",
                            "hover:bg-muted",
                            "focus:ring-offset-background",
                           `${isLast ? "font-semibold" : ""}`
                          )}
                        >
                          {Icon && (
                            <Icon
                              className="w-4 h-4 text-muted-foreground shrink-0 opacity-50"
                              aria-hidden
                            />
                          )}
                          <span>
                            {item.label.length > 28
                              ? `${item.label.slice(0, 25)}…`
                              : item.label}
                          </span>
                        </BreadcrumbLink>
                      </TooltipTrigger>
                      {showTooltip && (
                        <TooltipContent id={tooltipId} role="tooltip">
                          <span className="block max-w-[300px] whitespace-normal text-xs">
                            {item.label}
                          </span>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </BreadcrumbItem>

                {idx < items.length - 1 && (
                  <BreadcrumbSeparator>
                    <Slash className="w-4 h-4 text-muted-foreground" aria-hidden />
                  </BreadcrumbSeparator>
                )}
              </div>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <LinkIcon
        className="w-4 h-4 text-muted-foreground shrink-0 opacity-50"
        aria-hidden
      />
    </nav>
  )
}
