import { useState, FormEvent } from "react";
import { Box, Button, Container, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import Image from "next/image";
import LogoAzul from '@/assets/logoazul.png'
import EmailIcon from '@mui/icons-material/EmailOutlined';
import LockIcon from '@mui/icons-material/LockOpenOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
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
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                            }}
                            required
                        />
                        <TextField
                            label="Senha"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            required
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
                            <Button variant="contained" color="primary" type="submit">ENTRAR</Button>
                        </Box>
                    </form>
                </Container>
            </Grid>
        </Grid>
    )
}