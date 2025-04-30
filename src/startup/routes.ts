import {Express} from 'express' 
import usersRouter from '../routes/users'
import staffRouter from '../routes/staff'

function routes (app: Express): void{
app.use('/users', usersRouter)
app.use('/staff', staffRouter)
}

export default routes