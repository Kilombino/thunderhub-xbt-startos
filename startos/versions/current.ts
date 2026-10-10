import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.19.0-xbt.1:0',
  releaseNotes: {
    en_US: `First release of ThunderHub XBT for StartOS, managing a Lightning Fork node on the Bitcoin BLAKE2b chain.
- Fiat prices from the BTCB2 market on Neoxa.
- Explorer links, fee rates and block height from mempool.kilombino.com (BLAKE2b).
- Node and channel links open lightning.paperclippool.xyz. Amboss and Magma removed.
- Channel notes, coin control when opening channels, CPFP, Spanish interface.`,
    es_ES: `Primera versión de ThunderHub XBT para StartOS, que gestiona un nodo Lightning Fork de la cadena Bitcoin BLAKE2b.
- Precios en fiat del mercado BTCB2 de Neoxa.
- Enlaces al explorador, comisiones y altura de bloque de mempool.kilombino.com (BLAKE2b).
- Los enlaces de nodos y canales abren lightning.paperclippool.xyz. Sin Amboss ni Magma.
- Notas en los canales, coin control al abrir canales, CPFP e interfaz en español.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
