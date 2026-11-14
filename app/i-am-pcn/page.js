"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectIamPcn() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/palliative-care-needs");
  }, [router]);

  return (
    <div className="container py-5 text-center">
      <p>Redirecting to <a href="/palliative-care-needs">Palliative Care Needs (I AM PCN)</a>...</p>
    </div>
  );
}
