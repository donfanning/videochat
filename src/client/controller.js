define(['display', 'network', 'processor'], function (Display, Network, Proceessor) {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    var processor = new Proceessor();

    var network = new Network('ws://echo.websocket.org/', processor);
    network.connect();

    var display = new Display(canvas, processor);
    display.start();
});