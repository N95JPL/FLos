export function Vehicle() {
  return (
    <div className="flex absolute grid-cols-6 w-[90%] h-[100%] left-[10%] top-0 justify-evenly text-center items-center">
      <div className="max-w-4xl w-full flex flex-col">
        <div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Vehicle Information
            </h1>
            <p className="text-sm mb-2.5">Lol, this will get done soon!</p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 mt-2.5">
          <div className="flex gap-2.5"></div>
        </div>
      </div>
    </div>
  );
}
export default Vehicle;
