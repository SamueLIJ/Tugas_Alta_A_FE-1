import React, { useState } from 'react';
import Header from '../components/header';
export default function Home() {
  const tasks = [
    {
      id: 1,
      title: 'Membuat Komponen',
      completed: true,
    },

    {
      id: 2,
      title: 'Unit Testing',
      completed: false,
    },

    {
      id: 3,
      title: 'Setup Development Environment',
      completed: true,
    },

    {
      id: 4,
      title: 'Deploy ke server',
      completed: false,
    },
  ];

  const [data] = useState(tasks);
  console.log(data);

  const handleCompleted = (e) => {
    // setData({ ...data, [name]: e.target.value });
    // console.log(data);
    console.log(e.target);
    console.log(e);
  };

  //   const handleCompleted = (e) => {
  //     console.log(e.target.);
  //   };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
          <ul className="flex flex-col divide divide-y">
            {tasks.map((task) => (
              <li className="flex flex-row" key={task.id}>
                <div
                  className="cursor-pointer flex flex-1 items-center p-4"
                  onClick={handleCompleted}
                >
                  <div className="p-2">
                    <div className="inline-flex items-center  g-gray-100 text-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
                      <span
                        className={[
                          'inline-flex px-2 text-lg font-medium ',
                          task.completed ? 'line-through' : '',
                        ].join('')}
                      >
                        {task.title}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
