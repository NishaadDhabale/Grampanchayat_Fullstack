import { NavigationHeader } from "@/components/NavigationHeader";
import React from "react";

const policeStations = [
  { name: "आडगाव पोलिस स्टेशन", phone: "0253-2513133" },
  { name: "अंबड पोलिस स्टेशन", phone: "0253-2371533" },
  { name: "भद्रकाली पोलिस स्टेशन", phone: "0253-2305005" },
  { name: "देवलाली कॅम्प पोलिस स्टेशन", phone: "0253-2491250" },
  { name: "गंगापूर पोलिस स्टेशन", phone: "0253-2305056" },
  { name: "इंदिरानगर पोलिस स्टेशन", phone: "0253-2392233" },
  { name: "महसूल पोलिस स्टेशन", phone: "0253-2533233" },
  { name: "मुंबई नाका पोलिस स्टेशन", phone: "0253-2593300" },
  { name: "नाशिक रोड पोलिस स्टेशन", phone: "0253-2465533 / 2465133" },
  { name: "पंचवटी पोलिस स्टेशन", phone: "0253-2629831 / 2629830" },
  { name: "सरकारवाडा पोलिस स्टेशन", phone: "0253-2305214 / 2305225" },
  { name: "सातपूर पोलिस स्टेशन", phone: "0253-2305337 / 38" },
];

const emergencyNumbers = [
  { name: "Ambulance", phone: "108" },
  { name: "Fire Brigade", phone: "101" },
  { name: "Police Control Room", phone: "100" },
  { name: "Disaster Management", phone: "0253-2570101" },
];

interface LanguageProps {
  language: string;
  setLanguage: (s: "en" | "mr") => void;
}

export default function ImportantNumbers({ language, setLanguage }: LanguageProps) {
  return (
    <>
      <NavigationHeader language={language} onLanguageChange={setLanguage} />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          महत्वाचे नंबर - पोलिस स्टेशन
        </h1>
        <div className="bg-white rounded-lg shadow border border-blue-100 mb-10 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="py-3 px-4 text-left rounded-tl-lg">पोलीस स्टेशन / S.D.P.O.</th>
                <th className="py-3 px-4 text-left rounded-tr-lg">फोन नंबर</th>
              </tr>
            </thead>
            <tbody>
              {policeStations.map((station, idx) => (
                <tr key={station.name} className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                  <td className="py-2 px-4 font-medium text-gray-700">{station.name}</td>
                  <td className="py-2 px-4">{station.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Emergency Numbers</h2>
        <div className="bg-white rounded-lg shadow border border-orange-100 overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="py-3 px-4 text-left rounded-tl-lg">Service</th>
                <th className="py-3 px-4 text-left rounded-tr-lg">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {emergencyNumbers.map((num, idx) => (
                <tr key={num.name} className={idx % 2 === 0 ? "bg-orange-50" : "bg-white"}>
                  <td className="py-2 px-4 font-medium text-gray-700">{num.name}</td>
                  <td className="py-2 px-4">{num.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}