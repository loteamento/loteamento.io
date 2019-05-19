var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_LOTEAMENTON04_1 = new ol.format.GeoJSON();
var features_LOTEAMENTON04_1 = format_LOTEAMENTON04_1.readFeatures(json_LOTEAMENTON04_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTEAMENTON04_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LOTEAMENTON04_1.addFeatures(features_LOTEAMENTON04_1);var lyr_LOTEAMENTON04_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTEAMENTON04_1, 
                style: style_LOTEAMENTON04_1,
    title: 'LOTEAMENTO Nº 04<br />\
    <img src="styles/legend/LOTEAMENTON04_1_0.png" /> A-4<br />\
    <img src="styles/legend/LOTEAMENTON04_1_1.png" /> B-4<br />\
    <img src="styles/legend/LOTEAMENTON04_1_2.png" /> C-4<br />\
    <img src="styles/legend/LOTEAMENTON04_1_3.png" /> D-4<br />\
    <img src="styles/legend/LOTEAMENTON04_1_4.png" /> E-4<br />\
    <img src="styles/legend/LOTEAMENTON04_1_5.png" /> F-4<br />\
    <img src="styles/legend/LOTEAMENTON04_1_6.png" /> G-4<br />\
    <img src="styles/legend/LOTEAMENTON04_1_7.png" /> H-4<br />'
        });var format_LOTEAMENTON07_2 = new ol.format.GeoJSON();
var features_LOTEAMENTON07_2 = format_LOTEAMENTON07_2.readFeatures(json_LOTEAMENTON07_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTEAMENTON07_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LOTEAMENTON07_2.addFeatures(features_LOTEAMENTON07_2);var lyr_LOTEAMENTON07_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTEAMENTON07_2, 
                style: style_LOTEAMENTON07_2,
    title: 'LOTEAMENTO  Nº 07<br />\
    <img src="styles/legend/LOTEAMENTON07_2_0.png" /> A-7<br />\
    <img src="styles/legend/LOTEAMENTON07_2_1.png" /> B-7<br />\
    <img src="styles/legend/LOTEAMENTON07_2_2.png" /> C-7<br />\
    <img src="styles/legend/LOTEAMENTON07_2_3.png" /> D-7<br />\
    <img src="styles/legend/LOTEAMENTON07_2_4.png" /> E-7<br />\
    <img src="styles/legend/LOTEAMENTON07_2_5.png" /> F-7<br />\
    <img src="styles/legend/LOTEAMENTON07_2_6.png" /> G-7<br />\
    <img src="styles/legend/LOTEAMENTON07_2_7.png" /> H-7<br />\
    <img src="styles/legend/LOTEAMENTON07_2_8.png" /> I-7<br />'
        });var format_LOTESN04_3 = new ol.format.GeoJSON();
var features_LOTESN04_3 = format_LOTESN04_3.readFeatures(json_LOTESN04_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTESN04_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LOTESN04_3.addFeatures(features_LOTESN04_3);var lyr_LOTESN04_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTESN04_3, 
                style: style_LOTESN04_3,
                title: '<img src="styles/legend/LOTESN04_3.png" /> LOTES Nº 04'
            });var format_LOTESN07_4 = new ol.format.GeoJSON();
var features_LOTESN07_4 = format_LOTESN07_4.readFeatures(json_LOTESN07_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTESN07_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_LOTESN07_4.addFeatures(features_LOTESN07_4);var lyr_LOTESN07_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOTESN07_4, 
                style: style_LOTESN07_4,
                title: '<img src="styles/legend/LOTESN07_4.png" /> LOTES Nº 07'
            });var format_NOMELOTESLOTEAMENTON07_5 = new ol.format.GeoJSON();
var features_NOMELOTESLOTEAMENTON07_5 = format_NOMELOTESLOTEAMENTON07_5.readFeatures(json_NOMELOTESLOTEAMENTON07_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOMELOTESLOTEAMENTON07_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NOMELOTESLOTEAMENTON07_5.addFeatures(features_NOMELOTESLOTEAMENTON07_5);var lyr_NOMELOTESLOTEAMENTON07_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NOMELOTESLOTEAMENTON07_5, 
                style: style_NOMELOTESLOTEAMENTON07_5,
                title: '<img src="styles/legend/NOMELOTESLOTEAMENTON07_5.png" /> NOME LOTES LOTEAMENTO Nº 07'
            });var format_NOMELOTESLOTEAMENTON04_6 = new ol.format.GeoJSON();
var features_NOMELOTESLOTEAMENTON04_6 = format_NOMELOTESLOTEAMENTON04_6.readFeatures(json_NOMELOTESLOTEAMENTON04_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NOMELOTESLOTEAMENTON04_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_NOMELOTESLOTEAMENTON04_6.addFeatures(features_NOMELOTESLOTEAMENTON04_6);cluster_NOMELOTESLOTEAMENTON04_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_NOMELOTESLOTEAMENTON04_6
});var lyr_NOMELOTESLOTEAMENTON04_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_NOMELOTESLOTEAMENTON04_6, 
                style: style_NOMELOTESLOTEAMENTON04_6,
                title: '<img src="styles/legend/NOMELOTESLOTEAMENTON04_6.png" /> NOME LOTES LOTEAMENTO Nº 04'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LOTEAMENTON04_1.setVisible(true);lyr_LOTEAMENTON07_2.setVisible(true);lyr_LOTESN04_3.setVisible(true);lyr_LOTESN07_4.setVisible(true);lyr_NOMELOTESLOTEAMENTON07_5.setVisible(true);lyr_NOMELOTESLOTEAMENTON04_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LOTEAMENTON04_1,lyr_LOTEAMENTON07_2,lyr_LOTESN04_3,lyr_LOTESN07_4,lyr_NOMELOTESLOTEAMENTON07_5,lyr_NOMELOTESLOTEAMENTON04_6];
lyr_LOTEAMENTON04_1.set('fieldAliases', {'nome_quadr': 'nome_quadr', });
lyr_LOTEAMENTON07_2.set('fieldAliases', {'nome_quadr': 'nome_quadr', });
lyr_LOTESN04_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_LOTESN07_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_NOMELOTESLOTEAMENTON07_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_NOMELOTESLOTEAMENTON04_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_LOTEAMENTON04_1.set('fieldImages', {'nome_quadr': 'TextEdit', });
lyr_LOTEAMENTON07_2.set('fieldImages', {'nome_quadr': 'TextEdit', });
lyr_LOTESN04_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_LOTESN07_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_NOMELOTESLOTEAMENTON07_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_NOMELOTESLOTEAMENTON04_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_LOTEAMENTON04_1.set('fieldLabels', {'nome_quadr': 'no label', });
lyr_LOTEAMENTON07_2.set('fieldLabels', {'nome_quadr': 'no label', });
lyr_LOTESN04_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_LOTESN07_4.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_NOMELOTESLOTEAMENTON07_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_NOMELOTESLOTEAMENTON04_6.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_NOMELOTESLOTEAMENTON04_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});