export interface ApiResponse {
  message: string;
}

export type CommandType =
  | "help"
  | "ssammu"
  | "scouter"
  | "food"
  | "vs"
  | "class"
  | "joa"
  | "dice"
  | "lotto"
  | "info"
  | "history"
  | "poten"
  | "symbol"
  | "abil"
  | "levelup"
  | "patch"
  | "playlist";
