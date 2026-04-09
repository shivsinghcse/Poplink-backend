// import AuthModel from '../model/auth.model'
import { Request, Response } from 'express'

export const signup = (req: Request, res: Response) => {
    try
    {
        res.status(200).json({message: 'Signup success'})
    }
    catch(err: any)
    {
        res.status(500).json({message: err.message})
    }
}

export const login = (req: Request, res: Response) => {
    try
    {
        res.status(200).json({message: 'Login success'})
    }
    catch(err: any)
    {
        res.status(500).json({message: err.message})
    }
}

export const forgotPassword = (req: Request, res: Response) => {
    try
    {
        res.status(200).json({message: 'Password reset success'})
    }
    catch(err: any)
    {
        res.status(500).json({message: err.message})
    }
}