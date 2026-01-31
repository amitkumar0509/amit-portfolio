import { NextResponse } from "next/server";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

// Simple keyword-based intent matching for the "AI"
function generateResponse(query: string): string {
  const lowerQuery = query.toLowerCase();

  // 1. Greetings
  if (lowerQuery.match(/\b(hi|hello|hey|greetings)\b/)) {
    return "Hello! I'm Amit's portfolio assistant. Ask me about his projects, skills, or experience.";
  }

  // 2. Capabilities / Who are you
  if (lowerQuery.includes("who are you") || lowerQuery.includes("what can you do")) {
    return "I am a simulated AI assistant designed to help you navigate Amit's portfolio. I can answer questions about his Hackathon wins, AI projects, and technical stack.";
  }

  // 3. Projects (General)
  if (lowerQuery.includes("project") || lowerQuery.includes("work") || lowerQuery.includes("build")) {
    const projectNames = projects.map((p) => p.name).join(", ");
    return `Amit has worked on several impactful projects, including: ${projectNames}. Which one would you like to know more about?`;
  }

  // 4. Specific Projects
  const foundProject = projects.find(
    (p) =>
      lowerQuery.includes(p.name.toLowerCase()) ||
      lowerQuery.includes(p.id.toLowerCase()) ||
      (p.name.toLowerCase().includes("ugc") && lowerQuery.includes("ugc")) ||
      (p.name.toLowerCase().includes("uidai") && lowerQuery.includes("uidai")) ||
      (p.name.toLowerCase().includes("lingolive") && lowerQuery.includes("lingo"))
  );

  if (foundProject) {
    return `**${foundProject.name}** (${foundProject.role}): ${foundProject.summary} Key Technologies: ${foundProject.stack.join(", ")}.`;
  }

  // 5. Skills
  if (lowerQuery.includes("skill") || lowerQuery.includes("stack") || lowerQuery.includes("tech")) {
     // Simplifying skills for response
    return "Amit is proficient in Python, React, Node.js, AI/ML (TensorFlow, PyTorch), and Data Analytics. He specializes in building real-time AI systems and scalable web applications.";
  }

  // 6. Contact
  if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("reach")) {
    return "You can reach Amit at kumaramit01977@gmail.com or +91 8700562901.";
  }

  // Default fallback
  return "I'm focusing on Amit's technical work right now. Try asking about his 'UGC Regulation Platform', 'Voice Cloning Project', or 'Hackathon Achievements'.";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { prompt } = body;

    // Simulate network delay for "thinking" effect
    await new Promise((resolve) => setTimeout(resolve, 800));

    const responseText = generateResponse(prompt || "");

    return NextResponse.json({
      status: "success",
      message: responseText,
    });
  } catch (error) {
    return NextResponse.json({
        status: "error",
        message: "Sorry, I encountered an error processing your request."
    }, { status: 500 });
  }
}
