import {Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'

const authSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})

authSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password.toString(), 12)
})

export const AuthModel = model('Auth', authSchema)

