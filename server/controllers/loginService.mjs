import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import supabase from "../utils/db.mjs";

export const loginUser = async (username, password) => {
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .single();
  console.log("User data:", user);
  if (error || !user) {
    throw new Error("ไม่พบผู้ใช้งานในระบบ");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("รหัสผ่านไม่ถูกต้อง");
  }

  const token = jwt.sign(
    {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      image: user.image,
    },
    process.env.SECRET_KEY,
    { expiresIn: "6h" }
  );

  return {
    token,
    user: {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      image: user.image,
    },
  };
};
