import { model } from '@/data/model';

// generate a prompt as a http request to send back to the user
export default function generatePrompt() {

  const createPrompt = async ({ prompt }: { prompt: string }) => {
    return await model.call(prompt);
  };

  return { createPrompt };
}
