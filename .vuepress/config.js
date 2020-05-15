module.exports = {
	title: 'ssssssss',
	description: '一个无需写代码的接口框架',
	head: [["link", {rel: "icon", href: `/favicon.ico`}]],
	markdown:{
		lineNumbers : true
	},
	themeConfig: {
		docsRepo : 'javamxd/ssssssss',
		docsDir : '/',
		editLinks : true,
		editLinkText: "在 GitHub 上编辑此页",
		lastUpdated: "上次更新",
		nav : [{
			text : '源码',
			items : [{
				text : 'Gitee',
				link : 'https://gitee.com/jmxd/ssssssss'
			},{
				text : 'Github',
				link : 'https://github.com/javamxd/ssssssss'
			}]
		},{
			text : '更新日志',
			link : '/changelog'
		},{
			text : '其它开源',
			items : [{
				text : 'spider-flow(Gitee)',
				link : 'https://gitee.com/jmxd/spider-flow'
			},{
				text : 'spider-flow(Github)',
				link : 'https://github.com/javamxd/spider-flow'
			},{
				text : 'ssssssss-spring-boot-starter(Gitee)',
				link : 'https://gitee.com/jmxd/ssssssss-spring-boot-starter'
			},{
				text : 'ssssssss-spring-boot-starter(Github)',
				link : 'https://github.com/javamxd/ssssssss-spring-boot-starter'
			}]
		},{
			text : '加入QQ群',
			link : 'https://shang.qq.com/wpa/qunwpa?idkey=10faa4cf9743e0aa379a72f2ad12a9e576c81462742143c8f3391b52e8c3ed8d'
		}],
		sidebar:[{
			title : '使用教程',
			collapsable: false,
			children: ['intro','quick-start','expression']
		},{
			title : '配置',
			collapsable: false,
			children: ['spring-config','xml-config']
		},{
			title : '高级应用',
			collapsable: false,
			children: ['custom-page','custom-validator','custom-interceptor','custom-key','custom-cache','dynamic-datasource']
		},{
			title : 'FAQ',
			collapsable: false,
			children: ['faq']
		}]
    }
}