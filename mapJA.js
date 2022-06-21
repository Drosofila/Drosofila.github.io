var Map = L.map('map').setView([37.23,143.53], 4.4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(Map);

var polygon1 = L.polygon([
    
]).addTo(Map);

var polygon1 = L.polygon([
    [35.6860053,127.1747473],
    [27.0734909,127.1747473],
    [26.9022196, 157.6757177], 
    [ 32.8546911,157.6617675], 
    [33.0021927,161.0004037],
    [47.8721601,161.1915334],
    [50.4573969,156.0062407], 
    [44.5977089,145.2736699], 
    [46.2016485,142.2864691],
    [35.7573409,127.4383239]         
],
{
    color: '#10133A',
    fillColor: '#10133A',
    fillOpacity: 0.2,
}

).addTo(Map);

polygon1.bindPopup("MSAS");







