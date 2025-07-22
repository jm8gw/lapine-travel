export default function RegistrationForm() {
    return (
      <section
        id="booking-form"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-2xl border-0">
            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
              <div className="text-3xl font-bold">Sign up here to reserve your room</div>
            </div>
  
            <div className="p-8 bg-white">
              <form className="space-y-8">
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-700 mb-2">
                    <a
                      href="https://www.sonesta.com/royal-sonesta/pr/carolina/royal-sonesta-san-juan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      Royal Sonesta San Juan
                    </a>
                  </p>
                  <p className="text-md text-gray-700 font-medium mb-2">
                    Please make your flight reservations prior to completing this form.
                  </p>
                  <p className="text-md text-gray-700 mb-2">
                    Fontaine Travel will make all hotel reservations for travelers.
                  </p>
                  <p className="text-md text-gray-700 font-bold">
                    All reservations MUST be booked by October 21, 2025 or reservation is not guaranteed.
                  </p>
                </div>
  
                {/* Personal Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                  </div>
  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="attendeeName" className="text-sm text-gray-700 font-medium">
                        Attendee Name *
                      </label>
                      <input
                        type="text"
                        id="attendeeName"
                        name="attendeeName"
                        placeholder="Attendee Name"
                        value={formData.attendeeName}
                        onChange={handleChange}
                        required
                        className="mt-1 h-9 w-full rounded-md border border-gray-300 px-3 py-1 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
  
                    <div>
                      <label htmlFor="guestName" className="text-sm text-gray-700 font-medium">
                        Guest Name
                      </label>
                      <input
                        type="text"
                        id="guestName"
                        name="guestName"
                        placeholder="Guest Name"
                        value={formData.guestName}
                        onChange={handleChange}
                        className="mt-1 h-9 w-full rounded-md border border-gray-300 px-3 py-1 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
  
                {/* Submit Button */}
                <div className="text-center pt-6 border-t">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-md"
                  >
                    Submit Here
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  