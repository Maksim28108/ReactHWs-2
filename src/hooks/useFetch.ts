import { useEffect, useState } from "react";

const STORAGE_KEY = "fetch_logs";

interface LogEntry {
  timestamp: string;
  url: string;
  method: string;
  payload: unknown;
  responseStatus: number | "ERROR";
  error?: string;
}

function saveLog(entry: LogEntry): void {
  try {
    const existing: LogEntry[] =
      JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") || [];
    existing.push(entry);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (e) {
    console.error("[useFetch] failed to save log to localStorage:", e);
  }
}

interface UseFetchResult<T> {
  data: T | null;
  status: number | null;
  error: Error | null;
  loading: boolean;
}

export default function useFetch<T = unknown>(
  url: string,
  options: RequestInit = {}
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const optionsKey = JSON.stringify(options);

  useEffect(() => {
    let cancelled = false;
    const parsedOptions: RequestInit = JSON.parse(optionsKey);
    const method = parsedOptions.method ?? "GET";
    const payload = parsedOptions.body ?? null;

    console.log(
      "[useFetch] -> " + method + " " + url,
      payload ? { payload } : ""
    );
    setLoading(true);
    setError(null);

    fetch(url, parsedOptions)
      .then(async (res) => {
        const json = await res.json().catch(() => null);
        if (cancelled) return;

        setData(json as T);
        setStatus(res.status);
        setLoading(false);

        const entry: LogEntry = {
          timestamp: new Date().toISOString(),
          url,
          method,
          payload,
          responseStatus: res.status,
        };
        console.log("[useFetch] <- " + res.status + " " + url);
        saveLog(entry);
      })
      .catch((err: Error) => {
        if (cancelled) return;

        setError(err);
        setLoading(false);

        const entry: LogEntry = {
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
