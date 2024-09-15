import { Router } from "express";
import bcrypt from "bcrypt";
import { loginUser } from "../controllers/loginService.mjs";
import supabase from "../utils/db.mjs";
import { generateAvatarUrl } from "../utils/avatarGenerator.mjs";
import { validateRegister, validateLogin } from "../middlewares/validators.mjs";

const authRouter = Router();

authRouter.post("/register", validateRegister, async (req, res) => {
  const { username, email, password, firstname, lastname } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const profileImage = generateAvatarUrl(firstname, lastname);

    const { error } = await supabase.from("users").insert([
      {
        username: username,
        email: email,
        password: hashedPassword,
        firstname: firstname,
        lastname: lastname,
        image: profileImage,
      },
    ]);

    if (error) throw error;

    res.status(201).json({ message: "ลงทะเบียนสำเร็จ" });
  } catch (error) {
    console.error("Registration error:", error.message);
    res
      .status(400)
      .json({ error: "เกิดข้อผิดพลาดในการลงทะเบียน: " + error.message });
  }
});

authRouter.post("/login/user", validateLogin, async (req, res) => {
  const { username, password } = req.body;
  try {
    const { token, user } = await loginUser(username, password);
    res.json({ message: "เข้าสู่ระบบสำเร็จ", token, user });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(400).json({ error: error.message });
  }
});

authRouter.post("/logout", (req, res) => {
  res.json({ message: "ออกจากระบบสำเร็จ" });
});

export default authRouter;
