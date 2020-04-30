const externals = {

}

module.exports = {
  configureWebpack: config => {
    return {
      externals: externals,
    }
  }
}