import { Plus } from "lucide-react";

function CreateTripButton() {
  return (
    <div className="border-2 border-gray-40 hover:border-gray-500 transition ease-in hover:cursor-pointer flex justify-center items-center w-50 h-30 rounded-md text-gray-400 hover:text-gray-500">
      <Plus />
      <p className="text-lg font-bold">Plan a new trip</p>
    </div>
  );
}

export default CreateTripButton;
