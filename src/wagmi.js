import { http, createConfig } from 'wagmi'
import { base, story } from 'wagmi/chains'

export const config = createConfig({
  chains: [base, story],
  multiInjectedProviderDiscovery: false,
  transports: {
    [base.id]: http(),
    [story.id]: http(),
  },
})
