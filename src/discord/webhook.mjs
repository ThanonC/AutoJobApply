import { WebhookClient } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

export default async function sendHook(msg) {
    const client = new WebhookClient({ url: process.env.hookurl})
}