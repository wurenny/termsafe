/*----------------------------------------------------------------------------------
 *                                                                                 *
 * This Source Code is subject to the Proprietary Software License.                *
 * You shall use it only in accordance with the terms of the license agreement.    *
 * You can contribute the source code by submitting pull request on Github:        *
 * https://github.com/wurenny/termsafe                                             *
 * But unauthorized copying, modification, distribution, or publication of this    *
 * software, in whole or in part, is strictly prohibited.                          *
 *                                                                                 *
 * Copyright (c) 2024-2025, wurenny@gmail.com, All rights reserved                 *
 *                                                                                 *
 * IDENTIFICATION                                                                  *
 *     bg/bg.js                                                                    *
 *                                                                                 *
 * This file is part of Termsafe project                                           *
 * bg.js is the background service worker for Termsafe                             *
 *                                                                                 *
 *----------------------------------------------------------------------------------
*/

chrome.commands.onCommand.addListener(command => {
  if (command === "n1-delete-input-backWord") {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, async function(tab) {
      try {
        await chrome.scripting.executeScript({
          target: { tabId: tab[0].id },
          function: () => main()
        });
      } catch (err) {
        console.error("termsafe failed to delete backword:", err);
      }
    });
  }
  else if (command === "n2-close-selected-tabs") {
    chrome.tabs.query({highlighted: true, currentWindow: true}, tabs => {
      chrome.tabs.remove(tabs.map(tab => tab.id));
    });
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "createTab") {
      chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.create({
          active: true,
          url: message.url,
          index: tabs[0].index + 1
        });
      });
    }
});