const createTranspileModulesPlugin = require("next-transpile-modules");

const withTranspiledModules = createTranspileModulesPlugin(
  [
    "xdm",
    "unist-util-position-from-estree",
    "estree-util-build-jsx",
    "estree-util-is-identifier-name",
    "periscopic",
  ],
  {
    resolveSymlinks: true,
  }
);

const config = {
  future: { webpack5: true },
};

module.exports = withTranspiledModules(config);
