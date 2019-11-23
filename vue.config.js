module.exports = {
  // Our frontend app and backend API are not running
  // on the same host, and we will therefore need
  // to proxy API requests to the API server
  devServer: {
    proxy: 'https://sandbox-api.brewerydb.com/'
  }
}
