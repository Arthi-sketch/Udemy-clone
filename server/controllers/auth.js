import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";

export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password } = req.body;
    // validation
    if (!name) return res.status(400).send("Name sholud not be empty");
    if (password.length < 6) {
      return res
        .status(400)
        .send("Password should contain min 6 characters");
    }
    let userExist = await User.findOne({ email }).exec();
    if (userExist) return res.status(400).send("Email is already existing in database");

    // hash password
    const hashedPassword = await hashPassword(password);

    // register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.send("Registration successfull ");

  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.", err);
  }
};
