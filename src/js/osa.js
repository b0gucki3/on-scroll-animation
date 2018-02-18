/* global ScrollMagic, TweenLite */

(function ($) {
    $(document).ready(function () {

        //osa
        initialise_osa();

        function initialise_osa() {
            var controller = new ScrollMagic.Controller();

            $('.osa').each(function () {
                var osa = this; //global scope
                new ScrollMagic.Scene({triggerElement: osa})
                        .triggerHook(0.9)
                        //.addIndicators()
                        .addTo(controller)
                        .on('enter leave', function () {
                            var speed = 1.3;

                            //this should be more scalable
                            if ($(osa).hasClass('osa-fade-in')) {
                                TweenLite.to(osa, speed, {x: 0, autoAlpha: 1});
                            } else if ($(osa).hasClass('osa-transform-top')) {
                                TweenLite.to(osa, speed, {y: 0, autoAlpha: 1});
                            } else if ($(osa).hasClass('osa-transform-bottom')) {
                                TweenLite.to(osa, speed, {y: 0, autoAlpha: 1});
                            } else if ($(osa).hasClass('osa-transform-left')) {
                                TweenLite.to(osa, speed, {x: 0, autoAlpha: 1});
                            } else if ($(osa).hasClass('osa-transform-right')) {
                                TweenLite.to(osa, speed, {x: 0, autoAlpha: 1});
                            } else if ($(osa).hasClass('osa-bounce-top')) {
                                TweenLite.to(osa, speed, {autoAlpha: 1});
                                TweenLite.to(osa, speed, {y: 0, ease: Bounce.easeOut});
                            } else if ($(osa).hasClass('osa-bounce-bottom')) {
                                TweenLite.to(osa, speed, {autoAlpha: 1});
                                TweenLite.to(osa, speed, {y: 0, ease: Bounce.easeOut});
                            } else if ($(osa).hasClass('osa-bounce-left')) {
                                TweenLite.to(osa, speed, {autoAlpha: 1});
                                TweenLite.to(osa, speed, {x: 0, ease: Bounce.easeOut});
                            } else if ($(osa).hasClass('osa-bounce-right')) {
                                TweenLite.to(osa, speed, {autoAlpha: 1});
                                TweenLite.to(osa, speed, {x: 0, ease: Bounce.easeOut});
                            } else if ($(osa).hasClass('osa-slowMo-top')) {
                                TweenLite.to(osa, speed, {autoAlpha: 1});
                                TweenLite.to(osa, speed, {y: 0, ease: SlowMo.ease.config(0.7, 0.7, false)});
                            } else if ($(osa).hasClass('osa-slowMo-bottom')) {
                                TweenLite.to(osa, speed, {autoAlpha: 1});
                                TweenLite.to(osa, speed, {y: 0, ease: SlowMo.ease.config(0.7, 0.7, false)});
                            } else if ($(osa).hasClass('osa-slowMo-left')) {
                                TweenLite.to(osa, speed, {autoAlpha: 1});
                                TweenLite.to(osa, speed, {x: 0, ease: SlowMo.ease.config(0.7, 0.7, false)});
                            } else if ($(osa).hasClass('osa-slowMo-right')) {
                                TweenLite.to(osa, speed, {autoAlpha: 1});
                                TweenLite.to(osa, speed, {x: 0, ease: SlowMo.ease.config(0.7, 0.7, false)});
                            }
                            this.remove();
                        });
            });
        }

    });
}(jQuery));