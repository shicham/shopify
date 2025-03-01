function getUri(req) {
    return req.protocol + '://' + req.get('Host') + req.url;
}

module.exports = { getUri };