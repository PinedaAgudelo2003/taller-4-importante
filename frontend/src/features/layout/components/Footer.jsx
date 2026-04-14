import { Box, Typography, Link, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, Email, Phone } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        background: "#061426",
        borderTop: "1px solid rgba(148,163,184,0.18)",
        color: "white",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            background: "linear-gradient(90deg, #38bdf8, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          WeatherWorld
        </Typography>
        <Typography variant="body2" color="#94a3b8">
          Pronósticos y datos de clima en tu mano.
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
        mb={4}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Contacto
          </Typography>
          <Typography variant="body2" color="#94a3b8">
            <Email fontSize="small" sx={{ mr: 0.5 }} />
            info@weatherworld.com
          </Typography>
          <Typography variant="body2" color="#94a3b8">
            <Phone fontSize="small" sx={{ mr: 0.5 }} />
            +57 300 123 4567
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Síguenos
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
            <Link href="#" color="inherit"><Facebook /></Link>
            <Link href="#" color="inherit"><Twitter /></Link>
            <Link href="#" color="inherit"><Instagram /></Link>
          </Stack>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Ubicación
          </Typography>
          <Typography variant="body2" color="#94a3b8">
            Plaza del Clima 42, Medellín, Colombia
          </Typography>
        </Box>
      </Stack>

      <Typography variant="caption" color="#94a3b8" display="block" textAlign="center">
        © {new Date().getFullYear()} WeatherWorld. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
