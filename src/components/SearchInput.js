"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const [searchText, setSearchText] = useState(searchParams.get("query") || "");

  function navigate(query) {
    router.replace(`${pathname}?query=${query}`);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    // setSearchText(value);
    navigate(value);
  };

  return (
    <div className="search-input">
      <div className="box">
        <input
          className="input"
          type="text"
          placeholder="검색어를 입력해주세요"
          // value={searchText}
          onChange={handleChange}
        />
        <div className="border" />
      </div>
    </div>
  );
}
