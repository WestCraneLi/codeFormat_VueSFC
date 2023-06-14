// ==UserScript==
// @name         Vue SFC code format
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  a tool of code format for Vue SFC
// @author       WestCraneLi
// @antifeature  false
// @resource prettier https://unpkg.com/prettier@2.8.8/esm/standalone.mjs
// @resource parserGraphql https://unpkg.com/prettier@2.8.8/esm/parser-graphql.mjs
// @match https://play.vuejs.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant GM_setValue
// @grant GM_getValue
// @grant GM.setValue
// @grant GM.getValue
// @grant GM_setClipboard
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
// @grant window.onurlchange
// @grant GM_getResourceURL
// @grant GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    console.log('%c Vue SFC Code Format!', 'background-color: #3CA877; color: #FFFFFF; padding: 4px');
    const host = window.location.href;// 可用于复制
    const prettier = GM_getResourceURL('prettier')
    const plugins = GM_getResourceURL('parserGraphql')
    prettier.format("type Query { hello: String }", {
        parser: "graphql",
        plugins,
    });
    codeFormat()
})();

function codeFormat() {
    document.addEventListener('contextmenu', function(event) {
        // preventDefault()
        // event.preventDefault();
        // Get the clicked element
        const clickedElement = event.target;
        // Check if the clicked element or any of its parent elements have the class 'CodeMirror-lines'
        const codeMirrorLines = clickedElement.closest('.CodeMirror-lines');
        if (codeMirrorLines) {
            console.log('Clicked element is within CodeMirror-lines');
        } else {
            console.log('Clicked element is not within CodeMirror-lines');
        }
    });
    document.addEventListener('keydown', function(event) {
        // Check if the ctrl key and the s key were pressed
        if (event.ctrlKey && event.keyCode === 83) {
            // Prevent the default browser behavior for saving the page
            event.preventDefault();
            // Your code to handle the ctrl+s event here
            console.log('Ctrl+S pressed');
        }
    });
}
