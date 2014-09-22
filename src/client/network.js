define([], function () {
    function Network(url, processor) {
        this.url = url;
        this.processor = processor;
    }

    Network.prototype.connect = function () {
        this.ws = new WebSocket(this.url);
        this.ws.onmessage = function (evt) {
            var network = this;
            var fileReader = new FileReader();
            fileReader.onload = function () {
                network.processor.updateData(this.result)
            };
            fileReader.readAsArrayBuffer(evt.data);

        };
    }

    return Network;
});