function Sidebar() {
  return (
    <div className="flex-1 flex lg:justify-between lg:flex-col lg:max-w-[18.75rem] bg-white border-r-2 border-ice-blue">
      <div className="flex flex-col lg:pr-8 lg:gap-5">
        <h3 className="uppercase lg:pl-8">All Boards</h3>

        <ul>
          <li className="bg-primary-purple lg:py-4">
            <button className="lg:pl-8">Platform Launch</button>
          </li>
          <li className="lg:py-4 ">
            <button className="lg:pl-8">Marketing Plan</button>
          </li>
          <li className="lg:py-4 ">
            <button className="lg:pl-8">Roadmap</button>
          </li>
          <li className="lg:py-4">
            <button className="lg:pl-8">+ Create New Board</button>
          </li>
        </ul>
      </div>

      <div className="flex flex-col lg:mb-8">
        <div className="lg:px-6 lg:mb-2">
          <div className="bg-light-grey lg:text-center lg:py-[0.875rem]">
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
