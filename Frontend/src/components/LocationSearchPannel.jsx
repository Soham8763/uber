import React from 'react'

const locations = [
  {
    icon: "ri-flight-takeoff-line",
    title: "Kempegowda International Airport",
    address: "KIAL Rd, Devanahalli, Bengaluru, Karnataka"
  },
  {
    icon: "ri-map-pin-line",
    title: "Phoenix Marketcity",
    address: "Whitefield Rd, Devasandra Industrial Estate, Mahadevapura, Bengaluru, Karnataka"
  },
  {
    icon: "ri-map-pin-line",
    title: "Salarpuria Aura Block B",
    address: "BLOCK-B, TOUCH STONE, Chandana, Kadabeesanahalli, Bengaluru, Karnataka"
  },
  {
    icon: "ri-hotel-bed-line",
    title: "Sheraton Grand Bengaluru Whitefield...",
    address: "Prestige Shantiniketan Hoodi, Whitefield, Thigalarapalya, Krishnarajapura, Bengaluru..."
  },
  {
    icon: "ri-map-pin-line",
    title: "KSR Bengaluru City Junction (Bangalore)",
    address: "M.G. Railway Colony, Majestic, Bengaluru, Karnataka"
  },
  {
    icon: "ri-map-pin-add-line",
    title: "Set location on map",
    address: ""
  }
];

const LocationSearchPannel = (props) => {
  return (
    <div className="w-full">
      {locations.map((loc, idx) => (
        <div
            onClick={()=>{
                props.setVehiclePannel(true)
                props.setPannelOpen(false);
            }}
          key={idx}
          className={`flex items-center gap-3 px-4 py-3 bg-white rounded-lg mb-2 shadow-sm cursor-pointer transition hover:bg-gray-100 ${
            idx === locations.length - 1 ? 'border-t mt-2' : ''
          }`}
        >
          <div className={`rounded-full flex items-center justify-center ${idx === locations.length - 1 ? 'bg-blue-100' : 'bg-gray-200'} w-10 h-10`}>
            <i className={`${loc.icon} text-xl ${idx === locations.length - 1 ? 'text-blue-600' : 'text-gray-700'}`}></i>
          </div>
          <div>
            <h5 className="font-semibold text-base leading-tight">{loc.title}</h5>
            {loc.address && (
              <p className="text-xs text-gray-500 leading-tight">{loc.address}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default LocationSearchPannel