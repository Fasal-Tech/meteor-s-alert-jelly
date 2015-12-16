Package.describe({
    'summary': 'Jelly effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '3.1.3',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-jelly.git',
    'name': 'juliancwirko:s-alert-jelly'
});

Package.onUse(function (api) {
    api.use('juliancwirko:s-alert@3.1.3', ['client']);
    api.imply('juliancwirko:s-alert@3.1.3', ['client']);
    api.addFiles([
        's-alert-jelly.css'
    ], 'client');
});
