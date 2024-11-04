// // logic/emailLogic.js
// import { Request, Response } from 'express';
// import nodemailer from "nodemailer";

// const sendEmail = async (req: Request, res: Response) => {
//   const { name, pNumber, email, reason } = req.body;

//   // Create Nodemailer transport
//   const transporter = nodemailer.createTransport({
//     host: "live.smtp.mailtrap.io",
//     port: 587,
//     auth: {
//       user: "api",
//       pass: "512770fd0ab44a663cd985274124f57e"
//     },
//   });

//   // Compose options
//   const mailOptions = {
//     from: "mailtrap@demomailtrap.com",
//     to: "asafn2004@gmail.com",
//     subject: "New message from Judo Website",
//     text: `
//       Name: ${name}
//       Phone Number: ${pNumber}
//       Reason: ${reason}
//       Email: ${email}  
//     `,
//   };

//   // Send email
//   try {
//     await transporter.sendMail(mailOptions);
//   } catch (error:any) {
//     console.log(error);
//     return res.status(500).json({ error: error.message });
//   }

//   res.json({ message: "Email Sent Successfully!" });
// };


// export default sendEmail;



// logic/emailLogic.ts
import { Request, Response } from 'express';
import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  pNumber: string;
  email: string;
  reason: string;
}

// Validation function
const validateEmailData = (data: EmailData): string | null => {
  if (!data.name || typeof data.name !== 'string') return 'Invalid name';
  if (!data.pNumber || typeof data.pNumber !== 'string') return 'Invalid phone number';
  if (!data.email || !data.email.includes('@')) return 'Invalid email';
  if (!data.reason || typeof data.reason !== 'string') return 'Invalid reason';
  return null;
};

const sendEmail = async (req: Request, res: Response) => {
  try {
    const data: EmailData = req.body;
    
    // Validate the data
    const validationError = validateEmailData(data);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    const { name, pNumber, email, reason } = data;

    const transporter = nodemailer.createTransport({
      host: "live.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "api",
        pass: "512770fd0ab44a663cd985274124f57e"
      },
    });

    const mailOptions = {
      from: "mailtrap@demomailtrap.com",
      to: "asafn2004@gmail.com",
      subject: "New message from Judo Website",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${pNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${reason}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
    
  } catch (error: any) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: "Failed to send email",
      details: error.message 
    });
  }
};

export default sendEmail;