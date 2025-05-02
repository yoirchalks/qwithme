import {Express} from 'express' 
import usersRouter from '../routes/users'
import staffRouter from '../routes/staff'
import quesRoute from '../routes/ques'
import signInRoute from '../routes/signIns'

function routes (app: Express): void{
app.use('/api/users', usersRouter)
app.use('/api/staff', staffRouter)
app.use('/api/ques', quesRoute)
app.use('/api/signIns', signInRoute)
}

export default routes