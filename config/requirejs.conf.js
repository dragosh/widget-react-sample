(function(root, factory) {
    'use strict';
    var USEMIN = false;
    var PATH = '/bower_components';
    var DIST = USEMIN ? 'dist/' : '';
    var host;
    if (typeof exports === 'object') {
        host = require('os').hostname();
        module.exports = factory(root, '');
    } else if (typeof requirejs === 'function') {
        require.config(factory(root, PATH, DIST));
        host = root.location.host;
    }
    if(!USEMIN && host.indexOf('local') > -1) {
        console.info('You are using unminified version!!! @', host);
    }

}(this, function(root, path, dist) {

    'use strict';

    var config = {
        baseUrl: './',
        paths: {
            // common libs
            'lodash'            : [ path + '/lodash/lodash.min', path + '/lodash/lodash'],
            'hammerjs'          : [ path + '/hammerjs/hammer.min', path + '/hammerjs/hammer'],
            'react'             : ['node_modules/react/dist/react.min', 'node_modules/react/dist/react'],
            // angular & 3rd party ng libs
            'angular'           : [ path + '/angular/angular.min', path + '/angular/angular' ],
            'angular-resource'  : [ path + '/angular-resource/angular-resource.min' ],
            'angular-translate' : [ path + '/angular-translate/angular-translate.min' ],

            // LP foundation
            'base'              : path + '/base/'+ dist +'scripts',
            'core'              : path + '/core/'+ dist +'scripts',
            'ui'                : path + '/ui/'+ dist +'scripts',

            // LP modules

            'module-ng-sample'  : path + '/module-ng-sample/'+ dist +'scripts',
            'module-accounts'   : path + '/module-accounts/'+ dist +'scripts',
            'module-automation' : path + '/module-automation/'+ dist +'scripts',
            'module-estatements': path + '/module-estatements/'+ dist +'scripts',
            'module-payments'   : path + '/module-payments/'+ dist +'scripts',
            'module-users'      : path + '/module-users/'+ dist +'scripts',
            'module-wealth'     : path + '/module-wealth/'+ dist +'scripts',
            'module-freshness'  : path + '/module-freshness/'+ dist +'scripts',
            'module-tags'       : path + '/module-tags/'+ dist +'scripts',
            'module-charts'     : path + '/module-charts/'+ dist +'scripts',
            'module-badges'     : path + '/module-badges/'+ dist +'scripts',
            'module-expenses'   : path + '/module-expenses/'+ dist +'scripts',
            'module-places'     : path + '/module-places/'+ dist +'scripts',
            'module-ebilling'   : path + '/module-ebilling/'+ dist +'scripts'

        },
        // Register packages
        packages: [
            'base',
            'core',
            'ui',

            'module-ng-sample',
            'module-accounts',
            'module-automation',
            'module-estatements',
            'module-payments',
            'module-users',
            'module-wealth',
            'module-freshness',
            'module-tags',
            'module-charts',
            'module-badges',
            'module-expenses',
            'module-places',
            'module-ebilling'
        ],
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-resource': {
                deps: ['angular']
            },
            'angular-translate': {
                deps: ['angular']
            }
        }
    };

    return config;
}));
