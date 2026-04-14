import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Container, Typography, Box, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #03101f 0%, #081a2c 100%)",
        width: "100%",
      }}
    >
      <Header />

      <Box sx={{ flex: 1, py: 6, width: "100%" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              px: { xs: 3, md: 6 },
              py: { xs: 6, md: 10 },
              mb: 6,
              borderRadius: 4,
              background: "rgba(15, 32, 78, 0.92)",
              border: "1px solid rgba(56, 189, 248, 0.18)",
              boxShadow: "0 40px 90px rgba(2, 15, 31, 0.35)",
            }}
          >
            <Typography variant="overline" className="weather-section-title" gutterBottom>
              Mundo del tiempo
            </Typography>
            <Typography variant="overline" className="weather-section-title" gutterBottom>
              https://github.com/PinedaAgudelo2003/taller-4-importante.git
            </Typography>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "#f8fafc" }}>
              Descubre el clima global con estilo moderno
            </Typography>
            <Typography variant="h6" color="#94a3b8" mb={4}>
              Usa tu cuenta para acceder a pronósticos, metas y estadísticas en una experiencia visual inspirada en el clima.
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #38bdf8, #6366f1)",
                px: 5,
                py: 1.8,
                borderRadius: 3,
                fontWeight: "bold",
                textTransform: "none",
              }}
              onClick={() => navigate("/login")}
            >
              Iniciar sesión
            </Button>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            <Paper
              onClick={() => navigate("/gastos")}
              className="weather-glass"
              sx={{
                p: 4,
                cursor: "pointer",
                borderRadius: 4,
                transition: "transform 0.3s ease",
                '&:hover': { transform: 'translateY(-6px)' },
              }}
            >
              <Typography variant="h5" fontWeight="bold" color="#e2e8f0" gutterBottom>
                Registro diario
              </Typography>
              <Typography color="#94a3b8">
                Registra gastos e ingresos mientras sigues el clima de tus ciudades favoritas.
              </Typography>
            </Paper>

            <Paper
              onClick={() => navigate("/metas")}
              className="weather-glass"
              sx={{
                p: 4,
                cursor: "pointer",
                borderRadius: 4,
                transition: "transform 0.3s ease",
                '&:hover': { transform: 'translateY(-6px)' },
              }}
            >
              <Typography variant="h5" fontWeight="bold" color="#e2e8f0" gutterBottom>
                Mis metas
              </Typography>
              <Typography color="#94a3b8">
                Define objetivos y observa cómo avanza tu puntuación de ahorro de energía y clima.
              </Typography>
            </Paper>

            <Paper
              onClick={() => navigate("/estadisticas")}
              className="weather-glass"
              sx={{
                p: 4,
                cursor: "pointer",
                borderRadius: 4,
                transition: "transform 0.3s ease",
                '&:hover': { transform: 'translateY(-6px)' },
              }}
            >
              <Typography variant="h5" fontWeight="bold" color="#e2e8f0" gutterBottom>
                Estadísticas
              </Typography>
              <Typography color="#94a3b8">
                Visualiza tu evolución mensual con estadísticas claras y paneles inspirados en el clima.
              </Typography>
            </Paper>
          </Box>

          <Box
            sx={{
              mt: 6,
              p: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(148,163,184,0.16)",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" color="#f8fafc" gutterBottom>
              Tip del día
            </Typography>
            <Typography color="#94a3b8">
              Consulta tu clima favorito antes de tomar decisiones: con una visión clara del tiempo, también puedes planear mejor tus metas.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
