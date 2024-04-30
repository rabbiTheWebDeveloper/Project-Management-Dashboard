import { Button } from "antd";

export const CustomButton = ({ children, type, className }) => {
  return (
    <>
      <Button
        type={type}
        className={`py-3 px-5 rounded-md !bg-main-color !text-white !hover:bg-hover-color !font-medium ${className}`}
      >
        {children}
      </Button>
    </>
  );
};
