var Map = L.map('map').setView([58.0, 5.0], 3.4);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(Map);

var polygon1 = L.polygon([
    
]).addTo(Map);

var polygon1 = L.polygon([
    [64.481,-26.542],
    [59.456,-23.906],
    [50.193,-17.402],
    [44.610,-16.699],
    [35.056,-24.960],
    [24.078,-18.808],
    [31.231,1.230],
    [29.105,11.953],
    [31.831,19.687],
    [30.022,24.609],
    [25.037,26.894],
    [24.878,33.750],
    [31.531,36.738],
    [50.306,32.519],
    [60.683,35.507],
    [67.548,39.902],
    [74.405,34.804],
    [74.732,-8.437],
    [71.750,-14.062]
],
{
    color: '#10133A',
    fillColor: '#10133A',
    fillOpacity: 0.2,
}

).addTo(Map);

polygon1.bindPopup("EGNOS");







