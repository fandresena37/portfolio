export default function FooterItems({
  title,
  list,
}: {
  title: string;
  list: string[];
}) {
  return (
    <>
      <div className="w-1/2 h-full flex flex-col gap-4 justify-center  max-sm:w-full">
        <div className="flex flex-col gap-4 justify-center  max-sm:items-center">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <ul className="text-[rgba(119,119,119,0.71)] text-sm font-semibold flex flex-col gap-1">
            {list.map((items, index) => (
              <li key={index}>{items}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
