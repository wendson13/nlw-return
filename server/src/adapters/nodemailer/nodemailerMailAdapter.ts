import { MailAdapter, SendMailDate } from '../mailAdapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '55ad57283eb099',
    pass: '8bb91a4bd0aabd'
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailDate) {
    transport.sendMail({
      from: 'FeedGet team <feedback@feedget.com',
      to: 'Wendson Sousa <wendson.dev@gmail.com>',
      subject,
      html: body
    });
  }
}
