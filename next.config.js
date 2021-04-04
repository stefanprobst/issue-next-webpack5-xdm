const createTranspileModulesPlugin = require("next-transpile-modules");

const withTranspiledModules = createTranspileModulesPlugin(
  ["xdm", "unist-util-position-from-estree"],
  {
    resolveSymlinks: true,
  }
);

const config = {
  future: { webpack5: true },
};

module.exports = withTranspiledModules(config);
