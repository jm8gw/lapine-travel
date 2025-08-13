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
    //arrivalAirline: initialData?.[6] || "",
    arrivalFlightNumber: initialData?.[6] || "",
    arrivalTime: initialData?.[7] || "",
    guestHasDifferentArrivalFlight: initialData?.[8] === "TRUE",
    guestArrivalDate: initialData?.[9] || "",
    //guestArrivalAirline: initialData?.[11] || "",
    guestArrivalFlightNumber: initialData?.[10] || "",
    guestArrivalTime: initialData?.[11] || "",
    departureDate: initialData?.[12] || "",
    //departureAirline: initialData?.[15] || "",
    departureFlightNumber: initialData?.[13] || "",
    departureTime: initialData?.[14] || "",
    //departureAirport: initialData?.[15] || "",
    guestHasDifferentDepartureFlight: initialData?.[15] === "TRUE",
    guestDepartureDate: initialData?.[16] || "",
    //guestDepartureAirline: initialData?.[21] || "",
    guestDepartureFlightNumber: initialData?.[17] || "",
    guestDepartureTime: initialData?.[18] || "",
    //guestDepartureAirport: initialData?.[20] || "",
    roomType: initialData?.[19] || "",
    oceanView: initialData?.[20] || "",
    checkInDate: initialData?.[21] || "",
    checkOutDate: initialData?.[22] || "",
    eventAttendance: {
      thursdayDinnerAttendee:
        initialData?.[23]?.includes("thursdayDinnerAttendee") || false,
      thursdayDinnerGuest:
        initialData?.[23]?.includes("thursdayDinnerGuest") || false,
      fridayDinnerAttendee:
        initialData?.[23]?.includes("fridayDinnerAttendee") || false,
      fridayDinnerGuest:
        initialData?.[23]?.includes("fridayDinnerGuest") || false,
      saturdayScavengerAttendee:
        initialData?.[23]?.includes("saturdayScavengerAttendee") || false,
      saturdayScavengerGuest:
        initialData?.[23]?.includes("saturdayScavengerGuest") || false,
      saturdayDinnerAttendee:
        initialData?.[23]?.includes("saturdayDinnerAttendee") || false,
      saturdayDinnerGuest:
        initialData?.[23]?.includes("saturdayDinnerGuest") || false,
    },
    foodAllergies: initialData?.[24] || "",
    mobilityIssues: initialData?.[25] || "",
    additionalNotes: initialData?.[26] || "",
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
    token: initialData?.[27] || "", // Will be set later from URL or backend lookup
  });

  console.log("RegistrationForm2.tsx: formData initialized with:", formData);
  //   const searchParams = useSearchParams();
  //const tokenFromUrl = searchParams.get("token");
  const tokenFromUrl = null;
  //const [token, setToken] = useState<string | null>(tokenFromUrl);
  //   const emailFromUrl = searchParams.get("email");
  //   const [UrlEmail, setUrlEmail] = useState<string | null>(emailFromUrl);
	const [loading, setLoading] = useState(false);

  // Depreciated
  useEffect(() => {
		//console.log(formData.guestHasDifferentDepartureFlight);
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

  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  //   >
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const name = target.name;

    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
		setLoading(true);
		try {
			const response = await fetch("/api/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const result = await response.json();
			alert(
				result.success ? "Registration submitted!" : `Error: ${result.error}`
			);
			window.location.reload();
		} catch (err) {
			console.error("Submit failed:", err);
			alert("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
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
      //arrivalAirline: row[6] || "",
      arrivalFlightNumber: row[6] || "",
      arrivalTime: row[7] || "",
      guestHasDifferentArrivalFlight: row[8] === "TRUE",
      guestArrivalDate: row[9] || "",
      //guestArrivalAirline: row[11] || "",
      guestArrivalFlightNumber: row[10] || "",
      guestArrivalTime: row[11] || "",
      departureDate: row[12] || "",
      //departureAirline: row[15] || "",
      departureFlightNumber: row[13] || "",
      departureTime: row[14] || "",
      //departureAirport: row[15] || "",
      guestHasDifferentDepartureFlight: row[15] === "TRUE",
      guestDepartureDate: row[16] || "",
      //guestDepartureAirline: row[21] || "",
      guestDepartureFlightNumber: row[17] || "",
      guestDepartureTime: row[18] || "",
      //guestDepartureAirport: row[20] || "",
      roomType: row[19] || "",
      oceanView: row[20] || "",
      checkInDate: row[21] || "",
      checkOutDate: row[22] || "",
      eventAttendance: parseEventAttendance(row[23] || ""),
      foodAllergies: row[24] || "",
      mobilityIssues: row[25] || "",
      additionalNotes: row[26] || "",
      token: row[27] || "", // Ensure token is included
    };
  }

  function parseEventAttendance(value: string): {
    thursdayDinnerAttendee: boolean;
    thursdayDinnerGuest: boolean;
    fridayDinnerAttendee: boolean;
    fridayDinnerGuest: boolean;
    saturdayScavengerAttendee: boolean;
    saturdayScavengerGuest: boolean;
    saturdayDinnerAttendee: boolean;
    saturdayDinnerGuest: boolean;
  } {
    const keys = [
      "thursdayDinnerAttendee",
      "thursdayDinnerGuest",
      "fridayDinnerAttendee",
      "fridayDinnerGuest",
      "saturdayScavengerAttendee",
      "saturdayScavengerGuest",
      "saturdayDinnerAttendee",
      "saturdayDinnerGuest",
    ];

    const selected = value.split(",").map((v) => v.trim());

    return {
      thursdayDinnerAttendee: selected.includes("thursdayDinnerAttendee"),
      thursdayDinnerGuest: selected.includes("thursdayDinnerGuest"),
      fridayDinnerAttendee: selected.includes("fridayDinnerAttendee"),
      fridayDinnerGuest: selected.includes("fridayDinnerGuest"),
      saturdayScavengerAttendee: selected.includes("saturdayScavengerAttendee"),
      saturdayScavengerGuest: selected.includes("saturdayScavengerGuest"),
      saturdayDinnerAttendee: selected.includes("saturdayDinnerAttendee"),
      saturdayDinnerGuest: selected.includes("saturdayDinnerGuest"),
    };
  }

  const formatTimeValue = (time: string): string => {
    if (!time) return "";
  
    // Handle 12-hour format with AM/PM
    if (time.includes("AM") || time.includes("PM")) {
      const [t, modifier] = time.trim().split(" ");
      let [hours, minutes] = t.split(":").map(Number);
  
      if (modifier === "PM" && hours < 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;
  
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
    }
  
    // Already in 24-hour format
    const [hour, minute] = time.split(":").map((val) => val.padStart(2, "0"));
    return `${hour}:${minute}`;
  }

  const toDateInputFormat = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return "";
    return date.toISOString().split("T")[0]; // "2025-08-13"
  };
	

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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-400 text-gray-700"
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-400 text-gray-700"
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-400 text-gray-700"
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
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm placeholder-gray-400 text-gray-700"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  value={toDateInputFormat(formData.arrivalDate)}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                />
              </div>
              {/* <div>
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
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placehorder-gray-400 text-gray-700"
                />
              </div> */}
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
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placehorder-gray-400 text-gray-700"
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
                  value={formatTimeValue(formData.arrivalTime)}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                />
              </div>
              {/* Guest Arrival Checkbox */}
              <div className="md:col-span-3">
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="guestHasDifferentArrivalFlight"
                    checked={!!formData.guestHasDifferentArrivalFlight}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    My guest is arriving on a different flight
                  </span>
                </label>
              </div>
            </div>
            {/* Guest flight fields (conditionally rendered) */}
            {formData.guestHasDifferentArrivalFlight && (
              <div className="mt-6">
                <h5 className="text-md font-medium text-gray-800 mb-4">
                  Guest Arrival Flight Details
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      className="flex text-sm font-medium text-gray-700"
                      htmlFor="guestArrivalDate"
                    >
                      Arrival Date
                    </label>
                    <input
                      type="date"
                      name="guestArrivalDate"
                      value={toDateInputFormat(formData.guestArrivalDate)}
                      onChange={handleChange}
                      className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                    />
                  </div>
                  {/* <div>
                    <label
                      className="flex text-sm font-medium text-gray-700"
                      htmlFor="guestArrivalAirline"
                    >
                      Airline
                    </label>
                    <input
                      type="text"
                      name="guestArrivalAirline"
                      placeholder="e.g., United, Southwest"
                      value={formData.guestArrivalAirline}
                      onChange={handleChange}
                      className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placeholder-gray-400 text-gray-700"
                    />
                  </div> */}
                  <div>
                    <label
                      className="flex text-sm font-medium text-gray-700"
                      htmlFor="guestArrivalFlightNumber"
                    >
                      Flight Number
                    </label>
                    <input
                      type="text"
                      name="guestArrivalFlightNumber"
                      placeholder="e.g., UA4567"
                      value={formData.guestArrivalFlightNumber}
                      onChange={handleChange}
                      className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placeholder-gray-400 text-gray-700"
                    />
                  </div>
                  <div>
                    <label
                      className="flex text-sm font-medium text-gray-700"
                      htmlFor="guestArrivalTime"
                    >
                      Arrival Time
                    </label>
                    <input
                      type="time"
                      name="guestArrivalTime"
                      value={formatTimeValue(formData.guestArrivalTime)}
                      onChange={handleChange}
                      className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <span className="text-blue-600 mr-2 font-bold">
                🛫 Departure Flight
              </span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  value={toDateInputFormat(formData.departureDate)}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                />
              </div>
              {/* <div>
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
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placehorder-gray-400 text-gray-700"
                />
              </div> */}
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
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placehorder-gray-400 text-gray-700"
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
                  value={formatTimeValue(formData.departureTime)}
                  onChange={handleChange}
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                />
              </div>
              {/* <div>
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
                  className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placehorder-gray-400 text-gray-700"
                />
              </div> */}
              {/* Guest Departure Checkbox */}
              <div className="md:col-span-3">
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="guestHasDifferentDepartureFlight"
                    checked={!!formData.guestHasDifferentDepartureFlight}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    My guest is departing on a different flight
                  </span>
                </label>
              </div>
            </div>
            {/* Guest flight fields (conditionally rendered) */}
            {formData.guestHasDifferentDepartureFlight && (
              <div className="mt-6">
                <h5 className="text-md font-medium text-gray-800 mb-4">
                  Guest Departure Flight Details
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      className="flex text-sm font-medium text-gray-700"
                      htmlFor="guestDepartureDate"
                    >
                      Departure Date
                    </label>
                    <input
                      type="date"
                      name="guestDepartureDate"
                      value={toDateInputFormat(formData.guestDepartureDate)}
                      onChange={handleChange}
                      className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                    />
                  </div>
                  {/* <div>
                    <label
                      className="flex text-sm font-medium text-gray-700"
                      htmlFor="guestDepartureAirline"
                    >
                      Airline
                    </label>
                    <input
                      type="text"
                      name="guestDepartureAirline"
                      placeholder="e.g., United, Southwest"
                      value={formData.guestDepartureAirline}
                      onChange={handleChange}
                      className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placeholder-gray-400 text-gray-700"
                    />
                  </div> */}
                  <div>
                    <label
                      className="flex text-sm font-medium text-gray-700"
                      htmlFor="guestDepartureFlightNumber"
                    >
                      Flight Number
                    </label>
                    <input
                      type="text"
                      name="guestDepartureFlightNumber"
                      placeholder="e.g., UA4567"
                      value={formData.guestDepartureFlightNumber}
                      onChange={handleChange}
                      className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placeholder-gray-400 text-gray-700"
                    />
                  </div>
                  <div>
                    <label
                      className="flex text-sm font-medium text-gray-700"
                      htmlFor="guestDepartureTime"
                    >
                      Departure Time
                    </label>
                    <input
                      type="time"
                      name="guestDepartureTime"
                      value={formatTimeValue(formData.guestDepartureTime)}
                      onChange={handleChange}
                      className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
                    />
                  </div>
									{/* <div>
										<label
											data-slot="label"
											className="flex text-sm font-medium text-gray-700"
											htmlFor="guestDepartureAirport"
										>
											Departure Airport
										</label>
										<input
											name="guestDepartureAirport"
											placeholder="e.g., JFK, LAX, MIA"
											value={formData.guestDepartureAirport}
											onChange={handleChange}
											className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placehorder-gray-400 text-gray-700"
										/>
									</div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Accommodation Preferences */}
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar h-5 w-5 text-blue-600"
              aria-hidden="true"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-900">
              Accomodation Preferences
            </h3>
          </div>
          <p className="text-gray-700 mb-6 text-left text-sm">
            <li>
              The Lapine Group will cover a standard hotel room at <strong>$329/night, for Nov. 13th to 17th</strong>
            </li>
            <li>
              <strong>
                You will be charged an additional $60/night if you select &quot;Yes&quot; for Ocean View
              </strong>
            </li>
            <li>
              If you would like to arrive earlier, or stay extra nights, you
              will be responsible for the cost
            </li>
            <li>
              If you would like to pay for an upgrade to a suite, put a message
              in the Additional Notes field below
            </li>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                data-slot="label"
                className="flex text-sm font-medium text-gray-700"
                htmlFor="roomType"
              >
                Room Type
              </label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placehorder-gray-400 text-gray-700"
              >
                <option value="">Select Room Type</option>
                <option value="2 beds">2 beds</option>
                <option value="King">King</option>
              </select>
            </div>
            <div>
              <label
                data-slot="label"
                className="flex text-sm font-medium text-gray-700"
                htmlFor="oceanView"
              >
                Ocean View?
              </label>
              <select
                name="oceanView"
                value={formData.oceanView}
                onChange={handleChange}
                className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none placehorder-gray-400 text-gray-700"
              >
								<option value="">Select</option>
                <option value="No">No</option>
                <option value="Yes">Yes (+$60)</option>
              </select>
            </div>
            <div>
              <label
                data-slot="label"
                className="flex text-sm font-medium text-gray-700"
                htmlFor="checkInDate"
              >
                Check-in Date
              </label>
              <input
                name="checkInDate"
                type="date"
                placeholder="mm/dd/yyyy"
                value={formData.checkInDate}
                onChange={handleChange}
                className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
              />
            </div>
            <div>
              <label
                data-slot="label"
                className="flex text-sm font-medium text-gray-700"
                htmlFor="checkInDate"
              >
                Check-out Date
              </label>
              <input
                name="checkOutDate"
                type="date"
                placeholder="mm/dd/yyyy"
                value={formData.checkOutDate}
                onChange={handleChange}
                className="w-full h-9 px-3 py-1 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none text-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Attendance */}
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar h-5 w-5 text-blue-600"
              aria-hidden="true"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <h3 className="text-xl font-semibold text-gray-900">
              Event Attendance
            </h3>
          </div>
          <div className="space-y-6">
            {[
              {
                id: "thursdayDinner",
                label: "Thursday Night Cocktails and Dinner",
                bgColor: "bg-orange-50",
              },
              {
                id: "fridayDinner",
                label: "Friday Night Dinner",
                bgColor: "bg-blue-50",
              },
              {
                id: "saturdayScavenger",
                label: "Saturday Scavenger Hunt with Lunch",
                bgColor: "bg-green-50",
              },
              {
                id: "saturdayDinner",
                label: "Saturday Night Dinner",
                bgColor: "bg-purple-50",
              },
            ].map((event) => (
              <div key={event.id} className={`${event.bgColor} p-4 rounded-md`}>
                <h3 className="text-lg text-left text-gray-700 font-semibold mb-2">
                  {event.label}
                </h3>
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
                    <span className="text-gray-700">Attendee will attend</span>
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
                    <span className="text-gray-700">Guest will attend</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
                className="mt-1 w-full min-h-16 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-700"
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
                className="mt-1 w-full min-h-16 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-700"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              className="mt-1 w-full min-h-16 rounded-md border border-gray-300 bg-transparent px-3 py-2 text-base shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-700"
            />
          </div>
        </div>
      </section>

			<button
				type="submit"
				className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-md text-lg font-semibold shadow hover:from-blue-700 hover:to-green-700 hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
				disabled={loading}
			>
				{loading ? "Submitting, one moment please..." : "Submit"}
			</button>
    </form>
  );
}
