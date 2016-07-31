// var glob = require("glob");
// entry: glob.sync("./test/**/*Spec.js")


module.exports = {
    entry: [
        "./src/old_1.js",
        "./src/app.js"
    ],
    output: {
        path: './bin',
        filename: "ronapp.bundle.js"
    },
    module: {
        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'jshint-loader'
        //     }
        // ],
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
            },
            {
                // include: PATHS.style,
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.css','.scss']
        // root:'./src'
    }

    // webpack dev server configuration
    // devServer: {
    //     contentBase: "./src"
    // }


};