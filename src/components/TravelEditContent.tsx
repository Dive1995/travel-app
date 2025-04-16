import { Trip } from "@/lib/TripModel";
import { Textarea } from "./ui/textarea";
import Accommodation from "./Accommodation";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { Separator } from "./ui/separator";

const trip: Trip = {
  title: "European Summer Adventure",
  startDate: "2025-07-15",
  endDate: "2025-08-05",
  coverPhoto:
    "https://images.unsplash.com/photo-1590651639672-5f0178aa4812?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  note: "Backpacking across Europe with friends!",
  budget: {
    total: 3000,
    limit: 3500,
  },
  accommodations: [
    {
      name: "Hotel Bella Roma",
      location: "Rome, Italy",
      cost: 450,
      checkIn: "2025-07-15",
      checkOut: "2025-07-18",
      attachments: ["https://example.com/hotel_roma_booking.pdf"],
    },
    {
      name: "Hostel Berlin Mitte",
      location: "Berlin, Germany",
      cost: 300,
      checkIn: "2025-07-20",
      checkOut: "2025-07-24",
    },
  ],
  restaurants: [
    {
      name: "Pasta e Basta",
      location: "Rome, Italy",
      estimatedCost: 25,
    },
    {
      name: "Curry 36",
      location: "Berlin, Germany",
      estimatedCost: 12,
    },
  ],
  itinerary: [
    {
      date: "2025-07-16",
      note: "Exploring ancient Rome",
      todo: [
        { item: "Pack sunscreen", done: true },
        { item: "Buy water bottles", done: false },
      ],
      placesToVisit: [
        {
          name: "Colosseum",
          location: "Rome, Italy",
          time: "10:00",
          cost: 16,
          note: "Pre-booked tickets",
        },
        {
          name: "Roman Forum",
          location: "Rome, Italy",
          time: "14:00",
        },
      ],
    },
    {
      date: "2025-07-21",
      placesToVisit: [
        {
          name: "Berlin Wall Memorial",
          location: "Berlin, Germany",
          time: "11:00",
          thingsToDo: ["Take photos", "Read history panels"],
        },
        {
          name: "Brandenburg Gate",
          location: "Berlin, Germany",
          time: "15:00",
        },
      ],
    },
  ],
  transportation: [
    {
      type: "flight",
      provider: "Lufthansa",
      departure: {
        location: "Paris, France",
        dateTime: "2025-07-14T20:00",
      },
      arrival: {
        location: "Rome, Italy",
        dateTime: "2025-07-15T08:00",
      },
      cost: 150,
      referenceNumber: "LH1234",
      note: "Checked in online",
    },
    {
      type: "train",
      provider: "Deutsche Bahn",
      departure: {
        location: "Berlin, Germany",
        dateTime: "2025-07-24T10:00",
      },
      arrival: {
        location: "Prague, Czech Republic",
        dateTime: "2025-07-24T14:00",
      },
    },
  ],
  companions: [
    {
      name: "Arun Kumar",
      contact: "+491512345678",
      note: "Vegetarian",
    },
    {
      name: "Sophie Müller",
    },
  ],
  checklist: [
    { item: "Passport", done: true },
    { item: "Travel insurance", done: false },
    { item: "Power bank", done: true },
  ],
};

function TravelEditContent() {
  return (
    <div className="col-span-2 2xl:col-span-1relative">
      {/* Background Image with white gradient overlay */}
      {/* <div
        className="h-[500px] w-full bg-cover bg-center  relative"
        style={{
          backgroundImage: `url(${trip.coverPhoto})`,
        }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white " />
      </div> */}

      {/* Content overlapping the image */}
      <div className="relative mt-40 px-8 pt-12 z-10">
        <section className="flex items-center justify-between">
          <h1 className="text-3xl font-bold my-2">{trip.title}</h1>
          {/* <p className="my-2">
            {trip.startDate} - {trip.endDate}
          </p> */}
          <DatePickerWithRange />
        </section>
        <Separator className="my-8" />
        <div className="my-4">
          <Textarea className="bg-gray-50 max-w-[800px]" placeholder="Note:">
            {trip.note}
          </Textarea>
        </div>

        <Accommodation />
      </div>
    </div>
  );
}

export default TravelEditContent;
