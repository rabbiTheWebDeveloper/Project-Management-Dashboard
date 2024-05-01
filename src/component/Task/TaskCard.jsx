"use client";
import React, { useRef } from "react";
import TaskAction from "./TaskAction";
import { Flex, Select, Tag } from "antd";
import CustomSelect from "../ui/CustomSelect";
import { useDrag, useDrop } from 'react-dnd';
const ItemTypes = {
  CARD: 'card',
};
const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
};
const TaskCard = ({id,
  index,
  moveCard,
  data : task,slots }) => {
  
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    drop(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <tr className="rounded-xl shadow-md text-center"  ref={ref}
    style={{ ...style, opacity }}
    data-handler-id={handlerId}>
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
