// import React from 'react';
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import SuccessStories from "./components/success";
import Clients from "./components/clients";
import Locations from "./components/location";
import Footer from "./components/footer";

import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="min-h-screen">
      {/* Background Gradient + Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_30%,rgba(120,119,198,0.1)_0%,transparent_50%)]"></div>
      </div>
      <Header />
      <Hero />
      <Services />
      <SuccessStories />
      <Locations />
      <Clients />
      <Footer />
      <main></main>
    </div>
  );
}

export default App;
