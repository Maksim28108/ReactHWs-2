import { useEffect, useState } from "react";

const STORAGE_KEY = "fetch_logs";

function saveLog(entry) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    existing.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (e) {
    console.error("[useFetch] failed to save log to localStorage:", e);
  }
}

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const optionsKey = JSON.stringify(options);

  useEffect(() => {
    let cancelled = false;
    const method = options.method || "GET";
    const payload = options.body ?? null;

    console.log(
      "[useFetch] -> " + method + " " + url,
      payload ? { payload } : "",
    );
    setLoading(true);
    setError(null);

    fetch(url, options)
      .then(async (res) => {
        const json = await res.json().catch(() => null);
        if (cancelled) return;

        setData(json);
        setStatus(res.status);
        setLoading(false);

        const entry = {
          timestamp: new Date().toISOString(),
          url,
          method,
          payload,
          responseStatus: res.status,
        };

        console.log("[useFetch] <- " + res.status + " " + url);
        saveLog(entry);
      })
      .catch((err) => {
        if (cancelled) return;

        setError(err);
        setLoading(false);

        const entry = {
          timestamp: new Date().toISOString(),
          url,
          method,
          payload,
          responseStatus: "ERROR",
          error: err.message,
        };

        console.error("[useFetch] !! " + url, err);
        saveLog(entry);
      });

    return () => {
      cancelled = true;
    };
  }, [url, optionsKey]);

  return { data, status, error, loading };
}
