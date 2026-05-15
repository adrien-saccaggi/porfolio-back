import AppError from "../errors/AppError.js";
import bcrypt from "bcrypt";
import * as UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function loginUser(email, password) {
  if(!email){
    throw new AppError("jsp", 500)
  }
  const user = await UserModel.findByEmail(email);
  if (!user) {
    throw new AppError("Identifiants invalides", 401);
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    throw new AppError("Identifiants invalides", 401);
  }

  const { id, role } = user;

  const token = jwt.sign({ id, email, role }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  return token;
}
