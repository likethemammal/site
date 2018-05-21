const DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge')
const common = require('./webpack.config')



module.exports = merge(common, {
    plugins: [
        // new DashboardPlugin(),
        new BundleAnalyzerPlugin(),
    ],
})
