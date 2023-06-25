import { useState } from 'react';
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
import { DataGrid, GridColDef } from '@mui/x-data-grid';


interface OperacoesTableProps {
    operacoes: OperacaoData[];
    handleRemoveOPeracao: (id: number[]) => Promise<void>;
    handleRow: (ids: any) => void;
}

export default function OperacoesTable({
    operacoes,
    handleRemoveOPeracao,
    handleRow
}: OperacoesTableProps) {
    const columns: GridColDef[] = [
        {
            field: 'Excluir',
            headerName: '',
            renderCell: (params) => (
                <Button
                    onClick={() => { handleRemoveOPeracao([Number(params.row.id)]) }}
                >
                    <DeleteForeverIcon color="error" />
                </Button>
            ),
            sortable: false,
            disableColumnMenu: true,
            disableReorder: true,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'Editar',
            headerName: '',
            renderCell: (params) => (
                <Link href={`/operacoes/update?id=${params.row.id}&nmNatOperacao=${params.row.nmNatOperacao}&tpEstoque=${params.row.tpEstoque}&tpFinanceiro=${params.row.tpFinanceiro}`}>
                    <Button>
                        <EditIcon />
                    </Button>
                </Link>
            ),
            sortable: false,
            disableColumnMenu: true,
            disableReorder: true,
            headerAlign: 'center',
            align: 'center',
        },
        { field: 'id', headerName: 'ID', flex: 1, minWidth: 0 },
        { field: 'nmNatOperacao', headerName: 'Descrição', flex: 1, minWidth: 0 },
        { field: 'alias_tpEstoque', headerName: 'Estoque', flex: 1, minWidth: 0 },
        { field: 'alias_tpFinanceiro', headerName: 'Financeiro', flex: 1, minWidth: 0 },
    ];

    return (
        <DataGrid
            rows={operacoes}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 20 },
                },
            }}
            pageSizeOptions={[5, 10, 20, 50, 100]}
            checkboxSelection
            disableRowSelectionOnClick
            onRowSelectionModelChange={handleRow}
        />
    );
}