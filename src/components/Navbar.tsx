function Navbar() {
  return (
    <header className="bg-white">
      <nav className="flex">
        <div className="lg:pl-[2.125rem] lg:pt-8 lg:pb-10 lg:pr-[7rem]">
          <a href="">
            <img src="/assets/logo-dark.svg" alt="" />
          </a>
        </div>

        <div className="flex-1 flex md:justify-between md:items-center lg:border-l-2 lg:border-b-2 border-ice-blue">
          <h1 className="font-bold lg:text-2xl lg:pl-6 lg:pt-[1.875rem] lg:pb-9">
            Platform Launch
          </h1>

          <div className="flex items-center lg:gap-6 lg:pr-8">
            <button className="lg:px-[5rem] lg:py-6 bg-primary-purple"></button>

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
