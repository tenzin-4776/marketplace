const API_BASE_URL = "http://localhost:5001/api";

export async function checkHealth() {
  const response = await fetch(`${API_BASE_URL}/health`);

  if (!response.ok) {
    throw new Error("Unable to connect to the marketplace API");
  }

  return response.json();
}