import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport(transport[, defaults])

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;


export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:,
        pass:,
    }
})