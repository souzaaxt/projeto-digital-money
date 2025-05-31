import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";

export default function TransactionDetails() {
    const { id } = useParams();

    console.log(id);
    return (
        <>
            <Header />
            <h1>Detalhes da Transação {id}</h1>
        </>
    )
}
