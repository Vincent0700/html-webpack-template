module.exports = {
  '*.js': ['eslint --fix'],
  '*.{md,html,json}': ['prettier --write'],
  '*.{css,scss,sass}': ['prettier --write']
};
