const fs = require('fs')
const mysql = require('mysql')

let data = fs.readFileSync('schema.json')
let schema = JSON.parse(data)

let database = schema.database

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ianneedswork',
  database
})

connection.connect()

let tableNames = Object.keys(schema.tables)
let tableSchema = Object.values(schema.tables)

for (let i = 0; i < tableNames.length; i++) {
  let query = 'CREATE TABLE ' + tableNames[i] + ' ('

  let primary = tableSchema[i].PRIMARY || false

  delete tableSchema[i].PRIMARY

  let colNames = Object.keys(tableSchema[i])
  let colTypes = Object.values(tableSchema[i])
  for (let j = 0; j < colNames.length; j++) {
    query += colNames[j] + ' ' + colTypes[j]
    if (j + 1 < colNames.length ) query += ', '
  }

  if (primary) query += ', PRIMARY KEY (' + primary + ')'

  query += ');'

  connection.query(query, (error, results, fields) => {
    if (error) console.log(error)
    else console.log(results, fields)
  })
}

connection.end()
