import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import FormTransaction from "../components/FormTransaction/FormTransaction";

export default function TransactionDetails() {
    const { id } = useParams();

    console.log(id);
    return (
        <>
            <Header />
            <FormTransaction />
            <h1>Detalhes da Transação {id}</h1>
        </>
    )
}
