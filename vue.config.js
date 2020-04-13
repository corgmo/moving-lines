module.exports = {
    // https://cli.vuejs.org/config/#publicpath
    publicPath: process.env.NODE_ENV === 'production' ? '/moving-lines/' : '/',

    // https://cli.vuejs.org/config/#runtimecompiler
    runtimeCompiler: true,

    // https://cli.vuejs.org/config/#productionsourcemap
    productionSourceMap: false,

    outputDir: 'docs'
};
