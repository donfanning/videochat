define([], function () {
    function Runnable() {
        this.intervalId = null;
    }

    Runnable.prototype.start = function () {
        if (this.intervalId !== null) {
            throw new Error('Már fut');
        }
        this.intervalId = setInterval(this.run, 16);
    }

    Runnable.prototype.stop = function () {
        if (this.intervalId === null) {
            throw new Error('Nem fut');
        }
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    return Runnable;
});