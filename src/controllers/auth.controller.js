import User from "../models/user.model.js";
import Contact from "../models/contact.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json(["Este correo ya existe"]);

    // hashing the password
    const passwordHash = await bcrypt.hash(password, 10);

    // creating the user
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // saving the user in the database
    const userSaved = await newUser.save();

    // create access token
    const token = await createAccessToken({
      id: userSaved._id,
    });

    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(400).json(["Este usuario no existe"]);

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json(["La contraseña es incorrecta"]);
    }

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.username,
    });

    res.cookie("token", token, {
      httpOnly: false,
      secure: true,
      sameSite: "none",
    });

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({message: "No autorizado"});

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.status(401).json({message: "No autorizado"});

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({message: "No autorizado"});

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if(!userFound) return res.status(400).json({message:"Usuario no encontrado"});

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updateAt: userFound.updatedAt,
  });
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const contact = async (req, res) => {
  try {
    const { username, email, phone, message } = req.body;
    //const contactFound = await Contact.findOne({ email, phone });
    //if (contactFound)
      //return res.status(400).json(["Estos datos ya se encuentran registrados para contacto, ingrese unos diferentes"]);

    // creating the contact
    const newContact = new Contact({
      username,
      email,
      phone,
      message,
    });

    // saving the contact in the database
    const contactSaved = await newContact.save();

    res.json({
      id: contactSaved._id,
      username: contactSaved.username,
      email: contactSaved.email,
      phone: contactSaved.phone,
      message: contactSaved.message,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};