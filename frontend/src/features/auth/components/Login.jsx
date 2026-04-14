import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

function Login() {
  const [form, setForm] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = (name, value) => {
    let error = "";
    if (name === "email") {
      if (!value) error = "El correo es obligatorio";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Correo no válido";
    }
    if (name === "password") {
      if (!value) error = "La contraseña es obligatoria";
      else if (value.length < 6) error = "Mínimo 6 caracteres";
    }
    if (name === "confirmPassword") {
      if (value !== password) error = "Las contraseñas no coinciden";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.email || errors.password || errors.confirmPassword) {
      alert("Corrige los errores antes de continuar");
      return;
    }
    if (form === "register") {
      try {
        await axios.post(`${BACKEND_URL}/api/auth/register`, {
          email,
          password,
        });
        alert("Cuenta creada con éxito");
        setForm("login");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Error de conexión con el servidor");
        }
      }
      return;
    }
    if (form === "login") {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/api/auth/login`,
          { email, password }
        );
        const user = response.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        alert(`Bienvenido ${user.email}`);
        window.location.href = "/gastos";
      } catch (error) {
        if (error.response?.status === 400 || error.response?.status === 401) {
          alert(error.response.data.message);
        } else {
          alert("Error del servidor");
        }
      }
      return;
    }
    if (form === "recover") {
      alert("Se envió un enlace de recuperación 📧");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #021022 0%, #081b34 100%)",
      }}
    >
      <Header />
      <Container sx={{ flex: 1, py: 8 }}>
        <Paper
          sx={{
            maxWidth: 460,
            mx: "auto",
            p: 5,
            borderRadius: 4,
            background: "rgba(15, 32, 54, 0.96)",
            border: "1px solid rgba(56, 189, 248, 0.16)",
            boxShadow: "0 30px 60px rgba(2, 15, 31, 0.35)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="white"
            gutterBottom
          >
            {form === "login"
              ? "Accede a WeatherWorld"
              : form === "register"
              ? "Crea tu cuenta de clima"
              : "Recupera tu acceso"}
          </Typography>
          <Typography textAlign="center" color="#94a3b8" mb={4}>
            {form === "login"
              ? "Ingresa para visualizar tus pronósticos y metas climáticas."
              : form === "register"
              ? "Regístrate para guardar tus objetivos del clima."
              : "Escribe tu correo para recuperar tu contraseña."}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              label="Correo electrónico"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validate("email", e.target.value);
              }}
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: "white",
                  '& fieldset': { borderColor: "rgba(148,163,184,0.32)" },
                  '&:hover fieldset': { borderColor: "#38bdf8" },
                  '&.Mui-focused fieldset': { borderColor: "#38bdf8" },
                },
                '& .MuiInputLabel-root': { color: "#94a3b8" },
              }}
            />
            {form !== "recover" && (
              <>
                <TextField
                  label="Contraseña"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validate("password", e.target.value);
                  }}
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <VisibilityOff sx={{ color: "white" }} /> : <Visibility sx={{ color: "white" }} />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: "white",
                      '& fieldset': { borderColor: "rgba(148,163,184,0.32)" },
                      '&:hover fieldset': { borderColor: "#38bdf8" },
                      '&.Mui-focused fieldset': { borderColor: "#38bdf8" },
                    },
                    '& .MuiInputLabel-root': { color: "#94a3b8" },
                  }}
                />
                {form === "login" && (
                  <Box sx={{ textAlign: "right" }}>
                    <Link
                      component="button"
                      color="#38bdf8"
                      onClick={() => setForm("recover")}
                      sx={{ fontSize: "0.9rem" }}
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Box>
                )}
              </>
            )}
            {form === "register" && (
              <TextField
                label="Confirmar contraseña"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validate("confirmPassword", e.target.value);
                }}
                fullWidth
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: "white",
                    '& fieldset': { borderColor: "rgba(148,163,184,0.32)" },
                    '&:hover fieldset': { borderColor: "#38bdf8" },
                    '&.Mui-focused fieldset': { borderColor: "#38bdf8" },
                  },
                  '& .MuiInputLabel-root': { color: "#94a3b8" },
                }}
              />
            )}
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.8,
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #38bdf8, #6366f1)",
                }}
              >
                {form === "login"
                  ? "Iniciar sesión"
                  : form === "register"
                  ? "Crear cuenta"
                  : "Enviar recuperación"}
              </Button>
              <Button
                type="button"
                fullWidth
                onClick={() => {
                  setForm("login");
                  setEmail("");
                  setPassword("");
                  setConfirmPassword("");
                }}
                sx={{
                  py: 1.8,
                  fontWeight: "bold",
                  color: "#94a3b8",
                  border: "1px solid rgba(148,163,184,0.24)",
                }}
              >
                Cancelar
              </Button>
            </Box>
          </Box>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            {form === "login" ? (
              <Link component="button" color="#38bdf8" onClick={() => setForm("register")}>
                Crear cuenta
              </Link>
            ) : (
              <Link component="button" color="#38bdf8" onClick={() => setForm("login")}>
                Volver al login
              </Link>
            )}
          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}

export default Login;
