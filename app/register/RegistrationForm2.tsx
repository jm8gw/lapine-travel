"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  initialData?: string[] | null;
  onClose?: () => void;
};

export default function RegistrationForm({ initialData, onClose }: Props) {
  const [formData, setFormData] = useState({
    attendeeName: initialData?.[2] || "",
    guestName: initialData?.[3] || "",
    email: initialData?.[1] || "",
    phone: initialData?.[4] || "",
    //attendeeTshirtSize: initialData?.[5] || "",
    //guestTshirtSize: initialData?.[6] || "",
    arrivalDate: initialData?.[5] || "",
    arrivalAirline: initialData?.[6] || "",
    arrivalFlightNumber: initialData?.[7] || "",
    arrivalTime: initialData?.[8] || "",
    departureDate: initialData?.[9] || "",
    departureAirline: initialData?.[10] || "",
    departureFlightNumber: initialData?.[11] || "",
    departureTime: initialData?.[12] || "",
    departureAirport: initialData?.[13] || "",
    roomType: initialData?.[14] || "",
    checkInDate: initialData?.[15] || "",
    checkOutDate: initialData?.[16] || "",
    eventAttendance: {
      fridayDinnerAttendee:
        initialData?.[17]?.includes("fridayDinnerAttendee") || false,
      fridayDinnerGuest:
        initialData?.[17]?.includes("fridayDinnerGuest") || false,
      saturdayScavengerAttendee:
        initialData?.[17]?.includes("saturdayScavengerAttendee") || false,
      saturdayScavengerGuest:
        initialData?.[17]?.includes("saturdayScavengerGuest") || false,
      saturdayDinnerAttendee:
        initialData?.[17]?.includes("saturdayDinnerAttendee") || false,
      saturdayDinnerGuest:
        initialData?.[17]?.includes("saturdayDinnerGuest") || false,
    },
    foodAllergies: initialData?.[18] || "",
    mobilityIssues: initialData?.[19] || "",
    additionalNotes: initialData?.[20] || "",
    // Old ones commented out for reference
    // arrivalFlightNumber: "",
    // arrivalTime: "",
    // departureDate: "",
    // departureAirline: "",
    // departureFlightNumber: "",
    // departureTime: "",
    // departureAirport: "",
    // roomType: "",
    // checkInDate: "",
    // checkOutDate: "",
    // eventAttendance: {
    //   fridayDinnerAttendee: false,
    //   fridayDinnerGuest: false,
    //   saturdayScavengerAttendee: false,
    //   saturdayScavengerGuest: false,
    //   saturdayDinnerAttendee: false,
    //   saturdayDinnerGuest: false,
    // },
    // foodAllergies: "",
    // mobilityIssues: "",
    // additionalNotes: "",
    token: initialData?.[21] || "", // Will be set later from URL or backend lookup
  });

  //console.log("RegistrationForm2.tsx: formData initialized with:", formData);
  //   const searchParams = useSearchParams();
  //const tokenFromUrl = searchParams.get("token");
  const tokenFromUrl = null;
  //const [token, setToken] = useState<string | null>(tokenFromUrl);
  //   const emailFromUrl = searchParams.get("email");
  //   const [UrlEmail, setUrlEmail] = useState<string | null>(emailFromUrl);

  // Depreciated
  useEffect(() => {
    if (tokenFromUrl) {
      fetch(`/api/register/lookup?token=${tokenFromUrl}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data) {
            setFormData(mapRowToFormData(data.data));
            //setToken(tokenFromUrl);
          }
        });
    }
  }, [tokenFromUrl]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      eventAttendance: {
        ...prev.eventAttendance,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        //token, // must pass this or else the backend generates a new one
      }),
    });
    const result = await response.json();
    alert(
      result.success ? "Registration submitted!" : `Error: ${result.error}`
    );
    window.location.reload();
  };

  function mapRowToFormData(row: string[]) {
    return {
      attendeeName: row[2] || "",
      guestName: row[3] || "",
      email: row[1] || "",
      phone: row[4] || "",
      //attendeeTshirtSize: row[5] || "",
      //guestTshirtSize: row[6] || "",
      arrivalDate: row[5] || "",
      arrivalAirline: row[6] || "",
      arrivalFlightNumber: row[7] || "",
      arrivalTime: row[8] || "",
      departureDate: row[9] || "",
      departureAirline: row[10] || "",
      departureFlightNumber: row[11] || "",
      departureTime: row[12] || "",
      departureAirport: row[13] || "",
      roomType: row[14] || "",
      checkInDate: row[15] || "",
      checkOutDate: row[16] || "",
      eventAttendance: parseEventAttendance(row[17] || ""),
      foodAllergies: row[18] || "",
      mobilityIssues: row[19] || "",
      additionalNotes: row[20] || "",
      token: row[21] || "", // Ensure token is included
    };
  }

  function parseEventAttendance(value: string): {
    fridayDinnerAttendee: boolean;
    fridayDinnerGuest: boolean;
    saturdayScavengerAttendee: boolean;
    saturdayScavengerGuest: boolean;
    saturdayDinnerAttendee: boolean;
    saturdayDinnerGuest: boolean;
  } {
    const keys = [
      "fridayDinnerAttendee",
      "fridayDinnerGuest",
      "saturdayScavengerAttendee",
      "saturdayScavengerGuest",
      "saturdayDinnerAttendee",
      "saturdayDinnerGuest",
    ];

    const selected = value.split(",").map((v) => v.trim());

    return {
      fridayDinnerAttendee: selected.includes("fridayDinnerAttendee"),
      fridayDinnerGuest: selected.includes("fridayDinnerGuest"),
      saturdayScavengerAttendee: selected.includes("saturdayScavengerAttendee"),
      saturdayScavengerGuest: selected.includes("saturdayScavengerGuest"),
      saturdayDinnerAttendee: selected.includes("saturdayDinnerAttendee"),
      saturdayDinnerGuest: selected.includes("saturdayDinnerGuest"),
    };
  }

  return (
    <form onSubmit={handleSubmit} className="py-16 px-4 sm:px-6 lg:px-8">
      {/* bg-gradient-to-br from-blue-50 to-green-50 */}
      {/* Header Section */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
        <div className="text-3xl font-bold">
          Sign up here to reserve your room
        </div>
      </div>
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
          All reservations MUST be booked by October 21, 2025 or reservation is
          not guaranteed.
        </p>
      </div>
      {/* Personal Information */}
      <section>
        <div className="space-y-6 border-t pt-8">
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
            <h3 className="text-xl font-semibold text-gray-900">
              Personal Information
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                data-slot="label"
                className="flex text-sm font-medium text-gray-700"
                htmlFor="attendeeName"
              >
                Attendee Name *
              </label>
              <input
                name="attendeeName"
                placeholder="Attendee Name"
                value={formData.attendeeName}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                data-slot="label"
                className="flex text-sm font-medium text-gray-700"
                htmlFor="guestName"
              >
                Guest Name
              </label>
              <input
                name="guestName"
                placeholder="Guest Name"
                value={formData.guestName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                data-slot="label"
                className="flex text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                data-slot="label"
                className="flex text-sm font-medium text-gray-700"
                htmlFor="phone"
              >
                Cell Phone Number *
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="Cell Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            {/* Depreciated -- no longer recording tshirt sizes */}
            {/* <select
							name="attendeeTshirtSize"
							value={formData.attendeeTshirtSize}
							onChange={handleChange}
							className="border border-gray-300 text-gray-900 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="">Attendee T-Shirt Size</option>
							<option value="XS">XS</option>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select>
						<select
							name="guestTshirtSize"
							value={formData.guestTshirtSize}
							onChange={handleChange}
							className="border border-gray-300 text-gray-900 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="">Guest T-Shirt Size</option>
							<option value="XS">XS</option>
							<option value="S">S</option>
							<option value="M">M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
							<option value="XXL">XXL</option>
							<option value="XXXL">XXXL</option>
						</select> */}
          </div>
        </div>
      </section>

      {/* Flight Information */}
      <section>
        <div className="space-y-6 border-t pt-8">
          <div className="flex items-center space-x-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-plane h-5 w-5 text-blue-600"
              aria-hidden="true"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-900">
              Flight Information
            </h3>
          </div>
          <p className="text-gray-700 mb-6 text-left">
            The Lapine Group will provide group transportation to and from the
            airport. Information about times and airport location will be shared
            closer to departure.
          </p>
          <div className="bg-green-50 p-6 rounded-lg">
            <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <span className="text-green-600 mr-2 font-bold">
                ✈️ Arrival Flight
              </span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  data-slot="label"
                  className="flex text-sm font-medium text-gray-700"
                  htmlFor="arrivalDate"
                >
                  Arrival Date
                </label>
                <input
                  name="arrivalDate"
                  type="date"
                  placeholder="Arrival Date"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                />
              </div>
              <div>
                <label
                  data-slot="label"
                  className="flex text-sm font-medium text-gray-700"
                  htmlFor="arrivalAirline"
                >
                  Arrival Airline
                </label>
                <input
                  name="arrivalAirline"
                  placeholder="e.g., American Airlines, Delta, JetBlue"
                  value={formData.arrivalAirline}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placeholder-gray-400"
                />
              </div>
              <div>
                <label
                  data-slot="label"
                  className="flex text-sm font-medium text-gray-700"
                  htmlFor="arrivalFlightNumber"
                >
                  Flight Number
                </label>
                <input
                  name="arrivalFlightNumber"
                  placeholder="e.g., AA1234, DL567"
                  value={formData.arrivalFlightNumber}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placeholder-gray-400"
                />
              </div>
              <div>
                <label
                  data-slot="label"
                  className="flex text-sm font-medium text-gray-700"
                  htmlFor="arrivalTime"
                >
                  Arrival Time
                </label>
                <input
                  name="arrivalTime"
                  type="time"
                  placeholder="Arrival Time"
                  value={formData.arrivalTime}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                />
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <span className="text-blue-600 mr-2 font-bold">
                🛫 Departure Flight
              </span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  data-slot="label"
                  className="flex text-sm font-medium text-gray-700"
                  htmlFor="departureDate"
                >
                  Departure Date
                </label>
                <input
                  name="departureDate"
                  type="date"
                  placeholder="Departure Date"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                />
              </div>
              <div>
                <label
                  data-slot="label"
                  className="flex text-sm font-medium text-gray-700"
                  htmlFor="departureAirline"
                >
                  Departure Airline
                </label>
                <input
                  name="departureAirline"
                  placeholder="e.g., American Airlines, Delta, JetBlue"
                  value={formData.departureAirline}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placeholder-gray-400"
                />
              </div>
              <div>
                <label
                  data-slot="label"
                  className="flex text-sm font-medium text-gray-700"
                  htmlFor="departureFlightNumber"
                >
                  Flight Number
                </label>
                <input
                  name="departureFlightNumber"
                  placeholder="e.g., AA1234, DL567"
                  value={formData.departureFlightNumber}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placeholder-gray-400"
                />
              </div>
              <div>
                <label
                  data-slot="label"
                  className="flex text-sm font-medium text-gray-700"
                  htmlFor="departureTime"
                >
                  Departure Time
                </label>
                <input
                  name="departureTime"
                  type="time"
                  placeholder="Departure Time"
                  value={formData.departureTime}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                />
              </div>
              <div>
                <label
                  data-slot="label"
                  className="flex text-sm font-medium text-gray-700"
                  htmlFor="departureAirport"
                >
                  Departure Airport
                </label>
                <input
                  name="departureAirport"
                  placeholder="e.g., JFK, LAX, MIA"
                  value={formData.departureAirport}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Preferences */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-4">
          Accommodation Preferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="border border-gray-300 text-gray-900 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Room Type</option>
            <option value="2 beds">2 beds</option>
            <option value="King">King</option>
            <option value="Suite">Suite</option>
          </select>
          <input
            name="checkInDate"
            type="date"
            placeholder="Check-in Date"
            value={formData.checkInDate}
            onChange={handleChange}
            className="border border-gray-300 text-gray-900 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="checkOutDate"
            type="date"
            placeholder="Check-out Date"
            value={formData.checkOutDate}
            onChange={handleChange}
            className="border border-gray-300 text-gray-900 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* Event Attendance */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-4">
          Event Attendance
        </h2>
        <div className="space-y-6">
          {[
            { id: "fridayDinner", label: "Friday Night Dinner" },
            {
              id: "saturdayScavenger",
              label: "Saturday Scavenger Hunt with Lunch",
            },
            { id: "saturdayDinner", label: "Saturday Night Dinner" },
          ].map((event) => (
            <div key={event.id} className="bg-gray-700 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">{event.label}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={`${event.id}Attendee`}
                    checked={
                      formData.eventAttendance[
                        `${event.id}Attendee` as keyof typeof formData.eventAttendance
                      ]
                    }
                    onChange={handleCheckbox}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 text-gray-900 rounded"
                  />
                  <span>Attendee will attend</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={`${event.id}Guest`}
                    checked={
                      formData.eventAttendance[
                        `${event.id}Guest` as keyof typeof formData.eventAttendance
                      ]
                    }
                    onChange={handleCheckbox}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 text-gray-900 rounded"
                  />
                  <span>Guest will attend</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Requirements */}
      <section>
        <div className="space-y-6 border-t pt-8">
          <div className="flex items-center space-x-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-utensils h-5 w-5 text-blue-600"
              aria-hidden="true"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
              <path d="M7 2v20"></path>
              <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-900">
              Special Requirements
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="foodAllergies"
                className="flex items-center gap-2 text-sm text-gray-700 font-medium"
              >
                Food Allergies & Dietary Restrictions
              </label>
              <textarea
                name="foodAllergies"
                rows={4}
                placeholder="Please list any food allergies or dietary restrictions..."
                value={formData.foodAllergies}
                onChange={handleChange}
                className="mt-1 w-full min-h-16 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="mobilityIssues"
                className="flex items-center gap-2 text-sm text-gray-700 font-medium"
              >
                Mobility Issues & Accessibility Needs
              </label>
              <textarea
                name="mobilityIssues"
                rows={4}
                placeholder="Please describe any mobility issues or accessibility requirements..."
                value={formData.mobilityIssues}
                onChange={handleChange}
                className="mt-1 w-full min-h-16 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Notes */}
      <section>
        <div className="space-y-6 border-t pt-8">
          <div className="flex items-center space-x-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-message-square h-5 w-5 text-blue-600"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-900">
              Additional Notes
            </h3>
          </div>
          <div>
            <label
              htmlFor="additionalNotes"
              className="flex items-center gap-2 text-sm text-gray-700 font-medium"
            >
              Additional Notes for Organizer
            </label>
            <textarea
              name="additionalNotes"
              rows={4}
              placeholder="Please share any additional information or special requests..."
              value={formData.additionalNotes}
              onChange={handleChange}
              className="mt-1 w-full min-h-16 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>
        </div>
      </section>

      <button
        type="submit"
        className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-md text-lg font-semibold shadow hover:from-blue-700 hover:to-green-700 hover:scale-[1.02] transition-transform"
      >
        Submit
      </button>
    </form>
  );
}
