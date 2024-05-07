interface Props {
 title: string | number;
 icon: string | JSX.Element | JSX.Element[];
}

export default function MenuTiles({title, icon} :Props) {
  return (
    <>
      <div className="flex flex-row p-2 px-5 rounded-xl bg-lime-100">
        <p className="grow">{title}</p>
        <div>
          {icon}
        </div>
      </div>
    </>
  );
}
