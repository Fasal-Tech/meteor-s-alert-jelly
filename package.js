Package.describe({
    'summary': 'Jelly effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '1.0.0',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-jelly.git',
    'name': 'juliancwirko:s-alert-jelly'
});

Package.onUse(function (api) {
    api.use('juliancwirko:s-alert@2.0.0', ['client']);
    api.addFiles([
        's-alert-jelly.css'
    ], 'client');
});
