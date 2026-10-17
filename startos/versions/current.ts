import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.19.0-xbt.2:0',
  releaseNotes: {
    en_US: `Resize channels without closing them (splicing).
- Channels → "Resize": add funds from the on-chain wallet to a channel, or move funds out of your side to an on-chain address.
- Shows whether splicing is on in your node and, for each channel, whether it can be resized now (the peer must support splicing and be online).
- Estimate before confirming: fee, capacity and balance before and after, and the confirmations until it locks.
- Needs Lightning Fork 0.21.4-beta-blake2b.19 or later with Resize Channels turned on.`,
    es_ES: `Cambia el tamaño de los canales sin cerrarlos (splicing).
- Canales → "Cambiar tamaño": mete fondos del monedero on-chain en un canal, o saca fondos de tu lado a una dirección on-chain.
- Indica si el splicing está activado en tu nodo y, para cada canal, si se puede redimensionar ahora (el peer debe soportarlo y estar conectado).
- Estimación antes de confirmar: comisión, capacidad y saldo antes y después, y confirmaciones hasta quedar fijado.
- Requiere Lightning Fork 0.21.4-beta-blake2b.19 o superior con Resize Channels activado.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
