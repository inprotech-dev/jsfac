jsfac.module('diagnostics', [], function (register) {

    register('eventLog', [], function () {
        var listeners = [];
        return {
            listen: function (callback) {
                listeners.push(callback);
            },
            log: function (event) {
                $.each(listeners, function (i, l) {
                    l(event);
                });
            }
        };
    }, { sharingMode: 'single'});

});
