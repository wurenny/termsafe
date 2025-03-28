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
 *     cs/cs.js                                                                    *
 *                                                                                 *
 * This file is part of Termsafe project                                           *
 * cs.js is the main content script for Termsafe                                   *
 *                                                                                 *
 *----------------------------------------------------------------------------------
*/

var E = {}
function adaptor (input) {
  Object.entries(adaptorImpl).filter(([k, v]) => {
    return typeof v === 'function';
  }).forEach(([k, f]) => {
    return f(input);
  });
  if (term.input === null) term.input = false;
}

function main () {
  let input = document.activeElement;
  if (!input) return;

  if (term.input === null || input != E.active) adaptor(input);

  if (term.input && term.action) {
    term.action(term.input);
  }
  else if (COMM.isEditable(input)) {
    COMM.deleteBackwordOnInput(document.getSelection(), input);
  }
  E.active = input;
}