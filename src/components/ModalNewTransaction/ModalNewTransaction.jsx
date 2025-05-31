import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import axios from "axios";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { useState } from "react";
import ButtonTypeTransaction from "../ButtonTypeTransaction/ButtonTypeTransaction";
import { format } from "date-fns";
import FormTransaction from "../FormTransaction/FormTransaction";

export default function ModalNewTransaction({ open, setOpen }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const [transactionType, setTransactionType] = useState("");

  function handleChangeTitle(ev) {
    setTitle(ev);
  }

  function handleClickTransactionType(type) {
    setTransactionType(type);
  }

  function handleChangeCategory(ev) {
    setCategory(ev);
  }

  function handleChangePrice(ev) {
    setPrice(ev);
  }

  async function handleNewTransaction() {
    await axios.post("http://localhost:3000/transactions", {
      title,
      price: Number(price),
      category,
      transactionType,
      date: format(new Date(), "dd/MM/yyyy"),
    });

    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95 p-2"
          >
            <FormTransaction
              handleChangeCategory={handleChangeCategory}
              handleChangePrice={handleChangePrice}
              handleChangeTitle={handleChangeTitle}
              handleClickTransactionType={handleClickTransactionType}
              transactionType={transactionType}
              handleNewTransaction={handleNewTransaction}
            />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
