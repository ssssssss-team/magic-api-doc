module.exports = {
	title: 'magic-api',
	description: '一个接口快速开发框架',
	head: [
		["link", {rel: "icon", href: '/favicon.ico'}],
		["script", { "crossorigin": "anonymous", async: true, src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9417757127794923" }]
	],
	markdown:{
		lineNumbers : true
	},
	themeConfig: {
		logo: '/images/logo-single.png',
		docsRepo : 'ssssssss-team/magic-api',
		docsDir : '/',
		lastUpdated: "上次更新",
		nav : [{
			text : '指南',
			link : '/guide/intro'
		},{
			text : '配置',
			link : '/config/'
		},{
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
			link : 'https://magic-api.ssssssss.org'
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
				text : 'magic-script',
				link : 'https://gitee.com/ssssssss-team/magic-script'
			}]
		},{
			text : 'QQ群(739235910)',
			link : 'https://qm.qq.com/cgi-bin/qm/qr?k=Q6dLmVS8cHwoaaP18A3tteK_o0244e6B&jump_from=webapi'
		}],
		sidebar:{
			'/guide/' : [{
				title : '使用教程',
				collapsable: false,
				children: ['intro','quick-start','grammer']
			},{
				title : '案例集',
				collapsable: false,
				children: ['cases/sql','cases/transcation','cases/convert','cases/validate','cases/cache','cases/async']
			},{
				title: '模块',
				collapsable: false,
				children: ['modules/db', 'modules/magic', 'modules/assert', 'modules/log', 'modules/redis', 'modules/mongodb', 'modules/request', 'modules/response', 'modules/env', 'modules/http']
			},{
				title: '函数库',
				collapsable: false,
				children: ['functions/aggregation', 'functions/other']
			}, {
				title: '类型扩展',
				collapsable: false,
				children: ['extension/','extension/object','extension/number','extension/date','extension/collection','extension/map','extension/class','extension/pattern']
			},{
				title : '高级应用',
				collapsable: false,
				children: ['custom/vue',`custom/cluster`, 'custom/linq', 'custom/json', 'custom/page', 'custom/interceptor', 'custom/authorization', 'custom/cache', 'custom/datasource', 'custom/extension', 'custom/resource', 'custom/module', 'custom/magic', 'custom/swagger', 'custom/sql', 'custom/column', 'custom/function','custom/language', 'custom/dialect']
			},{
				title : 'FAQ',
				collapsable: false,
				children: ['faq']
			}],
			'/config/' : [{
				title : '配置',
				collapsable: false,
				children: ['','magic-editor']
			}]
		}
    },
	plugins : [
		[require('./plugins/stat')],
		[require('./plugins/lastest'),{
			repos:[{
				keywords: 'magic-api-lastest-version',
				type: "maven",
				repo: "org.ssssssss/magic-api",
			}]
		}],
		['fulltext-search']
	]
}
