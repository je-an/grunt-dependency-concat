var TEST = (function (jQuery) {
    var TEST = {};
    TEST.ClassOne = (function () { // jshint ignore:line
        var ClassOne = function () {
            this.id = 1;
        };
        return ClassOne;
    })();
    TEST.ClassTwo = (function () { // jshint ignore:line
        var ClassTwo = function () {
            this.id = 1;
        };
        return ClassTwo;
    })();

    return TEST;
})(jQuery);