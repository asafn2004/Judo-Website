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

  res.json({ message: "Email Sent Successfully!" });
};


export default sendEmail;


// // // logic/emailLogic.js
// // import { Request, Response } from 'express';
// // import nodemailer from 'nodemailer';
// // import googleapis, { google } from 'googleapis';

// // const clientId = "612691282134-ro68paf393pf0hgdn0sh648snog0jjuu.apps.googleusercontent.com"; // Your Google Cloud Platform client ID
// // const clientSecret = "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"; // Your Google Cloud Platform client secret
// // const redirectUri = "https://developers.google.com/oauthplayground";
// // const refreshToken = "1//04481jxgiTYyyCgYIARAAGAQSNwF-L9Irdd3MlUmb-iMfwEaZpvaocsiSyDDxCPemfjrG61YHJ3t6tAnNWImbWOEBjO-YWbmHNBo"; // Your Google refresh token

// // // async function getAccessToken() {
// // //   const oauth2Client = new googleapis.oauth2.Client({
// // //     clientId,
// // //     clientSecret,
// // //     redirectUri: 'https://developers.google.com/oauthplayground', // Replace with your callback URL
// // //   });
// // const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
// // oAuth2Client.setCredentials({ refresh_token: refreshToken });

// // const sendEmail = async (req: Request, res: Response) => {
// //   const { name, pNumber, email, reason } = req.body;
// //   try {
// //     const accessToken = await oAuth2Client.getAccessToken();
// //     const transporter = nodemailer.createTransport({
// //       service: 'gmail',
// //       auth: {
// //         type: 'OAuth2',
// //         user: 'asafn2004@gmail.com', // Your email address
// //         clientId,
// //         clientSecret,
// //         refreshToken,
// //         accessToken,
// //       },
// //     });

// //     const mailOptions = {
// //       from: 'asafn2004@gmail.com',
// //       to: 'asafn2004@gmail.com',
// //       subject: 'New message from Judo Website',
// //       text: `
// //           Name: ${name}
// //           Phone Number: ${pNumber}
// //           Reason: ${reason}
// //           Email: ${email} 
// //       `,
// //     };

// //       const result = await transporter.sendMail(mailOptions);
// //       return result


  

   
// //   } catch (error) {
// //     return error
// //   }
// // }

// // sendEmail().then(result=> console.log('Email sent...', result))
// // .catch((error) => console.log(error.message));

// // // const sendEmail = async (req: Request, res: Response) => {
// // //   const { name, pNumber, email, reason } = req.body;

// // //   const accessToken = await getAccessToken();

// // //   // Create Nodemailer transport
// // //   const transporter = nodemailer.createTransport({
// // //     service: 'gmail',
// // //     auth: {
// // //       type: 'OAuth2',
// // //       user: 'asafn2004@gmail.com', // Your email address
// // //       clientId,
// // //       clientSecret,
// // //       refreshToken,
// // //       accessToken,
// // //     },
// // //   });

// // //   // Compose options
// // //   const mailOptions = {
// // //     from: 'asafn2004@gmail.com',
// // //     to: 'asafn2004@gmail.com',
// // //     subject: 'New message from Judo Website',
// // //     text: `
// // //         Name: ${name}
// // //         Phone Number: ${pNumber}
// // //         Reason: ${reason}
// // //         Email: ${email} 
// // //     `,
// // //   };

// // //   // Send email
// // //   try {
// // //     await transporter.sendMail(mailOptions);
// // //     res.json({ message: 'Email Sent Successfully!' });
// // //   } catch (error: any) {
// // //     console.log(error);
// // //     return res.status(500).json({ error: error.message });
// // //   }
// // // };

// // export default sendEmail;

// import { Request, Response } from 'express';
// import nodemailer, { TransportOptions } from 'nodemailer';
// import googleapis, { google } from 'googleapis';
// import { OAuth2Client,  } from 'google-auth-library';
// import { RefreshAccessTokenResponse } from 'google-auth-library/build/src/auth/oauth2client';

// const clientId = "612691282134-ro68paf393pf0hgdn0sh648snog0jjuu.apps.googleusercontent.com"; // Your Google Cloud Platform client ID
// const clientSecret = "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"; // Your Google Cloud Platform client secret
// const refreshToken = "1//04XzcwwhOEisyCgYIARAAGAQSNwF-L9IroasJ136bCVGeCWE9lYdfejwJDL0JixPHszFmo-b6-gw6QK7_aZRU3rjdue3bgdsabwM"; // Your Google refresh token

// interface CustomTransportOptions extends TransportOptions {
//   host: string;
// }

// async function getAccessToken() {
//   const oauth2Client = new OAuth2Client({
//     clientId,
//     clientSecret,
//     redirectUri: 'https://developers.google.com/oauthplayground', // Replace with your callback URL
//   });

//   oauth2Client.setCredentials({ refresh_token: refreshToken });

//   try {
//     const tokens: RefreshAccessTokenResponse = await oauth2Client.refreshAccessToken();
//     return tokens.credentials.access_token;
//   } catch (error) {
//     console.error('Error getting access token:', error);
//     throw error;
//   }
// }


// const sendEmail = async (req: Request, res: Response) => {
//   const { name, pNumber, email, reason } = req.body;



//   const accessToken = await getAccessToken();

//   // Create Nodemailer transport
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       type: 'OAuth2',
//       user: 'asafn2004@gmail.com', // Your email address
//       clientId: clientId,
//       clientSecret: clientSecret,
//       refreshToken: refreshToken,
//       accessToken: accessToken,
//     },
//   }as CustomTransportOptions);

//   // Compose options
//   const mailOptions = {
//     from: 'asafn2004@gmail.com',
//     to: 'asafn2004@gmail.com',
//     subject: 'New message from Judo Website',
//     text: `
//         Name: ${name}
//         Phone Number: ${pNumber}
//         Reason: ${reason}
//         Email: ${email} 
//     `,
//   };

//   // Send email
//   try {
//     await transporter.sendMail(mailOptions);
//     res.json({ message: 'Email Sent Successfully!' });
//   } catch (error: any) {
//     console.log(error);
//     return res.status(500).json({ error: error.message });
//   }
// };

// export default sendEmail;

// import { Request, Response } from 'express';
// import { google } from 'googleapis';
// import nodemailer from 'nodemailer';

// const sendEmail = async (req: Request, res: Response) => {
//   const { name, pNumber, email, reason } = req.body;

//   // Load the client credentials from the environment variables
//   const clientId = "612691282134-ro68paf393pf0hgdn0sh648snog0jjuu.apps.googleusercontent.com";
//   const clientSecret = "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";
//   const refreshToken = "1//04XzcwwhOEisyCgYIARAAGAQSNwF-L9IroasJ136bCVGeCWE9lYdfejwJDL0JixPHszFmo-b6-gw6QK7_aZRU3rjdue3bgdsabwM";
//   const redirectUri = 'https://developers.google.com/oauthplayground';

//   // Create a new OAuth2 client
//   const oAuth2Client = new google.auth.OAuth2(
//     clientId,
//     clientSecret,
//     redirectUri
//   );

//   // Set the refresh token
//   oAuth2Client.setCredentials({ refresh_token: refreshToken });

//   // Create a new Gmail access token
//   const accessToken = await oAuth2Client.getAccessToken();

//   // Create Nodemailer transport
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       type: "OAuth2",
//       user: "user@example.com",
//       clientId: clientId,
//       clientSecret: clientSecret,
//       refreshToken: refreshToken,
//       accessToken: "ya29.a0Ad52N39K1Z562H3StG8dNtK6F8LVYRj8XldEBxcLtTBQ1IniZdlRQJtjdk78hB31WSnwFFmD7SZ_N0oH5CXDeyUq7DMUliQ2-0S3EbEKMRmjOzPmIIBKbhX6E8w3LnOIkBxzovC1zh9fo50WrQuXPteNksSUPAdWuyJRaCgYKAbsSARISFQHGX2MikIXaRFw4cS19F1vixIO2KA0171",
//     },
//   });

//   // Compose options
//   const mailOptions = {
//     from: 'asafn2004@gmail.com', // Your Gmail email
//     to: 'asafn2004@gmail.com', // Recipient's email
//     subject: 'New message from Judo Website',
//     text: `
// Name: ${name}
// Phone Number: ${pNumber}
// Reason: ${reason}
// Email: ${email}
// `,
//   };

//   // Send email
//   try {
//     await transporter.sendMail(mailOptions);
//   } catch (error: any) {
//     console.log(error);
//     return res.status(500).json({ error: error.message });
//   }

//   res.json({ message: 'Email Sent Successfully!' });
// };

// export default sendEmail;