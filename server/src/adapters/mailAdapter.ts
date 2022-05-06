export type SendMailDate = {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMail: (date: SendMailDate) => Promise<void>;
}
