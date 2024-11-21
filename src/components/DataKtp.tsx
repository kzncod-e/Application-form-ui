import EndForm from "./EndForm";

const DataKTPForm = () => {
  const data = [
    {
      form: "Data Ktp",
      checkBox: "Domisili Sesuai Ktp",
    },

    {
      form: "Data Domisili",
      checkBox: "Alamat tempat bekerja / perusahaan Sesuai KTP",
    },
  ];

  return (
    <div className="bg-[#fff] grid gap-6 shadow-custom-light    p-6">
      {data.map((el, index) => {
        return (
          <>
            <div key={index}>
              {/* Form Header */}
              <div className="bg-[#005274] text-white px-4 py-2 ">
                <h2 className="text-lg font-bold">{el.form}</h2>
              </div>

              {/* Form Body */}
              <div className="grid border-[1px] border-[#C1C1C1] grid-cols-2 gap-4 p-4">
                {/* Alamat Lengkap */}
                <div className="w-full flex-start text-start  ">
                  <label className="block mb-2 text-start text-lg font-semibold text-[#00000]">
                    Alamat Lengkap (Jalan, Komplek, RT/RW)
                  </label>
                  <input
                    type="text"
                    placeholder="--Isi Alamat Lengkap--"
                    className="w-full border-2 border-[#C1C1C1]  rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>

                {/* Kode POS */}
                <div className="w-full flex-start  ">
                  <label className="block   text-start text-lg font-semibold text-[#00000] mb-2">
                    Kode POS
                  </label>
                  <input
                    type="text"
                    placeholder="--Isi Kode POS--"
                    className="w-full border-2 border-[#C1C1C1] rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>

                {/* Provinsi */}
                <div className="w-full flex-start  ">
                  <label className="block   text-start text-lg font-semibold text-[#00000] mb-2">
                    Provinsi
                  </label>
                  <select className="w-full border-2 border-[#C1C1C1] rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500">
                    <option>--Pilih Provinsi--</option>
                  </select>
                </div>

                {/* Kabupaten / Kota */}
                <div className="w-full flex-start  ">
                  <label className="block   text-start text-lg font-semibold text-[#00000] mb-2">
                    Kabupaten / Kota
                  </label>
                  <select className="w-full border-2 border-[#C1C1C1] rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500">
                    <option>--Pilih Kota--</option>
                  </select>
                </div>

                {/* Kecamatan */}
                <div className="w-full flex-start ">
                  <label className="block   text-start text-lg font-semibold text-[#00000] mb-2">
                    Kecamatan
                  </label>
                  <select className="w-full border-2 border-[#C1C1C1] rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500">
                    <option>--Pilih Kecamatan--</option>
                  </select>
                </div>

                {/* Kelurahan */}
                <div className="w-full flex-start  ">
                  <label className="block   text-start text-lg font-semibold text-[#00000] mb-2">
                    Kelurahan
                  </label>
                  <select className="w-full border-2 border-[#C1C1C1] rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500">
                    <option>--Pilih Kelurahan--</option>
                  </select>
                </div>
              </div>

              {/* Checkbox & Button */}
              <div className="flex items-center justify-between px-4 py-2">
                <label className="flex  items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-8 h-8 border-4 border-[#C1C1C1] rounded-[5px] "
                  />
                  <span className="text-sm font-medium text-[#00000]">
                    {el.checkBox}
                  </span>
                </label>

                <button className="bg-red-500 text-white px-4 py-2 rounded-[5px] text-xl">
                  CLEAR
                </button>
              </div>
            </div>
          </>
        );
      })}
      <EndForm />
    </div>
  );
};

export default DataKTPForm;
