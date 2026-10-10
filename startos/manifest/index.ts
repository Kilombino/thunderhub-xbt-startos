import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'thunderhub-xbt',
  title: 'ThunderHub XBT',
  license: 'MIT',
  packageRepo: 'https://github.com/Kilombino/thunderhub-xbt-startos',
  upstreamRepo: 'https://github.com/Kilombino/thunderhub',
  marketingUrl: 'https://github.com/Kilombino/thunderhub/tree/xbt',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    thunderhub: {
      // ThunderHub forked for the Bitcoin BLAKE2b chain (XBT): BTCB2 prices from Neoxa, the
      // chain's own explorer and fee rates, no Amboss. Built from the xbt branch of
      // github.com/Kilombino/thunderhub.
      source: { dockerTag: 'ghcr.io/kilombino/thunderhub-xbt:0.19.0-xbt.1' },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
