import en from "./static/locales/en";
import hy from "./static/locales/hy";
import ru from "./static/locales/ru";
import { useRouter } from "next/router";

const locales = {
  hy,
  ru,
  en,
};

export default function useTranslation(v) {
  const router = useRouter();
  let { locale } = router;
  const t = (verse) => locales[locale][verse];
  return t(v);
}
