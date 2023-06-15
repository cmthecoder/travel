const About = () => {
  return (
    <section className="py-[3rem] z-[-1] about1">
      <div className="text-center">
        <span
          className="relative text-center text-3xl 2xl:text-5xl before:content-['']
          before:absolute before:h-[6rem] before:border-2 before:border-blue-950 before:top-[-3rem]
          before:right-[4rem] before:bottom-24 before:my-auto about 2xl:before:right-[6.5rem]
        "
        >
          About Us
        </span>
      </div>

      <div className="w-[90%] lg:w-[85%] mx-auto flex flex-col md:flex-row gap-5 mt-10 text-center md:text-left text-sm 2xl:text-xl">
        <div className="flex-1 flex flex-col gap-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            ad!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            ad!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus quibusdam, nam molestiae ad placeat quis cupiditate
            minus alias quod maxime!
          </p>
          <div>
            <button className="bg-blue-950 text-white py-2 px-5 hover:bg-blue-800 text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
