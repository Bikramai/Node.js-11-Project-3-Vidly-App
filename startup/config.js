const config = require('config');

module.exports = function() {
    if (!config.get('jwtPrivateKey')) {
        throw new Error('FATEL ERROR: jwtPrivate is not defined.');
    }
}