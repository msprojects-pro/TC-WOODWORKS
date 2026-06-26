/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "../data";

export default function FloatingCall() {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden" id="floating-call-mobile">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-gray-950 shadow-xl shadow-white/15 hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all animate-bounce"
        style={{ animationDuration: "3s" }}
        aria-label="Call Tom Direct"
        id="floating-call-anchor"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
