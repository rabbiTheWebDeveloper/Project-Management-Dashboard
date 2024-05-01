import { Modal } from 'antd';
import React from 'react';

const CustomModel = ({title, isModalOpen, children, setIsModalOpen}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal title={title} open={isModalOpen}  onCancel={handleCancel} footer={null} >
   { children }
  </Modal>
  );
};

export default CustomModel;