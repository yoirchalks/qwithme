import {Express} from 'express' 
import usersRoute from '../routes/users'

function routes (app: Express): void{
app.use('/users', usersRoute)
}

export default routes