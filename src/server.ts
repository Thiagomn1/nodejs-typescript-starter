import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World' })
})

app.use(route)


app.listen(5000, () => 'Server running on port 5000')