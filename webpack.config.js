const path = require('path');

module.exports = env => {
    console.log('NODE_ENV: ', env.NODE_ENV) // 'local'
    console.log('Production: ', env.production) // true
    
    return {
        entry: './src/index.ts',
        devtool: 'inline-source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    }
};