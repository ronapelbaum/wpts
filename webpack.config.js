// var glob = require("glob");
// entry: glob.sync("./test/**/*Spec.js")


module.exports = {
    entry: {
        app: ["./src/app.js"]
    },
    output: {
        filename: "dist/ronapp.js"
    },
    module: {
        // preLoaders: [
        // {
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: 'jshint-loader'
        // }
        // ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    }

};