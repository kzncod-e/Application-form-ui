const ProgressBar = () => {
  // Define steps and the current active step (dummy data)
  const steps = [
    "Pinjaman",
    "Pekerjaan",
    "Alamat",
    "Informasi Asset",
    "Informasi Tambahan",
    "Upload Dokumen",
    "Review",
    "Pilihan Produk & Bank",
    "Bank Officer",
    "Surat Keterangan",
    "PDF CPA",
    "Summary",
  ];

  const currentStep = 2; // Change this value to simulate different progress states

  return (
    <div className="flex flex-wrap items-baseline pt-5 border-b-[1px] border-b-[#C1C1C1] bg-[#fff] space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center relative">
          {/* Connector Line */}
          {index !== 0 && (
            <div
              className={`absolute top-4 -left-10 h-1 w-[4.07rem] ${
                index <= currentStep ? "bg-[#005274]" : "bg-[#C1C1C1]"
              }`}></div>
          )}

          {/* Step Circle */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-semibold ${
              index === currentStep
                ? "bg-[#17A9E2]" // Current step is red
                : index < currentStep
                ? "bg-[#005274]" // Completed steps are blue
                : "bg-[#C1C1C1]" // Upcoming steps are gray
            }`}></div>

          {/* Step Label */}
          <span
            className={`mt-2 text-sm w-20 text-center ${
              index === currentStep
                ? "text-[#17A9E2]"
                : index < currentStep
                ? "text-[#005274]"
                : "text-[#C1C1C1]"
            }`}>
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
