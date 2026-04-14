import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Box, Typography, Container, Paper } from "@mui/material";

function Acerca() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #021026 0%, #081a34 100%)",
      }}
    >
      <Header />

      <Container sx={{ flex: 1, py: 6 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" color="white" gutterBottom>
            Acerca de WeatherWorld 🌦️
          </Typography>
          <Typography color="#94a3b8" variant="h6">
            Descubre cómo WeatherWorld combina diseño y datos para que tomes mejores decisiones sobre tu clima personal.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 4,
              background: "rgba(15, 32, 78, 0.92)",
              border: "1px solid rgba(56, 189, 248, 0.16)",
              boxShadow: "0 0 30px rgba(2, 15, 31, 0.22)",
            }}
          >
            <Typography variant="h5" color="#38bdf8" gutterBottom>
              Nuestra historia
            </Typography>
            <Typography color="#94a3b8">
              WeatherWorld nació de la idea de crear una plataforma de pronóstico y planificación que sea clara, hermosa y fácil de usar.
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 4,
              background: "rgba(15, 32, 78, 0.92)",
              border: "1px solid rgba(56, 189, 248, 0.16)",
              boxShadow: "0 0 30px rgba(2, 15, 31, 0.22)",
            }}
          >
            <Typography variant="h5" color="#60a5fa" gutterBottom>
              Nuestra misión
            </Typography>
            <Typography color="#94a3b8">
              Ayudarte a alcanzar tus metas personales con una interfaz inspirada en el clima y datos visuales que te acompañen día a día.
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 4,
              background: "rgba(15, 32, 78, 0.92)",
              border: "1px solid rgba(56, 189, 248, 0.16)",
              boxShadow: "0 0 30px rgba(2, 15, 31, 0.22)",
            }}
          >
            <Typography variant="h5" color="#22c55e" gutterBottom>
              Qué puedes hacer
            </Typography>
            <Typography color="#94a3b8">
              - Consultar datos con estilo <br />
              - Seguimiento de metas <br />
              - Ver estadísticas claras <br />
              - Guardar tu cuenta y acceder en cualquier momento
            </Typography>
          </Paper>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default Acerca;
