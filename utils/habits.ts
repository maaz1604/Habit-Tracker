export type Habit = {
  id: string;
  name: string;
  icon: string;
  color: string;
  createdAt: string;
};

export type CompletionMap = {
  [date: string]: string[]; // date (YYYY-MM-DD) -> array of habit IDs completed
};

export function getTodayKey(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

export function getDateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function getLast49Days(): Date[] {
  const days: Date[] = [];
  const today = new Date();
  for (let i = 48; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    days.push(d);
  }
  return days;
}

export const HABIT_ICONS = [
  "figure.run",
  "book.fill",
  "drop.fill",
  "bed.double.fill",
  "leaf.fill",
  "dumbbell.fill",
  "brain.head.profile",
  "heart.fill",
  "cup.and.saucer.fill",
  "pencil.and.outline",
  "music.note",
  "pill.fill",
  "fork.knife",
  "moon.fill",
  "sun.max.fill",
  "bicycle",
] as const;

export const HABIT_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#FF8C42",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
  "#F1948A",
] as const;
