import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";

// Fix Leaflet default icon issue in Webpack
const locationIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -45],
});
// Coordinates: [latitude, longitude]
const locations = [
  {
    city: "Buenos Aires",
    country: "Argentina",
    coords: [-34.6037, -65.3816],
    description: "Regional HQ & Product Studio",
  },
  {
    city: "Montevideo",
    country: "Uruguay",
    coords: [-32.9011, -55.1645],
    description: "UX & Design Hub",
  },
  {
    city: "Asunción",
    country: "Paraguay",
    coords: [-24.2637, -57.6657],
    description: "Development Center",
  },
  {
    city: "Madrid",
    country: "Spain",
    coords: [40.4168, -3.7038],
    description: "European Gateway",
  },
  {
    city: "Miami",
    country: "USA",
    coords: [40.7617, -100.1918],
    description: "North American Operations",
  },
];

const Locations = () => {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    setMapReady(true);
  }, []);

  return (
    <section className="relative pt-28 pb-0 sm:pb-14 overflow-hidden bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>

      {/* Header */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl mb-20">
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          Where We{" "}
          <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
            Operate
          </span>
        </h2>
        <p className="text-xl text-slate-300 mt-6 leading-relaxed">
          Streambe is present in{" "}
          <strong>
            Argentina, Uruguay, Paraguay, Spain, and the United States
          </strong>{" "}
          — delivering digital innovation across continents.
        </p>
      </div>

      {/* Map */}
      {mapReady && (
        <div className="container mx-auto px-6 mb-20">
          <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl h-[500px] max-w-5xl mx-auto">
            <MapContainer
              center={[0, -20]}
              zoom={3}
              zoomSnap={2.5}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              dragging={true} // Allow drag for UX
              style={{ height: "100%", width: "100%" }}
              className="bg-slate-900"
            >
              {/* Dark Tile Layer */}
              <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png" />

              {/* Markers */}
              {locations.map((loc, index) => (
                <Marker
                  key={index}
                  position={loc.coords as any}
                  icon={locationIcon}
                >
                  <Popup
                    className="text-sm font-medium"
                    autoClose={true}
                    closeOnClick={true}
                  >
                    <div>
                      <div className="font-semibold text-blue-600">
                        {loc.city}, {loc.country}
                      </div>
                      <div className="text-slate-600">{loc.description}</div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="container mx-auto px-6 mt-10 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-white">+100</div>
            <div className="text-slate-400 text-sm mt-2">Team Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-slate-400 text-sm mt-2">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">10+</div>
            <div className="text-slate-400 text-sm mt-2">Years of Growth</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <a
          href="https://wa.me/5491167499475"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
        >
          <span>Join Our Global Team</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Locations;
