import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IconSearch } from "@/static/icons";

interface Props {
  query?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>, input: string) => void;
  placeholder: string;
}

const SearchInput = ({ query, onSubmit, placeholder }: Props) => {
  const [input, setInput] = useState("");
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (!query) return;

    setInput(query);
  }, [query]);

  return (
    <div className="relative w-full">
      <form
        onSubmit={(event) => onSubmit(event, input)}
        className="flex h-[50px] w-full items-center justify-between gap-1 rounded-[10px] bg-white p-4 text-sm font-semibold placeholder:text-[#d9d9d9] focus:border focus:border-black focus:p-[15px] focus:pr-[47px] focus:outline-none"
      >
        <input
          placeholder={placeholder}
          value={input}
          onChange={handleChangeInput}
          className="h-full w-full bg-transparent"
        />

        <button type="submit" className={`${input ? "text-[#111]" : "text-[#d9d9d9]"}`}>
          <IconSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
