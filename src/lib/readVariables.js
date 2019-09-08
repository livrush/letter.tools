// const regexpWithBraces = /{{.*?}}/g;
const regexpWithoutBraces = /(?<=\{{).*(?=\}})/g;

export const readVariables = (string, regexp = regexpWithoutBraces) => {
  const matches = string.match(regexp);
  return [...matches.map(m => m.trim())];
};
