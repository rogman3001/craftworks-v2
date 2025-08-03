"use client";
import React, { useState } from "react";
import { evaluateOffer, EvaluationResult } from "@/lib/api";

export default function OfferEvaluator() {
  const [offerId, setOfferId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<EvaluationResult | null>(null);

  const handleEvaluate = async () => {
    if (!offerId) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await evaluateOffer(offerId);
      setResult(res);
    } catch (e: any) {
      setError(e.message || "Unbekannter Fehler");
    } finally {
      setLoading(false);
    }
  };

  const colorMap = {
    red: "bg-red-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
  };

  return (
    <div className="p-4 border rounded-md max-w-md mx-auto space-y-4">
      <input
        type="number"
        placeholder="Angebot-ID eingeben"
        value={offerId ?? ""}
        onChange={(e) => setOfferId(parseInt(e.target.value))}
        className="w-full border px-2 py-1 rounded"
      />
      <button
        onClick={handleEvaluate}
        disabled={loading || !offerId}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Angebot bewerten
      </button>

      {loading && <p>⏳ Bewertung läuft...</p>}
      {error && <p className="text-red-600">❌ {error}</p>}
      {result && (
        <div className="flex items-center gap-3">
          <span
            className={`w-5 h-5 rounded-full ${colorMap[result.status]}`}
            title={result.status}
          />
          <span>{result.comment}</span>
        </div>
      )}
    </div>
  );
}
