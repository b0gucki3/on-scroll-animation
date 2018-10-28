class Osa {
    constructor(cssSelector, speed = 1, gsInitial = {y: 30, autoAlpha: 0}, gsFinal = {x: 0, y: 0, autoAlpha: 1}) {
        this.speed = speed;
        this.cssSelector = cssSelector;
        this.gsFinal = gsFinal;
        this.gsInitial = gsInitial;

        this.initialPosition();
        this.animateSelectors();
    }

    initialPosition() {
        TweenLite.to(this.cssSelector, 0, this.gsInitial);
    }

    animateSelectors() {
        var _this = this;
        var controller = new ScrollMagic.Controller();
        $(this.cssSelector).each(function (index, element) {
            new ScrollMagic.Scene({
                triggerElement: element
            })
                    .setTween(element, 0.5, _this.gsFinal)
                    //.addIndicators()
                    .addTo(controller);
        });
    }
}