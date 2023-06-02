import type { PiniaPluginContext } from 'pinia'


export const SecretPiniaPlugin = (context: PiniaPluginContext) => {
  // console.log(context);
  return { secret: 'the cake is a lie' }
}
