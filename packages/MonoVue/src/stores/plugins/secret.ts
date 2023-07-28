import type { PiniaPlugin, PiniaPluginContext } from 'pinia'

export const SecretPiniaPlugin: PiniaPlugin = (context: PiniaPluginContext) => {
  return { secret: 'the cake is a lie' }
}
