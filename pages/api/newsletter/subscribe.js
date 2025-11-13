export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.trim()) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID;
  const apiKey = process.env.BEEHIIV_API_KEY;

  if (!publicationId || !apiKey) {
    console.error("Missing Beehiiv configuration");
    return res.status(500).json({
      error: "Newsletter service is not configured. Please contact the site administrator.",
    });
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Handle Beehiiv API errors
      const errorMessage =
        data?.message ||
        data?.error ||
        `Subscription failed: ${response.statusText}`;
      return res.status(response.status).json({ error: errorMessage });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Beehiiv API error:", error);
    return res.status(500).json({
      error: "Failed to subscribe. Please try again later.",
    });
  }
}

