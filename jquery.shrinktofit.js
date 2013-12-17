/**
 * @preserve  textfill
 * @name      jquery.shirnkToFit.js
 * @author    Andrew K Long
 * @version   0.0.1
 * @date      2013-12-16
 * @license   MIT License
*/
(function ($) {
    $.fn.shrinkToFit = function (options) {
        
        function shrinkSelector(container) {
            _debug(container);
            var text = $(options.innerTag + ':visible:first', container);//default first visible span
            _debug(text);
            var containerWidth = $(container).width();
            var currentFontSize = parseInt(text.css('font-size').replace("px", ""));
            var currentWidth = $.fn.width.call(text);
            var i = 0;
            while (currentWidth > containerWidth && i < options.maxIterationsPerElement && currentFontSize > options.minFontSize) {
                _debug("container w: " + containerWidth + " text w: " + currentWidth + " currentFontSize: " + currentFontSize + " estimatedSize: " + containerWidth / currentWidth * currentFontSize);

                var estimatedFontSize = Math.floor(containerWidth / currentWidth * currentFontSize);
                currentFontSize = Math.max(estimatedFontSize, options.minFontSize);
                text.css('font-size', currentFontSize);
                currentWidth = $.fn.width.call(text);
                i++;
            }
            _debug("container w: " + containerWidth + " text w: " + currentWidth + " currentFontSize: " + currentFontSize + " iterations: " + i);

            //handle callbacks
            if (options.success && i < options.maxIterationsPerElement && currentWidth <= containerWidth) {
                options.success(this);
            } else if (options.fail && (i >= options.maxIterationsPerElement || currentWidth > containerWidth)) {
                options.fail(this);
            }
        }
        function _debug(s) {
            if (options.debug) {
                console.log(s);
            }
        }
        
        var defaults = {
            debug: false,
            maxIterationsPerElement: 10,
            minFontSize: 6,
            innerTag: 'span',       // contains the text to be resized
            success: null,          // callback when a resizing is done
            fail: null,             // callback when a resizing is failed
            complete: null,         // callback when all is done
        };
        options = $.extend(defaults, options);
        if (options.debug) {
            console.log("shrink to fit options: ");
            console.log(options);
        }
        
        this.each(function () {
            shrinkSelector(this);
        });
        if (options.complete) {
            options.complete(this);
        }
    };

})($);