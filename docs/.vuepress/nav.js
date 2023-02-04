// .vuepress/nav.js
module.exports = [
   {
    text:'首页', link:'/'
   },
   {
      text: '安装指南',
      items:[
        {text: 'Linux' , link:'/notes/appinstall/linux/linux'},
        {text: 'Windows' , link:'/notes/appinstall/windows/jdk'},
      ]
    },
    {
      text: '前端学习',
      items: [
        {
          text: '基础',
          items: [
            { text: 'HTML/CSS', link: '/notes/html/htmlcss' },
            { text: 'Javascript', link: '/notes/javascript/javascript' },
          ]
        },
        {
          text: '其他',
          items: [
            { text: 'Git', link: '/notes/git/git' },
          ]
        },
      ],
    },
  ]

  