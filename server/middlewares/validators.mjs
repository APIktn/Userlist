import supabase from "../utils/db.mjs";
import bcrypt from "bcrypt";

const isValidUsername = (username) => {
  const nameRegex = /^[a-zA-Z'-]+$/;
  return nameRegex.test(username);
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPassword = (password) => {
  return password.length >= 12;
};

const isValidName = (name) => {
  const nameRegex = /^[a-zA-Zก-ฮะ-์'-]+$/;
  return nameRegex.test(name);
};

export const validateRegister = async (req, res, next) => {
  const { username, email, password, firstname, lastname } = req.body;
  const errors = [];

  if (!username) {
    errors.push({ message: "กรุณากรอก username" });
  } else if (!isValidUsername(username)) {
    errors.push({
      message:
        "ชื่อผู้ใช้งานไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษเท่านั้น",
    });
  }

  if (!email) {
    errors.push({ message: "กรุณากรอกกรอกอีเมล" });
  } else if (!isValidEmail(email)) {
    errors.push({ message: "กรุณากรอกกรอกอีเมลให้ถูกต้อง" });
  }

  if (!password) {
    errors.push({ message: "กรุณากรอกรหัสผ่าน" });
  } else if (password && !isValidPassword(password)) {
    errors.push({ message: "รหัสผ่านต้องมีอย่างน้อย 12 ตัวอักษร" });
  }

  if (!firstname) {
    errors.push({ message: "กรุณากรอกชื่อ" });
  } else if (!isValidName(firstname)) {
    errors.push({
      message: "ชื่อไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษหรือไทยเท่านั้น",
    });
  }

  if (!lastname) {
    errors.push({ message: "กรุณากรอกนามสกุล" });
  } else if (!isValidName(lastname)) {
    errors.push({
      message:
        "นามสกุลไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษหรือไทยเท่านั้น",
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .or(`username.eq.${username},email.eq.${email}`);

  if (existingUser.length > 0) {
    return res.status(400).json({ error: "ชื่อผู้ใช้หรืออีเมลนี้มีอยู่แล้ว" });
  }

  next();
};

export const validateLogin = async (req, res, next) => {
  const { username, password } = req.body;
  const errors = [];

  if (!username) {
    errors.push({ message: "กรุณากรอกชื่อผู้ใช้" });
  } else if (!isValidUsername(username)) {
    errors.push({
      message:
        "ชื่อผู้ใช้งานไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษเท่านั้น",
    });
  }

  if (!password) {
    errors.push({ message: "กรุณากรอกรหัสผ่าน" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .single();
  if (error || !user) {
    return res.status(404).json({ error: "ไม่พบผู้ใช้งานในระบบ" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ error: "รหัสผ่านผิด" });
  }

  req.user = user;
  next();
};
