import Footer from "@/components/Footer";
import ManutencaoForm from "@/components/ManutencaoForm";
import Navbar from "@/components/Navbar";
import { Typography } from "@mui/material";
import { GetServerSideProps } from "next";

interface UpdateProps {
    query: {
        id: string;
        nmNatOperacao: string;
        tpEstoque: string;
        tpFinanceiro: string;
    }
}
export default function Update({ query }: UpdateProps) {
    return (
        <>
            <Navbar />

            <main style={{ padding: 16 }}>
                <Typography variant="subtitle1">Tela de manutenção - Incluir ou Alterar</Typography>
                <ManutencaoForm
                    id={query.id}
                    descricao={query.nmNatOperacao}
                    financeiro={query.tpFinanceiro}
                    tipoOpercao={query.tpEstoque}
                />
            </main>

            <Footer />
        </>)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;

    return {
        props: {
            query
        }
    }
}