function newChart(chartOptions) {
    var chart = new ApexCharts(document.querySelector("#chartHolder"), chartOptions);
    chart.render();
}

function chartExec(execObject) {
    try {
        ApexCharts.exec(execObject.chart_id,execObject.method,execObject.method_options);
    } catch (error) {
        console.log('EXEC ERROR: ' + error);
    }
}