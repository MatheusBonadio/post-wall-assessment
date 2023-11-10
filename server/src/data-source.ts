import 'dotenv/config'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'

import * as path from 'path'

const port = process.env.DB_PORT as number | undefined

const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: [path.join(__dirname, '/**/entities/*.{ts,js}')],
  migrations: [path.join(__dirname, '/**/migrations/*.{ts,js}')],
}

export const appDataSource = new DataSource(options)
