import Logo from "@/components/Logo/Logo";
import Nav from "@/components/Nav/Nav";

export default function Header() {
  return (
    <header className="full py-[18px] header">
      <div className= "flex justify-between items-end container">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}