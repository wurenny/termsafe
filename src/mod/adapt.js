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
 *     mod/adapt.js                                                                *
 *                                                                                 *
 * This file is part of Termsafe project                                           *
 * adapt.js is webterm adaptor for Termsafe                                        *
 *                                                                                 *
 *----------------------------------------------------------------------------------
*/

var adaptorImpl = {};
var term = {"input": null, "action": null, "opening": false};

adaptorImpl.probeIframeWebshell = function(input) {
  // shoulld be run once at most !
  let termInput;
  let doc = input.contentDocument;
  if (input.tagName != "IFRAME") return false;
  if (doc) termInput = doc.querySelector(".xterm-helper-textarea");
  else {
    // cross origin
    if (input.src == null || input.src == "") return false;
    if (new URL(input.src).origin !== window.location.origin) {
      //console.log("found cross origin:", input.src);
      //input.sandbox = "allow-scripts allow-same-origin";
      try {
        doc = input.contentWindow.document;
        if (doc) termInput = doc.querySelector(".xterm-helper-textarea");
      } catch(e) {
        console.log("cross origin found, new webterm:", input.src);
        term.input = input;
        term.action = actionImpl.new_web_term;
        return true;
      }
    }
  }
  if (termInput) {
    // console.log("probe ifram webshell:", termInput);
    term.input = termInput;
    term.action = actionImpl.send_kbe_ctrlw;
    return true;
  } else term.input = false;
  return false;
}

adaptorImpl.probeRealWebshell = function(input) {
  // shoulld be run once at most !
  if (input.tagName != "TEXTAREA") return false;
  let termInput = document.querySelector(".xterm-helper-textarea");
  if (termInput) {
    // console.log("probe real webshell:", termInput);
    term.input = termInput;
    term.action = actionImpl.send_kbe_ctrlw;
    return true;
  } else term.input = false;
  return false;
}
