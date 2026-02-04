
import { GoogleGenAI, Type } from "@google/genai";
import { Internship } from "../types";

const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export const getInternshipRecommendations = async (skills: string[], language: string = "English"): Promise<Internship[]> => {
  const prompt = `Based on these skills: ${skills.join(", ")}, recommend 3 internships suitable for a student in India under the PM Internship Scheme. Respond in ${language}.`;
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            title: { type: Type.STRING },
            location: { type: Type.STRING },
            duration: { type: Type.STRING },
            description: { type: Type.STRING },
            tags: { type: Type.ARRAY, items: { type: Type.STRING } },
            badge: { type: Type.STRING }
          },
          required: ["id", "title", "location", "duration", "description", "tags"]
        }
      }
    }
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Failed to parse recommendations", e);
    return [];
  }
};

export const startChat = (systemInstruction: string) => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: { systemInstruction },
  });
};

export const connectLiveVoice = async (callbacks: any) => {
  return ai.live.connect({
    model: 'gemini-2.5-flash-native-audio-preview-12-2025',
    callbacks,
    config: {
      responseModalities: ['AUDIO' as any],
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
      },
      systemInstruction: "You are an AI assistant for InternMarg, helping students find internships. Keep responses helpful and concise."
    }
  });
};
