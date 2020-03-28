import 'vue-tsx-support/options/allow-unknown-props'

import { Store } from '@/store/store-type'

declare module 'vue/types/vue' {
  interface Vue {
    _store: Store
  }
}
