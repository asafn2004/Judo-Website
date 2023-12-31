// logic/emailLogic.js
import { Request, Response } from 'express';
import nodemailer from "nodemailer";

const sendEmail = async (req: Request, res: Response) => {
  const { name, pNumber, email, reason } = req.body;

  // Create Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "asafn2004@gmail.com",
      pass: "fres efpa hkov fivb",
    },
  });

  // Compose options
  const mailOptions = {
    from: "asafn2004@gmail.com",
    to: "asafn2004@gmail.com",
    subject: "New message from Judo Website",
    text: `
      Name: ${name}
      Phone Number: ${pNumber}
      Reason: ${reason}
      Email: ${email}  
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error:any) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: "Email sent!" });
};


export default sendEmail;