
import express from "express";
import sendEmail from '../Logic/sendEmailLogic';

//crud -> create read update delete
//        post   get  put    delete


const sendEmailRouter = express.Router();

sendEmailRouter.post('/sendEmail', sendEmail)


export default sendEmailRouter;
