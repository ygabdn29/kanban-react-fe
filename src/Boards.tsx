import { useState } from "react";
import data from "../data.json";
import TaskCard from "./components/TaskCard";

function Boards() {
  return (
    <div className="flex-1 bg-light-grey">
      <div className="flex md:gap-6 overflow-x-auto lg:px-6 lg:pt-6 lg:pb-[3.125rem]">
        {data["boards"][0]["columns"].map((column, idx) => (
          <div className="flex-1 md:max-w-[17.5rem]" key={idx}>
            <h3 className="uppercase font-bold text-medium-grey md:text-xs md:tracking-[0.2em] md:mb-6">
              {column.name}
            </h3>

            <ul className="flex flex-col md:gap-5">
              {column.tasks.map((task, idx) => (
                <TaskCard task={task} key={idx}></TaskCard>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex-1 rounded-md grid place-content-center bg-ice-blue">
          <button className="font-bold text-2xl text-medium-grey">
            + New Column
          </button>
        </div>
      </div>
    </div>
  );
}

export default Boards;
