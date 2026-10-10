export const uiPort = 3000
export const dataDir = '/data' as const
export const lndMount = '/mnt/lnd' as const
export const accountsPath = `${dataDir}/accounts.yaml` as const

// Lightning Fork's gRPC host and port, from github.com/paulscode/lightning-fork-startos
// (startos/interfaces.ts). Copied, not imported: that package is on another SDK version.
export const lfGRPCHostId = 'grpc' as const
export const lfGRPCPort = 10009
