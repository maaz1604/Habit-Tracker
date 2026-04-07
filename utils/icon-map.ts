import Ionicons from "@expo/vector-icons/Ionicons";
import type { ComponentProps } from "react";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

const SYMBOL_TO_IONICON: Record<string, IoniconName> = {
  "figure.run": "walk",
  "book.fill": "book",
  "drop.fill": "water",
  "bed.double.fill": "bed",
  "leaf.fill": "leaf",
  "dumbbell.fill": "barbell",
  "brain.head.profile": "fitness",
  "heart.fill": "heart",
  "cup.and.saucer.fill": "cafe",
  "pencil.and.outline": "create",
  "music.note": "musical-notes",
  "pill.fill": "medical",
  "fork.knife": "restaurant",
  "moon.fill": "moon",
  "sun.max.fill": "sunny",
  bicycle: "bicycle",
  checkmark: "checkmark",
  "flame.fill": "flame",
  "chart.bar": "stats-chart",
  plus: "add",
  "plus.circle": "add-circle-outline",
};

export function toIoniconName(symbolName: string): IoniconName {
  return SYMBOL_TO_IONICON[symbolName] ?? "ellipse-outline";
}
