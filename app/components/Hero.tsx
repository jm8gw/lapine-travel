"use client";

import Link from "next/link";
import { useState } from "react";
import RegistrationForm from "../register/RegistrationForm2";
import RegistrationLookupModal from "./RegistrationLookupModal";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    console.log("Modal closed, refreshing page..."); // Log message for debugging
    setModalOpen(false);
    window.location.reload(); // Refresh page when modal closes
  };

  return (
    <section
      className="relative h-[60vh] flex items-center justify-center text-center text-white top-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/sonesta_pool_hero-Bh9uOX9P.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          Discover the Magic of
          <br />
          Puerto Rico
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Join The Lapine Group team from November 13–16, 2025 at the
          <br />
          Royal Sonesta San Juan for a few days of business and fun.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Register for the Meeting
          </button>
          <button
            onClick={() => setModalOpen(true)}
            disabled={true}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Update Your Registration
          </button>
        </div>

        {/* Update Modal (with email lookup) */}
        <RegistrationLookupModal
          open={modalOpen}
          onClose={handleClose}
        />

        {/* Register Modal (new registration form) */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white max-h-[90vh] overflow-y-auto w-full max-w-3xl p-6 rounded-lg shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                aria-label="Close"
              >
                &times;
              </button>
              <RegistrationForm />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
