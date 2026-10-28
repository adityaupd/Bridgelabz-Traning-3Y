const rawTitle = " wireless headphones PRO ";
const words = rawTitle.trim().toLowerCase().split(/\s+/);
let title = words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
title = title.replace(/Pro\b/i, "Pro Edition");
console.log({ title, length: title.length });
