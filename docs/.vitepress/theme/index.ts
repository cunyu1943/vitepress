/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import './style/blockquote.css'
import './style/blur.css'
import './style/hidden.css'
import './style/marker.css'
import './style/vp-code.css'
import './style/vp-code-group.css'
import './style/vp-code-title.css'
import './style/sidebarIcon.css'
import 'virtual:group-icons.css' //代码组样式
import HomeUnderline from './components/HomeUnderline.vue'
import DataPanel from "./components/DataPanel.vue"
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import ArticleMetadata from "./components/ArticleMetadata.vue"

export default {
    extends: DefaultTheme,
    // ...DefaultTheme, //或者这样写也可
    enhanceApp({ app,router }) {
        // 注册全局组件
        app.component('HomeUnderline', HomeUnderline),
        app.component('DataPanel', DataPanel), 
        app.component('ArticleMetadata', ArticleMetadata)
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
    }
}