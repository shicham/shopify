exports.getUri = (req) => {
    return req.protocol + '://' + req.get('Host') + req.url;
}