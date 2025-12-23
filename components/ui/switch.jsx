// "use client";

// import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";

// export function LocaleSwitcher() {
//   const locale = useLocale();
//   const router = useRouter();
//   const pathname = usePathname();

//   function switchLocale(nextLocale) {
//     const segments = pathname.split("/");
//     segments[1] = nextLocale;
//     router.push(segments.join("/"));
//   }

//   function flagClass(active) {
//     return `
//       flex items-center justify-center rounded-full border transition-all
//       ${
//         active
//           ? "border-primary scale-110 opacity-100"
//           : "border-transparent opacity-40 hover:opacity-70"
//       }
//     `;
//   }

//   return (
//     <div className="flex items-center gap-2">
//       <button
//         onClick={() => switchLocale("pt-BR")}
//         className={flagClass(locale === "pt")}
//         aria-label="Português"
//       >
//         <Image src="/pt.svg" alt="Português" width={24} height={24} />
//       </button>

//       {/* 🇺🇸 EN-US */}
//       <button
//         onClick={() => switchLocale("en-US")}
//         className={flagClass(locale === "en")}
//         aria-label="English"
//       >
//         <Image src="/us.svg" alt="English" width={24} height={24} />
//       </button>
//     </div>
//   );
// }
