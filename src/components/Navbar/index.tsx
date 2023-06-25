import { DarkMode, Logout } from '@mui/icons-material';
import { IconButton, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LogoBranco from '@/assets/logobranco.png'
import Image from 'next/image';

export default function Navbar() {
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
                        <IconButton color='inherit' onClick={() => { }}>
                            <DarkMode fontSize='large' />
                        </IconButton>
                        <IconButton color='inherit' onClick={() => { }}>
                            <Logout fontSize='large' />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}