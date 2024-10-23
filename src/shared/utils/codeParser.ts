import { Intrigue } from "@/shared/ui/intrigue";

export const codeParserKeywords = {
  $CODE_BLOCK$: Intrigue,
};

export const codeParser = (code: string) => {
  return code.split(/(\$CODE_BLOCK\$)/);
};
