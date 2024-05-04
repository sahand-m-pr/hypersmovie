export default function MoviesCard({img}) {
  return (
    <div className=" bg-gray-300 aspect-[2/3] rounded overflow-hidden   relative">
      <img
      src={img}
        className="object-cover w-full h-full"
        alt=""
      />
      <div className=" hover:scale-110  transition-transform duration-300 absolute gap-2 bottom-0 left-0 font-bold w-full h-full flex flex-col p-8 justify-end shadow-md bg-gradient-to-b from-[#0f172a4d] to-[#0f172a4d] hover:from-[#0f172af8] hover:to-[#0f172a92] hover: " >
        <h3>Die Hard</h3>
        <div className="flex  items-center gap-2">
          <span className="text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
          <span>7.4 / 10</span>
        </div>
      </div>
    </div>
  );
}
