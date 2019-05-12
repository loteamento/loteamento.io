var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_loteamento_1 = new ol.format.GeoJSON();
var features_loteamento_1 = format_loteamento_1.readFeatures(json_loteamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_loteamento_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_loteamento_1.addFeatures(features_loteamento_1);var lyr_loteamento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_loteamento_1, 
                style: style_loteamento_1,
                title: '<img src="styles/legend/loteamento_1.png" /> loteamento'
            });var format_areageral_2 = new ol.format.GeoJSON();
var features_areageral_2 = format_areageral_2.readFeatures(json_areageral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areageral_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_areageral_2.addFeatures(features_areageral_2);var lyr_areageral_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_areageral_2, 
                style: style_areageral_2,
                title: '<img src="styles/legend/areageral_2.png" /> area-geral'
            });var format_pontos_nomenclatura_3 = new ol.format.GeoJSON();
var features_pontos_nomenclatura_3 = format_pontos_nomenclatura_3.readFeatures(json_pontos_nomenclatura_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pontos_nomenclatura_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_pontos_nomenclatura_3.addFeatures(features_pontos_nomenclatura_3);var lyr_pontos_nomenclatura_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pontos_nomenclatura_3, 
                style: style_pontos_nomenclatura_3,
                title: '<img src="styles/legend/pontos_nomenclatura_3.png" /> pontos_nomenclatura'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_loteamento_1.setVisible(true);lyr_areageral_2.setVisible(true);lyr_pontos_nomenclatura_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_loteamento_1,lyr_areageral_2,lyr_pontos_nomenclatura_3];
lyr_loteamento_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_areageral_2.set('fieldAliases', {'FID': 'FID', 'lLINHA': 'lLINHA', 'COMPRIM': 'COMPRIM', });
lyr_pontos_nomenclatura_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_loteamento_1.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_areageral_2.set('fieldImages', {'FID': 'TextEdit', 'lLINHA': 'TextEdit', 'COMPRIM': 'TextEdit', });
lyr_pontos_nomenclatura_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_loteamento_1.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_areageral_2.set('fieldLabels', {'FID': 'no label', 'lLINHA': 'no label', 'COMPRIM': 'no label', });
lyr_pontos_nomenclatura_3.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_pontos_nomenclatura_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});