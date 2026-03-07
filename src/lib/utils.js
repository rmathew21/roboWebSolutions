import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function scrollToElement(el) {
  const navHeight = document.querySelector('nav')?.offsetHeight ?? 40;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function handleSectionClick(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 120;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
};