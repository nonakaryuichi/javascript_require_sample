requirejs.config({
    paths: {
        "jquery": "jquery-1.9.1.min",
        "jquery.easing": "jquery.easing.1.3",
        "jquery.mousewheel": "jquery.mousewheel",
        "jquery.bootstrap": "bootstrap.min"
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        },
        "jquery.easing": {
            desp: ["jquery"]
        },
        "jquery.mousewheel": {
            desp: ["jquery"]
        }
    }
});

require(["jquery", "jquery.easing", "jquery.mousewheel", "jquery.bootstrap"],function(){

});
