"use client";

import * as React from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Badge } from "./badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface Option {
  value: string;
  label: string;
}

interface SingleComboboxProps {
  options: Option[];
  buttonPlaceholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  multiple?: false;
}

interface MultiComboboxProps {
  options: Option[];
  buttonPlaceholder?: string;
  value?: Option[];
  onChange?: (options: Option[]) => void;
  className?: string;
  badgeClassName?: string;
  emptyIndicator?: React.ReactNode;
  multiple: true;
}

type ComboboxProps = SingleComboboxProps | MultiComboboxProps;

export function Combobox(props: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  if (props.multiple === true) {
    return <MultiCombobox {...props} open={open} setOpen={setOpen} />;
  }

  return <SingleCombobox {...props} open={open} setOpen={setOpen} />;
}

function SingleCombobox({
  options,
  buttonPlaceholder,
  value = "",
  onChange,
  className,
  open,
  setOpen,
}: SingleComboboxProps & { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between bg-white text-gray-900 border-gray-300 cursor-pointer",
            className
          )}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : buttonPlaceholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 z-50" align="start">
        <Command>
          <CommandInput placeholder="검색..." className="h-9" />
          <CommandList>
            <CommandEmpty>선택할 옵션이 없습니다.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    onChange?.(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function MultiCombobox({
  options,
  buttonPlaceholder,
  value = [],
  onChange,
  className,
  badgeClassName,
  emptyIndicator,
  open,
  setOpen,
}: MultiComboboxProps & { open: boolean; setOpen: (open: boolean) => void }) {
  const handleSelect = (selectedValue: string) => {
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (!selectedOption) return;

    const isSelected = value.some((item) => item.value === selectedValue);

    if (isSelected) {
      // 제거
      const newValue = value.filter((item) => item.value !== selectedValue);
      onChange?.(newValue);
    } else {
      // 추가
      const newValue = [...value, selectedOption];
      onChange?.(newValue);
    }
  };

  const handleRemove = (valueToRemove: string) => {
    const newValue = value.filter((item) => item.value !== valueToRemove);
    onChange?.(newValue);
  };

  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between cursor-pointer min-h-10 h-fit",
              className
            )}
          >
            <div className="flex flex-wrap gap-1 flex-1">
              {value.length > 0 ? (
                value.map((item) => (
                  <Badge
                    key={item.value}
                    className={cn("text-xs", badgeClassName)}
                  >
                    {item.label}
                    <button
                      type="button"
                      className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleRemove(item.value);
                        }
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleRemove(item.value);
                      }}
                    >
                      <X className="h-3 w-3 text-muted-foreground cursor-pointer" />
                    </button>
                  </Badge>
                ))
              ) : (
                <span className="text-muted-foreground">
                  {buttonPlaceholder}
                </span>
              )}
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 z-50" align="start">
          <Command>
            <CommandInput placeholder="검색..." className="h-9" />
            <CommandList>
              <CommandEmpty>
                {emptyIndicator || "선택할 옵션이 없습니다."}
              </CommandEmpty>
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = value.some(
                    (item) => item.value === option.value
                  );
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      {option.label}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          isSelected ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
