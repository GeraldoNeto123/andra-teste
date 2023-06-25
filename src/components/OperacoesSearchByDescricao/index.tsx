import { IconButton, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

interface OperacoesSearchByDescricaoProps {
    handleSearchOPeracao: (descricao: string) => Promise<void>;
}

export default function OperacoesSearchByDescricao({ handleSearchOPeracao }: OperacoesSearchByDescricaoProps) {
    const router = useRouter();
    const [descricao, setDescricao] = useState(router.query.descricao || '');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const path = router.pathname;
        const query = router.query;
        query.descricao = descricao;

        router.push(
            {
                pathname: path,
                query: query,

            },
            undefined,
            {
                shallow: true
            }
        )

        handleSearchOPeracao(String(descricao));
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Descrição"
                variant="filled"
                type="search"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton
                            edge="end"
                            type="submit"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>,
                }}
            />
        </form>
    )
}