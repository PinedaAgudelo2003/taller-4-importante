import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Box, Typography, Container, Button } from "@mui/material";
import { useState } from "react";

function Metas() {
  const [progreso, setProgreso] = useState(40);

  const handleAhorrar = () => {
    setProgreso((prev) => Math.min(prev + 10, 100));
  };

  const handleRetirar = () => {
    setProgreso((prev) => Math.max(prev - 10, 0));
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #021026 0%, #081a34 100%)" }}>
      <Header />

      <Container sx={{ flex: 1, py: 6, textAlign: "center" }}>
        <Typography variant="h3" color="white" gutterBottom>
          Mis metas climáticas 🌦️
        </Typography>

        <Typography color="#94a3b8" mb={4}>
          Lleva un seguimiento visual de tu meta y planifica tu ahorro en función del clima.
        </Typography>

        <Box
          sx={{
            mt: 4,
            width: 320,
            height: 320,
            mx: "auto",
            borderRadius: "50%",
            border: "8px solid rgba(56, 189, 248, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            color: "white",
            background: "radial-gradient(circle, rgba(56,189,248,0.15), transparent 70%)",
          }}
        >
          <Typography variant="h4">{progreso}%</Typography>
        </Box>

        <Box sx={{ mt: 4, display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="contained" onClick={handleAhorrar} sx={{ background: "#22c55e", textTransform: "none" }}>
            Ahorrar
          </Button>
          <Button variant="contained" onClick={handleRetirar} sx={{ background: "#ef4444", textTransform: "none" }}>
            Retirar
          </Button>
        </Box>

        {progreso === 100 && (
          <Typography variant="h5" color="#facc15" mt={3}>
            🎉 ¡Meta climática alcanzada!
          </Typography>
        )}
      </Container>

      <Footer />
    </Box>
  );
}

export default Metas;
