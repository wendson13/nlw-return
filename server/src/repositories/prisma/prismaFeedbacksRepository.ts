import { prisma } from '../../prisma';
import { FeedbackRepositoryData, FeedbacksRepository } from '../feedbacksRepository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackRepositoryData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  }
}
