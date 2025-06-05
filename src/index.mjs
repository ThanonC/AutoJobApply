import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import sendHook from "./discord/webhook.mjs";
import sendEmail from "./mail/mailgun.mjs";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.genAIapi_key });

async function aiRequest(companyName, jobDescription) {
	const response = await ai.models.generateContent({
		model: "gemini-2.0-flash",
		content: `please write me an aprenticeship application for ${companyName}. The description is ${jobDescription}`,
	});
	return response.text;
}

const res = aiRequest("name", "");

sendEmail('dom', 'Kai Rothenbach rothenbachkai@gmail.com', `${ap.mail}`, `application for an apprenticeship as ${ap.title}`, res);

sendHook(res);