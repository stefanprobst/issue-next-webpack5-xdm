const createTranspileModulesPlugin = require("next-transpile-modules");

const withTranspiledModules = createTranspileModulesPlugin(
  [
    "xdm",
    "unist-util-position-from-estree",
    "estree-util-build-jsx",
    "estree-util-is-identifier-name",
    "periscopic",
    "hast-util-to-estree",
    "comma-separated-tokens",
    "estree-util-attach-comments",
    "hast-util-whitespace",
    "property-information",
    "space-separated-tokens",
    "unist-util-position",
    "zwitch",
  ],
  {
    resolveSymlinks: true,
  }
);

const config = {
  future: { webpack5: false },
};

module.exports = withTranspiledModules(config);
