import Anthropic from '@anthropic-ai/sdk';

// Claude API
async function ChatReq(inputText) {
    const API_KEY = "";

    const anthropic = new Anthropic({
        apiKey: API_KEY
    });
    
    const tmp = await anthropic.beta.messages.create({
        model: 'claude-instant-2.1',
        max_tokens: 1024,
        messages: [
            {"role": "user", "content": inputText}
        ]
    });
    return tmp;
};

// Chat GPT API
async function ChatReq2(inputText) {
    const API_KEY = "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";
    const API_URL = "https://api.openai.com/v1/chat/completions";

    const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: inputText },
        ],
      };

    const resp = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

    return resp.json();
};

// Copilot API
async function ChatReq3(inputText) {
    const API_KEY = "4cd717f092284d59a306f5dafd53f0ce.045cf038d46c9f1a";
    const API_URL = "https://api-beta.copilot.com";

    const resp = await fetch(API_URL, {
        method: "POST",
        headers: {
          "X-API-KEY" : API_KEY,
          "Content-Type": "application/json",
        },
        //TODO : body:...
      });

    return resp.json();
};

export default ChatReq;
