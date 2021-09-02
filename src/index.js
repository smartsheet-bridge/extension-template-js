import { createBridgeHandler } from '@smartsheet-bridge/extension-handler';
import { helloworld } from './helloworld';

export const main = createBridgeHandler({
  modules: {
    helloworld: helloworld,
  },
});
