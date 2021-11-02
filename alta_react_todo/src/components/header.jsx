import React from 'react';

export default function Header() {
  return (
    <div className="lg:text-center">
      <h2 className="text-3xl text-indigo-600 font-semibold tracking-wide uppercase font-bold">
        To Do List App
      </h2>
      <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 sm:text-2xl">
        Solusi Mengatur Skala Prioritas Tugas Anda
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
        voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>
  );
}