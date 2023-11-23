import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

interface IBreadcrumb {
  breadcrumItem: any;
}
const BreadcrumbContent: React.FC<IBreadcrumb> = ({ breadcrumItem }) => {
  return (
    <>
      <div className="border-t-2 bg-[#776B5D] lg:flex hidden">
        <div className="font-bold lg:mx-6 py-2 text-xs">
          {breadcrumItem.map((item:any, index:number) => (
            <>
              <Link href={item?.href}>
                <span key={index} className={`mx-2 ${item.className}`}>
                  {item.title}
                </span>
              </Link>
              {!(index === breadcrumItem.length - 1) && (
                <RightOutlined className={item.className} />
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default BreadcrumbContent;
