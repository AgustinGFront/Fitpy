// const TRANSLATE_API = "https://libretranslate.com/translate";

// export async function translateToSpanish(
//   text: string
// ): Promise<string> {
//   if (!text) return text;

//   try {
//     const res = await fetch(TRANSLATE_API, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         q: text,
//         source: "en",
//         target: "es",
//         format: "text",
//       }),
//     });

//     const data = await res.json();

//     if (!data?.translatedText) {
//       return text;
//     }

//     return capitalizeFirstLetter(data.translatedText);
//   } catch (err) {
//     console.error("Translate error", err);
//     return text; // fallback seguro
//   }
// }

// /* ===========================
//    Utils
// =========================== */
// function capitalizeFirstLetter(text: string) {
//   return text.charAt(0).toUpperCase() + text.slice(1);
// }
