import { Router } from "express";
import supabase from "../utils/db.mjs";

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
    res
      .status(400)
      .json({
        error: "เกิดข้อผิดพลาดในเข้าถึงข้อมูลผู้ใช้งาน: " + error.message,
      });
  }
});

export default userRouter;
