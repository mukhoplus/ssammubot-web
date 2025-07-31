import { ApiResponse, CommandType } from "@/types/api";

const API_BASE = "https://smbot.mukho.r-e.kr";

export const fetchCommand = async (
  command: CommandType,
  param?: string,
  param2?: any
): Promise<string> => {
  try {
    const endpoints: Record<CommandType, string> = {
      help: "/basic/help",
      ssammu: "/basic/ssammu",
      scouter: "/nexon/scouter",
      food: "/random/food",
      vs: "/random/vs",
      class: "/random/class",
      joa: "/basic/joa/text",
      dice: "/random/dice",
      info: "/nexon/info",
      history: "/nexon/history",
      poten: "/basic/poten",
      symbol: "/nexon/symbol",
      abil: "/nexon/abil",
      levelup: "/nexon/levelup",
      patch: "/basic/patch",
    };

    let url = `${API_BASE}${endpoints[command]}`;
    if (param && command !== "vs") {
      url += `?characterName=${encodeURIComponent(param)}`;
    }
    if (param2 && command === "levelup") {
      url += `&targetLevel=${encodeURIComponent(param2)}`;
    }

    const response = await fetch(
      url,
      command !== "vs"
        ? null
        : {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ options: param.split(",") }),
          }
    );
    if (!response.ok) throw new Error("API 서버 오류");

    const data: ApiResponse = await response.json();

    if (command === "help") {
      const webOnlyHelp =
        "★ 웹 버전에서는 명령어 앞에 /을 작성하지 않아도 사용 가능합니다.\n★ 모바일 환경에서는 인앱 설치를 통해 앱처럼 사용 가능합니다.\n★ 문의: 카카오톡 오픈채팅 - 쌈무는채원";

      return `${data.message}\n\n${webOnlyHelp}`;
    }

    if (command === "scouter" || command === "poten") {
      return `<a href="${data.message}" target="_blank" style="color: inherit; text-decoration: none; font-weight: inherit; cursor: pointer;
      ">${data.message}</a>`;
    }

    return data.message || "No response";
  } catch (error) {
    return "묵호 정신 안차리지";
  }
};
