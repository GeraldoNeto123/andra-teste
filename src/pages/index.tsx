import { useState, FormEvent } from "react";
import { Backdrop, Box, Button, CircularProgress, Container, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import Image from "next/image";
import LogoAzul from '@/assets/logoazul.png'
import EmailIcon from '@mui/icons-material/EmailOutlined';
import LockIcon from '@mui/icons-material/LockOpenOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const { signIn } = useAuth();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const loginSuccess = await signIn({ email, password });

    if (loginSuccess) {
      return router.push('/operacoes');
    }
    
    setLoading(false);
    setLoginFailed(true);
  }

  return (
    <>
      <Grid container height='100vh' width='100vw'>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            boxShadow: 10,
            background: 'linear-gradient(#0052CC,#0052CC, white, white, #0052CC,#0052CC)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            src={LogoAzul}
            alt="Logo Andra"
            width={1667}
            height={541}
            style={{
              height: 'auto',
              width: '70%'
            }}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" fontWeight={500} marginBottom={3}>Olá usuário!</Typography>
          <Container maxWidth="sm">
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                width: '100%'
              }}
            >
              <TextField
                label="E-mail"
                variant="outlined"
                type="email"
                error={loginFailed}
                value={email}
                onChange={e => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                }}
                helperText="E-mail e/ou senha inválidos."
                required
              />
              <TextField
                label="Senha"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                error={loginFailed}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                helperText="E-mail e/ou senha inválidos."
                InputProps={{
                  startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>,
                }}
              />
              <Box marginTop={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                >ENTRAR</Button>
              </Box>
            </form>
          </Container>
        </Grid>
      </Grid>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
