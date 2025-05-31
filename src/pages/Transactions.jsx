import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import CardTransaction from "../components/CardTransaction/CardTransaction";
import ModalNewTransaction from "../components/ModalNewTransaction/ModalNewTransaction";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

function TransactionsPage() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  function handleEditTransaction(id) {
    navigate("/transactions/" + id);
  }

  console.log(allTransactions);
  async function fetchTransactions() {
    const transactions = await axios.get("http://localhost:3000/transactions");

    setAllTransactions(transactions.data);
  }

  function handleOpenModal() {
    setOpen(true);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const depositsResult = allTransactions.reduce((prev, current) => {
    if (current.transactionType === "deposit") {
      return prev + current.price;
    }

    return prev;
  }, 0);

  const withdrawsResult = allTransactions.reduce((prev, current) => {
    if (current.transactionType === "withdraw") {
      return prev + current.price;
    }

    return prev;
  }, 0);

  const total = depositsResult - withdrawsResult;

  console.log(withdrawsResult);
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header handleOpenModal={handleOpenModal} />
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-24">
          <CardTransaction
            title="Entradas"
            background="bg-white"
            amount={depositsResult}
            icon={<ArrowCircleUp className="text-green-500" size={32} />}
          />

          <CardTransaction
            title="Saídas"
            amount={withdrawsResult}
            background="bg-white"
            icon={<ArrowCircleDown className="text-red-500" size={32} />}
          />

          <CardTransaction
            title="Total"
            background="bg-emerald-500"
            amount={total}
            icon={<CurrencyDollar size={32} />}
            textColor="text-white"
          />
        </div>

        <div className="overflow-x-auto mt-8">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="px-6 py-3 pb-4 font-medium">Título</th>
                <th className="px-6 py-3 pb-4 font-medium">Valor</th>
                <th className="px-6 py-3 pb-4 font-medium">Categoria</th>
                <th className="px-6 py-3 pb-4 font-medium">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {allTransactions.map((transaction, index) => {
                return (
                  <tr
                    className="hover:bg-gray-50 bg-white"
                    key={index}
                    onClick={() => {
                      handleEditTransaction(transaction.id);
                    }}
                  >
                    <td className="px-6 py-4">{transaction.title}</td>
                    <td className="px-6 py-4 text-green-500 font-medium">
                      {transaction.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="px-6 py-4">{transaction.category}</td>
                    <td className="px-6 py-4">{transaction.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <ModalNewTransaction open={open} setOpen={setOpen} />
      </main>
    </div>
  );
}

export default TransactionsPage;
