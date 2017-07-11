module.exports = function(buffer) {
    this.cacheable(true);

    if (buffer.length >= 3
        && buffer[0].toString(16).toLowerCase() === 'ef'
        && buffer[1].toString(16).toLowerCase() === 'bb'
        && buffer[2].toString(16).toLowerCase() === 'bf') {
        buffer = buffer.slice(3);
    }

    return buffer;
};

module.exports.raw = true;
