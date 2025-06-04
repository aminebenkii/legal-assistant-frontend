let apiEndpoint: string | null = null;

async function getApiEndpoint(): Promise<string> {
  if (apiEndpoint) return apiEndpoint;

  const res = await fetch("/api-config.json");
  const config = await res.json();
  apiEndpoint = config.apiEndpoint;

  if (!apiEndpoint) throw new Error("Missing API endpoint in config");
  return apiEndpoint;
}

export async function getFlightReply({
  query,
  sessionId,
  currency,
}: {
  query: string;
  sessionId: string;
  currency: string;
}): Promise<string> {
  const API_ENDPOINT = await getApiEndpoint();

  const res = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, query, currency }),
  });

  const data = await res.json();
  console.log("API response:", data);

  if (!res.ok) throw new Error("API call failed");
  return data.answer || "⚠️ Empty answer received.";
}
