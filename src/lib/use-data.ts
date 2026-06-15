"use client";

import { useState, useEffect } from "react";
import type { Event, Project, Sermon } from "@/lib/sanity";

export function useEvents() {
  const [data, setData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/google-calendar", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (!cancelled) setData(Array.isArray(json) ? json : (json.data ?? []));
      } catch {
        // fallback ignored
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return { data, loading };
}

export function useProjects() {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/data?type=projects");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (!cancelled) setData(json.data ?? json);
      } catch {
        // fallback ignored
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return { data, loading };
}

export function useSermons() {
  const [data, setData] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/data?type=sermons");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (!cancelled) setData(json.data ?? json);
      } catch {
        // fallback ignored
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  return { data, loading };
}
