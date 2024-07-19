import Select from "react-select";
type CustomFilterType = {
  title: string;
};

const CustomFilter = ({ title }) => {
  return (
    <div>
      <Select className="text-black min-w[120px]" placeholder={title} />
    </div>
  );
};

export default CustomFilter;
