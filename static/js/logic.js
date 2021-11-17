var newYorkCoords = [40.73, -74.0059];
var mapZoomLevel = 12;

// Create the createMap function.
function createMap(bikeStations) {


  // Create the tile layer that will be the background of our map.
 var streetMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


  // Create a baseMaps object to hold the lightmap layer.
var baseMap = {
  "Street Map": streetMapLayer
};
// Create an overlayMaps object to hold the bikeStations layer.

var stationsOverlayMap = {
  "Bike Stations": bikeStations
};

  // Create the map object with options.
var myMap = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers: [streetMapLayer, bikeStations]

});
  // Create a layer control, and pass it baseMaps and over
  //layMaps. Add the layer control to the map.
  L.control.layers(baseMap, stationsOverlayMap, {
    collapse: false
  }).addTo(myMap);

}

// Create the createMarkers function.
function createMap(bikeStations) {


}
  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.
function createStationLayer(response) {
  console.log(response)
  // Pull the "stations" property from response.data.
  var stations = response.data.stations;
  // Initialize an array to hold the bike markers.
  var stationMarkers = [];
  // Loop through the stations array.
  for (var i =0; i < stations.length; i++) {
    // For each station, create a marker, and bind a popup with the station's name.
    var station = stations[i];
    // Add the marker to the bikeMarkers array.
    var stationMarker = L.marker([station.lat, station.lon])
      .bindPopup(`<h3>${station.name}<h3>`)

    stationMarkers.push(stationMarker);

  }
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.
  var stationsLayerGroup = L.layerGroup(stationMarkers);
  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  createMap(stationsLayerGroup);
}
// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json('https://gbfs.citibikenyc.com/gbfs/en/station_information.json').then(createStationLayer);