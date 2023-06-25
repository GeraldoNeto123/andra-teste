import {
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
    Logout as LogoutIcon
} from '@mui/icons-material';
import { IconButton, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LogoBranco from '@/assets/logobranco.png'
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';

export default function Navbar() {
    const { theme, handleTheme } = useTheme();
    const { signOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky' sx={{ padding: 1 }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Image
                            src={LogoBranco}
                            alt="Logo Andra"
                            width={1667}
                            height={541}
                            style={{
                                height: 50,
                                width: 'auto'
                            }}
                        />
                    </Box>
                    <Box>
                        <IconButton color='inherit' onClick={() => handleTheme(theme === 'dark' ? 'light' : 'dark')}>
                            {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>
                        <IconButton color='inherit' onClick={signOut}>
                            <LogoutIcon fontSize='large' />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}