import { ArrowLeft, ArrowRight } from "lucide-react";

const NavigationHeader = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 px-6 py-7">
      {/* Left Arrow */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#17A9E2] text-white hover:bg-blue-600">
        <ArrowLeft className="w-6 h-6" />
      </button>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-black">Alamat</h1>

      {/* Right Arrow */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#17A9E2] text-white hover:bg-blue-600">
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default NavigationHeader;
