import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Initializing GoogleGenAI with the required named parameter and direct process.env.API_KEY.
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getChatResponse(message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[]) {
    try {
      // Calling generateContent with the model name and contents directly as per the latest SDK guidelines.
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: `You are the AI assistant for STAR Labs, a futuristic tech company. 
          STAR Labs specializes in AI, Robotics, IoT, Sensors, AR/VR, Computer Vision, and Lab Automation.
          Your tone is professional, futuristic, inspiring, and helpful. 
          If a user expresses interest in collaboration, investment, or joining the team, gently encourage them to leave their contact details.
          Keep responses concise and engaging.`,
          temperature: 0.7,
        },
      });

      // Accessing the response text via the .text property (not a method).
      return response.text || "I apologize, but I'm having trouble processing that right now. How else can I assist with STAR Labs?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Systems are currently under maintenance. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();