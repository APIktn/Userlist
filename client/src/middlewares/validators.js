export const isValidUsername = (username) => {
  const nameRegex = /^[a-zA-Z'-]+$/;
  return nameRegex.test(username);
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  return password.length >= 12;
};

export const isValidName = (name) => {
  const nameRegex = /^[a-zA-Zก-ฮะ-์'-]+$/;
  return nameRegex.test(name);
};

export const validateRegister = ({
  username,
  email,
  password,
  firstname,
  lastname,
  isChecked,
}) => {
  const errors = {};

  if (!username) {
    errors.username = "กรุณากรอกชื่อผู้ใช้งาน";
  } else if (!isValidUsername(username)) {
    errors.username =
      "กรุณากรอกชื่อผู้ใช้งานไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษเท่านั้น";
  }

  if (!email) {
    errors.email = "กรุณากรอกอีเมล";
  } else if (!isValidEmail(email)) {
    errors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
  }

  if (!password) {
    errors.password = "กรุณากรอกรหัสผ่าน";
  } else if (!isValidPassword(password)) {
    errors.password = "รหัสผ่านต้องมีอย่างน้อย 12 ตัวอักษร";
  }

  if (!firstname) {
    errors.firstname = "กรุณากรอกชื่อ";
  } else if (!isValidName(firstname)) {
    errors.firstname =
      "ชื่อไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษหรือไทยเท่านั้น";
  }

  if (!lastname) {
    errors.lastname = "กรุณากรอกนามสกุล";
  } else if (!isValidName(lastname)) {
    errors.lastname =
      "นามสกุลไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษหรือไทยเท่านั้น";
  }

  if (!isChecked) {
    errors.isChecked = "กรุณายอมรับข้อตกลงและเงื่อนไข";
  }

  return errors;
};

export const validateLogin = ({ username, password }) => {
  const errors = {};

  if (!username) {
    errors.username = "กรุณากรอกชื่อผู้ใช้งาน";
  } else if (!isValidUsername(username)) {
    errors.username =
      "ชื่อผู้ใช้งานไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษเท่านั้น";
  }

  if (!password) {
    errors.password = "กรุณากรอกรหัสผ่าน";
  }

  return errors;
};

export const checkUpdatePasswordErrors = (passwordData) => {
  const errors = {};
  const { currentPassword, newPassword, confirmPassword } = passwordData;

  if (!currentPassword) {
    errors.currentPassword = "กรุณากรอกรหัสผ่านเดิม";
  }

  if (!newPassword) {
    errors.newPassword = "กรุณากรอกรหัสผ่านใหม่";
  } else if (newPassword.length < 12) {
    errors.newPassword = "รหัสผ่านใหม่ต้องมีอย่างน้อย 12 ตัวอักษร";
  }

  if (newPassword !== confirmPassword) {
    errors.confirmPassword = "รหัสผ่านใหม่ไม่ตรงกัน";
  }

  return errors;
};
