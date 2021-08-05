const { createBridgeHandler } = require("@smartsheet-bridge/extension-handler");
const { helloworld } = require("./helloworld");

exports.main = createBridgeHandler({
  modules: {
    helloworld: helloworld,
  },
});