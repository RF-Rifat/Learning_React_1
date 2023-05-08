import { useState } from "react";
// {item: [], heading :  string, listGroupClass: string[], (item:string)=>void}
interface Props {
  listItem: string[];
  heading: string;
  listGroupClass: string[];
  onSelectItem: (item: string) => void;
}
function ListGroup({ listItem, heading, listGroupClass, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const message = listItem.length === 0 ? <p>No Item Found</p> : null;
  return (
    <>
      <h1 className="text-center p-2">{heading}</h1>
      {message}
      <ul className="list-group w-100 text-center p-3">
        {listItem.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? `list-group-item ${listGroupClass[index]}`
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
