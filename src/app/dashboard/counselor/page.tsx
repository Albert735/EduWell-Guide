import AppointRequest from "./(components)/AppointRequest";
import Overview from "./(components)/Overview";

export default function counselorDashboard() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-5 gap-4 lg:h-[calc(100vh-5.5rem)] h-screen  p-2">
      <div className="col-span-2 row-span-2 ">
        <Overview />
      </div>
      <div className="col-span-2 row-span-2 col-start-3 bg-lime-300">2</div>
      <div className="col-span-3 row-span-3 row-start-3 bg-green-300">3</div>
      <div className="row-span-3 col-start-4 row-start-3 overflow-auto">
        <AppointRequest />
      </div>
    </div>
  );
}
