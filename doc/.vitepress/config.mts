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
            collapsed:true,
            items: [
              { text: '函数和函数参数的理解', link: '/note/函数和函数参数的理解.md', },
              {text: '从输入网址（URL）到页面加载的全过程', link: '/note/从输入网址（URL）到页面加载的全过程.md',},
            ]
          },
          { text: 'css3', link: '/note/css3' },
          { text: 'vue3', link: '/note/vue3' }
        ]
      },
      { text: '规范化', link: '/note/recode' },
      { text: '重构：扒屎日记', link: '/note/为什么要扒屎.md' }
    ],

    sidebar: [
      {
        text: '重构：扒屎日记',
        items: [
          { text: '1.为什么要扒屎', link: '/note/为什么要扒屎.md' },
          { text: '2.屎山养成记', link: '/note/屎山养成记.md' },
          { text: '3.如何当一个好的搅屎棍', link: '/note/如何成为一个好的搅屎棍.md' },
          { text: '4.构筑去屎体系', link: '/note/构筑去屎体系.md' },
          { text: '5.实战:教你如何扒屎', link: '/note/教你如何扒屎.md' }

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/waywordcode' }
    ]
  },
})
