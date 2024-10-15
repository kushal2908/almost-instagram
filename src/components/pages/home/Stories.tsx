import React from "react";

type Props = {};

export default function Stories({}: Props) {
  return (
    <div className="bg-white border border-gray-300 p-4 rounded-lg">
      <div className="flex justify-start items-center gap-4 hover:cursor-pointer">
        {Array.from({ length: 10 }, (_, __) => (
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[50px] w-[50px] border object-cover rounded-full ring-2 ring-red-400"
          />
        ))}
      </div>
    </div>
  );
}
