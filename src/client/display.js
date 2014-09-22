define([], function () {
    function Display(canvas, processor) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.processor = processor;
        this.lastImage = null;
        this.intervalId = null;
    }

    Display.prototype.start = function () {
        if (this.intervalId !== null) {
            throw new Error('Már fut');
        }
        this.intervalId = setInterval(this.run, 16);
    }

    Display.prototype.stop = function () {
        if (this.intervalId === null) {
            throw new Error('Nem fut');
        }
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    Display.prototype.run = function () {
        var image = this.processor.getImageIfHasNew(this.lastImage);
        if (image!==null) {
            this.lastImage=image;
            this.ctx.putImageData(image.data, 0, 0, 0, 0, this.canvas.width, this.canvas.height);
        }
    }

    return Display;
});