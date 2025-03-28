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
 *     mod/action.js                                                               *
 *                                                                                 *
 * This file is part of Termsafe project                                           *
 * action.js is the delete backword action of adaptor for Termsafe                 *
 *                                                                                 *
 *----------------------------------------------------------------------------------
*/

var actionImpl = {};

actionImpl.send_kbe_ctrlw = function(input) {
  input.dispatchEvent(KBE_CtrlW);
}

actionImpl.new_web_term = function (input) {
  if (term.opening) return;
  term.opening = true;
  UTIL.showToast();
  setTimeout(() => {
    term.input = null;
    chrome.runtime.sendMessage({ action: "createTab", url: input.src });
    term.opening = false; //open end
  }, 2000);
  //iframe.contentWindow.postMessage({ action: "shortcutsKey", key: "w", ctrl: true }, "*");
}