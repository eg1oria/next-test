'use client';

import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';

// Фикс иконок для Next.js
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

// 🔁 Получение адреса по координатам (reverse geocoding)
async function getAddress(lat, lng) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
  );

  const data = await res.json();
  return data.display_name;
}

// 🖱️ Клик по карте
function ClickHandler({ setPosition, setAddress }) {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;

      setPosition([lat, lng]);

      // Получаем адрес
      const address = await getAddress(lat, lng);
      setAddress(address);

      console.log('Координаты:', lat, lng);
      console.log('Адрес:', address);
    },
  });

  return null;
}

export default function Map({ posts = [] }) {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState('');
  const [markers, setMarkers] = useState([]);

  // Генерация координат для маркеров (1 раз)
  useEffect(() => {
    const generated = posts.slice(0, 10).map((post) => ({
      ...post,
      lat: 43.2389 + Math.random() * 0.05,
      lng: 76.8897 + Math.random() * 0.05,
    }));

    setMarkers(generated);
  }, [posts]);

  return (
    <>
      {/* ✅ Блок с адресом */}
      <div
        style={{
          padding: 12,
          marginTop: 20,
          background: '#111',
          color: '#fff',
          borderRadius: 8,
          fontSize: 14,
        }}
      >
        <b>Выбранный адрес:</b>
        <div style={{ marginTop: 6 }}>
          {address || 'Кликни по карте, чтобы получить адрес'}
        </div>
      </div>

      {/* ✅ Карта */}
      <div style={{ height: '500px', width: '100%', marginTop: 20 }}>
        <MapContainer
          center={[43.2389, 76.8897]} // Алматы
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap"
          />

          {/* Маркеры из API */}
          {markers.map((item) => (
            <Marker key={item.id} position={[item.lat, item.lng]}>
              <Popup>
                <b>{item.title}</b>
                <p>{item.body}</p>
              </Popup>
            </Marker>
          ))}

          {/* Маркер по клику */}
          {position && (
            <Marker position={position}>
              <Popup>{address || 'Загружаем адрес...'}</Popup>
            </Marker>
          )}

          <ClickHandler
            setPosition={setPosition}
            setAddress={setAddress}
          />
        </MapContainer>
      </div>
    </>
  );
}
