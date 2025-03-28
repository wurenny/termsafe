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
 *     inc/util.js                                                                 *
 *                                                                                 *
 * This file is part of Termsafe project                                           *
 * util.js is general tools for Termsafe                                           *
 *                                                                                 *
 *----------------------------------------------------------------------------------
*/

var UTIL = {};

const KBE_CtrlShiftArrowleft = new KeyboardEvent("keydown", {
    key: "ArrowLeft",
    code: "ArrowLeft",
    ctrlKey: true,
    shiftKey: true,
    altKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
});

const KBE_CtrlW = new KeyboardEvent("keydown", {
    key: "w",
    code: "KeyW",
    keyCode: 87,
    ctrlKey: true,
    shiftKey: false,
    altKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
  });

UTIL.showToast = function () {
    let toast, style, clickHandler;
    function init() {
        if (document.querySelector('#termsafe-toast')) return false;
        style = document.createElement('style');
        style.innerHTML = `
            .termsafe-toast {
                position: fixed;
                z-index: 999999999;
                padding: 15px 30px;
                top: -100px; left: 50%;
                transform: translateX(-50%);
                background: rgba(0, 0, 0, 0.8);
                color: white; font-size: 24px;
                border-radius: 0 0 15px 15px;
                box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
                opacity: 0; transition: top 0.5s ease-out, opacity 0.5s ease-out;
            }
            .termsafe-toast.show { top: 0; opacity: 1; }
        `;
        document.head.appendChild(style);
        toast = document.createElement('div');
        toast.id = 'termsafe-toast';
        toast.className = 'termsafe-toast';
        toast.innerText = chrome.i18n.getMessage('msg_toast_cross_origin');
        document.body.appendChild(toast);
        return true;
    }
    function close() {
        if (!toast) return;
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove(); toast = null;
            if (style) { style.remove(); style = null }
        }, 50);
    }
    function show() {
        setTimeout(() => { toast.classList.add('show'); }, 50);
        setTimeout(close, 5000);
        setTimeout(() => {
            clickHandler = () => {
                close();
                document.removeEventListener('click', clickHandler);
            };
            document.addEventListener('click', clickHandler);
        }, 2000);
    }
    init() && show();
}