function loadChart(options,defer) {
    'use strict';
    if(!defer) {
        $.chartWebView.evalJS('newChart(' +JSON.stringify(options) +');');
    } else {
        _.defer(function() {$.chartWebView.evalJS('newChart(' +JSON.stringify(options) +');');});
    }
}

function execMethod(execObject) {
    $.chartWebView.evalJS('chartExec('+JSON.stringify(execObject)+');');
}

exports.loadChart = loadChart;
exports.execMethod = execMethod;