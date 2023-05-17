import { SunIcon } from "@heroicons/react/solid";

function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a0879] to-[#7036b3] flex flex-col justify-center items-center text-slate-500">
      <SunIcon className="h-24 w-24 animate-bounce text-slate-500" />
      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading Weather Information
      </h1>
      <h2 className="text-xl font-bold text-center mb-10 animate-pulse">
        Someone must be getting that information somewhere!
      </h2>
    </div>
  );
}

export default Loading;
