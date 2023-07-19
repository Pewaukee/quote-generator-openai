import { OpenAI } from "langchain/llms/openai";
// instantiate the openai model with the api key
const key = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

if (!key) {
    throw new Error("OPENAI_API_KEY not set");
}

export const model = new OpenAI({
    openAIApiKey: key,
    temperature: 1.0,
});