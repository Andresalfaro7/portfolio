export const useSplitText = (text: string): string[] => {
  if (!text) return [];
  return text.split("");
};
