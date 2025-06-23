import { fetchCommand } from "@/services/apiService";
import { CommandType } from "@/types/api";

export const parseCommand = (input: string) => {
  const trimmed = input.trim();
  const [command, ...args] = trimmed.split(/\s+/);
  return { command, args };
};

export const executeCommand = async (input: string): Promise<string> => {
  const { command, args } = parseCommand(input);

  switch (command.toLowerCase()) {
    case "/도움말":
    case "/ㄷㅇㅁ":
    case "/?":
    case "도움말":
    case "ㄷㅇㅁ":
    case "?":
      return await fetchCommand("help");

    case "/쌈무":
    case "/삼무":
    case "/ㅆㅁ":
    case "/ㅅㅁ":
    case "/ㅎㅇ":
    case "쌈무":
    case "삼무":
    case "ㅆㅁ":
    case "ㅅㅁ":
    case "ㅎㅇ":
      return await fetchCommand("ssammu");

    case "/환산":
    case "/ㅎㅅ":
    case "환산":
    case "ㅎㅅ":
      return args[0]
        ? await fetchCommand("scouter", args[0])
        : "사용법: 환산 [캐릭터명]";

    case "/뭐먹지":
    case "/ㅁㅁㅈ":
    case "뭐먹지":
    case "ㅁㅁㅈ":
      return await fetchCommand("food");

    case "/vs":
    case "vs":
      return args.length > 1
        ? await fetchCommand("vs", args.join(","))
        : "사용법: vs [항목1] [항목2] ...";

    case "/직업추천":
    case "/ㅈㅇㅊㅊ":
    case "직업추천":
    case "ㅈㅇㅊㅊ":
      return await fetchCommand("class");

    case "조아":
      return await fetchCommand("joa");

    case "/주사위":
    case "/ㅈㅅㅇ":
    case "주사위":
    case "ㅈㅅㅇ":
      return await fetchCommand("dice");

    case "/정보":
    case "/ㅈㅂ":
    case "정보":
    case "ㅈㅂ":
      return args[0]
        ? await fetchCommand("info", args[0])
        : "사용법: 정보 [캐릭터명]";

    case "/경험치히스토리":
    case "/ㄱㅎㅊㅎㅅㅌㄹ":
    case "경험치히스토리":
    case "ㄱㅎㅊㅎㅅㅌㄹ":
      return args[0]
        ? await fetchCommand("history", args[0])
        : "사용법: 경험치히스토리 [캐릭터명]";

    default:
      return `알 수 없는 명령어: ${command}. 도움말(?) 입력시 명령어 목록 확인`;
  }
};
