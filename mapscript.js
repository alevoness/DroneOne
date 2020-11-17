function createMap() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiM2FsZXgiLCJhIjoiY2plZ3Z6bTFoMmprYjMzbGlzdDJhd2ZtciJ9.nxyf5_H738N7DxwSEqPcQA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [18.077708, 59.396419],
        zoom: 18 // starting zoom
    });

    const goHome = () => {
        map.center = [18.077708, 59.396419];
        map.zoom = 15;
    };
}