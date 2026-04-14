import React, { useEffect, useState } from 'react';
import axios from 'axios';

//  IMPORTS 
import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

export const ApiRyC = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [query,setQuery] = useState('');

  useEffect(() => {
    const source = axios.CancelToken.source()
    axios.get('https://rickandmortyapi.com/api/character/',{params:{page,name:query},CancelToken:source.token})
      
      .then(({data}) => {
        setData(data.results || [])
        setInfo(data.info || {})
      })
      .catch((err) => {
        if(axios.isCancel(err)) return
        if(err.response?.status === 404) {
            setData([])
            setInfo({})
            return
        }
        console.error(err)
      });
      return () => source.cancel()
  }, [page,query]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #0D1117, #111827)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* HEADER */}
      <Header />

      {/* CONTENIDO */}
      <div style={{ flex: 1, padding: "40px 20px", color: "white" }}>
        
        <h1 
          style={{ 
            textAlign: "center", 
            marginBottom: "30px",
            fontWeight: "600"
          }}
        >
         API Rick & Morty 🛸 
        </h1>

        {/* BUSCADOR */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
          <input
            placeholder="Buscar personaje..."
            value={query}
            onChange={(c) => (setQuery(c.target.value.trim()), setPage(1))}
            style={{
              width: "300px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #1F2937",
              background: "#161B22",
              color: "white",
              outline: "none",
            }}
          />
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {data?.map(char => (
            <div
              key={char.id}
              style={{
                width: "200px",
                background: "#161B22",
                border: "1px solid #1F2937",
                borderRadius: "14px",
                padding: "15px",
                textAlign: "center",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={char.image}
                alt={char.name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />

              <h4 
                style={{ 
                  marginTop: "10px", 
                  color: "#A78BFA",
                  fontWeight: "500"
                }}
              >
                {char.name}
              </h4>

              <p
                style={{
                  color: char.gender === "Male" ? "#3B82F6" : "#EC4899",
                  fontWeight: "400",
                }}
              >
                {char.gender}
              </p>
            </div>
          ))}
        </div>

        {/* PAGINACIÓN */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => setPage(page - 1)}
            disabled={!info.prev}
            style={{
              margin: "0 10px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              background: "#1F2937",
              color: "white",
              cursor: "pointer",
            }}
          >
            Anterior
          </button>

          <span style={{ margin: "0 15px", color: "#9CA3AF" }}>
            Página {page}
          </span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={!info.next}
            style={{
              margin: "0 10px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              background: "#1F2937",
              color: "white",
              cursor: "pointer",
            }}
          >
            Siguiente
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};
