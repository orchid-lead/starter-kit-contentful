/**
 * year - an example helper that returns the current year
 * @arg {Object} options - the Handlebars option hash
 * @returns {String} the current year
 */
module.exports = function year (options) {
    console.log(options);
    return (new Date()).getFullYear();
};
