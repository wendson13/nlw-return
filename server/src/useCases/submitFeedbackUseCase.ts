import { MailAdapter } from '../adapters/mailAdapter';
import { FeedbacksRepository } from '../repositories/feedbacksRepository';

type SubmitFeedbackUseCaseRequest = {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) { }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Type is required.');
    }

    if (!comment) {
      throw new Error('Comment is required.');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    });

    await this.mailAdapter.sendMail({
      subject: 'new feedback',
      body: `
      <div style="margin: 0; padding: 0; font-family: sans-serif; background-color: #18181B">
        <div style="
          padding: 16px;
          color: #F4F4F5;
          background-color: #8257E5;
        ">

          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="#8257E5"/>
            <path d="M24.3749 32.25H16.4718C16.3767 32.2513 16.2822 32.2334 16.1941 32.1976C16.1059 32.1618 16.0258 32.1087 15.9586 32.0414C15.8913 31.9741 15.8382 31.894 15.8023 31.8059C15.7665 31.7177 15.7487 31.6233 15.7499 31.5281V23.625C15.7499 21.3375 16.6586 19.1437 18.2761 17.5262C19.8936 15.9087 22.0874 15 24.3749 15C25.5076 15 26.6292 15.2231 27.6756 15.6565C28.722 16.09 29.6728 16.7253 30.4737 17.5262C31.2746 18.3271 31.91 19.2779 32.3434 20.3244C32.7768 21.3708 32.9999 22.4923 32.9999 23.625C32.9999 24.7577 32.7768 25.8792 32.3434 26.9256C31.91 27.9721 31.2746 28.9229 30.4737 29.7238C29.6728 30.5247 28.722 31.16 27.6756 31.5935C26.6292 32.0269 25.5076 32.25 24.3749 32.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.4531 24C25.4531 24.5954 24.9704 25.0781 24.375 25.0781C23.7796 25.0781 23.2969 24.5954 23.2969 24C23.2969 23.4046 23.7796 22.9219 24.375 22.9219C24.9704 22.9219 25.4531 23.4046 25.4531 24Z" fill="white" stroke="white" stroke-width="0.09375"/>
            <path d="M20.9531 24C20.9531 24.5954 20.4704 25.0781 19.875 25.0781C19.2796 25.0781 18.7969 24.5954 18.7969 24C18.7969 23.4046 19.2796 22.9219 19.875 22.9219C20.4704 22.9219 20.9531 23.4046 20.9531 24Z" fill="white" stroke="white" stroke-width="0.09375"/>
            <path d="M29.9531 24C29.9531 24.5954 29.4704 25.0781 28.875 25.0781C28.2796 25.0781 27.7969 24.5954 27.7969 24C27.7969 23.4046 28.2796 22.9219 28.875 22.9219C29.4704 22.9219 29.9531 23.4046 29.9531 24Z" fill="white" stroke="white" stroke-width="0.09375"/>
          </svg>

          <h1>You have new feedback</h1>
        </div>

        <div style="
          padding: 16px;
        ">
          <div style="color: #d4d4d4;">
            Type: ${type}
          </div>

          <p style="color: #A1A1AA;">
            ${comment}
          </p>

          <img style="width: 100%; margin-top: 16px;" 
            src="${screenshot}" alt=""
          />
        </div>
      </div>
      `
    });
  }
}
