export default function FormRender2() {
    return (
        <section id="booking-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
<div className="max-w-4xl mx-auto">
<div data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-2xl border-0">
<div data-slot="card-header" className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-t-lg">
<div data-slot="card-title" className="text-3xl font-bold">Sign up here to reserve your room</div>
</div>
<div data-slot="card-content" className="p-8 bg-white">
<form className="space-y-8">
<div className="text-center mb-8">
<p className="text-lg text-gray-700 mb-2">
<a href="https://www.sonesta.com/royal-sonesta/pr/carolina/royal-sonesta-san-juan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">Royal Sonesta San Juan</a>
</p>
<p className="text-md text-gray-700 font-medium mb-2">Please make your flight reservations prior to completing this form.</p>
<p className="text-md text-gray-700 mb-2">Fontaine Travel will make all hotel reservations for travelers.</p>
<p className="text-md text-gray-700 font-bold">All reservations MUST be booked by October 21, 2025 or reservation is not guaranteed.</p>
</div>
<div className="space-y-6">
<div className="flex items-center space-x-2 mb-4">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users h-5 w-5 text-blue-600" aria-hidden="true">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2">
</path>
<path d="M16 3.128a4 4 0 0 1 0 7.744">
</path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87">
</path>
<circle cx="9" cy="7" r="4">
</circle>
</svg>
<h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="attendeeName">Attendee Name *</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="attendeeName" required="" type="text" value=""/>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="guestName">Guest Name</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="guestName" type="text" value=""/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="email">Email Address *</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="email" required="" type="email" value=""/>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="phone">Cell Phone Number *</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="phone" required="" type="tel" value=""/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="attendeeTshirtSize">Attendee T-Shirt Size</label>
<button type="button" role="combobox" aria-controls="radix-«r0»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" data-slot="select-trigger" data-size="default" className="data-[placeholder]:text-muted-foreground [&amp;_svg:not([className*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
<span data-slot="select-value" style="pointer-events: none;">Select t-shirt size</span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
<path d="m6 9 6 6 6-6">
</path>
</svg>
</button>
<select aria-hidden="true" tabindex="-1" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
<option value="">
</option>
<option value="xs">XS</option>
<option value="s">S</option>
<option value="m">M</option>
<option value="l">L</option>
<option value="xl">XL</option>
<option value="xxl">XXL</option>
<option value="xxxl">XXXL</option>
</select>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="guestTshirtSize">Guest T-Shirt Size</label>
<button type="button" role="combobox" aria-controls="radix-«r1»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" data-slot="select-trigger" data-size="default" className="data-[placeholder]:text-muted-foreground [&amp;_svg:not([className*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
<span data-slot="select-value" style="pointer-events: none;">Select t-shirt size</span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
<path d="m6 9 6 6 6-6">
</path>
</svg>
</button>
<select aria-hidden="true" tabindex="-1" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
<option value="">
</option>
<option value="xs">XS</option>
<option value="s">S</option>
<option value="m">M</option>
<option value="l">L</option>
<option value="xl">XL</option>
<option value="xxl">XXL</option>
<option value="xxxl">XXXL</option>
</select>
</div>
</div>
</div>
<div className="space-y-6 border-t pt-8">
<div className="flex items-center space-x-2 mb-4">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plane h-5 w-5 text-blue-600" aria-hidden="true">
<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z">
</path>
</svg>
<h3 className="text-xl font-semibold text-gray-900">Flight Information</h3>
</div>
<p className="text-gray-700 mb-6">The Lapine Group will provide group transportation to and from the airport. Information about times and airport location will be shared closer to departure.</p>
<div className="bg-green-50 p-6 rounded-lg">
<h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
<span className="text-green-600 mr-2">✈️ Arrival Flight</span>
</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="arrivalDate">Arrival Date</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="arrivalDate" type="date" value=""/>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="arrivalAirline">Airline</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="arrivalAirline" placeholder="e.g., American Airlines, Delta, JetBlue" type="text" value=""/>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="arrivalFlightNumber">Flight Number</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="arrivalFlightNumber" placeholder="e.g., AA1234, DL567" type="text" value=""/>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="arrivalTime">Arrival Time</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="arrivalTime" type="time" value=""/>
</div>
</div>
</div>
<div className="bg-blue-50 p-6 rounded-lg">
<h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
<span className="text-blue-600 mr-2">🛫 Departure Flight</span>
</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="departureDate">Departure Date</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="departureDate" type="date" value=""/>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="departureAirline">Airline</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="departureAirline" placeholder="e.g., American Airlines, Delta, JetBlue" type="text" value="">
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="departureFlightNumber">Flight Number</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="departureFlightNumber" placeholder="e.g., AA1234, DL567" type="text" value="">
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="departureTime">Departure Time</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="departureTime" type="time" value="">
</div>
<div className="md:col-span-2">
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="departureAirport">Departure Airport</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="departureAirport" placeholder="e.g., JFK, LAX, MIA" type="text" value="">
</div>
</div>
</div>
</div>
<div className="space-y-6 border-t pt-8">
<div className="flex items-center space-x-2 mb-4">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-5 w-5 text-blue-600" aria-hidden="true">
<path d="M8 2v4">
</path>
<path d="M16 2v4">
</path>
<rect width="18" height="18" x="3" y="4" rx="2">
</rect>
<path d="M3 10h18">
</path>
</svg>
<h3 className="text-xl font-semibold text-gray-900">Accommodation Preferences</h3>
</div>
<p className="text-gray-700 mb-6">The meeting will take place 11/13-16. The Lapine Group will cover your hotel room from 11/13-17. If you wish to arrive early or stay longer, additional nights are self-pay at the prevailing rate. If you wish to upgrade to a suite, you will be responsible for the additional cost. Rate is $329/night for standard room.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="roomType">Room Type</label>
<button type="button" role="combobox" aria-controls="radix-«r2»" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder="" data-slot="select-trigger" data-size="default" className="data-[placeholder]:text-muted-foreground [&amp;_svg:not([className*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
<span data-slot="select-value" style="pointer-events: none;">Select room type</span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
<path d="m6 9 6 6 6-6">
</path>
</svg>
</button>
<select aria-hidden="true" tabindex="-1" style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
<option value="">
</option>
<option value="2beds">2 beds</option>
<option value="king">King</option>
<option value="suite">Suite</option>
</select>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="checkInDate">Check-in Date</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="checkInDate" type="date" value="">
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="checkOutDate">Check-out Date</label>
<input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="checkOutDate" type="date" value="">
</div>
</div>
</div>
<div className="space-y-6 border-t pt-8">
<div className="flex items-center space-x-2 mb-4">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-5 w-5 text-blue-600" aria-hidden="true">
<path d="M8 2v4">
</path>
<path d="M16 2v4">
</path>
<rect width="18" height="18" x="3" y="4" rx="2">
</rect>
<path d="M3 10h18">
</path>
</svg>
<h3 className="text-xl font-semibold text-gray-900">Event Attendance</h3>
</div>
<div className="space-y-6">
<div className="bg-blue-50 p-6 rounded-lg">
<h4 className="text-lg font-medium text-gray-900 mb-4">Friday Night Dinner</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center space-x-3">
<input id="fridayDinnerAttendee" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" type="checkbox"/>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="fridayDinnerAttendee">Attendee will attend</label>
</div>
<div className="flex items-center space-x-3">
<input id="fridayDinnerGuest" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" type="checkbox"/>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="fridayDinnerGuest">Guest will attend</label>
</div>
</div>
</div>
<div className="bg-green-50 p-6 rounded-lg">
<h4 className="text-lg font-medium text-gray-900 mb-4">Saturday 6 Hour Scavenger Hunt with Lunch</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center space-x-3">
<input id="saturdayScavengerAttendee" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" type="checkbox"/>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="saturdayScavengerAttendee">Attendee will attend</label>
</div>
<div className="flex items-center space-x-3">
<input id="saturdayScavengerGuest" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" type="checkbox"/>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="saturdayScavengerGuest">Guest will attend</label>
</div>
</div>
</div>
<div className="bg-purple-50 p-6 rounded-lg">
<h4 className="text-lg font-medium text-gray-900 mb-4">Saturday Night Dinner</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center space-x-3">
<input id="saturdayDinnerAttendee" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" type="checkbox">
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="saturdayDinnerAttendee">Attendee will attend</label>
</div>
<div className="flex items-center space-x-3">
<input id="saturdayDinnerGuest" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" type="checkbox">
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="saturdayDinnerGuest">Guest will attend</label>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-6 border-t pt-8">
<div className="flex items-center space-x-2 mb-4">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-utensils h-5 w-5 text-blue-600" aria-hidden="true">
<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2">
</path>
<path d="M7 2v20">
</path>
<path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7">
</path>
</svg>
<h3 className="text-xl font-semibold text-gray-900">Special Requirements</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="foodAllergies">Food Allergies &amp; Dietary Restrictions</label>
<textarea data-slot="textarea" className="placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="foodAllergies" placeholder="Please list any food allergies or dietary restrictions..." rows="4">
</textarea>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="mobilityIssues">Mobility Issues &amp; Accessibility Needs</label>
<textarea data-slot="textarea" className="placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="mobilityIssues" placeholder="Please describe any mobility issues or accessibility requirements..." rows="4">
</textarea>
</div>
</div>
</div>
<div className="space-y-6 border-t pt-8">
<div className="flex items-center space-x-2 mb-4">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-square h-5 w-5 text-blue-600" aria-hidden="true">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
</path>
</svg>
<h3 className="text-xl font-semibold text-gray-900">Additional Notes</h3>
</div>
<div>
<label data-slot="label" className="flex items-center gap-2 text-sm leading-none select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-gray-700 font-medium" for="additionalNotes">Additional Notes for Organizer</label>
<textarea data-slot="textarea" className="placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500" id="additionalNotes" placeholder="Please share any additional information or special requests..." rows="4">
</textarea>
</div>
</div>
<div className="text-center pt-6 border-t">
<button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 rounded-md has-[&gt;svg]:px-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-12 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" type="submit">Submit Here</button>
</div>
</form>
</div>
</div>
</div>
</section>
    )
}