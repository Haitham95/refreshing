import { useEffect, useState } from "react";
import "./App.css";

const DATA = [
  {
    id: 0,
    customerName: "Casy Dalby",
    Feedbacks: [{ id: 0, feedbackMessage: "lorem20" }],
  },
];

function App() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      {/* main layout card */}
      <div className="border w-4/5">
        {/* Header */}
        <div className="p-4">
          <h1 className="text-3xl font-bold">Customer Feedback</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
