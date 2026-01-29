type SearchItemProps = {
  searchItem: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
};

const SearchItem: React.FC<SearchItemProps> = ({
  searchItem,
  setSearchItem,
}) => {
  return (
    <form
      className="searchForm"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <input
        type="text"
        role="searchBox"
        placeholder="Search Item"
        value={searchItem}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchItem(e.target.value)
        }
      />
    </form>
  );
};

export default SearchItem;
