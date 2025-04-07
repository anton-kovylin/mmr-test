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
import { Separator } from "@/components/ui/separator"
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
  leadingSeparator?: "slash" | "vertical"
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
                            "inline-flex items-center gap-1 truncate border px-3 py-1 rounded-md text-sm focus:outline-none transition-colors h-[28px]",
                            isLast
                              ? "border-transparent text-gray-500 hover:text-black hover:bg-gray-100 focus:ring-2 focus:ring-purple-500 font-semibold"
                              : "border-transparent text-gray-500 hover:text-black hover:bg-gray-100 focus:ring-2 focus:ring-purple-500"
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
