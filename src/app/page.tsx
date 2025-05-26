"use client";
import { useState } from "react";
import PromptForm from "../components/PromptForm";
import CodeOutput from "../components/CodeOutput";

export default function HomePage() {
  const [code, setCode] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Code Generator 🧠</h1>
      <div className="flex flex-col items-center">
        <PromptForm onResult={setCode} />
        {code && <CodeOutput code={code} />}
      </div>
    </div>
  );
}
