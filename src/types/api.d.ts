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
  | "info"
  | "history"
  | "poten"
  | "symbol"
  | "abil"
  | "levelup"
  | "patch";
