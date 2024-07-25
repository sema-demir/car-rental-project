import { useEffect, useState } from "react";
import Select from "react-select";
import { OptionType } from "../../types";
import { useSearchParams } from "react-router-dom";
type CustomFilterType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    //url ye eklenecek parametreyi belirle
    const key = title === "Yakıt Tipi" ? "fuel" : "year";
    if (selected?.value) {
      params.set(key, selected.value.toLocaleLowerCase());
    } else {
      params.delete(key);
    }
    //urli güncelle
    setParams(params);
  }, [selected]);
  return (
    <div>
      <Select
        options={options}
        className="text-black min-w[120px]"
        placeholder={title}
        onChange={(e) => setSelected(e)}
      />
    </div>
  );
};

export default CustomFilter;
