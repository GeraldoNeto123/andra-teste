import { FooterContainer } from './styles';
import Image from 'next/image';
import LogoBranco from '@/assets/logobranco.png'

export default function Footer() {

    return (
        <FooterContainer>
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