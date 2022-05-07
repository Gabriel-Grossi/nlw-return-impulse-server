import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "257c70fa654f49",
        pass: "13391f328bb8d4"
    }
});

export class NodemailMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe FeedGet <suporte@feedget.com>',
            to: 'Gabriel Henrique Grossi <gabrigrossi@hotmail.com.br>',
            subject,
            html: body,
        })
    };
}