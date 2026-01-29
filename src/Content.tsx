import { FaTrashAlt } from "react-icons/fa";

type TodoItem = {
  id: number;
  checked: boolean;
  item: string;
};

type ContentProps = {
  items: TodoItem[];
  setItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};

const Content: React.FC<ContentProps> = ({
  items,
  // setItems,
  handleCheck,
  handleDelete,
}) => {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                className={item.checked ? "checked" : ""}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex={0}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty">Your list is empty!</p>
      )}
    </main>
  );
};

export default Content;
