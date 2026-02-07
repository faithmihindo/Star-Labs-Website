
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY || '' });
  }

  async getChatResponse(message: string, history: { role: 'user' | 'model'; parts: { text: string }[] }[]) {
    try {
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

      return response.text || "I apologize, but I'm having trouble processing that right now. How else can I assist with STAR Labs?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Systems are currently under maintenance. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
