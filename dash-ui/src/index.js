import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, AlertTriangle } from "lucide-react";

export default function Dashboard() {
  const [fraud, setFraud] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("http://localhost:6000/detect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ volume: Math.random() * 100 }),
      });

      const data = await res.json();
      setFraud(data);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Nebula Dashboard</h1>

      <Card className="w-full max-w-md bg-gray-900 border border-gray-800">
        <CardContent className="p-6">
          {fraud ? (
            fraud.fraud ? (
              <div className="flex items-center space-x-3">
                <AlertTriangle className="text-red-500" />
                <span className="text-red-400 font-medium">
                  Fraud Detected: {fraud.reason}
                </span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <BadgeCheck className="text-green-500" />
                <span className="text-green-400 font-medium">No Fraud Detected</span>
              </div>
            )
          ) : (
            <p className="text-gray-400">Waiting for data...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
