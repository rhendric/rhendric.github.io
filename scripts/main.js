(function () {

    // Add use-font-feature-sups class if the font-feature-settings CSS property is supported and if the body font
    // supports sups.
    var span = document.createElement('span'),
        style = span.style;
    var ffs;
    var candidates = ['fontFeatureSettings', 'oFontFeatureSettings', 'webkitFontFeatureSettings'];
    for (var i = 0, iMax = candidates.length; i < iMax; i++) {
        if (style[candidates[i]] === '') {
            ffs = candidates[i];
            break;
        }
    }
    if (ffs) {
        span.innerHTML = '1234567890';
        style.fontSize = '72pt';
        style.opacity = 0;
        style.position = 'absolute';
        document.body.appendChild(span);
        var initialWidth = span.offsetWidth;
        style[ffs] = '"sups"';
        if (span.offsetWidth != initialWidth) {
            document.documentElement.className += ' use-font-feature-sups';
        }
        document.body.removeChild(span);
    }

})();
