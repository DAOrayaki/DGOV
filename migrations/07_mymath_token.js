module.exports = function(deployer) {
  deployer.deploy(artifacts.require("MySafeMath"), { overwrite: false });
};
