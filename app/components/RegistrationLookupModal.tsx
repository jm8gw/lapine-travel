// components/RegistrationLookupModal.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import RegistrationForm from "../register/RegistrationForm2";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function RegistrationLookupModal({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [lookupState, setLookupState] = useState<"form" | "loading" | "found" | "not-found">("form");
  const [prefillData, setPrefillData] = useState<string[] | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    setLookupState("loading");

    const res = await fetch(`/api/register/lookup-by-email?email=${encodeURIComponent(email)}`);
    if (res.ok) {
      const json = await res.json();
      setPrefillData(json.data);
      console.log("Lookup result:", json.data);
      setLookupState("found");
    } else {
      setPrefillData(null);
      setLookupState("not-found");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div ref={modalRef} className="bg-white max-h-[90vh] overflow-y-auto w-full max-w-3xl p-6 rounded-lg shadow-lg relative"
              onClick={(e) => e.stopPropagation()}>
        {lookupState === "form" && (
          <form onSubmit={handleLookup} className="space-y-4">
            <h2 className="text-xl text-gray-600 font-semibold text-center">Look Up Your Registration</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter the email you used to register"
              required
              className="w-full border px-4 py-2 rounded-md text-gray-600"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md w-full hover:bg-blue-700 transition"
            >
              Look me up
            </button>
          </form>
        )}

        {lookupState === "loading" && <p className="text-center py-4 text-gray-600">Looking you up...</p>}

        {(lookupState === "found" || lookupState === "not-found") && (
          <RegistrationForm initialData={prefillData} onClose={onClose} />
        )}
      </div>
    </div>
  );
}
