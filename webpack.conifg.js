const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',
    entry: './js/index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$|\.ts$/,
                loader: "esbuild-loader",
                options: {
                    loader: 'ts',
                    target: 'es2018',
                }
            },
            {
                test: /(\.less|\.css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
        ],
    },

    resolve: {
        extensions: [".ts", ".vue", ".js"],
        alias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"],
        }
    },

    plugins: [
        new VueLoaderPlugin(),
    ],
};