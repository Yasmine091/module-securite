const config = require("./db.json")
module.exports = {
  username: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  database: config.MYSQL_DATABASE,
  host: config.MYSQL_HOST || 'mysql-db',
  port: config.MYSQL_PORT || 3306,
  dialect: 'mysql'
}