"use client";
import { CustomButton } from "../ui/Button";
import Container from "../ui/Container";
import { IoMdAdd } from "react-icons/io";
import { H2 } from "../ui/Tag";
import TaskTable from "./ProjectTable";
import { CustomInput } from "../ui/Input";
import CustomSelect from "../ui/CustomSelect";
import { Button } from "antd";
import { useState } from "react";
import CustomModel from "../ui/CustomModel";
import TaskFrom from "./ProjectFrom";
import ProjectTable from "./ProjectTable";
import ProjectFrom from "./ProjectFrom";

export default function ProjectBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <section className="py-10">
        <Container>
          {/* header */}

          <H2 name=" Projects of your Team" />

          <div className="flex justify-center gap-3">
            <CustomSelect />
            <CustomInput placeholder="Search Tasks" className="w-40" />
            <Button type="primary" onClick={showModal}>
              <IoMdAdd className="text-xl" /> Add
            </Button>
            {/* <CustomButton
              type="submit"
              className="w-24 !flex items-center gap-2"
            >
              <IoMdAdd className="text-xl" /> Add
            </CustomButton> */}
          </div>

          {/* table */}
          <ProjectTable />
        </Container>
      </section>
      <CustomModel title="Add Task" isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
        <ProjectFrom/>
        </CustomModel>
    </>
  );
}
