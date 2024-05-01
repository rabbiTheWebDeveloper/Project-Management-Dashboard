"use client";
import React, { useCallback, useState } from "react";
import TaskCard from "./TaskCard";
import update from 'immutability-helper';
const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description of Task 1",
    deadline: "2024-05-05",
    members: ["John", "Jane"],
    status: "todo",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description of Task 2",
    deadline: "2024-05-10",
    members: ["Alice", "Bob"],
    status: "inProgress",
  },
  // Add more tasks as needed
];

const TaskTable = () => {
  const [cards, setCards] = useState([]);
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) => {
      const updatedCards = update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      });
      const movedCard = prevCards[dragIndex];
      console.log('movedCard', movedCard);
      updateCardIndex(
        movedCard.id,
        hoverIndex
      );

      return updatedCards;
    });
  }, []);
  const renderCard = useCallback(
    (card, index, slots) => {
      return (
        <TaskCard
          key={card.id}
          data={card}
          index={index}
          id={card.id}
          slots={slots}
          moveCard={moveCard}
       
        />
      );
    },
    [moveCard]
  );
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="rounded-xl  shadow-md">
            <th className="text-lg font-medium text-custom-text-color1 p-5 ">
              SL
            </th>
            <th className="text-lg font-medium text-custom-text-color1 p-5 ">
              Title
            </th>
            <th className="text-lg font-medium text-custom-text-color1 p-5 ">
              Description
            </th>
            <th className="text-lg font-medium text-custom-text-color1 p-5">
              Deadline
            </th>
            <th className="text-lg font-medium text-custom-text-color1 p-5">
              Members
            </th>
            <th className="text-lg font-medium text-custom-text-color1 p-5">
              Status
            </th>
            <th className="text-lg font-medium text-custom-text-color1 p-5">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="">
          {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))}

          {tasks.map((card, i) =>
            renderCard(
              card,
              i,
            )
          )}
          {/* <TaskCard/> */}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
