import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "waywordcode",
  description: "一个人博客",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端笔记',
        items: [
          {
            text: '杂记',
            items: [
              { text: '函数和函数参数的理解', link: '/note/函数和函数参数的理解.md', },
              { text: '从输入网址（URL）到页面加载的全过程', link: '/note/从输入网址（URL）到页面加载的全过程.md', },
            ]
          },
          {
            text: 'vue', items: [
              { text: 'vue3新特性', link: '/note/vue/vue3/vue3版本特性.md', },
            ]
          },
          { text: 'css', link: '/note/vue3' }
        ]
      },
      { text: '前端工程化', link: '/note/front-end-project/1.项目结构规范.md' },
      { text: '重构：扒屎日记', link: '/note/reconstitution/1.1为什么要扒屎.md' }
    ],

    sidebar: [
      {
        text: '重构：扒屎日记',
        items: [
          { text: '1.为什么要扒屎', link: '/note/reconstitution/1.1为什么要扒屎.md' },
          { text: '2.屎山养成记', link: '/note/reconstitution/1.2屎山养成记.md' },
          { text: '3.如何当一个好的搅屎棍', link: '/note/reconstitution/1.3如何成为一个好的搅屎棍.md' },
          { text: '4.构筑去屎体系', link: '/note/reconstitution/1.4构筑去屎体系.md' },
          { text: '5.实战:教你如何扒屎', link: '/note/reconstitution/1.5教你如何扒屎.md' }

        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: '1.项目结构规范', link: '/note/front-end-project/1.项目结构规范.md' },
          { text: '2.命名规范', link: '/note/front-end-project/2.命名规范.md' },
          { text: '3.代码格式规范', link: '/note/front-end-project/3.代码格式规范.md' },
          { text: '4.环境变量配置', link: '/note/front-end-project/4.环境变量配置.md' },
          { text: '5.请求接口api配置', link: '/note/front-end-project/5.请求接口api配置.md' },
        ]
      },
      {
        text: 'vue',
        items: [
          { text: 'vue3新特性', link: '/note/vue/vue3/vue3版本特性.md' },
          { text: '手写一个vue3', link: '/note/vue/vue3/vue3.md' },
        ]
      },
      {
        text: '杂记',
        items: [
          { text: '函数和函数参数的理解', link: '/note/函数和函数参数的理解.md' },
          { text: '从输入网址（URL）到页面加载的全过程', link: '/note/从输入网址（URL）到页面加载的全过程.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tomcat-one' }
    ]
  },
  head: [
      [
        'link',{ rel: 'icon', href: '/favicon.ico' }
      ]
    ],
})
