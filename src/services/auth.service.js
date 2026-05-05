import AppError from "../errors/AppError";
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");

export function loginUser({email, password}) {
    const user = UserModel.findByEmail(email);
    const isPasswordValid = bcrypt.compareSync(password,user.password);
    if (!user){
        throw new AppError("Identifiants invalides", 401);
        
    }
    if (!isPasswordValid){
        throw new AppError("Identifiants invalides", 401);
    }
    const token = jwt.sign({ id,email,role },{
      expiresIn: "24h",
    });
   res.json({ token });
}