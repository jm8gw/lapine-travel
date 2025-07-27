// DEPRECIATED! DO NOT USE!

'use client';

import { useState } from 'react';

export default function RetreatRegistrationForm() {
  const [formData, setFormData] = useState({
    attendeeName: '',
    guestName: '',
    email: '',
    phone: '',
    attendeeTshirtSize: '',
    guestTshirtSize: '',
    arrivalDate: '',
    arrivalAirline: '',
    arrivalFlightNumber: '',
    arrivalTime: '',
    departureDate: '',
    departureAirline: '',
    departureFlightNumber: '',
    departureTime: '',
    departureAirport: '',
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    eventAttendance: {
      fridayDinnerAttendee: false,
      fridayDinnerGuest: false,
      saturdayScavengerAttendee: false,
      saturdayScavengerGuest: false,
      saturdayDinnerAttendee: false,
      saturdayDinnerGuest: false,
    },
    foodAllergies: '',
    mobilityIssues: '',
    additionalNotes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      eventAttendance: {
        ...prev.eventAttendance,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(result.success ? 'Registration submitted!' : `Error: ${result.error}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-10 bg-white rounded-lg shadow-lg">
      {/* Personal Information */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="attendeeName" className="text-sm font-medium text-gray-700 mb-1">Attendee Name *</label>
            <input id="attendeeName" name="attendeeName" required value={formData.attendeeName} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="guestName" className="text-sm font-medium text-gray-700 mb-1">Guest Name</label>
            <input id="guestName" name="guestName" value={formData.guestName} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Cell Phone Number *</label>
            <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="attendeeTshirtSize" className="text-sm font-medium text-gray-700 mb-1">Attendee T-Shirt Size</label>
            <select name="attendeeTshirtSize" value={formData.attendeeTshirtSize} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select size</option>
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(size => <option key={size} value={size}>{size}</option>)}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="guestTshirtSize" className="text-sm font-medium text-gray-700 mb-1">Guest T-Shirt Size</label>
            <select name="guestTshirtSize" value={formData.guestTshirtSize} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select size</option>
              {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(size => <option key={size} value={size}>{size}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Flight Information */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-4">Flight Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="arrivalDate" type="date" placeholder="Arrival Date" value={formData.arrivalDate} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="arrivalAirline" placeholder="Arrival Airline" value={formData.arrivalAirline} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="arrivalFlightNumber" placeholder="Arrival Flight Number" value={formData.arrivalFlightNumber} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="arrivalTime" type="time" placeholder="Arrival Time" value={formData.arrivalTime} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="departureDate" type="date" placeholder="Departure Date" value={formData.departureDate} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="departureAirline" placeholder="Departure Airline" value={formData.departureAirline} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="departureFlightNumber" placeholder="Departure Flight Number" value={formData.departureFlightNumber} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="departureTime" type="time" placeholder="Departure Time" value={formData.departureTime} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="departureAirport" placeholder="Departure Airport" value={formData.departureAirport} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </section>

      {/* Accommodation Preferences */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-4">Accommodation Preferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="roomType" value={formData.roomType} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Room Type</option>
            <option value="2 beds">2 beds</option>
            <option value="King">King</option>
            <option value="Suite">Suite</option>
          </select>
          <input name="checkInDate" type="date" placeholder="Check-in Date" value={formData.checkInDate} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input name="checkOutDate" type="date" placeholder="Check-out Date" value={formData.checkOutDate} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </section>

      {/* Event Attendance */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-4">Event Attendance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(formData.eventAttendance).map(([key, checked]) => (
            <div key={key} className="flex items-center space-x-2">
              <input type="checkbox" name={key} id={key} checked={checked} onChange={handleCheckbox} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor={key} className="text-sm text-gray-700">
                {key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/Attendee/, 'Attendee will attend').replace(/Guest/, 'Guest will attend')}
              </label>
            </div>
          ))}
        </div>
      </section>

      {/* Special Requirements and Notes */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-4">Special Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <textarea name="foodAllergies" placeholder="Food Allergies & Dietary Restrictions" value={formData.foodAllergies} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea name="mobilityIssues" placeholder="Mobility Issues & Accessibility Needs" value={formData.mobilityIssues} onChange={handleChange} className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-1 mb-4">Additional Notes</h2>
        <textarea name="additionalNotes" placeholder="Additional Notes for Organizer" value={formData.additionalNotes} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </section>

      <button type="submit" className="mt-4 w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-md text-lg font-semibold shadow hover:from-blue-700 hover:to-green-700 hover:scale-[1.02] transition-transform">
        Submit
      </button>
    </form>
  );
}
