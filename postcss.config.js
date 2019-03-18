let autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                "> 0.01%"
            ]
        })
    ]
}
