
module.exports = function parseArray(ArrayAsString) {
    return ArrayAsString.split(',').map(tech => tech.trim());
}