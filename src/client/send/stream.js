define([], function () {
    function Stream() {
        this.video = document.createElement('video');
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    Stream.prototype.start = function (onready) {
        var stream = this;
        navigator.webkitGetUserMedia({video: true, audio: true}, function (localMediaStream) {
            stream.video.src = URL.createObjectURL(localMediaStream);
            stream.video.onloadedmetadata = function () {
                onready();
            };
        });
    }

    Stream.prototype.captureImage = function () {
        var w = this.canvas.width = this.video.offsetWidth;
        var h = this.canvas.height = this.video.offsetHeight;
        this.ctx.drawImage(this.video, 0, 0, w, h);
        return this.ctx.getImageData(0, 0, w, h);
    }

    return Stream;
});