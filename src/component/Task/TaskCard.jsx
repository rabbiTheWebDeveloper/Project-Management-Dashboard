import React from "react";
import TaskAction from "./TaskAction";
import { Flex, Select, Tag } from "antd";
import CustomSelect from "../ui/CustomSelect";

const TaskCard = ({ task , index }) => {
  return (
    <tr className="rounded-xl shadow-md text-center">
      <td className="text-base font-normal text-custom-text-color2 p-5">
        {index + 1}
      </td>
      <td className="text-base font-normal text-custom-text-color2 p-5">
        {task?.title}
      </td>
      <td className="text-base font-normal text-custom-text-color2 p-5">
        {task?.description}
      </td>
      <td className="text-base font-normal text-custom-text-color2 p-5">
        {task?.deadline}
      </td>
      <td className="text-base font-normal text-custom-text-color2 p-5 text-center">
        <Flex gap="4px 0" wrap="wrap">
          {task?.members.map((member) => (
            <Tag color="geekblue" key={member}>
              {member}
            </Tag>
          ))}
          {/* <Tag color="magenta">magenta</Tag> */}
        </Flex>
        {/* {task?.deadline} */}
      </td>
      <td className="text-base font-normal text-custom-text-color2 p-5">
  <CustomSelect status ={task?.status}/>
        {/* {task?.status} */}
      </td>
      <TaskAction />
    </tr>
  );
};

export default TaskCard;
