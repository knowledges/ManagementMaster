'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '" https://easy-mock.com/mock/5c2d7237873e4126e1daa19d/ManagementMaster"',
})
