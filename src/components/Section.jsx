
export default function Section({ name }) {
  return (
    <div className="rounded-lg">
      {/* heading */}
      <div className="heading px-2  w-fit select-none group ">
        <div className="w-full bg-amber-700 border">
          <h1 className="text-xl tracking-wide px-4 py-1 rounded-lg font-medium text-gray-400 transition-all duration-500 ease-out group-hover:text-gray-200 border border-white/40 group-hover:translate-x-1">
            {name}
          </h1>
        </div>
      </div>

    </div>
  );
}
