var bemhtml = require('bem-xjst').bemhtml;

var templates = bemhtml.compile(function() {});

var html = bemhtml.apply({ block: 'page' });

var apply = bemhtml.apply;

apply({ block: 'page' });
