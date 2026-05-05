import * as authService from "../services/auth.service"

const login = (req, res,next) => {
    const { email, password } = req.body;
    authService.loginUser(email, password);
        res.json({ token });
 
}
