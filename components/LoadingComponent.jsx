import { ImSpinner10 } from "react-icons/im"; // Import an icon
export default function LoadingComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <ImSpinner10 className="w-16 h-16 text-white animate-spin" />
    </div>
  );
}
