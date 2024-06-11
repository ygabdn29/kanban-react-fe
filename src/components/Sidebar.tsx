function Sidebar() {
  return (
    <div className="flex-1 flex md:justify-between md:flex-col md:max-w-[16.375rem] lg:max-w-[18.875rem] bg-white border-r-2 border-ice-blue">
      <div className="flex flex-col md:pr-5 lg:pr-8 md:mt-[0.9375rem] md:gap-5 ">
        <h3 className="uppercase font-bold text-medium-grey md:text-xs md:tracking-[0.2em] md:pl-6 lg:pl-8">
          All Boards
        </h3>

        <ul>
          <li className="bg-primary-purple md:py-4 md:rounded-tr-full md:rounded-br-full">
            <button className="font-bold text-white lg:text-[0.9375rem] md:pl-6 lg:pl-8">
              Platform Launch
            </button>
          </li>
          <li className="md:py-4">
            <button className="font-bold text-medium-grey bold lg:text-[0.9375rem] md:pl-6 lg:pl-8">
              Marketing Plan
            </button>
          </li>
          <li className="md:py-4 ">
            <button className="font-bold text-medium-grey bold lg:text-[0.9375rem] md:pl-6 lg:pl-8">
              Roadmap
            </button>
          </li>
          <li className="md:py-4">
            <button className="font-bold text-medium-grey bold lg:text-[0.9375rem] md:pl-6 lg:pl-8">
              + Create New Board
            </button>
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:mb-8">
        <div className="md:px-3 lg:px-6 lg:mb-2">
          <div className="bg-light-grey md:text-center md:py-[0.875rem] md:mb-4 lg:mb-2">
            <input type="checkbox"></input>
            <label htmlFor="">Darkmode</label>
          </div>
        </div>

        <button>hide sidebar</button>
      </div>
    </div>
  );
}

export default Sidebar;
