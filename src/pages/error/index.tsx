import { Link } from "react-router-dom";

export function Error() {
    return (
        <div>
            <h1>Página não encontrada</h1>
            <p>Você caiu em uma pagina que não existe</p>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    )
}