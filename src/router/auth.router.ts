import { Router } from 'express'
export const AuthRouter = Router()
import {signup, login, forgotPassword} from '../controller/auth.controller'

AuthRouter.post('/signup', signup)
AuthRouter.post('/login', login)
AuthRouter.post('/forgot-password', forgotPassword)

