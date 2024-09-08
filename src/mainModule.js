import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBPz0FRBvq7tvgCq4X1j9Kn6rR4U5ZMH44");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export { model };
