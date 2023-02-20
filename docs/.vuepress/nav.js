// .vuepress/nav.js
module.exports = [
   {
    text:'首页', link:'/'
   },
   {
      text: '安装指南',
      items:[       
        {text: 'Ubuntu' , link:'/notes/appinstall/ubuntu/ubuntu'},
        {text: 'CentOS7' , link:'/notes/appinstall/centos7/centos7'},
        {text: 'Teamspeak3' , link:'/notes/appinstall/teamspeak3/teamspeak3'},
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

  