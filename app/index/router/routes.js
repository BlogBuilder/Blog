import List from '../components/common/container/list.vue'
import Article from '../components/common/container/details.vue'

//路由映射
var routes = [
    {
        path: "/list",
        name: "/list",
        component: List
    },
    {
        path: "/article/:id",
        name: "article",
        component: Article
    }
];

module.exports = routes;