const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const needsImprovement = ["bad", "poor"].some((term) => feedback.toLowerCase().includes(term));
console.log({ wordCount: words.length, result: needsImprovement ? "Needs Improvement" : "Positive Feedback" });
