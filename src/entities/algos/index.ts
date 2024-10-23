import { Algo } from "./models";
import { DuplicateInteger } from "./duplicate-integer";

type AlgosDict = Record<string, Algo>;

export const algos: AlgosDict = {
  "duplicate-integer": DuplicateInteger,
};

export type { Algo };
