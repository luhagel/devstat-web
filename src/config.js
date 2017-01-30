import merge from 'lodash/merge'

const browser = typeof window !== 'undefined'
const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    baseUrl: `http://${ip}:${port}`,
    apiUrl: 'localhost:9000',
    browser,
    ip,
    port
  },
  test: {},
  development: {},
  production: {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
    baseUrl: 'https://dev-stat.us',
    apiUrl: 'https://devstat-core.herokuapp.com'
  }
}

module.exports = exports = merge(config.all, config[config.all.env])
export default exports
