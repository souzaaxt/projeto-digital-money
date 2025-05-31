import { DialogTitle } from "@headlessui/react";
import ButtonTypeTransaction from "../ButtonTypeTransaction/ButtonTypeTransaction";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

export default function FormTransaction({
  handleChangeCategory,
  handleChangePrice,
  handleChangeTitle,
  handleClickTransactionType,
  transactionType,
  handleNewTransaction,
}) {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
          <DialogTitle
            as="h1"
            className="text-2xl font-bold text-gray-900 mb-5"
          >
            Cadastrar transação
          </DialogTitle>
          <div className="mt-2 w-full space-y-5">
            <input
              className="w-full h-[50px] bg-gray-200 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Titulo"
              onChange={(ev) => handleChangeTitle(ev.target.value)}
            />
            <input
              className="w-full h-[50px] bg-gray-200 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Preço"
              onChange={(ev) => handleChangePrice(ev.target.value)}
            />
            <div className="flex justify-between">
              <ButtonTypeTransaction
                type="deposit"
                isActive={transactionType === "deposit"}
                onClick={() => handleClickTransactionType("deposit")}
              >
                <ArrowCircleUp
                  size={20}
                  className="text-emerald-500 font-bold"
                />
                Entrada
              </ButtonTypeTransaction>

              <ButtonTypeTransaction
                isActive={transactionType === "withdraw"}
                type="withdraw"
                onClick={() => handleClickTransactionType("withdraw")}
              >
                <ArrowCircleDown size={20} className="text-red-500 font-bold" />{" "}
                Saida
              </ButtonTypeTransaction>
            </div>
            <div className="w-full">
              <input
                className="w-full h-[50px] bg-gray-200 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Categoria"
                onChange={(ev) => handleChangeCategory(ev.target.value)}
              />
            </div>
          </div>
          <div className="bg-white w-full flex items-center justify-center sm:flex sm:flex-row-reverse mt-5">
            <button
              type="button"
              onClick={handleNewTransaction}
              className="w-full h-[50px] items-center justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-emerald-500 cursor-pointer"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
