(function ($) {
    "use strict";
    $(document).ready(function () {
        $(window).load(function () {
            /* Act on the event */
            $('.bgblack-title').addClass('loaded');
        });

        /*  [ Animate Elements ]
         - - - - - - - - - - - - - - - - - - - - */
        var $animation_elements_in = $('.animation-element');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);
            var range = 150;
            $.each($animation_elements_in, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom = element_top_position + element_height;
                // if ((window_top_position >= element_top_position - element_height * 10) && (window_top_position >= element_top_position - element_height * 10)) {
                //     $element.addClass('animated');
                // } else {
                //     $element.removeClass('animated');
                // }

            });
        }


        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
    });
})(jQuery);

