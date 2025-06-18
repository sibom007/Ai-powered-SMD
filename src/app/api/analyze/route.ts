import { NextResponse } from "next/server";
import axios from "axios";

const HUGGINGFACE_API_URL = process.env.NEXT_PUBLIC_HG_URL!;
const HUGGINGFACE_API_TOKEN = process.env.HF_API_TOKEN!;

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const response = await axios.post(
      HUGGINGFACE_API_URL,
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data;
    console.log("🚀 ~ POST ~ result:", result);

    return NextResponse.json({
      original: message,
      prediction: result[0], // contains label and score
    });
  } catch (error: any) {
    console.error(
      "HuggingFace API error:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Failed to analyze message" },
      { status: 500 }
    );
  }
}
