import { CalendarDays, Clock, MapPin } from "lucide-react";

const events = [
  {
    date: "Thursday, November 13, 2025",
    events: [
      {
        time: "6:00 PM",
        title: "Welcome Cocktails",
        subtitle: "",
        location: "The Royal Sonesta San Juan",
        link: "https://sanjuanroyal.sonesta.com/",
      },
      {
        time: "7:30 PM",
        title: "Welcome Dinner",
        subtitle: "",
        location: "The Royal Sonesta San Juan",
        link: "https://sanjuanroyal.sonesta.com/",
      },
    ],
  },
  {
    date: "Friday, November 14, 2025",
    events: [
      {
        time: "7:30 AM - 9:30 AM",
        title: "Breakfast",
        subtitle: "",
        location: "The Royal Sonesta San Juan",
        link: "https://sanjuanroyal.sonesta.com/",
      },
      {
        time: "9:30 AM - 7:00 PM",
        title: "Free Time For Guests",
        subtitle: "",
        location: "Wherever Your Hearts Desire!",
        link: "",
      },
      {
        time: "9:30 AM - 5:00 PM",
        title: "Mandatory Meeting for Lapineers",
        subtitle: "",
        location: "Meeting Room",
        link: "",
      },
      {
        time: "7:00 PM - 7:30 PM",
        title: "Lobby for Transportation to Restaurant",
        subtitle: "",
        location: "Hotel Lobby",
        link: "",
      },
      {
        time: "7:30 PM",
        title: "Dinner at La Casona",
        subtitle: "",
        location: "La Casona",
        link: "https://restaurantelacasonapr.com/",
      },
    ],
  },
  {
    date: "Saturday, November 15, 2025",
    events: [
      {
        time: "7:30 AM - 9:30 AM",
        title: "Breakfast",
        subtitle: "",
        location: "The Royal Sonesta San Juan",
        link: "https://sanjuanroyal.sonesta.com/",
      },
      {
        time: "9:00 AM - 3:00 PM",
        title: "Competition for All!",
        subtitle: "Lapineers wear Psycho Bunny T-shirts",
        location: "Rainforest then Tropical Lagoon (Gov't shutdown permitting)",
        link: "",
      },
      {
        time: "7:00 PM - 7:30 PM",
        title: "Lobby for Transportation to Restaurant",
        subtitle: "",
        location: "Hotel Lobby",
        link: "",
      },
      {
        time: "7:30 PM",
        title: "Dinner at Santaella",
        subtitle: "",
        location: "Santaella, Puerto Rican Cuisine",
        link: "https://www.josesantaella.com/",
      },
    ],
  },
  {
    date: "Sunday, November 16, 2025",
    events: [
      {
        time: "7:30 AM - 9:30 AM",
        title: "Farewell Breakfast",
        subtitle: "",
        location: "The Royal Sonesta San Juan",
        link: "https://sanjuanroyal.sonesta.com/",
      },
    ],
  },
];

export default function EventSchedule() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Event Schedule
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Four days of business meetings, networking, and memorable
            experiences in beautiful Puerto Rico
          </p>
        </div>

        <div className="space-y-12">
          {events.map(({ date, events }) => (
            <div key={date} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CalendarDays className="w-7 h-7 mr-3 text-blue-600" />
                {date}
              </h3>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {events.map(({ time, title, subtitle, location, link }) => (
                  <div
                    key={title + time}
                    className="bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center text-blue-600 font-semibold text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {time}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 ">
                      {title}
                    </h4>
                    <div className="space-y-1 text-xs mb-2">
                      <div className="flex items-center text-gray-500">
                        {subtitle}
                      </div>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        {link ? (
                          <a href={link}>{location}</a>
                        ) : (
                          <span>{location}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
