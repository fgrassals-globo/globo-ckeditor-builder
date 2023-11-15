const path = require( 'path' );
const { styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'ckeditor.js'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'ckeditor.css' }),
    ],
    module: {
        rules: [
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: styles.getPostCssConfig( {
                                themeImporter: {
                                    themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
                                },
                                minify: true
                            } )
                        }
                    }
                ]
            }
        ]
    }
};