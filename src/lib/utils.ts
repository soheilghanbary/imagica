import { type ClassValue, clsx } from 'clsx';
import { formatDistanceToNow } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fromNow(date: Date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formatViews(views: number) {
  if (views >= 1000000000) {
    const hundreds = views / 1000000;
    return `${hundreds.toFixed(1)}B`;
  }

  if (views >= 1000000) {
    const hundreds = views / 1000000;
    return `${hundreds.toFixed(1)}M`;
  }

  if (views >= 1000) {
    const thousands = views / 1000;
    return `${thousands.toFixed(1)}K`;
  }

  return views.toString();
}
