"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectEmpart() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/empart-research");
  }, [router]);

  return (
    <div className="container py-5 text-center">
      <p>Redirecting to <a href="/empart-research">EMPART Research</a>...</p>
    </div>
  );
}
