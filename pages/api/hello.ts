// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'
import smtpTransport from 'nodemailer-smtp-transport'


let transporter = nodemailer.createTransport(
    smtpTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            pass: process.env.WORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    }),
)

type Data = {
    name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Nodemailer API',
        text: 'Hi from your nodemailer API',
    }
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Error ' + err)
        } else {
            console.log('Email sent successfully')
        }
    })
    res.status(200).json({ name: 'John Doe' })
}

