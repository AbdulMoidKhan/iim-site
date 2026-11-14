"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RedirectEmarch() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/community-health-research");
  }, [router]);

  return (
    <div className="container py-5 text-center">
      <p>Redirecting to <Link href="/community-health-research">Community Health Research (E-MARCH)</Link>...</p>
    </div>
  );
}
