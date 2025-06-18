"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle, Shield, Zap } from "lucide-react";

const messageSchema = z.object({
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

type MessageFormValues = z.infer<typeof messageSchema>;

interface AnalysisResult {
  sentiment: {
    label: "positive" | "negative" | "neutral";
    confidence: number;
  };
  toxicity: {
    isToxic: boolean;
    confidence: number;
  };
  categories: Array<{
    name: string;
    confidence: number;
  }>;
  wordCount: number;
  characterCount: number;
}

export const LobbyView = () => {
  useEffect(() => {
    const d = async () => {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Congratulations! You've won a prize.",
        }),
      });
      const data = await res.json();
      console.log(data);
    };
    d();
  }, []);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null
  );

  const form = useForm<MessageFormValues>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (data: MessageFormValues) => {
    setIsAnalyzing(true);

    // Simulate API call with mock analysis
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock analysis result
    const mockResult: AnalysisResult = {
      sentiment: {
        label:
          data.message.toLowerCase().includes("good") ||
          data.message.toLowerCase().includes("great") ||
          data.message.toLowerCase().includes("awesome")
            ? "positive"
            : data.message.toLowerCase().includes("bad") ||
              data.message.toLowerCase().includes("terrible") ||
              data.message.toLowerCase().includes("hate")
            ? "negative"
            : "neutral",
        confidence: Math.random() * 0.3 + 0.7, // 70-100%
      },
      toxicity: {
        isToxic:
          data.message.toLowerCase().includes("hate") ||
          data.message.toLowerCase().includes("stupid"),
        confidence: Math.random() * 0.4 + 0.6, // 60-100%
      },
      categories: [
        { name: "Professional", confidence: Math.random() * 0.5 + 0.3 },
        { name: "Casual", confidence: Math.random() * 0.5 + 0.2 },
        { name: "Technical", confidence: Math.random() * 0.4 + 0.1 },
      ].sort((a, b) => b.confidence - a.confidence),
      wordCount: data.message.split(/\s+/).filter((word) => word.length > 0)
        .length,
      characterCount: data.message.length,
    };

    setAnalysisResult(mockResult);
    setIsAnalyzing(false);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600 bg-green-50 border-green-200";
      case "negative":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <CheckCircle className="h-4 w-4" />;
      case "negative":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Shield className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Message Detector
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Analyze your messages for sentiment, toxicity, and content
            classification
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Input Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Message Analysis
              </CardTitle>
              <CardDescription>
                Enter your message below to analyze its sentiment, toxicity, and
                content classification.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message Content</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message here..."
                            className="min-h-[200px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter a message between 10-1000 characters for
                          analysis.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>
                      {form.watch("message")?.length || 0} / 1000 characters
                    </span>
                    <span>
                      {form
                        .watch("message")
                        ?.split(/\s+/)
                        .filter((word) => word.length > 0).length || 0}{" "}
                      words
                    </span>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isAnalyzing}
                    size="lg">
                    {isAnalyzing ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Analyzing...
                      </>
                    ) : (
                      "Analyze Message"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Right Column - Preview/Results */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <CardDescription>
                {analysisResult
                  ? "Here's what we found in your message:"
                  : "Results will appear here after analysis."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!analysisResult && !isAnalyzing && (
                <div className="flex h-[400px] items-center justify-center text-center">
                  <div className="space-y-4">
                    <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500">
                      Enter a message and click Analyze Message to see results
                    </p>
                  </div>
                </div>
              )}

              {isAnalyzing && (
                <div className="flex h-[400px] items-center justify-center">
                  <div className="space-y-4 text-center">
                    <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
                    <p className="text-gray-600">Analyzing your message...</p>
                  </div>
                </div>
              )}

              {analysisResult && (
                <div className="space-y-6">
                  {/* Message Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-blue-50 p-4">
                      <div className="text-2xl font-bold text-blue-600">
                        {analysisResult.wordCount}
                      </div>
                      <div className="text-sm text-blue-600">Words</div>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-4">
                      <div className="text-2xl font-bold text-purple-600">
                        {analysisResult.characterCount}
                      </div>
                      <div className="text-sm text-purple-600">Characters</div>
                    </div>
                  </div>

                  <Separator />

                  {/* Sentiment Analysis */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">Sentiment Analysis</h3>
                    <div
                      className={`flex items-center gap-2 rounded-lg border p-3 ${getSentimentColor(
                        analysisResult.sentiment.label
                      )}`}>
                      {getSentimentIcon(analysisResult.sentiment.label)}
                      <span className="font-medium capitalize">
                        {analysisResult.sentiment.label}
                      </span>
                      <Badge variant="secondary" className="ml-auto">
                        {Math.round(analysisResult.sentiment.confidence * 100)}%
                        confident
                      </Badge>
                    </div>
                    <Progress
                      value={analysisResult.sentiment.confidence * 100}
                      className="h-2"
                    />
                  </div>

                  <Separator />

                  {/* Toxicity Detection */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">Toxicity Detection</h3>
                    <div
                      className={`flex items-center gap-2 rounded-lg border p-3 ${
                        analysisResult.toxicity.isToxic
                          ? "text-red-600 bg-red-50 border-red-200"
                          : "text-green-600 bg-green-50 border-green-200"
                      }`}>
                      {analysisResult.toxicity.isToxic ? (
                        <AlertCircle className="h-4 w-4" />
                      ) : (
                        <CheckCircle className="h-4 w-4" />
                      )}
                      <span className="font-medium">
                        {analysisResult.toxicity.isToxic
                          ? "Potentially Toxic"
                          : "Clean Content"}
                      </span>
                      <Badge variant="secondary" className="ml-auto">
                        {Math.round(analysisResult.toxicity.confidence * 100)}%
                        confident
                      </Badge>
                    </div>
                  </div>

                  <Separator />

                  {/* Content Categories */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">Content Categories</h3>
                    <div className="space-y-2">
                      {analysisResult.categories.map((category, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            {category.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={category.confidence * 100}
                              className="h-2 w-20"
                            />
                            <span className="text-xs text-gray-500 w-10">
                              {Math.round(category.confidence * 100)}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
