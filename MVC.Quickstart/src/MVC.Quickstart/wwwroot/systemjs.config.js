﻿(function (global) {

    var ngVer = '@2.0.0-rc.4';
    var routerVer = '@3.0.0-beta.1';
    var formsVer = '@0.2.0';

    var map = {
        'app': 'app',

        '@angular': 'https://unpkg.com/@angular',
        '@angular/router': 'https://unpkg.com/@angular/router' + routerVer,
        '@angular/forms': 'https://unpkg.com/@angular/forms' + formsVer,
        'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.6',
        'ts': 'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript': 'https://unpkg.com/typescript@1.8.10/lib/typescript.js'
    };

    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    };

    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'upgrade'
    ];

    ngPackageNames.forEach(function (pkgName) {
        map['@angular/' + pkgName] = 'https://unpkg.com/@angular/' + pkgName + ngVer;
    });

    ngPackageNames.forEach(function (pkgName) {

        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };


    var config = {
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    };

    System.config(config);

})(this);
