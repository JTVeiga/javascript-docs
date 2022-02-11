import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "yourkey",
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion("text-davinci-001", {
  // prompt: "tweet something cool for #techtwitter",
  prompt: "quem sou eu",
  max_tokens: 500,
});

console.log(completion.data.choices[0].text);
