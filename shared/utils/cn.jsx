import clsxEngine from "clsx";
import { twMerge } from "tailwind-merge";
import { clsx } from "@/shared/utils/clsx";

export const cn = (...params) => twMerge(clsx(params));
