import Link from "next/link";
import { breadCrumbs } from "@/utils/breadCrumbs";

export default function BreadCrumbsOld({ breadCrumbs}) {
  return (
    <>
      {
        breadCrumbs.map( item => (
          <Link
            href={ item.src }
            key={ item.src }
            className="inline-block mb-[21px] text-[12px] font-medium opacity-50 leading-[12.19px]"
          >{ item.title } &nbsp;/&nbsp;
          </Link>

        ) )
      }
    </>
  );
}