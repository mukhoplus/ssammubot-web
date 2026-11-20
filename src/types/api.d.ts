export interface ApiResponse {
  message: string;
}

export type CommandOutput =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "link";
      text: string;
      url: string;
    };

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
  // | "poten"
  | "symbol"
  | "abil"
  | "levelup"
  | "patch"
  // | "playlist";
  | "ring"
  | "key"
  | "boss"
  | "quest"
  | "sunday";
