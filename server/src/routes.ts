import express from 'express';
import { SubmitFeedbackUseCase } from './useCases/submitFeedbackUseCase';
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter';

type Body = {
  type: string;
  comment: string;
  screenshot?: string;
}

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body as Body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  });

  return res.status(201).send();
});
