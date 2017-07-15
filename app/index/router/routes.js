import List from '../components/list.vue'
import Detail from '../components/details.vue'
import Standard from '../components/article/standard.vue'
import Gallery from '../components/article/gallery.vue'
import Quote from '../components/article/quote.vue'
import Audio from '../components/article/audio.vue'
import Video from '../components/article/video.vue'
//路由映射
var routes = [
    {
        path: "/list",
        name: "/list",
        component: List
    }, {
        path: "/detail",
        name: "/detail",
        component: Detail,
        children: [
            {
                path: 'standard',
                name: 'standard',
                component: Standard
            },
            {
                path: 'gallery',
                name: 'gallery',
                component: Gallery
            }, {
                path: 'quote',
                name: 'quote',
                component: Quote
            }, {
                path: 'audio',
                name: 'audio',
                component: Audio
            }, {
                path: 'video',
                name: 'video',
                component: Video
            }
        ]
    }
];

module.exports = routes;