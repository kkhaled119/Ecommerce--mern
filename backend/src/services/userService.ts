import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterParams) => {
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    return { data: "user already exists", statusCode: 400 };
  }
  const handelPassowrd = await bcrypt.hash(password, 10);
  const newUser = new userModel({
    email,
    password: handelPassowrd,
    lastName,
    firstName,
  });
  await newUser.save();

  return { data: generateJWT({ firstName, lastName, email }), statusCode: 200 };
};

interface Loginparams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: Loginparams) => {
  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    return { data: "Incorrect email or password!", statusCode: 400 };
  }

  const passwordMatch = await bcrypt.compare(password, findUser.password);

  if (passwordMatch) {
    return {
      data: generateJWT({
        email,
        firstName: findUser.firstName,
        lastName: findUser.lastName,
      }),
      statusCode: 200,
    };
  } else {
    return { data: "Incorrect email or password!", statusCode: 400 };
  }
};

const generateJWT = (data: any) => {
  return jwt.sign(data, process.env.JWT_SECRET || "");
};
