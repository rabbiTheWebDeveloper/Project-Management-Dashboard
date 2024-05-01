"use client";
import React, { useCallback, useState } from "react";
import TaskCard from "./TaskCard";
import update from 'immutability-helper';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
const retrieveTasks = async({queryKey}) => {
  const response = await axios.get(`http://localhost:3000/tasks`);
  return response.data;
}
const TaskTable = () => {
  const {data: tasks, error, isLoading} = useQuery({
    queryKey: ["tasks",],
    queryFn: retrieveTasks,
  });
  
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
  if(isLoading) return <div>Fetching Project...</div>
  if(error) return <div>An error occured: {error.message}</div>
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
          {/* {tasks.map((task, index) => (
            <TaskCard key={task.id} task={task} index={index} />
          ))} */}

          {tasks && tasks.map((card, i) =>
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
