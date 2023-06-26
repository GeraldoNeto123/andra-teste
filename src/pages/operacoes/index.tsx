import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OperacoesTable from "@/components/OperacoesTable";
import { getAPIClient } from "@/services/axios";
import { Box, Button, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Link from "next/link";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useCallback, useEffect, useState } from "react";
import Sweetalert2 from 'sweetalert2';
import { api } from "@/services/api";
import OperacoesSearchByDescricao from "@/components/OperacoesSearchByDescricao";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export interface OperacaoData {
    id: number;
    nmNatOperacao: string;
    tpEstoque: string;
    alias_tpEstoque: string;
    tpFinanceiro: string;
    alias_tpFinanceiro: string;
    dhCadastrou: string;
    idUsuarioCadastrou: number | null;
    alias_usuarioCadastrou: string | null;
    dhAlterou: string | null;
    idUsuarioAlterou: number | null;
    alias_usuarioAlterou: string | null;
    dhExcluiu: string | null;
    idUsuarioExcluiu: number | null;
    alias_usuarioExcluiu: string | null;
    alias_excluido: "Não" | "Sim";
}

interface DashboardProps {
    operacoesData: OperacaoData[];
}

export default function Operacoes({ operacoesData }: DashboardProps) {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [operacoes, setOperacoes] = useState<OperacaoData[]>(() => {
        if (typeof operacoesData === 'undefined') {
            return []
        }
        return operacoesData
    });

    const handleRemoveOPeracao = useCallback(async (ids: number[]) => {
        try {
            const { isConfirmed } = await Sweetalert2.fire({
                title: 'Deseja realmente excluir?',
                text: "Esta ação é permanent e não pode ser revertida.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Excluir mesmo assim'
            });

            if (isConfirmed) {
                await api.delete('/natoperacao/excluir', {
                    data: {
                        lista: ids.map((id) => ({
                            idLista: 1,
                            id
                        }))

                    }
                });

                setOperacoes(state => state.filter((operacao) => !ids.includes(operacao.id)))
            }
        } catch (error) {
            Sweetalert2.fire({
                title: 'Houve algum problema!',
                text: `Houve um problema deletar o item. Atualize a página e tente novamente.`,
                icon: 'warning',
                confirmButtonText: 'Fechar'
            });
        }
    }, [])

    const handleSearchOPeracao = useCallback(async (descricao: string) => {
        try {
            const response = await api.post('/natoperacao/pesquisar', {
                nmNatOperacao: [
                    {
                        operandoTipo: "0",
                        operandoValor: descricao,
                        operador: "2"
                    }
                ]
            });
            if (response.data.status === 200) {
                setOperacoes(response.data.retorno);
            } else {
                setOperacoes([]);
            }
        } catch (error) {

        }
    }, [])

    const handleRow = (ids: any) => {
        setSelectedRows(ids);
    };

    useEffect(() => {
        if (typeof operacoesData === 'undefined') {
            handleSearchOPeracao('');
        }
    }, [handleSearchOPeracao, operacoesData])

    return (
        <>
            <Navbar />

            <main style={{ padding: 16 }}>
                <Typography variant="h3">Tela de pesquisa</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    <div>

                        <Link href='/operacoes/new'>
                            <Button variant='contained' startIcon={<AddCircleOutlineIcon />}>Incluir</Button>
                        </Link>
                        {selectedRows.length > 0 && (
                            <Button
                                onClick={() => handleRemoveOPeracao(selectedRows)}
                                variant='contained'
                                color="error"
                                startIcon={<HighlightOffIcon />}
                                sx={{ marginLeft: 1 }}
                            >
                                Excluir {selectedRows.length} Itens
                            </Button>
                        )}
                    </div>

                    <OperacoesSearchByDescricao handleSearchOPeracao={handleSearchOPeracao} />
                </Box>

                <OperacoesTable
                    operacoes={operacoes}
                    handleRemoveOPeracao={handleRemoveOPeracao}
                    handleRow={handleRow}
                />
            </main>

            <Footer />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const apiClient = getAPIClient(context);
    const { query } = context;

    const descricao = String(query.descricao || '');

    let operacoesData = [];
    // try {
    //     const response = await apiClient.post('/natoperacao/pesquisar', {
    //         nmNatOperacao: [
    //             {
    //                 operandoTipo: "0",
    //                 operandoValor: descricao,
    //                 operador: "2"
    //             }
    //         ]
    //     });
    //     if (response.data.status === 200)
    //         operacoesData = response.data.retorno;
    // } catch (error) {
    //     console.log(error)
    // }

    return {
        props: {
            operacoesData
        }
    }
}