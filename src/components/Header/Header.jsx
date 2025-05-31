export default function Header({ handleOpenModal }) {
  return (
    <header className="w-full bg-pink-700 py-6 pb-32 px-4 md:px-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl md:text-2xl font-bold">
          digital money
        </h1>
        <button
          className="bg-white/20 px-12 rounded py-2 hover:bg-white/30 text-white border-0 cursor-pointer"
          onClick={handleOpenModal}
        >
          Nova transação
        </button>
      </div>
    </header>
  );
}
