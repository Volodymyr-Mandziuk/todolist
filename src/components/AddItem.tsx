import { useRef } from "react";
import { FaPlus } from "react-icons/fa";  

type AddItemProps = {
  newItems: string;
  setNewItems: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const AddItem: React.FC<AddItemProps> = ({ newItems, setNewItems, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        id="addForm"
        placeholder="Add item"
        required
        value={newItems}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewItems(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add item"
        onClick={() => inputRef.current?.focus()}
      >
       <FaPlus/>
      </button>
    </form>
  );
};

export default AddItem;


