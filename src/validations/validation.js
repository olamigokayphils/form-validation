import Joi from "joi"
import passwordComplexity from "joi-password-complexity"

export const registerValidationSchema = Joi.object({
    firstName: Joi.string().min(3).max(100).required(),
    lastName: Joi.string().min(3).max(100).required(),
    phoneNumber: Joi.string().min(11).max(11).regex(/^[0-9]{11}$/).required(),
    email: Joi.string().min(5).required().email({ tlds: {allow: false} }),
    password: passwordComplexity().required(),
    confirmPassword: passwordComplexity().required()
})