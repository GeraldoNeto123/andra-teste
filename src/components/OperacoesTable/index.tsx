import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { OperacaoData } from '@/pages/operacoes'
import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Button } from '@mui/material';
import Link from 'next/link';

interface OperacoesTableProps {
    operacoes: OperacaoData[];
    handleRemoveOPeracao: (id: number) => Promise<void>;
}

export default function OperacoesTable({ operacoes, handleRemoveOPeracao }: OperacoesTableProps) {


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell >Descrição</TableCell>
                        <TableCell >Estoque</TableCell>
                        <TableCell >Financeiro</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {operacoes.map((operacao, index) => (
                        <TableRow
                            key={`operacao-${index}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>
                                <Button
                                    onClick={() => { handleRemoveOPeracao(operacao.id) }}
                                >
                                    <DeleteForeverIcon color="error" />
                                </Button>
                            </TableCell>
                            <TableCell>
                                <Link href={`/operacoes/update?id=${operacao.id}&nmNatOperacao=${operacao.nmNatOperacao}&tpEstoque=${operacao.tpEstoque}&tpFinanceiro=${operacao.tpFinanceiro}`}>
                                    <Button>
                                        <EditIcon />
                                    </Button>
                                </Link>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {operacao.id}
                            </TableCell>
                            <TableCell> {operacao.nmNatOperacao}</TableCell>
                            <TableCell> {operacao.alias_tpEstoque}</TableCell>
                            <TableCell> {operacao.alias_tpFinanceiro}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}