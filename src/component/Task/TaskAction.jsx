"use client";
import Link from 'next/link';
import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import TaskDelete from './TaskDelete';

const TaskAction = ({taskId}) => {
  return (
    <td className="text-base font-normal text-custom-text-color2 p-5">
            <div className="flex items-center gap-2 justify-center">
              <Link href={`/projects/details/${taskId}`} className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer" >
                <FaEye />
              </Link>
              <Link href={`/projects/details/${taskId}`} className="bg-gray-100 p-2 inline-block rounded-md cursor-pointer">
                <CiEdit />
              </Link>
          <TaskDelete taskId={taskId}/>
            </div>
          </td>
  );
};

export default TaskAction;