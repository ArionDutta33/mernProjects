const Projects = () => {
  const thumbnails = {
    patreon:
      "data:image/png;base64,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",
  };
  return (
    <div className="py-4">
      <span className="text-2xl px-4 ">Check out my projects</span>
      <div className="px-4 pt-4">
        <div className="projects w-full rounded-lg min-h-72 bg-[#14204b] flex items-start justify-center  ">
          <div className="box py-8 ">
            <img className="rounded-md" src={thumbnails.patreon} alt="" />
            <div className="text-xl pt-2 tracking-tighter">
              Full stack NextJs Patreon clone
            </div>
            <div className=" text-gray-400  tracking-tighter">
              Made this fullstack clone of patreon <br />
              clone using latest tech
              <div className="tags mt-8">
                <span className="bg-[#5f6061]  text-white px-4 py-2 mx-2 my-2 rounded-md text-sm ">
                  NextJs
                </span>
                <span className="bg-[#5f6061]  text-white px-4 py-2 mx-2 my-2 rounded-md text-sm ">
                  Next Auth
                </span>
                <span className="bg-[#5f6061]  text-white px-4 py-2 mx-2 my-2 rounded-md text-sm ">
                  React
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
