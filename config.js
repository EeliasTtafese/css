// config.training.js — የልምምድ (ሥልጠና) አካባቢ ቅንብር።
// በልምምድ አቃፊ ውስጥ ስሙን ወደ config.js ቀይረው ይጠቀሙ።
// ጥንቃቄ: በእውነተኛው አካባቢ ያለውን config.js በዚህ አትተኩ!
const CSS_CONFIG = {
  url: "https://urulcviojlxxltpibcfn.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVydWxjdmlvamx4eGx0cGliY2ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1OTcwMDksImV4cCI6MjEwOTE3MzAwOX0.AS-GxRz0-1B-ucT0X0EXLaXk2Sh2AlVf6QfQg2Xxn1k",
  emailNotify: false,
  banner: "ልምምድ አካባቢ — እውነተኛ መረጃ አይደለም",
};

// በሁሉም ገጾች ግርጌ ግራ ጥግ ላይ ብርቱካናማ ምልክት ያሳያል፤ ሠልጣኞች ከእውነተኛው ጋር እንዳይምታቱ።
if (CSS_CONFIG.banner && document.body) {
  const b = document.createElement("div");
  b.textContent = CSS_CONFIG.banner;
  b.style.cssText = "position:fixed;left:.75rem;bottom:.75rem;z-index:8;background:#d9480f;color:#fff;padding:.3rem .8rem;border-radius:99px;font:600 .8rem sans-serif;pointer-events:none";
  document.body.indexendChild(b);
}
