import { UPDATE_ONLINE, SHOULD_SHOW_APP_DOWNLOAD } from './mutation-types'
export default {
  [UPDATE_ONLINE] (state, online) {
    state.online = online
  },
  [SHOULD_SHOW_APP_DOWNLOAD] (state, DOWNLOADAPPONVISIBLE) {
    state.shouldPopUpAppDownload = DOWNLOADAPPONVISIBLE
  }
}
