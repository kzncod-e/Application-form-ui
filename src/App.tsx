import DataKTPForm from "./components/DataKtp";
import NavigationHeader from "./components/NavigationHeader";
import ProgressBar from "./components/ProgressBar";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <div className="flex overflow-x-hidden bg-[#d9d9d9]">
        <SideBar />
        <div className="gap-5 w-full ">
          <TopBar />
          <ProgressBar />
          <NavigationHeader />
          <div className="py-2 m-3 flex flex-col px-1">
            <DataKTPForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
