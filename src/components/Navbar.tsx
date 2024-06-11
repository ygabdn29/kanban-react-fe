function Navbar() {
  return (
    <header className="bg-white">
      <nav className="flex">
        <div className="md:pl-[1.625rem] lg:pl-[2.125rem] md:pt-8 md:pb-6 lg:pb-10 md:pr-20 lg:pr-[7rem]">
          <a href="">
            <img src="/assets/logo-dark.svg" alt="" />
          </a>
        </div>

        <div className="flex-1 flex md:justify-between md:items-center md:border-l-2 md:border-b-2 border-ice-blue">
          <h1 className="font-bold md:text-xl lg:text-2xl md:pl-6 md:py-7 lg:pt-[1.875rem] lg:pb-9">
            Platform Launch
          </h1>

          <div className="flex items-center md:gap-6 md:pr-6 lg:pr-8">
            <button className="text-white font-bold md:rounded-3xl md:text-[0.9375rem] md:px-6 md:py-[0.875rem] bg-primary-purple">
              + Add New Task
            </button>

            <button>
              <img src="./assets/icon-vertical-ellipsis.svg" alt="" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
