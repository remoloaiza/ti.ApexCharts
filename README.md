# ti.ApexCharts
Titanium Alloy Widget for ApexCharts https://apexcharts.com/
![Example](/chartsc.png?raw=true "Example usage")

## Usage

- Include the code into your apps widget folder
- Include the widget in your XML
```xml
<Widget src="ti.ApexCharts" id="testChart"></Widget>
```

- Load your chart options on the WebView  'load' event using [Widgetview].loadChart(options)
```js
$.testChart.getView().addEventListener('load', function() {
    
    var options = {
        chart : {
            id : 'chartid1',
            type : 'line'
        },
        series : [{
            name : 'sales',
            data : [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        xaxis : {
            categories : [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }; 
    
    //To use _defer add a second parameter with true
    //$.testChart.loadChart(options,true);
    $.testChart.loadChart(options);
});
```

- Optionally you can call ApexCharts exec method with [Widgetview].execMethod(execObject)
```js
//Example
setTimeout(function() {
    var execObject = {
        chart_id : 'chartid1',
        method : 'updateSeries',
        method_options : [{
            data : [32, 44, 31, 41, 22]
        }]
    };
    $.testChart.execMethod(execObject);
},5000);
```
