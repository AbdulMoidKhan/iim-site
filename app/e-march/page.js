"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectEmarch() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/community-health-research");
  }, [router]);

  return (
    <div className="container py-5 text-center">
      <p>Redirecting to <a href="/community-health-research">Community Health Research (E-MARCH)</a>...</p>
    </div>
  );
}
