import { Input } from "antd";

export const CustomInput = ({
  type,
  name,
  value,
  placeholder,
  className,
  ...props
}) => {
  return (
    <>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`w-full px-2.5 py-1.5 text-base text-gray-800 bg-[#E5EAF0] rounded-lg placeholder:text-xs ${className}`}
        {...props}
      />
    </>
  );
};
