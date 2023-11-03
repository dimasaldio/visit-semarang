import React from "react";
import { useRouter } from "next/router";

const HolidayDetail: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <p>idnya {router.query.slug}</p>
    </div>
  );
};

export default HolidayDetail;
