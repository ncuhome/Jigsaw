export const genMtx = (n: number) => {
  return Array.from({ length: n }).map(() => Array.from<number>({ length: n }).fill(0));
};
