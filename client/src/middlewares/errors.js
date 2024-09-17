import { validateRegister, validateLogin } from "./validators";

export const checkRegisterErrors = (formData) => {
  const errors = validateRegister(formData);
  return errors;
};

export const checkLoginErrors = (formData) => {
  const errors = validateLogin(formData);
  return errors;
};

export const isValidName = (name) => {
  const nameRegex = /^[a-zA-Zก-ฮะ-์'-]+$/;
  return nameRegex.test(name);
};

export const isValidUsername = (username) => {
  const nameRegex = /^[a-zA-Z'-]+$/;
  return nameRegex.test(username);
};

export const updateErrors = (field, value, errors) => {
  let newErrors = { ...errors };

  switch (field) {
    case "username":
      if (!value) {
        newErrors.username = "กรุณากรอกชื่อผู้ใช้งาน";
      } else if (!isValidUsername(value)) {
        newErrors.username =
          "ชื่อผู้ใช้งานไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษเท่านั้น";
      } else {
        delete newErrors.username;
      }
      break;
    case "email":
      if (!value) {
        newErrors.email = "กรุณากรอกอีเมล";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = "กรุณากรอกอีเมลให้ถูกต้อง";
      } else {
        delete newErrors.email;
      }
      break;
    case "password":
      if (!value) {
        newErrors.password = "กรุณากรอกรหัสผ่าน";
      } else if (value.length < 12) {
        newErrors.password = "รหัสผ่านต้องมีอย่างน้อย 12 ตัวอักษร";
      } else {
        delete newErrors.password;
      }
      break;
    case "firstname":
      if (!value) {
        newErrors.firstname = "กรุณากรอกชื่อ";
      } else if (!isValidName(value)) {
        newErrors.firstname =
          "ชื่อไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษหรือไทยเท่านั้น";
      } else {
        delete newErrors.firstname;
      }
      break;
    case "lastname":
      if (!value) {
        newErrors.lastname = "กรุณากรอกนามสกุล";
      } else if (!isValidName(value)) {
        newErrors.lastname =
          "นามสกุลไม่ถูกต้อง ต้องประกอบด้วยตัวอักษรภาษาอังกฤษหรือไทยเท่านั้น";
      } else {
        delete newErrors.lastname;
      }
      break;

    case "isChecked":
      if (!value) {
        newErrors.isChecked = "กรุณายอมรับข้อตกลงและเงื่อนไข";
      } else {
        delete newErrors.isChecked;
      }
      break;
    default:
      break;
  }

  return newErrors;
};
