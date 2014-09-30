define(['../runnable'], function (Runnable) {
    function Processor() {
        Runnable.call(this);
    }

    Processor.prototype = new Runnable();

    Processor.prototype.run=function(){

    }

    return Processor;
});