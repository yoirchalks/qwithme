import {Express} from 'express' 
import usersRouter from '../routes/users'
import staffRouter from '../routes/staff'
import quesRoute from '../routes/ques'
import signInRoute from '../routes/signIns'

function routes (app: Express): void{
app.use('/users', usersRouter)
app.use('/staff', staffRouter)
app.use('/ques', quesRoute)
app.use('/signIns', signInRoute)
}

export default routes