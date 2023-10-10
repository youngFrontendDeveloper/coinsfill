import Link from "next/link";

export default function TextField({ item }) {
  return (
    <Link
      href="/"
      className="inline-block mb-[27px] text-[12px] font-medium leading-[14.63px] text-link-blue-100 underline"
    >
      { item.text }
    </Link>
  );
}