import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { GoogleMap } from 'angular-google-maps';
/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'gom-board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.css'],
})
export class BoardComponent {
  constructor() {
  }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY293cmllMSIsImEiOiJjajEwcDIzbG0wM3gxMnhwbTFqZTJlMmx6In0.Y_m0Z2rxQ4I1YG5ci5NDkA';
    const maps = new mapboxgl.Map({
        container: 'mapid',
        style: 'mapbox://styles/mapbox/streets-v9'
    });

  var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "light",
    "colorSteps": 10,
    "dataProvider": {
      "mapURL": "/assets/svg/maps/" + "southKoreaLow" + ".svg",
      "getAreasFromMap": true,
      "zoomLevel": 0.9,
      "areas": []
    },
    "areasSettings": {
      "autoZoom": true,
      "balloonText": "[[title]]: <strong>[[value]]</strong>"
    },
    "valueLegend": {
      "right": 10,
      "minValue": "little",
      "maxValue": "a lot!"
    },
    "zoomControl": {
      "minZoomLevel": 0.9
    },
    "listeners": [ {
      "event": "init",
    } ]
  } );
  }

  
}
