const regexpWithBraces = /{{.*?}}/g;
const regexpWithoutBraces = /(?<=\{{).*(?=\}})/g;

export const readVariables = (string, regexp = regexpWithoutBraces) => {
  const matches = string.match(regexp);
  return [...matches];
};

export const replaceVariables = (string, variables = {}, regexp = regexpWithBraces) => {
  
};
