import Search from "@/components/Search/Search";
import Login from "@/components/Login/Login";

export default function Nav() {
  return (
    <div className="flex justify-between items-center w-[57px]">
      <Search />
      <Login />
    </div>
  );
}