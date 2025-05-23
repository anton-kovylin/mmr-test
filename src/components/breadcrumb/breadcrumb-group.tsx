"use client"

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface BreadcrumbGroupProps {
  items: {
    label: string
    href?: string
    icon?: LucideIcon | false
  }[]
  leadingIcon?: LucideIcon
  leadingSeparator?: "slash" | "vertical"
  trailingIcon?: React.ReactNode
}

const Separator = () => {
  return (
    <BreadcrumbSeparator>
      <Slash
        className="w-[6.67px] h-[12px] text-[#71717A] mt-[2px] ml-[4.67px]"
        aria-hidden
      />
    </BreadcrumbSeparator>
  )
}

export function BreadcrumbGroup({
  items,
  leadingIcon: LeadingIcon,
  leadingSeparator = "slash",
  trailingIcon,
}: BreadcrumbGroupProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      role="navigation"
      className="flex items-center justify-between w-full max-w-[1376px] h-[40px] px-4 border gap-3"
    >
      <Breadcrumb>
        <BreadcrumbList className="flex flex-wrap items-center gap-x-[10px] gap-y-1">
          {LeadingIcon && (
            <div className="flex items-center gap-x-[10px]">
              <LeadingIcon
                className={cn("w-4 h-4 shrink-0", "text-[#18181B]")}
                aria-hidden
              />
              {leadingSeparator === "vertical" ? (
                <div
                  className="w-[12px] h-px border border-[#E4E4E7] rotate-[-90deg]"
                  aria-hidden
                />
              ) : (
                <Separator />
              )}
            </div>
          )}

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1
            const showTooltip = item.label.length > 28
            const Icon = item.icon
            const uniqueTooltipId = `tooltip-${idx}`

            return (
              <div className="flex items-center gap-x-[10px]" key={idx}>
                <BreadcrumbItem>
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <BreadcrumbLink
                          href={item.href || "#"}
                          aria-describedby={showTooltip ? uniqueTooltipId : undefined}
                          aria-current={isLast ? "page" : undefined}
                          className={cn(
                            "inline-flex items-center gap-1 truncate px-3 py-1 rounded-md text-sm h-[28px]",
                            "focus-visible:outline-none focus-visible:border-2 focus-visible:border-[#18181B]",
                            "hover:bg-[#FAFAFA] active:bg-[#F4F4F5]",
                            isLast
                              ? "text-gray-700 font-semibold"
                              : "text-muted-foreground"
                          )}
                        >
                          {Icon && (
                            <Icon
                              className="w-4 h-4 text-muted-foreground shrink-0 opacity-50"
                              aria-hidden
                            />
                          )}
                          <span>
                            {showTooltip
                              ? `${item.label.slice(0, 25)}…`
                              : item.label}
                          </span>
                        </BreadcrumbLink>
                      </TooltipTrigger>
                      {showTooltip && (
                        <TooltipContent id={uniqueTooltipId} role="tooltip">
                          <span className="block max-w-[300px] whitespace-normal text-xs">
                            {item.label}
                          </span>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                </BreadcrumbItem>

                {idx < items.length - 1 && (
                  <Separator />
                )}
              </div>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>

      {trailingIcon && trailingIcon}
    </nav>
  )
}
