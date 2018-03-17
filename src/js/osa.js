/* global ScrollMagic, TweenLite, Bounce */
class Osa {
    constructor(cssClass, speed = 1, greenSock = {x: 0, y: 0, autoAlpha: 1}) {
        this.speed = speed;
        this.cssClass = cssClass;
        this.greenSock = greenSock;

        var controller = new ScrollMagic.Controller();

        var osaObject = this; //reference to the current instance

        $(this.cssClass).each(function () {
            var domRef = this; //reference to a single dom element of the loop
            new ScrollMagic.Scene({triggerElement: domRef})
                    .triggerHook(0.9)
                    .addIndicators()
                    .addTo(controller)
                    .on('enter leave', function () {
                        TweenLite.to(domRef, osaObject.speed, osaObject.greenSock);
                    });
        });
    }
}