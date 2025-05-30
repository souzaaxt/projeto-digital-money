function CardTransaction({
  title,
  background,
  textColor = "text-black",
  icon,
  amount = 0,
}) {
  return (
    <div
      className={`rounded p-6 flex flex-col gap-2 shadow-md ${background} ${textColor}`}
    >
      <div className="flex justify-between items-center">
        <span>{title}</span>
        {icon}
      </div>
      <strong className="text-3xl font-medium mt-1">
        {amount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </strong>
    </div>
  );
}

export default CardTransaction;
