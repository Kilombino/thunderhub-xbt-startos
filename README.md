<p align="center">
  <img src="icon.png" alt="ThunderHub Logo" width="21%">
</p>

# ThunderHub XBT on StartOS

[ThunderHub XBT](https://github.com/Kilombino/thunderhub/tree/xbt) is ThunderHub, the LND node manager, forked for the Bitcoin BLAKE2b chain (BTC). This package runs it against [Lightning Fork](https://github.com/paulscode/lightning-fork-startos), the LND for that chain, on the same server, with the node account configured for you.

It is a fork of the official [ThunderHub package](https://github.com/Start9Labs/thunderhub-startos). Everything not listed here behaves as there.

- **Upstream:** <https://github.com/Kilombino/thunderhub> (branch `xbt`)
- **Wrapper:** <https://github.com/Kilombino/thunderhub-xbt-startos>
- **Store:** <https://registry.kilombino.com>

## What changes from ThunderHub

- **Prices:** fiat prices of BTCB2 (bitcoin on the BLAKE2b chain) from Neoxa, where it trades, not the SHA-256 chain's price.
- **Explorer:** transactions, addresses, fee rates and block height come from <https://mempool.kilombino.com>, which follows the BLAKE2b chain.
- **Lightning explorer:** node and channel links open <https://lightning.paperclippool.xyz>.
- **Removed:** Amboss and Magma, which belong to the SHA-256 chain's Lightning network.
- **Added:** channel notes (stored on this volume), coin control when opening channels, CPFP, and a Spanish interface.

## Dependency

**Lightning Fork** (`lightning-fork`), running, with its `lnd` health check passing. The official LND package follows the SHA-256 chain and does not work here.

ThunderHub reads Lightning Fork's `admin.macaroon` and `tls.cert` from its volume (read-only, at `/mnt/lnd`). It reaches its gRPC port (10009) on the StartOS bridge. Until Lightning Fork's wallet is unlocked there is no gRPC address yet, and ThunderHub shows no node; it connects after one restart once the wallet is up.

## Volume

| Volume | Mount   | Holds                                                           |
| ------ | ------- | --------------------------------------------------------------- |
| `main` | `/data` | `accounts.yaml` (hashed master password), channel notes database |

Backups cover `main`.

## Actions

- **Create / Reset Master Password:** generates the web UI password and shows it once.

## Building

```sh
npm ci
make            # x86 and arm .s9pk
```
