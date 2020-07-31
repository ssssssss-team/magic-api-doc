module.exports = {
	title: 'magic-api',
	description: '一个接口快速开发框架',
	head: [["link", {rel: "icon", href: '/favicon.ico'}]],
	markdown:{
		lineNumbers : true
	},
	themeConfig: {
		docsRepo : 'ssssssss-team/magic-api',
		docsDir : '/',
		editLinks : true,
		editLinkText: "在 GitHub 上编辑此页",
		lastUpdated: "上次更新",
		nav : [{
			text : '源码',
			items : [{
				text : 'Gitee',
				link : 'https://gitee.com/ssssssss-team/magic-api'
			},{
				text : 'Github',
				link : 'https://github.com/ssssssss-team/magic-api'
			}]
		},{
			text : '演示地址',
			link : 'http://140.143.210.90:9999/magic/web'
		},{
			text : '更新日志',
			link : '/changelog'
		},{
			text : '其它开源',
			items : [{
				text : 'spider-flow(Gitee)',
				link : 'https://gitee.com/ssssssss-team/spider-flow'
			},{
				text : 'spider-flow(Github)',
				link : 'https://github.com/ssssssss-team/spider-flow'
			},{
				text : 'magic-api-spring-boot-starter(Gitee)',
				link : 'https://gitee.com/ssssssss-team/magic-api-spring-boot-starter'
			},{
				text : 'magic-api-spring-boot-starter(Github)',
				link : 'https://github.com/ssssssss-team/magic-api-spring-boot-starter'
			}]
		},{
			text : '加入QQ群',
			link : 'https://shang.qq.com/wpa/qunwpa?idkey=10faa4cf9743e0aa379a72f2ad12a9e576c81462742143c8f3391b52e8c3ed8d'
		}],
		sidebar:[{
			title : '使用教程',
			collapsable: false,
			children: ['intro','quick-start','grammer','spring-config']
		},{
			title : '案例集',
			collapsable: false,
			children: ['cases/sql','cases/transcation','cases/convert','cases/validate','cases/cache']
		},{
			title : '函数库',
			collapsable: false,
			children: ['functions/db','functions/magic','functions/assert','functions/log','functions/redis','functions/mongodb','functions/request','functions/response']
		},{
			title : '函数扩展',
			collapsable: false,
			children: ['extension/','extension/object','extension/collection','extension/class']
		},{
			title : '高级应用',
			collapsable: false,
			children: ['custom/json','custom/page','custom/interceptor','custom/cache','custom/datasource','custom/extension','custom/store','custom/module','custom/magic','custom/swagger']
		},{
			title : 'FAQ',
			collapsable: false,
			children: ['faq']
		}]
    },
	plugins : [require('./plugins/stat')]
}