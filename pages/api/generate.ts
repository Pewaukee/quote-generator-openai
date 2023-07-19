import { useState } from 'react';
import { OpenAI } from 'langchain/llms/openai';

// generate a prompt as a http request to send back to the user
export default function generatePrompt() {
  const [loading, setLoading] = useState(false);

  // // create langchain model instance
  // const key = process.env.KEY;
  // console.log(typeof key, key);
  // if (key === undefined) {
  //   throw new Error('OPENAI_API_KEY not set');
  // }

  const key = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  if (key === undefined) {
    throw new Error('OPENAI_API_KEY not set');
  }

  const model = new OpenAI({
    openAIApiKey: key,
    temperature: 0.7,
  });

  const createPrompt = async ({ prompt }: { prompt: string }) => {
    setLoading(true);
    const response = await model.call(prompt);
    console.log(response);
    setLoading(false); // TODO: might not be needed if stream?
    return response;
  };

  return { loading, createPrompt };
}
