"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RedirectMheart() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/mosque-health-education");
  }, [router]);

  return (
    <div className="container py-5 text-center">
      <p>Redirecting to <Link href="/mosque-health-education">Mosque Health Education (M-HEaRT)</Link>...</p>
    </div>
  );
}
