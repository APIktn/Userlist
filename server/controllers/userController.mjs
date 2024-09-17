import { Router } from "express";
import supabase from "../utils/db.mjs";
import { authenticateToken } from "../middlewares/authVerify.mjs";

const userRouter = Router();

userRouter.get("/alluser", async (req, res) => {
  try {
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("*")
      .order("id", { ascending: true });

    if (userError) throw userError;

    res
      .status(201)
      .json({ message: "ข้อมูลผู้ใช้งานทั้งหมดมีดังนี้", data: user });
  } catch (error) {
    console.error("Error retrieving user:", error.message);
    res.status(400).json({
      error: "เกิดข้อผิดพลาดในเข้าถึงข้อมูลผู้ใช้งาน: " + error.message,
    });
  }
});

userRouter.get("/profile", authenticateToken, async (req, res) => {
  try {
    const { id } = req.user;

    const { data: user, error } = await supabase
      .from("users")
      .select("id, firstname, lastname,image")
      .eq("id", id)
      .single();

    if (error || !user) {
      return res.status(404).json({ error: "ไม่พบข้อมูลผู้ใช้งาน" });
    }

    res.json({ user });
  } catch (error) {
    console.error("Error in GET profile:", error);
    res.status(500).json({ error: "เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้งาน" });
  }
});

export default userRouter;
