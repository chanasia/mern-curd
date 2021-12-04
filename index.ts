import express, {Application, Request, Response} from 'express'
import bodyParser from 'body-parser'
import mysql, { Connection, MysqlError, queryCallback } from 'mysql'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const conn: Connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'mern_shop'
})
conn.connect()

app.get('/products', (req: Request, res: Response) => {
  conn.query('SELECT * FROM product', (err, results, fields) => {
    if(err) throw err
    
    let message = ""
    if(results === undefined || results.length === 0){
      message = "Products table is emtry"
    }else{
      message = "Successfully retrieved"
    }

    return res.send({
      error: false,
      data: results,
      message: message
    })
  })
})

app.get('/', (req: Request, res: Response) => {
  return res.send({
    error: false,
    mesage: 'Api crud shop create by chanasia',
    written_by: 'Chanasia',
    published_on: 'https://chanasia.ml'
  })
})

app.listen(4500, () => {
  console.log('Server starting...')
})

export default app