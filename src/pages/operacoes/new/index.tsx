import Footer from "@/components/Footer";
import ManutencaoForm from "@/components/ManutencaoForm";
import Navbar from "@/components/Navbar";
import { Typography } from "@mui/material";

export default function New() {
    return (
        <>
            <Navbar />

            <main style={{ padding: 16 }}>
                <Typography variant="subtitle1">Tela de manutenção - Incluir ou Alterar</Typography>
                <ManutencaoForm />
            </main>

            <Footer />
        </>)
}