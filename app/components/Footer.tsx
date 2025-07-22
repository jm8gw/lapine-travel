"use client";

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <p>Call: 703-850-1849</p>
                <p>Email Us</p>
                <div className="mt-3">
                  <img
                    alt="Fontaine Travel"
                    className="h-8"
                    src="/assets/fontaine-travel-logo-Db8JY4q0.png"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Registration Information</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Fla. Seller of Travel Reg. No. ST37113</p>
                <p>California Seller of Travel Registration Number: 2089491-50</p>
                <p>
                  Registration as a seller of travel does not constitute approval by the
                  State of California.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              ©2025 Fontaine Travel. Terms &amp; Conditions
            </p>
          </div>
        </div>
      </footer>
    );
  }
  