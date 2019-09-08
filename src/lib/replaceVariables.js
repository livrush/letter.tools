export const replaceVariables = (string, variables = {}) => {
  let key, newString = string;
  for (key in variables) {
    let regexp = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
    newString = newString.replace(regexp, variables[key]);
  }
  return newString;
};
