import React from "react";
import QuizApp from "./QuizApp";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <Sidebar />

      <header className="bg-blue-700 bg-opacity-90 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">⚡ React Quiz App</h1>
          <p className="text-sm text-blue-100">Test your React knowledge</p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 bg-white/70 rounded-lg m-4 shadow-lg">
        <QuizApp />
      </main>

      <footer className="bg-gray-900 bg-opacity-80 text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Vikas Chamyal | React Practice App
        </p>
      </footer>
    </div>
  );
};

export default App;
