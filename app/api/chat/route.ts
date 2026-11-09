import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        let reply = `Hello! I am Rayyan's AI Agent. You asked: "${message}". Rayyan is an exceptional 9th-grade software and agentic AI developer skilled in Python, Next.js, and autonomous workflows!`;

        const lower = message.toLowerCase();
        if (lower.includes("python") || lower.includes("uv")) {
            reply = "Rayyan uses Python with the 'uv' package manager, FastAPI, and Streamlit to build robust backend tools and AI apps!";
        } else if (lower.includes("project") || lower.includes("devin")) {
            reply = "One of Rayyan's standout projects is Mini-Devin AI Engineer, built using Streamlit and agentic workflows.";
        } else if (lower.includes("school") || lower.includes("grade")) {
            reply = "Rayyan is a dedicated 9th-grade student currently taking advanced online courses in Web Development with Advanced AI.";
        }

        return NextResponse.json({ reply });
    } catch (error) {
        return NextResponse.json(
            { reply: "Sorry, something went wrong processing your request." },
            { status: 500 }
        );
    }
}