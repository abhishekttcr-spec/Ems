import user  from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async (req,res)=>{

    try {
        const {email,password}=req.body;
        const User = await user.findOne({email})
        if(!User){
            return res.status(404).json({success:false,error:"User not Found"})
        }
        const isMatch = await bcrypt.compare(password,User.password)
        if(!isMatch){
             return res.status(404).json({success:false,error:"User not Matched"})
        }
        const token = jwt.sign({_id: User._id,role:User.role},
            process.env.JWT_KEY,{expiresIn:'5d'}
        )
        res.status(200).json({success:true,token,User:{_id:User._id, name:User.name, role:User.role},
        })
        }catch (error) {
        res.status(500).json({success:false,error:error.message})
        
    }

}

const verify =(req,res)=>{
   
    return res.status(200).json({success:true, user: req.user})
}

export {login,verify}