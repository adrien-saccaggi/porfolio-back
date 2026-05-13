import AppError from "../errors/AppError.js";

export const authorizeRoles = (role) => {
  return async (req, res, next) => {
    if (role !== req.user.role) {
      return res.status(403).send("Accès interdit");
    }
    next();
  };
};
