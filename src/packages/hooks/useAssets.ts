import { author } from "../../../package.json";

type Assets = "next" | "paper-plane" | "pre" | "star";

export default function useAssets(assets: Assets) {
  const { url } = author;

  return `${url}/${assets}`;
}
