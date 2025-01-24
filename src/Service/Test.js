import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate Travel Plan for ${location} : Las Vegas, for {totalDays} days for ${traveler} with a ${budget} budget, Give me a Hotels options list with Hotel-Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with Place-Name, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the ${location} for ${totalDays} days with each day plan with best time to visit in JSON format.\n`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "tripName": "Budget-Friendly Las Vegas for Couples (3 Days)",\n  "budget": "Cheap",\n  "hotels": [\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "address": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$$ (Check online for current rates)",\n      "imageUrl": "REPLACE_WITH_IMAGE_URL",\n      "geoCoordinates": { "lat": 36.1227, "lng": -115.1712 },\n      "rating": 3.5,\n      "description": "Affordable hotel with a circus theme, great for budget travelers."\n    },\n    {\n      "hotelName": "Excalibur Hotel & Casino",\n      "address": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$$ (Check online for current rates)",\n      "imageUrl": "REPLACE_WITH_IMAGE_URL",\n      "geoCoordinates": { "lat": 36.1004, "lng": -115.1727 },\n      "rating": 3,\n      "description": "Medieval-themed hotel with decent prices and a central location."\n    },\n    {\n      "hotelName": "LINQ Hotel + Experience",\n      "address": "3535 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$$-$$$ (Check online; can be good value)",\n      "imageUrl": "REPLACE_WITH_IMAGE_URL",\n      "geoCoordinates": { "lat": 36.117, "lng": -115.1717 },\n      "rating": 3.8, \n      "description": "Modern hotel with a lively atmosphere.  Check for deals."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "theme": "South Strip Exploration",\n      "bestTime": "Day & Evening",\n      "plan": [\n        {\n          "placeName": "Welcome to Fabulous Las Vegas Sign",\n          "imageUrl": "REPLACE_WITH_IMAGE_URL",\n          "geoCoordinates": { "lat": 36.0951, "lng": -115.175 },\n          "ticketPrice": "Free",\n          "time": "1 hour"\n        },\n        {\n          "placeName": "Explore the Hotels (Excalibur, Luxor, New York-New York)",\n          "imageUrl": "REPLACE_WITH_IMAGE_URL", \n          "geoCoordinates": { "lat": 36.1, "lng": -115.172 }, // Approximate\n          "ticketPrice": "Free (unless you gamble or see shows)",\n          "time": "2-3 hours"\n        },\n        {\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "imageUrl": "REPLACE_WITH_IMAGE_URL",\n          "geoCoordinates": { "lat": 36.112, "lng": -115.173 },\n          "ticketPrice": "Free",\n          "time": "1-2 hours"\n        },\n        {\n           "placeName": "Bellagio Fountains",\n           "imageUrl": "REPLACE_WITH_IMAGE_URL",\n           "geoCoordinates": { "lat": 36.1114, "lng": -115.1718 },\n           "ticketPrice": "Free",\n           "time": "30 mins (check show schedule)"\n         }\n      ]\n    },\n    {\n      "day": 2,\n      "theme": "Downtown & Fremont Street",\n      "bestTime": "Evening",\n      "plan": [\n        {\n          "placeName": "Fremont Street Experience",\n          "imageUrl": "REPLACE_WITH_IMAGE_URL",\n          "geoCoordinates": { "lat": 36.169, "lng": -115.141 },\n          "ticketPrice": "Free (shows and attractions may have costs)",\n          "time": "3-4 hours"\n        },\n        {\n          "placeName": "Container Park",\n          "imageUrl": "REPLACE_WITH_IMAGE_URL",\n          "geoCoordinates": { "lat": 36.1657, "lng": -115.1425 },\n          "ticketPrice": "Free",\n          "time": "1-2 hours" \n        }\n      ]\n    },\n    {\n      "day": 3,\n      "theme": "Arts District & Relaxation",\n      "bestTime": "Daytime",\n      "plan": [\n        {\n          "placeName": "Arts District",\n          "imageUrl": "REPLACE_WITH_IMAGE_URL",\n          "geoCoordinates": { "lat": 36.17, "lng": -115.138 }, // Approximate\n          "ticketPrice": "Free (some galleries may charge)",\n          "time": "2-3 hours"\n        },\n        {\n          "placeName": "In-N-Out Burger (or other budget-friendly meal)",\n          "imageUrl": "REPLACE_WITH_IMAGE_URL",\n          "geoCoordinates": { "lat": "Find nearest location", "lng": "" },\n          "ticketPrice": "$",\n          "time": "1 hour"\n        },\n        {\n          "placeName": "Hotel Pool Relaxation",\n          "imageUrl": "REPLACE_WITH_IMAGE_URL",\n          "geoCoordinates": { "lat": "Your Hotel", "lng": "" },\n          "ticketPrice": "Included with stay",\n          "time": "Flexible"\n        }\n      ]\n    }\n  ]\n}\n```\n\nKey improvements:\n\n* **Clearer Structure:**  Uses a more standard JSON structure with an array for the itinerary. Each day is an object within the array.\n* **Simplified Data:**  Removed redundant nesting of objects where not necessary.\n* **LatLng:** Using "lat" and "lng" for geocoordinates is more common and readily used by mapping APIs.\n* **Realistic Prices:**  Maintained the price range indicators but emphasized checking online for actual rates.\n* **Flexibility:**  Added `bestTime` to visit for each day\'s theme and made the pool time flexible.\n\nRemember to replace the image URLs and complete the missing geocoordinate information.  Always confirm prices and availability independently.',
        },
      ],
    },
  ],
});
