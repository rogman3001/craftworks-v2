export type EvaluationResult = {
  bewertung: "rot" | "gelb" | "grün";
  kommentare: string[];
};

export async function evaluateOffer(offerId: number): Promise<EvaluationResult[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bewerten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
    },
    body: JSON.stringify({ offer_id: offerId }),
  });

  if (!res.ok) {
    throw new Error(`Fehler: ${res.statusText}`);
  }

  return res.json();
}