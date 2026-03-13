export const chatService = {
  sendMessage: async (message: string, language: string): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return `As an AI agricultural assistant, I've analyzed your query about "${message}" in ${language}. For crop diseases, I recommend checking humidity levels, improving airflow, and applying treatment early when symptoms first appear.`;
  },
};
