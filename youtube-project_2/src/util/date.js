import koLocale from "timeago.js/lib/lang/ko"; //한국어 선택
import { format, register } from "timeago.js";

register("ko", koLocale);

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
