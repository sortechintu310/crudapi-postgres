import joi from "joi";

const userSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8)
});

export const validateUser = (req,res,next)=>{
    const {error} = userSchema.validate(req.body);
    if(error){
        return res.status(400).json({
            status: 400,
            message: error.details[0].message,
        });
    }
    next();
}