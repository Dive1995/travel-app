export interface Trip {
  title: string;
  startDate: string; // ISO format recommended: YYYY-MM-DD
  endDate: string;
  coverPhoto?: string;
  note?: string;
  budget: Budget;
  accommodations?: Accommodation[];
  restaurants?: Restaurant[];
  itinerary: ItineraryDay[];
  transportation?: Transportation[];
  companions?: Companion[];
  checklist?: ChecklistItem[];
}

export interface Budget {
  total: number;
  limit?: number;
}

export interface Accommodation {
  name: string;
  location: string;
  cost: number;
  checkIn: string;
  checkOut: string;
  attachments?: string[]; // URLs or file paths
}

export interface Restaurant {
  name: string;
  location: string;
  estimatedCost: number;
}

export interface ItineraryDay {
  date: string;
  note?: string;
  todo?: ChecklistItem[];
  placesToVisit: PlaceToVisit[];
}

export interface PlaceToVisit {
  name: string;
  location: string;
  time: string;
  cost?: number;
  attachments?: string[];
  thingsToDo?: string[];
  note?: string;
}

export interface Transportation {
  type: "flight" | "train" | "bus" | "car" | "bike" | "other";
  provider?: string;
  departure: {
    location: string;
    dateTime: string;
  };
  arrival: {
    location: string;
    dateTime: string;
  };
  cost?: number;
  referenceNumber?: string;
  attachments?: string[];
  note?: string;
}

export interface Companion {
  name: string;
  contact?: string;
  note?: string;
}

export interface ChecklistItem {
  item: string;
  done: boolean;
}
