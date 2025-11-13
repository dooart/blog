import cn from "classnames";
import { useState } from "react";

export default function NewsletterForm({
  title = "lab notes newsletter",
  description = "behind-the-scenes chaos from coding experiments. see what breaks before it works.",
  showInline = false,
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message || "Failed to subscribe. Please try again."
      );
    }
  };

  const formContent = (
    <form
      onSubmit={handleSubmit}
      className={cn("w-full", {
        "flex flex-col sm:flex-row gap-3": showInline,
        "flex flex-col gap-3": !showInline,
      })}
      aria-label="Newsletter subscription form"
    >
      <div className={cn("flex-1", { "w-full": !showInline })}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "loading" || status === "success"}
          className={cn(
            "w-full px-4 py-3 border-4 border-zinc-800 font-mono",
            "focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "placeholder:text-zinc-400"
          )}
          aria-label="Email address"
          aria-required="true"
          aria-invalid={status === "error"}
          aria-describedby={
            status === "error" ? "newsletter-error" : undefined
          }
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className={cn(
          "px-6 py-3 border-4 border-zinc-800 bg-white font-mono font-bold",
          "hover:bg-zinc-100 active:bg-zinc-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2",
          {
            "w-full sm:w-auto": showInline,
            "w-full": !showInline,
          }
        )}
        aria-label="Subscribe to newsletter"
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );

  if (showInline) {
    return (
      <div className="my-8 py-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-mono font-bold mb-2">{title}</h3>
          <p className="text-sm mb-4 text-zinc-600">{description}</p>
          {formContent}
          {status === "success" && (
            <p
              className="mt-4 text-sm text-green-700 font-mono"
              role="status"
              aria-live="polite"
            >
              ✓ Successfully subscribed!
            </p>
          )}
          {status === "error" && (
            <p
              id="newsletter-error"
              className="mt-4 text-sm text-red-700 font-mono"
              role="alert"
              aria-live="assertive"
            >
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="my-12 flex justify-center">
      <div className="w-full max-w-md border-4 border-zinc-800 bg-white p-6 shadow-pixel">
        <h3 className="text-2xl font-mono font-bold mb-2 text-center">
          {title}
        </h3>
        <p className="text-sm mb-6 text-center text-zinc-600">
          {description}
        </p>
        {formContent}
        {status === "success" && (
          <p
            className="mt-4 text-sm text-green-700 font-mono text-center"
            role="status"
            aria-live="polite"
          >
            ✓ Successfully subscribed!
          </p>
        )}
        {status === "error" && (
          <p
            id="newsletter-error"
            className="mt-4 text-sm text-red-700 font-mono text-center"
            role="alert"
            aria-live="assertive"
          >
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}

