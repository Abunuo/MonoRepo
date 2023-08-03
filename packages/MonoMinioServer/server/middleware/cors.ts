/*
 * @Author: Monologue
 * @Date: 2023-08-01 17:51:50
 * @LastEditors: Monologue
 * @Description: 
 */
import cors from 'cors'

const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true
}

export default cors(corsOptions)
