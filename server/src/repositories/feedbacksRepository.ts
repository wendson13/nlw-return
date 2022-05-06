export type FeedbackRepositoryData = {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbackRepositoryData) => Promise<void>;
}
