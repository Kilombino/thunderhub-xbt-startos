import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v0_19_0_xbt_1 } from './v0_19_0_xbt_1'

export const versionGraph = VersionGraph.of({
  current,
  other: [v0_19_0_xbt_1],
})
