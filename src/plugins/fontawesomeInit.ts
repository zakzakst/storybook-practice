import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
//以下は個別にアイコンを指定してimportする方法。こちらのほうが軽量で済む。
//{}には使いたいアイコン名を書く
// import { faCirclePlus, faBars } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export const fontawesomeInit = (vueApp: any) => {
  config.autoAddCss = false
  library.add(fas, far, fab)
  //個別フォントをimportした場合は以下を使う
  // library.add(faCirclePlus, faBars)
  vueApp.component('font-awesome-icon', FontAwesomeIcon)
}