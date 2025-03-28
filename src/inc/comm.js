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
 *     inc/comm.js                                                                 *
 *                                                                                 *
 * This file is part of Termsafe project                                           *
 * comm.js is the general input adaptor impl class for Termsafe                    *
 *                                                                                 *
 *----------------------------------------------------------------------------------
*/

var COMM = {};

COMM.isEditable = function(element) {
  if (!element) {
    return false;
  }
  if (element.localName === 'textarea' ||
      element.hasAttribute('contenteditable')) {
    return true;
  } else if (element.localName == 'input') {
    let type = element.getAttribute('type');
    switch (type) {
      case 'text':
      case 'password':
      case 'number':
      case 'search':
      case 'email':
      case 'tel':
      case 'url':
        return true;
      //select
      case 'radio':
      case 'checkbox':
      case 'range':
        return false;
      //button
      case 'button':
      case 'submit':
      case 'reset':
        return false;
      //file
      case 'file':
      case 'color':
      case 'image':
      case 'hidden':
        return false;
      //calendar
      case 'month':
      case 'week':
      case 'date':
      case 'datetime-local':
      case 'time':
        return false;
    }
  }
  return false;
}

COMM.deleteBackwordOnInput = function(selection, input) {
  if (selection.focusNode) {
    // console.log("delete back word base selection:", selection.focusNode);
    selection.modify.apply(selection, ['extend', 'left', 'word']);
  } else {
    // console.log("delete back word base position:", input);
    let pos = input.selectionStart;
    if (pos === 0) return;
    let text = input.value.substring(0, pos);
    let match = text.match(/\b\w+\b(?=\W*$)/);
    let leftPos = match ? match.index : 0;
    input.setSelectionRange(leftPos, pos);
  }
  input.setRangeText("");
}
