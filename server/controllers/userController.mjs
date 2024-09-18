import { Router } from "express";
import supabase from "../utils/db.mjs";
import { authenticateToken } from "../middlewares/authVerify.mjs";

const userRouter = Router();

userRouter.get("/alluser", authenticateToken, async (req, res) => {
  try {
    const keywords = req.query.keywords;

    const { data: users, error: userError } = await supabase
      .from("users")
      .select("id, email, username, firstname, lastname, image")
      .order("id", { ascending: true });

    if (userError) throw userError;

    let result = users;
    if (keywords) {
      const regexKeywords = keywords
        .split(" ")
        .filter((text) => text !== "")
        .map((text) => `\\b${text}`)
        .join("|");
      const regex = new RegExp(regexKeywords, "iu");

      result = users.filter((user) => {
        const username = user.username;
        const email = user.email;
        const fullName = `${user.firstname} ${user.lastname}`;

        return (
          regex.test(username) || regex.test(email) || regex.test(fullName)
        );
      });
    }

    res
      .status(200)
      .json({ message: "ข้อมูลผู้ใช้งานทั้งหมดมีดังนี้", data: result });
  } catch (error) {
    console.error("Error retrieving user:", error.message);
    res.status(400).json({
      error: "เกิดข้อผิดพลาดในการเข้าถึงข้อมูลผู้ใช้งาน: " + error.message,
    });
  }
}); //http://localhost:4000/alluser?keywords=test

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

userRouter.get("/user/:id", authenticateToken, async (req, res) => {
  try {
    const id = req.params.id;

    const { data: user, error } = await supabase
      .from("users")
      .select("id, email, username, firstname, lastname, image")
      .eq("id", id)
      .single();

    if (error || !user) {
      return res.status(404).json({ error: "ไม่พบข้อมูลผู้ใช้งาน" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error retrieving user:", error.message);
    res.status(500).json({
      error: "เกิดข้อผิดพลาดในการเข้าถึงข้อมูลผู้ใช้งาน: " + error.message,
    });
  }
});

export default userRouter;
