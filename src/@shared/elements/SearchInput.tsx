import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import IconButton from "@/@shared/elements/IconButton";
import { IconSearch } from "@/static/icons";

interface SearchInputProps {
  query?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>, input: string) => void;
  placeholder: string;
}

const SearchInput = ({ query, onSubmit, placeholder }: SearchInputProps) => {
  const [input, setInput] = useState("");
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (!query) return;

    setInput(query);
  }, [query]);

  return (
    <form
      onSubmit={(event) => onSubmit(event, input)}
      className="flex h-[50px] w-full items-center justify-between gap-1 rounded-[10px] bg-white p-4 text-sm font-semibold focus:border focus:border-black focus:p-[15px] focus:pr-[47px] focus:outline-none"
    >
      <input
        placeholder={placeholder}
        value={input}
        onChange={handleChangeInput}
        className="h-full w-full bg-transparent placeholder:text-[#d9d9d9]"
      />

      <IconButton
        icon={<IconSearch className={`${input ? "text-[#111]" : "text-[#d9d9d9]"}`} />}
        type="submit"
      />
    </form>
  );
};

export default SearchInput;
