// ==UserScript==
// @name         CF problemset to contest
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Display CF problems in the contest field instead of problemset
// @author       ouuan
// @match        https://codeforces.com/problemset/problem/*
// @match        https://codeforc.es/problemset/problem/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var matches = window.location.href.match(/\/problemset\/problem\/([1-9][0-9]*)\/([A-Z][1-9]?)/);
    if (matches.length == 3) window.location.replace("https://codeforces.com/contest/" + matches[1] + "/problem/" + matches[2]);
})();