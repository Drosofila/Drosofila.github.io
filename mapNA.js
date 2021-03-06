var Map = L.map('map').setView([50.0, -111.0], 3.4);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
}).addTo(Map);

var polygon1 = L.polygon([
    
]).addTo(Map);

var polygon1 = L.polygon([
    [72.3957348,-166.2890625],
    [68.5341479,-172.265625],
    [62.7638817,-174.0234375],
    [53.9705687,-172.96875],
    [ 48.708732,-155.0390625],
    [43.8553338,-142.734375],
    [37.1852203,-130.78125],
    [24.8785001,-123.75],
    [15.9976621,-110.7421875],
    [9.1413112,-102.65625],
    [10.5264844,-85.4296875],
    [12.5923891,-68.203125],
    [46.577967,-47.4609375],
    [61.1109186,-54.4921875],
    [71.5292664,-82.96875],
    [72.7156751,-122.34375],
    [73.0223388,-149.0625],   
    [73.2265887,-157.1484375]
],
{
    color: '#10133A',
    fillColor: '#10133A',
    fillOpacity: 0.2,
}

).addTo(Map);

polygon1.bindPopup("WAAS");







