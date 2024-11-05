Package.describe({
    'summary': 'Jelly effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '4.0.0',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-jelly.git',
    'name': 'mrspark:s-alert-jelly'
});

Package.onUse(function (api) {
    api.use('mrspark:s-alert@4.0.1', ['client']);
    api.imply('mrspark:s-alert@4.0.1', ['client']);
    api.addFiles([
        's-alert-jelly.css'
    ], 'client');
});
