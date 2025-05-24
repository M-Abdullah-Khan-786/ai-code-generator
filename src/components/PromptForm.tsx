"use client";

import { useState } from "react";

export default function PromptForm({
  onResult,
}: {
  onResult: (code: string) => void;
}) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 max-w-xl w-full"
    >
      <input
        className="p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want (e.g. 'Next.js login form')"
        required
      />
      <button
        className="p-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 disabled:opacity-50"
        type="submit"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>

      {error && (
        <div className="text-red-600 bg-red-100 border border-red-400 p-3 rounded">
          {error}
        </div>
      )}
    </form>
  );
}
