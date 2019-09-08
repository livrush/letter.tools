// const regexpWithBraces = /{{.*?}}/g;
const regexpWithoutBraces = /(?<=\{{).*(?=\}})/g;

export const readVariables = (string, regexp = regexpWithoutBraces) => {
  const matches = string.match(regexp);
  return [...matches.map(m => m.trim())];
};

export const replaceVariables = (string, variables = {}) => {
  let key, newString = string;
  for (key in variables) {
    let regexp = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    newString = newString.replace(regexp, variables[key]);
  }
  return newString;
};
