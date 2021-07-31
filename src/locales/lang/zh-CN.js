import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'layouts.usermenu.dialog.title': '信息',
  'layouts.usermenu.dialog.content': '拜拜了您嘞?',

  'message': '-',
  'setting.yes': '是',
  'setting.no': '否',
  'setting.confirm': '确认',
  'setting.add': '添加',
  'setting.cancel': '取消',
  'setting.change': '修改',
  'setting.submit': '提交',
  'setting.delete': '删除',
  'setting.deleteConfirm': '确认删除?',
  'setting.money': '元',
  'setting.select': '查询',
  'setting.reset': '重置',
  'setting.save': '保存',

  'login.info': '邮箱密码登录',
  'login.email': '邮箱',
  'login.emailMessage': '请输入邮箱地址',
  'login.password': '密码',
  'login.passwordMessage': '请输入密码',
  'login.rememberMe': '记住登录',
  'login.loginBtn': '登陆',
  'login.failed': '登录失败',
  'login.successWelcome': '欢迎',
  'login.successInfo': '欢迎回来',

  'menu.home': '主页',
  'menu.usercenter': '用户中心',
  'menu.logout': '退出',
  'menu.dashboard': '仪表盘',
  'menu.setting': '网站设置',
  'menu.setting.site': '站点设置 ⭐️',
  'menu.setting.register': '注册设置 ⭐️',
  'menu.setting.payment': '支付设置 ⭐️',
  'menu.setting.schedule': '任务设置 ⭐',
  'menu.setting.other': '其他设置',
  'menu.setting.oauth': '三方登录',
  'menu.setting.client': '松鼠三端',
  'menu.node': '节点管理',
  'menu.node.list': '节点列表',
  'menu.node.online': '在线详情',
  'menu.node.detect': '审计规则',
  'menu.user': '用户管理',
  'menu.user.detail': '用户详情',
  'menu.plan': '订阅管理',
  'menu.ticket': '工单管理',
  'menu.tutorial': '教程管理',
  'menu.announcement': '公告管理',
  'menu.order': '付费订单',
  'menu.order.detail': '订单详情',
  'menu.commission': '佣金记录',
  'menu.withdrawal': '提现管理',

  'dashboard.info.ticket': '工单',
  'dashboard.info.ticketCount': '待办工单',
  'dashboard.info.node': '节点',
  'dashboard.info.nodeCount': '节点总数',
  'dashboard.info.offlineCount': '离线节点',
  'dashboard.info.user': '用户',
  'dashboard.info.userCount': '用户总数',
  'dashboard.info.monthRegisterCount': '本月注册',
  'dashboard.info.todayRegisterCount': '今日注册',
  'dashboard.info.income': '收入',
  'dashboard.info.monthIncome': '本月收入',
  'dashboard.info.todayIncome': '今日收入',
  'dashboard.info.todayOrderCount': '今日订单数',
  'dashboard.info.monthPaidUserCount': '本月新用户订单数',
  'dashboard.cache.clean': '清理缓存',
  'dashboard.notify.renew': '通知续费',

  'settings.site.siteName': '站点名称',
  'settings.site.siteUrl': '站点网址',
  'settings.site.subUrl': '订阅网址',
  'settings.site.regEnable': '开启注册',
  'settings.site.inviteOnly': '邀请注册',
  'settings.site.mailRegEnable': '注册验证码',
  'settings.site.mailLimit': '邮件发送频率限制',
  'settings.site.mailType': '验证码邮件类型',
  'settings.site.mailConfig': '验证码邮件配置',
  'settings.site.notifyMailType': '通知邮件类型',
  'settings.site.notifyMailConfig': '通知邮件配置',
  'settings.site.enableNotifyRenew': '月底邮件通知续费(可能需要耗费大量邮件资源)',

  'settings.register.enableEmailSuffix': '允许注册的邮箱 [@a.com;@b.com]',
  'settings.register.userPortRange': '用户端口范围',
  'settings.register.inviteCount': '注册默认邀请数量',
  'settings.register.inviteRate': '充值返利利率 [0.00 ~ 1.00]',
  'settings.register.enableWithdraw': '允许提现',
  'settings.register.minWithdraw': '最小提现金额',
  'settings.register.withdrawRate': '提现扣除手续费 [0.00 ~ 1.00]',

  'settings.payment.alipay': '支付宝',
  'settings.payment.alipay.close': '关闭',
  'settings.payment.alipay.alipay': '支付宝',
  'settings.payment.alipayConfig': '支付宝配置',
  'settings.payment.alipay.alipay.alipayConfig.isCertMode': '公钥模式/证书模式',
  'settings.payment.alipay.alipay.alipayConfig.web': '开启PC支付',
  'settings.payment.alipay.alipay.alipayConfig.wap': '开启H5支付',
  'settings.payment.alipay.alipay.alipayConfig.f2f': '开启当面付',
  'settings.payment.wxpay': '微信',

  'settings.other.trafficSaveDays': '流量日志保留天数',

  'settings.oauth.enable': '开启三方登录',
  'settings.oauth.google.enable': 'Google',
  'settings.oauth.google.id': 'Id',
  'settings.oauth.google.secret': 'Secret',
  'settings.oauth.google.redirectUri': 'RedirectUri',

  'node.list.addNode': '添加节点',
  'node.list.editNode': '编辑节点',
  'node.list.name': '名称',
  'node.list.outServer': '节点地址',
  'node.list.method': '加密方式',
  'node.list.outPort': '节点端口',
  'node.list.grpc': 'GRPC',
  'node.list.alterId': 'AlterId',
  'node.list.network': '传输协议',
  'node.list.security': '安全性',
  'node.list.host': '伪装域名',
  'node.list.path': '伪装路径',
  'node.list.subServer': '订阅地址',
  'node.list.subPort': '订阅端口',
  'node.list.sni': 'Sni',
  'node.list.trafficRate': '流量倍率',
  'node.list.class': '等级',
  'node.list.speedlimit': '限速',
  'node.list.flag': '启用',
  'node.list.connector': '在线数量',
  'node.list.bandwidth': '已用流量',
  'node.list.heartbeat': '状态',
  'node.list.online': '在线数',
  'node.list.nodeIp': '节点ip',
  'node.list.muOnly': '仅启用单端口节点',
  'node.list.operation': '操作',
  'node.online.userId': '用户Id',
  'node.online.ip': 'IP',
  'node.online.time': '在线时间',
  'node.online.country': '国家',
  'node.online.region': '省份',
  'node.online.city': '市区',
  'node.online.isp': '运营商',

  'detect.list.name': '名称',
  'detect.list.regex': '正则',
  'detect.list.type': '类型',
  'detect.list.addDetect': '添加审计规则',
  'detect.list.editDetect': '修改审计规则',
  'detect.list.operation': '操作',
  'detect.list.nodeWithDetects': '节点单独审计配置',
  'detect.list.nodeName': '节点名称',
  'detect.list.detects': '审计规则',
  'detect.list.oneNode': '请选择节点',
  'detect.list.manyDetects': '请选择指定的审计规则',

  'user.list.email': '邮箱',
  'user.list.group': '分组',
  'user.list.clazz': '等级',
  'user.list.expire': '到期时间',
  'user.list.role': '身份查询',
  'user.list.role.user': '用户',
  'user.list.role.customerService': '客服',
  'user.list.role.admin': '管理员',
  'user.list.status': '用户状态',
  'user.list.status.enable': '启用',
  'user.list.status.disable': '封禁',
  'user.list.money': '余额',
  'user.list.detail': '详情',
  'user.list.delete': '删除',

  'user.detail.email': '邮箱',
  'user.detail.password': '密码',
  'user.detail.clazz': '等级',
  'user.detail.expireIn': '到期时间',
  'user.detail.money': '余额',
  'user.detail.hasUsedGb': '已用流量',
  'user.detail.todayUsedGb': '今日已用',
  'user.detail.transferEnableGb': '可用流量/GB',
  'user.detail.inviteCount': '邀请数量',
  'user.detail.inviteCycleEnable': '循环邀请',
  'user.detail.inviteCycleRate': '邀请利率 [0.00 ~ 1.00]',
  'user.detail.parentId': '邀请人',
  'user.detail.nodeSpeedlimit': '限速/Mbps',
  'user.detail.nodeConnector': '连接数',
  'user.detail.nodeGroup': '分组',
  'user.detail.isAdmin': '角色',
  'user.detail.isAdmin.user': '用户',
  'user.detail.isAdmin.admin': '管理员',
  'user.detail.isAdmin.customerService': '客服',
  'user.detail.enable': '启用',
  'user.detail.resetPasswd': '重置连接密码',

  'plan.list.name': '名称',
  'plan.list.nameEnglish': '英文名称',
  'plan.list.price': '价格',
  'plan.list.months': '月数',
  'plan.list.transferEnable': '可用流量/GB',
  'plan.list.package': '流量包/GB',
  'plan.list.clazz': '等级',
  'plan.list.enable': '启用',
  'plan.list.add': '添加订阅',
  'plan.list.nodeConnector': '连接数',
  'plan.list.nodeSpeedlimit': '限速',
  'plan.list.nodeGroup': '节点分组',
  'plan.list.buyLimit': '库存',
  'plan.list.isDiscount': '是否折扣',
  'plan.list.discountStart': '折扣开始时间',
  'plan.list.discountEnd': '折扣结束时间',
  'plan.list.enableRenew': '允许续费',
  'plan.list.sort': '排序',
  'plan.list.extraInfo': '额外信息',
  'plan.list.extraInfoEnglish': '额外信息英文',
  'plan.list.supportMedia': '支持流媒体',
  'plan.list.supportDirectLine': '支持专线',

  'ticket.userId': '用户id',
  'ticket.title': '标题',
  'ticket.time': '创建时间',
  'ticket.status': '状态',
  'ticket.operation': '操作',
  'ticket.operation.delete': '删除',
  'ticket.operation.deleteConfirm': '确认删除?',
  'ticket.status.0': '待回复',
  'ticket.status.1': '已回复',
  'ticket.status.2': '已完成',
  'ticket.detail': '详情',
  'ticket.detail.close': '结单',

  'order.list.name': '套餐',
  'order.list.user': '用户',
  'order.list.price': '价格',
  'order.list.created': '创建时间',
  'order.list.expire': '到期时间',
  'order.list.payTime': '支付时间',
  'order.list.operation': '操作',
  'order.list.operation.detail': '详情',
  'plan.order.details.planName': '套餐名称',
  'plan.order.details.orderId': '订单ID',
  'plan.order.details.createdTime': '创建时间',
  'plan.order.details.expire': '订阅截止',
  'plan.order.details.payPrice': '应付价格',
  'plan.order.details.payStatus': '订单状态',
  'plan.order.details.planContent': '套餐详情',
  'plan.order.details.userContent': '用户详情',
  'plan.order.details.userContent.email': '邮箱',
  'plan.order.details.userContent.expire': '到期时间',
  'plan.order.details.userContent.class': '等级',
  'plan.order.details.userContent.nodeSpeedLimit': '限速: ',
  'plan.order.details.userContent.nodeSpeedNoLimit': '限速: 无限制',
  'plan.order.details.userContent.connector': '连接数: ',
  'plan.order.details.userContent.connectors': '连接数: 无限制',
  'plan.content.data': '月流量',
  'plan.content.currentMonthData': '当月流量',
  'plan.content.class': '等级',
  'plan.content.speedLimit': '限速: ',
  'plan.content.speedNoLimit': '限速: 无限制',
  'plan.content.connector': '连接数: ',
  'plan.content.connectors': '连接数: 无限制',

  'commission.list.inviterUser': '邀请人',
  'commission.list.relatedOrder': '关联订单',
  'commission.list.commission': '佣金',
  'commission.list.time': '时间',

  'withdraw.list.user': '发起人',
  'withdraw.list.account': '提现账户',
  'withdraw.list.amount': '提现金额',
  'withdraw.list.realAmount': '到账金额',
  'withdraw.list.createTime': '时间',
  'withdraw.list.status': '状态',
  'withdraw.list.operation': '操作',
  'withdraw.list.operation.ack': '确认到账'
}

export default {
  ...components,
  ...locale
}
