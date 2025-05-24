export default function ButtonTypeTransaction({
  type,
  onClick,
  children,
  isActive,
}) {
  function getClassName() {
    if (isActive) {
      switch (type) {
        case "deposit":
          return "bg-emerald-100 hover:bg-emerald-200";
        case "withdraw":
          return "bg-red-100 hover:bg-red-200";
        default:
          return "bg-gray-200 hover:bg-gray-300";
      }
    } else {
      return "bg-gray-200 hover:bg-gray-300";
    }
  }

  return (
    <button
      className={`px-4 py-2 cursor-pointer w-[49%] h-[50px] flex gap-4 items-center justify-center transition ease-in-out duration-150 ${getClassName()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
