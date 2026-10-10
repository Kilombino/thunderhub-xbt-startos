import { depLndDescription } from './manifest/i18n'
import { sdk } from './sdk'

// Lightning Fork: LND for the Bitcoin BLAKE2b chain, packaged by paulscode
// (github.com/paulscode/lightning-fork-startos). The official LND package follows the SHA-256
// chain and is not a substitute.
const lightningFork = sdk.Dependency.required('lightning-fork', {
  description: depLndDescription,
  metadata: {
    title: 'Lightning Fork',
    icon: 'https://raw.githubusercontent.com/paulscode/lightning-fork-startos/master/icon.png',
  },
  versionRange: '>=0.21.4-beta.18:0',
  kind: 'running',
  healthChecks: ['lnd'],
})

export const dependencies = sdk.Dependencies.of().addDependency(lightningFork)
