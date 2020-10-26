var webpack = require("webpack");
var path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
    entry: path.join(__dirname, "/src/index.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "/"
    },

    module:{
        rules:[
            // This rule will apply the following loaders when we have a 
            // file that ends with css (basically a css file)
            // Remember that webpack executes loaders in reverse order
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,

                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: 'local',
                                exportGlobals: true,
                                localIdentName: '[sha1:hash:hex:10]',
                              },
                        }
                    },
                ],
            },

            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'file-loader',
                options:{
                    outputPath: "images/",
                    esModule: false,
                }
            },

            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/,
            },
        ]
    },

    // An array of plugins used
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/public/index.html"),
            filename:"index.html",
        }),

        new CopyWebpackPlugin({
            patterns:[ 
                "./node_modules/swagger-ui/dist/swagger-ui.css"
            ]
        })

       
    ],

    mode: "production"
}

module.exports = config;