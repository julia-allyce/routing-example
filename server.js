var port         = process.env.PORT || 1337,
	http		 = require('http'),
    Static = require( 'node-static' );

var file = new Static.Server( './src', {
    cache: 3600,
    gzip: true
} );


http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve(request, response, function (e, res) {
            if (e && (e.status === 404)) { // If the file wasn't found
                file.serveFile('/index.html', 404, {}, request, response);
            }
        });
    } ).resume();
} ).listen( port );