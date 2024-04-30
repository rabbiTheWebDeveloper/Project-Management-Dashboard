import { CustomButton } from "../ui/Button";
import Container from "../ui/Container";

import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { H2 } from "../ui/Tag";
import TaskTable from "./TaskTable";

export default function TaskBoard() {
  return (
    <>
      <section className="py-10">
        <Container>
          {/* header */}

          <H2 name="Your Tasks" />

          <div className="flex justify-end">
            <CustomButton
              type="submit"
              className="w-24 !flex items-center gap-2"
            >
              <IoMdAdd className="text-xl" /> Add
            </CustomButton>
          </div>

          {/* table */}
          <TaskTable />
          
        </Container>
      </section>
    </>
  );
}
