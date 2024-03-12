import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "waywordcode",
  description: "一个人博客",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
       { text: '前端笔记1', link: '/markdown-examples' },
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
      { text: '重构：扒屎日记', link: '/note/specification' }
    ],

    sidebar: [
/*       {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      } */
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/waywordcode' }
    ]
  }
})
