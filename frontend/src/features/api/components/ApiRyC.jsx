import React, { useEffect, useState } from 'react';
import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";
import { Box, Typography, Container, Paper, Button, Grid } from "@mui/material";

export const ApiRyC = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setData(data.results);
        setInfo(data.info);
      });
  }, [page]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #0D1117 0%, #111827 100%)",
      }}
    >
      <Header />

      <Container sx={{ flex: 1, py: 6 }}>
        <Typography variant="h3" color="white" textAlign="center" gutterBottom>
          API Rick & Morty 🛸
        </Typography>

        <Typography color="#9CA3AF" textAlign="center" mb={4}>
          Explora personajes del universo de Rick & Morty. Navega entre páginas con los botones y descubre su nombre, género e imagen.
        </Typography>

        <Grid container spacing={3}>
          {data?.map(char => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={char.id}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  background: "#161B22",
                  border: "1px solid #1F2937",
                  textAlign: "center",
                  "&:hover": { boxShadow: "0 0 15px rgba(99,102,241,0.4)" }
                }}
              >
                <img 
                  src={char.image} 
                  alt={char.name} 
                  style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }} 
                />
                <Typography variant="h6" color="white">{char.name}</Typography>
                <Typography color="#9CA3AF">{char.gender}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Botones de navegación */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4, gap: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setPage(page - 1)} 
            disabled={!info.prev}
          >
            Anterior
          </Button>
          <Typography color="white">Página {page}</Typography>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setPage(page + 1)} 
            disabled={!info.next}
          >
            Siguiente
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};