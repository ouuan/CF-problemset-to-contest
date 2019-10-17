// ==UserScript==
// @name         CF problemset to contest
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Display CF problems in the contest field instead of problemset
// @author       ouuan
// @match        https://codeforces.com/problemset*
// @match        https://codeforc.es/problemset*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var matches = window.location.href.match(/\/problemset\/problem\/([1-9][0-9]*)\/([A-Z][1-9]?)/);
    if (matches) window.location.replace("https://codeforces.com/contest/" + matches[1] + "/problem/" + matches[2]);

    var links = document.querySelectorAll('a');

    for (var link of links) {
        matches = link.href.match(/\/problemset\/problem\/([1-9][0-9]*)\/([A-Z][1-9]?)/);
        if (matches) link.href = ("https://codeforces.com/contest/" + matches[1] + "/problem/" + matches[2]);
    }
})();
