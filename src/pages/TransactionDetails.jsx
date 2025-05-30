import { useParams } from "react-router-dom";

export default function TransactionDetails() {
    const params = useParams();
    const { id } = params;

    console.log(id);
    return (
        <h1>Detalhes da Transação {id}</h1>
    )
}
