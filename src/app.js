console.log('-- app.js start');

require('angular');
require('./app.scss');
require('./util/util.module');

angular.module('app',['util']).directive('app',function(){
    console.log('app directive factory');
    return {
        replace:true,
        // template:'<greet></greet>'
        template:'<div>App!<greet></greet></div>'
    };
});

angular.bootstrap(document, ["app"], {
    strictDi: true
});

console.log('-- app.js end');
