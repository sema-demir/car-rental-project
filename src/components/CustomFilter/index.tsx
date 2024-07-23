import Select from "react-select";
type CustomFilterType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: CustomFilterType) => {
  return (
    <div>
      <Select
        options={options}
        className="text-black min-w[120px]"
        placeholder={title}
      />
    </div>
  );
};

export default CustomFilter;
