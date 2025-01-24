import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
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
          text: "Generate Travel Plan for Location : Las Vegas, for 2 days for Couple with a Cheap budget, Give me a Hotels options list with Hotel-Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with Place-Name, Place Image Url, Geo Coordinates, ticket Pricing,rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format. proper structured like object array object array object",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "trip_details": {\n    "destination": "Las Vegas, Nevada",\n    "duration": "2 days",\n    "travelers": "Couple",\n    "budget": "Cheap"\n  },\n  "hotels": [\n    {\n      "hotel_name": "Excalibur Hotel & Casino",\n      "address": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$$ (estimated $50-$100/night, varies by season)", \n      "image_url": "https://www.excalibur.com/content/dam/destinations/las-vegas/excalibur/property/exterior/pool/excalibur-las-vegas-exterior-pool-01.jpg",\n      "geo_coordinates": {\n        "latitude": 36.0993,\n        "longitude": -115.1715\n      },\n      "rating": 3.5,\n      "description": "Medieval-themed resort with affordable rooms, various dining options, and a casino."\n    },\n    {\n      "hotel_name": "Luxor Hotel & Casino",\n      "address": "3900 S Las Vegas Blvd, Las Vegas, NV 89119",\n      "price": "$$ (estimated $60-$120/night, varies by season)",\n      "image_url": "https://www.luxor.com/content/dam/destinations/las-vegas/luxor/property/exterior/luxor-exterior-hero.jpg",\n      "geo_coordinates": {\n        "latitude": 36.0954,\n        "longitude": -115.1762\n      },\n      "rating": 3.5,\n      "description": "Egyptian-themed hotel known for its pyramid shape, affordable rates, and several entertainment options."\n    },\n     {\n      "hotel_name": "Circus Circus Hotel & Casino",\n      "address": "2877 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$$ (estimated $40-$90/night, varies by season)",\n      "image_url": "https://www.circuscircus.com/content/dam/destinations/las-vegas/circus-circus/property/exterior/casino/cc-exterior-casino.jpg",\n      "geo_coordinates": {\n        "latitude": 36.1222,\n        "longitude": -115.1682\n      },\n      "rating": 3, \n      "description": "Family-friendly resort with a circus theme, free circus acts, an indoor Adventuredome theme park, and budget-friendly accommodations."\n    }\n  ],\n\n  "itinerary": [\n    {\n      "day": 1,\n      "best_time_to_visit": "Afternoon - Evening",\n      "plan": [\n        {\n          "place_name": "Welcome to Las Vegas Sign",\n          "image_url": "https://www.lasvegashowto.com/wp-content/uploads/2021/03/welcome-to-fabulous-las-vegas-sign-6.jpg",\n          "geo_coordinates": {\n            "latitude": 36.0815,\n            "longitude": -115.1744\n          },\n          "ticket_pricing": "Free",\n          "rating": 4.5,\n          "time_travel": "30 minutes (including photo ops)"\n        },\n        {\n          "place_name": "Fremont Street Experience",\n          "image_url": "https://vegasexperience.com/wp-content/uploads/2023/06/Viva-Vision-Light-Show.webp",\n          "geo_coordinates": {\n            "latitude": 36.1696,\n            "longitude": -115.1422\n          },\n          "ticket_pricing": "Free (shows and experiences may have costs)",\n          "rating": 4,\n          "time_travel": "2-3 hours"\n        },\n        {\n          "place_name": "Dinner at In-N-Out Burger (Budget-Friendly)",\n          "image_url": "https://cdn.sanity.io/images/czqk28u5/production/7f2960989776b8a3e524c6e10d63037052b13498-1024x683.jpg",\n          "geo_coordinates": { "latitude": 36.1169, "longitude": -115.1718 },\n          "ticket_pricing": "$10-15 per person",\n          "rating": 4.5,\n          "time_travel": "1 hour"\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "best_time_to_visit": "Daytime - Evening",\n      "plan": [\n\n        {\n          "place_name": "The LINQ Promenade",\n          "image_url": "https://www.caesars.com/content/dam/clv/Dining/the-linq-promenade-exterior-hero.jpg",\n          "geo_coordinates": {\n            "latitude": 36.1175,\n            "longitude": -115.1718\n          },\n          "ticket_pricing": "Free (shopping and activities have costs)",\n          "rating": 4,\n          "time_travel": "2-3 hours"\n        },\n        {\n          "place_name": "High Roller Observation Wheel", \n          "image_url": "https://www.caesars.com/content/dam/crl/Property/HighRoller/high-roller-exterior-hero.jpg",\n          "geo_coordinates": {\n            "latitude": 36.1173,\n            "longitude": -115.1708\n          },\n          "ticket_pricing": "$$ (check online for current prices, daytime is usually cheaper)", \n          "rating": 4.5,\n          "time_travel": "30 minutes (ride duration) + 1 hour (exploring the area)"\n        },\n        {\n          "place_name": "Bellagio Conservatory & Botanical Garden",\n          "image_url": "https://www.bellagio.com/content/dam/blg/Hotel/Activities/Conservatory-Botanical-Garden/bellagio-conservatory-spring.jpg",\n          "geo_coordinates": {\n            "latitude": 36.1126,\n            "longitude": -115.1768\n          },\n          "ticket_pricing": "Free",\n          "rating": 4.5,\n          "time_travel": "1-2 hours"\n        },\n                {\n          "place_name": "Bellagio Fountains show",\n          "image_url": "https://www.bellagio.com/content/dam/blg/Hotel/Activities/Fountains-of-Bellagio/bellagio-fountains-wide.jpg",\n          "geo_coordinates": {\n            "latitude": 36.1126,\n            "longitude": -115.1768\n          },\n          "ticket_pricing": "Free",\n          "rating": 4.5,\n          "time_travel": "30 minutes - 1 hour (depending on how many shows you watch)"\n        }\n\n      ]\n    }\n\n  ]\n}\n```',
        },
      ],
    },
  ],
});
