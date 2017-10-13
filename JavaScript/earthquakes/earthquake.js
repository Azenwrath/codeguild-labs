// var symbol = [[0, 0], [4, 2], [6, 0], [10, 5], [6, 3], [4, 5], [0, 0]];
// var scale;
// var scaleFunction = function (coordinate) {
//     return [coordinate[0] * scale, coordinate[1] * scale];
// };
//
// var styleCache = {};
// var styleFunction = function (feature) {
//     // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
//     // standards-violating <magnitude> tag in each Placemark.  We extract it from
//     // the Placemark's name instead.
//     console.log(feature);
//     console.log("Magnitude?: " + feature.R.mag);
//
//     var magnitude = parseFloat(feature.R.mag);
//     var size = parseInt(magnitude);
//     scale = size;
//     style = new ol.style.Style({
//         image: new ol.style.Icon({
//             // img: canvas,
//             src: 'dot.png',
//             imgSize: [size, size],
//             rotation: 1.2,
//             scale: 2
//         })
//     });
//
//
//     return style;
// };


function styleFunction (feature) {
    "use strict";
    console.log(feature);
    console.log("Magnitude?: " + feature.R.mag);
    var scaling = feature.R.mag;
    var style = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
          color: [113, 140, 0],
          crossOrigin: 'anonymous',
          src: 'dot.png',
          scale: scaling

        }))
      })

    return style;

}


var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson',
        format: new ol.format.GeoJSON({
            extractStyles: false
        })

    }),
    style: styleFunction

    })

//
// var vector = new ol.layer.Vector({
//     source: new ol.source.Vector({
//         url: 'https://openlayers.org/en/v4.4.1/examples/data/kml/2012_Earthquakes_Mag5.kml',
//         format: new ol.format.KML({
//             extractStyles: false
//         })
//     }),
//     style: styleFunction
// });


var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        vectorLayer
    ],
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
        })
    }),
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
});

document.getElementById('zoom-out').onclick = function () {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom + 1);
};