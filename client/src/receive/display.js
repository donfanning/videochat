define(['../runnable'], function (Runnable) {
    function Display(canvas, processor) {
        Runnable.call(this);
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.processor = processor;
        this.lastImage = null;
    }

    Display.prototype = new Runnable();

    Display.prototype.run = function () {
        var image = this.processor.getImageIfHasNew(this.lastImage);
        if (image !== null) {
            this.lastImage = image;
            this.ctx.putImageData(image.data, 0, 0, 0, 0, this.canvas.width, this.canvas.height);
        }
    }

    return Display;
});