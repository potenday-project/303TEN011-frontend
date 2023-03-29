import { ChangeEvent, FormEvent, useState } from "react";
import { IconSearch } from "@/static/icons";

interface Props {
  onSubmit: (event: FormEvent<HTMLFormElement>, input: string) => void;
  placeholder: string;
}

const SearchInput = ({ onSubmit, placeholder }: Props) => {
  const [input, setInput] = useState("");
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="relative w-full">
      <form onSubmit={(event) => onSubmit(event, input)}>
        <input
          placeholder={placeholder}
          value={input}
          onChange={handleChangeInput}
          className="h-[50px] w-full rounded-[10px] p-4 text-sm font-semibold placeholder:text-[#d9d9d9] focus:border focus:border-black focus:p-[15px] focus:outline-none"
        />

        <button type="submit">
          <IconSearch
            className={`absolute top-[13px] right-4 ${input ? "text-[#111]" : "text-[#d9d9d9]"} `}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
