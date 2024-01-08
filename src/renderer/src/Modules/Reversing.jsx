import parkingSensors from "../Images/ParkingSensors.svg";

export function Reversing() {
  return (
    <div className={`flex items-center justify-center`}>
      <div className="max-w-4xl w-full flex flex-col">
        <img alt="ac" src={parkingSensors} className="h-[80%] flex mx-auto" />
      </div>
    </div>
  );
}
export default Reversing;
