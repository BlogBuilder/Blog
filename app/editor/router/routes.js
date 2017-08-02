// 文章
import Article from '../coponents/article/Article.vue'
import ArticleCreate from '../coponents/article/create.vue'
import ArticleList from '../coponents/article/list.vue'
//路由映射
var routes = [
    {
        path: "/article",
        name: "article",
        component: Article,
        children: [
            {
                path: "create",
                name: "create",
                component: ArticleCreate
            }, {
                path: "list",
                name: "list",
                component: ArticleList
            }
        ]
    }
];

module.exports = routes;