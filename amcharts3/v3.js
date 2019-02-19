var chart3 = AmCharts.makeChart("chartdiv2", {
  "type": "serial",
  "theme": "light",
  "marginRight": 70,
  "dataProvider": [{
    "country": "JAN",
    "visits": 787,
    "color": "#981e32"
  }, {
    "country": "FEB",
    "visits": 725,
    "color": "#981e32"
  }, {
    "country": "MAR",
    "visits": 765,
    "color": "#981e32"
  }, {
    "country": "APR",
    "visits": 809,
    "color": "#981e32"
  }, {
    "country": "MAY",
    "visits": 778,
    "color": "#981e32"
  }, {
    "country": "JUN",
    "visits": 721,
    "color": "#981e32"
  }, {
    "country": "JUL",
    "visits": 696,
    "color": "#981e32"
  }, {
    "country": "AUG",
    "visits": 711,
    "color": "#981e32"
  }, {
    "country": "SEP",
    "visits": 665,
    "color": "#981e32"
  }, {
    "country": "OCT",
    "visits": 735,
    "color": "#981e32"
  }, {
    "country": "NOV",
    "visits": 598,
    "color": "#981e32"
  }, {
    "country": "DEC",
    "visits": 819,
    "color": "#981e32"
  }],
  "valueAxes": [{
    "axisAlpha": 0,
    "position": "left",
    "title": "2018 Credit Score"
  }],
  "startDuration": 1,
  "graphs": [{
    "balloonText": "<b>[[category]]: [[value]]</b>",
    "fillColorsField": "color",
    "fillAlphas": 0.9,
    "lineAlpha": 0.2,
    "type": "column",
    "valueField": "visits"
  }],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": false
  },
  "categoryField": "country",
  "categoryAxis": {
    "gridPosition": "start",
    "labelRotation": 45
  },
  "export": {
    "enabled": true
  }
});
