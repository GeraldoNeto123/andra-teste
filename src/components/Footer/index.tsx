import { FooterContainer } from './styles';
import Image from 'next/image';
import LogoBranco from '@/assets/logobranco.png'
import { useTheme } from '@/hooks/useTheme';
import { grey } from '@mui/material/colors';

export default function Footer() {
    const { theme } = useTheme();

    return (
        <FooterContainer sx={{
            backgroundColor: theme === 'dark' ? '#272727' : grey[200]
        }}>
            <p>Copyright © 1995-2023 Andra Sistemas</p>
            <Image
                src={LogoBranco}
                alt="Logo Andra"
                width={1667}
                height={541}
                style={{
                    height: 40,
                    width: 'auto',
                    // opacity: 0.5,
                    position: 'absolute',
                    bottom: 5,
                    right: 0
                }}
            />
        </FooterContainer>
    )
}