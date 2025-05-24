import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import CardTransaction from "../components/CardTransaction/CardTransaction";
import ModalNewTransaction from "../components/ModalNewTransaction/ModalNewTransaction";
import axios from "axios";
import { useEffect, useState } from "react";

function TransactionsPage() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [open, setOpen] = useState(false);

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

  console.log(allTransactions);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="w-full bg-pink-700 py-6 pb-32 px-4 md:px-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl md:text-2xl font-bold">
            digital money
          </h1>
          <button className="bg-white/20 px-12 rounded py-2 hover:bg-white/30 text-white border-0 cursor-pointer" onClick={handleOpenModal}>
            Nova transação
          </button>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-24">
          <CardTransaction
            title="Entradas"
            background="bg-white"
            icon={<ArrowCircleUp className="text-green-500" size={32} />}
          />

          <CardTransaction
            title="Saídas"
            background="bg-white"
            icon={<ArrowCircleDown className="text-red-500" size={32} />}
          />

          <CardTransaction
            title="Total"
            background="bg-emerald-500"
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
                  <tr className="hover:bg-gray-50 bg-white" key={index}>
                    <td className="px-6 py-4">{transaction.title}</td>
                    <td className="px-6 py-4 text-green-500 font-medium">
                      {transaction.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
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
