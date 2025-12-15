const BASE_URL = "http://localhost:8000";

export const uploadDocuments = async (formData) => {
  const response = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
};

export const askQuestion = async (question) => {
  const response = await fetch(`${BASE_URL}/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.detail || "Ask failed");
  }

  return response.json();
};
