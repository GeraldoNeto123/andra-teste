import { FormEvent, useState } from "react"
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Sweetalert2 from 'sweetalert2';
import { useRouter } from "next/router";
import { api } from "@/services/api";

interface ManutencaoFormProps {
    descricao?: string;
    tipoOpercao?: string;
    financeiro?: string;
    id?: string;
}
export default function ManutencaoForm({ descricao, tipoOpercao, financeiro, id }: ManutencaoFormProps) {
    const router = useRouter();
    const [descricaoState, setDescricaoState] = useState(descricao || '');
    const [tipoOpercaoState, setTipoOpercaoState] = useState(tipoOpercao || '1');
    const [financeiroState, setFinanceiroState] = useState(financeiro || '1');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const idOperacao = Number(id);
            const lista = [
                {
                    idLista: 1,
                    nmNatOperacao: descricaoState,
                    tpEstoque: tipoOpercaoState,
                    tpFinanceiro: financeiroState
                }
            ];

            if (idOperacao) {
                await api.put('/natoperacao/alterar', { lista: [{ ...lista[0], id: idOperacao }] });
            } else {
                await api.post('/natoperacao/incluir', { lista });
            }

            Sweetalert2.fire({
                title: 'Sucesso!',
                text: 'Operação incluida com sucesso.',
                icon: 'success',
                confirmButtonText: 'Fechar'
            })
        } catch (error) {
            Sweetalert2.fire({
                title: 'Erro!',
                text: 'Erro ao incluir a Operação.',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
        }
    }

    const handleCancelar = async () => {
        const { isConfirmed } = await Sweetalert2.fire({
            title: 'Cancelar operação?',
            text: "Relamente deseja abandonar a operação?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Continuar editando',
            confirmButtonText: 'Cancelar operação'
        });

        if (isConfirmed) {
            router.push('/operacoes')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container columnSpacing={{ xs: 1 }}>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                    <TextField
                        label="Descrição"
                        variant="filled"
                        value={descricaoState}
                        onChange={(e) => setDescricaoState(e.target.value)}
                        sx={{
                            width: '100%'
                        }}
                        required
                    />
                </Grid>
                <Grid
                    item
                    md={3}
                    xs={12}
                >
                    <TextField
                        label="Tipo Operção"
                        select
                        variant="filled"
                        value={tipoOpercaoState}
                        onChange={(e) => setTipoOpercaoState(e.target.value)}
                        sx={{
                            width: '100%'
                        }}
                        required
                    >
                        <MenuItem value="1">Saída</MenuItem>
                        <MenuItem value="2">Entrada</MenuItem>
                    </TextField>
                </Grid>
                <Grid
                    item
                    md={3}
                    xs={12}
                >
                    <TextField
                        label="Financeiro"
                        select
                        variant="filled"
                        value={financeiroState}
                        onChange={(e) => setFinanceiroState(e.target.value)}
                        sx={{
                            width: '100%'
                        }}
                        required
                    >
                        <MenuItem value="1">Receber</MenuItem>
                        <MenuItem value="2">Pagar</MenuItem>
                    </TextField>
                </Grid>
            </Grid>

            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 1,

                }}
            >
                <Button
                    type="submit"
                    variant='contained'
                    color='success'
                    startIcon={<CheckCircleOutlineIcon />}
                    size="large"
                >Confirmar</Button>
                <Button
                    type="button"
                    onClick={handleCancelar}
                    variant='contained'
                    color='error'
                    startIcon={<HighlightOffIcon />}
                    size="large"
                >Cancelar</Button>
            </Box>
        </form>
    )
}