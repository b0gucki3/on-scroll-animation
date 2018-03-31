class Osa {
    constructor(cssSelector, speed = 1, gsInitial = {y: 30, autoAlpha: 0}, gsFinal = {x: 0, y: 0, autoAlpha: 1}) {
        this.speed = speed;
        this.cssSelector = cssSelector;
        this.gsFinal = gsFinal;
        this.gsInitial = gsInitial;

        var controller = new ScrollMagic.Controller();

        var osaObject = this; //reference to the current instance

        //set up initial positioning
        TweenLite.to(cssSelector, 0, gsInitial);

        $(cssSelector).each(function () {
            var domRef = this; //reference to a single dom element of the loop
            var animated = false;
            new ScrollMagic.Scene({triggerElement: domRef, duration: 100})
                    .triggerHook(0.5)
                    //.addIndicators()
                    .addTo(controller)
                    .on('progress', function (e) {
                        if (e.state == 'DURING' && !animated) {
                            animated = true;
                            TweenLite.to(domRef, osaObject.speed, osaObject.gsFinal);
                        }
                    });
        });
    }
}