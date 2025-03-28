# Termsafe
## 介绍
1. Termsafe的设计目的：主要是解决web终端下ctrl-w快捷键无法使用的问题
1. Termsafe的设计初衷：当前绝大多数类似的扩展只是解决了屏蔽ctrl-w按键避免窗口误关闭的问题，通常这些扩展仅仅只是屏蔽了快捷键，但这对于开发运维工作人员是远远不够的，如果可以让ctrl-w快捷键在Web终端上正确工作，这将是这些从业人员的一大福音
1. Termsafe被设计成可扩展的，当前支持一些典型的webshell终端，包括[cloudshell](https://github.com/cloudtty/cloudtty)及基于webshell的产品，如[jumpserver](https://jumpserver.org)，如果大家有新的适配需求，欢迎大家在[Github](https://github.com/wurenny/termsafe)提交issue，当然提效PR是更受欢迎的
1. 此外，Termsafe在普通输入框上也能正常工作，虽然这个功能似乎没有多大用，只是满足一些Vim用户的特殊喜好
1. 对于ctrl+w默认关闭浏览器当前窗口的快捷功能，Termsafe也提供了替换按键设置选项
1. 如果想屏蔽浏览器默认的某个快捷键，Termsafe也提供了doNothing的选项
1. 这是一段佛学金句：若菩萨有我相、人相、从生相、寿者相，即非菩萨

## 安装
1. Termsafe目前已发布至从Chrome Webstore，[点击跳转至Chrome Webstore安装](https://chrome.google.com/webstore/detail/termsafe/)

## 版权
1. 注意Termsafe的版权是专有版权，详情请查看本项目中的license文件

## 使用
1. 在浏览器中打开快捷键设置：chrome://extensions/shortcuts
1. 找到Termsafe，按照自己的需求设置相应的快捷键即可

## 使用注意
1. 如果你的web终端是以iframe形式内嵌在主页面（绝大多数都是这样实现），并且主页面域名与web终端域名不一致，存在跨域加载，Termsafe会将web终端打开为一个新的页面。这是因为浏览器对扩展存在严格的跨域限制。

## 贡献开发
1. 克隆本仓库至本地，并使用前端IDE打开此目录，推荐使用vscode
1. 打开Chrome扩展开发者模式
1. 如果已经从Webstore安装了Termsafe，请先关闭原有Termsafe
1. 将[src]目录作为一个未打包的扩展程序加载到chrome浏览器中
1. 修改本地代码，在扩展管理页面找到Termsafe，刷新重载扩展
1. 刷新或重新打开一个搜索页面，即可验证修改后的效果
