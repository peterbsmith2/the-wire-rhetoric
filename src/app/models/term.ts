export interface Term {
  word: string;
  definition: string;
}

export interface Terms {
  [word: string]: Term;
}
