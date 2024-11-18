import { defineConfig } from "vitepress";

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Vue 3 + SpringBoot 学习文档",
  description: "详细学习Vue 3的指南",
  themeConfig: {
    siteTitle: "前端后端总结学习",
    logo: "/assets/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "前端学习总结", link: "/study-front/" },
      { text: "后端学习总结", link: "/study-end/" },
      { text: "常用组件", link: "/components/" },
      { text: "API 参考", link: "/api/" },
      { text: "常见问题", link: "/faq/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/dbz0423/vue3-ts-docs" },
    ],
    sidebar: {
      "/study-front/": [
        {
          text: "前端学习总结",
          collapsible: true,
          items: [
            { text: "第一周前端学习", link: "/study-front/前端第一周学习" },
            { text: "第二周前端学习", link: "/study-front/前端第二周学习" },
            {
              text: "前端第六周学习--VitePress 站点搭建 实施步骤",
              link: "/study-front/前端第六周学习--VitePress 站点搭建 实施步骤",
            },
            {
              text: "前端第九周学习--网络请求Axios",
              link: "/study-front/前端第九周学习--网络请求Axios",
            },
            {
              text: "前端第十周学习--代码规范",
              link: "/study-front/前端第十周学习--代码规范",
            },
          ],
        },
      ],
      "/study-end/": [
        {
          text: "后端学习总结",
          collapsible: true,
          items: [
            { text: "第一周后端学习", link: "/study-end/后端第一周学习" },
            { text: "第二周后端学习", link: "/study-end/后端第二周学习" },
            { text: "第三周后端学习", link: "/study-end/后端第三周学习" },
          ],
        },
      ],
      "/guide/": [
        {
          text: "开始",
          collapsible: true,
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "安装", link: "/guide/installation" },
            { text: "基本概念", link: "/guide/concepts" },
          ],
        },
      ],
      "/components/": [
        {
          text: "常用组件",
          items: [
            { text: "介绍", link: "/components/" },
            { text: "按钮 Button", link: "/components/button" },
          ],
        },
      ],
    },
    footer: {
      message: "认真学习Vue && SpringBoot武功秘籍",
      copyright: "Copyright © 2024 朱浩然",
    },
  },
});
