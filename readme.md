# Termsafe
## Introduction | [[中文]](https://github.com/wurenny/termsafe/blob/master/readme-zh.md) 
1. Termsafe is designed to solve the problem that the ctrl-w shortcut key cannot be used in the web terminal.
1. Termsafe's original design intention: Currently, most similar extensions only solve the problem of blocking the ctrl-w key to prevent the window from closing by mistake. Usually, these extensions only block the shortcut keys, but this is far from enough for development and operation staff. If the ctrl-w shortcut key can work correctly on the web terminal, it will be a great blessing for these practitioners.
1. Termsafe is designed to be extensible. It currently supports some typical webshell terminals, including [cloudshell](https://github.com/cloudtty/cloudtty) and webshell-based products such as [jumpserver](https://jumpserver.org). If you have new adaptation requirements, you are welcome to submit an issue in [Github](https://github.com/wurenny/termsafe). Of course, efficiency PR is more popular.
1. In addition, Termsafe can also work normally on ordinary input boxes, although this function does not seem to be very useful, it just meets the special preferences of some Vim users.
1. For the shortcut function of ctrl+w default to close the current browser window, Termsafe also provides a replacement key setting option
1. If you want to block a default shortcut key of the browser, Termsafe also provides a doNothing option
1. This is a Buddhist sentence: If a Bodhisattva has the notions of self, others, living beings, and longevity, he is not a Bodhisattva

## Installation
1. Termsafe has been released to Chrome Webstore, [click to jump to Chrome Webstore to install](https://chromewebstore.google.com/detail/termsafe/lfpighaafadfeedglcggekhadfoogfih)

## copyright
1. Note that the copyright of Termsafe is proprietary, see the license file in this project for details

## How to use
1. Open the shortcut key settings in the browser: chrome://extensions/shortcuts
1. Find Termsafe and set the corresponding shortcut keys according to your needs

## Notes on use
1. If your web terminal is embedded in the main page in the form of iframe (most of them are implemented in this way), and the domain name of the main page is inconsistent with the web terminal, there is cross-domain loading, Termsafe will open the web terminal as a new page. This is because the browser has strict cross-domain restrictions on extensions.

## Contribute to development
1. Clone this repository to your local computer and use a front-end IDE to open this directory. VSCode is recommended
1. Open Chrome extension developer mode
1. If you have already installed Termsafe from the Webstore, please close the original Termsafe first
1. Load the [src] directory into the Chrome browser as an unpackaged extension
1. Modify the local code, find Termsafe on the extension management page, and refresh and reload the extension
1. Refresh or reopen a search page to verify the effect of the modification
