define([], function () { //TODO hálózati sebesség (ws.bufferedAmount nő?)
    var ctx = document.createElement('canvas').getContext('2d');

    function Processor() {
        this.data = null;
    }

    Processor.prototype.getImage = function () {
        //TODO process and return data
    }

    Processor.prototype.updateData = function (data) {
        this.data = data;
    }

    Processor.prototype.getImageIfHasNew = function (last) {
        if (this.data !== last) {
            return this.getImage();
        }
        return null;
    }

    Processor.prototype.getRatio=function(){

    }

    return Processor;
});