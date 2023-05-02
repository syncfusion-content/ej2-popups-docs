

import { Tooltip } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';
import { Maps, Legend, Marker, MapsTooltip, ILoadEventArgs, MapsTheme,MapAjax } from '@syncfusion/ej2-maps';
Maps.Inject(Legend, Marker, MapsTooltip);
//World map data

//Render iframe button
let iframeContent: Button = new Button({ cssClass: 'e-outline', isPrimary: true });
iframeContent.appendTo('#iframeContent');

//Render map button
let MapButton: Button = new Button({ cssClass: 'e-outline', isPrimary: true });
MapButton.appendTo('#Map');

//Render iframe tooltip
let TooltipContent: Tooltip = new Tooltip({
    cssClass: 'e-tooltip-css',
    content: '<iframe src="https://ej2.syncfusion.com/showcase/typescript/expensetracker/#/dashboard" id="tooltipFrame"></iframe>',
    position: 'BottomCenter',
    opensOn: 'Click',
    width: '350',
    height: '250'
});
TooltipContent.appendTo('#iframeContent');

export let dafaultData: object[] = [
    { "drillColor": '#C13664', "continent": "North America", "CategoryName": "Books", "Sales": 10882, 'color': '#71B081' },
    { "drillColor": '#9C3367', "continent": "South America", "CategoryName": "Books", "Sales": 13776, 'color': '#5A9A77' },
    { "drillColor": '#80306A', "continent": "Africa", "CategoryName": "Books", "Sales": 18718.0, 'color': '#498770' },
    { "drillColor": '#622D6C', "continent": "Europe", "CategoryName": "Books", "Sales": 3746, 'color': '#39776C' },
    { "drillColor": '#462A6D', "continent": "Asia", "CategoryName": "Books", "Sales": 10688, 'color': '#266665' },
    { "drillColor": '#2A2870', "continent": "Australia", "CategoryName": "Books", "Sales": 30716, 'color': '#124F5E ' }
];

//Render map component
let maps: Maps = new Maps({
    zoomSettings: {
        enable: false
    },
    legendSettings: {
        visible: false
    },
    width: '336',
    height: '235',
    layers: [
        {
            shapeData: new MapAjax('./map_data.json'),
            shapePropertyPath: 'continent',
            shapeDataPath: 'continent',
            dataSource: dafaultData,
            shapeSettings: {
                autofill: true
            }
        },
    ],
});

//Create an element and append initialized map object to the created element
let map: HTMLElement = document.createElement("div");
maps.appendTo(map);

//Render map tooltip
let mapTooltip: Tooltip = new Tooltip({
    opensOn: 'Click',
    position: 'BottomCenter',
    cssClass: 'mapTooltip',
    content: map,
    width: '350',
    height: '250'
});
mapTooltip.appendTo('#Map');


