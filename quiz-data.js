/* ============================================
   QUIZ DATABASE – Binh Blog (12 Tenses × 20)
   ============================================ */

// Tạo biến global để quiz.html truy cập

window.quizData = {};

/* ================================
   1. PRESENT SIMPLE
================================ */
window.quizData["present-simple"] = [
  {
    question: "She ___ to school every day.",
    options: ["go", "goes", "is going", "going"],
    answer: 1,
    explain: "He/She/It + V(s/es)"
  },
  {
    question: "I usually ___ breakfast at 7.",
    options: ["have", "has", "am having", "having"],
    answer: 0,
    explain: "I/You/We/They + V"
  }
];

/* ================================
   2. PRESENT CONTINUOUS
================================ */
window.quizData["present-continuous"] = [
  {
    question: "They ___ TV now.",
    options: ["watch", "are watching", "watched", "watching"],
    answer: 1,
    explain: "Dấu hiệu now → hiện tại tiếp diễn"
  }
];

/* ================================
   3. PRESENT PERFECT
================================ */
window.quizData["present-perfect"] = [
  {
    question: "She ___ already finished her homework.",
    options: ["has", "have", "is", "was"],
    answer: 0,
    explain: "Has/have + V3"
  }
];

/* ================================
   4. PRESENT PERFECT CONTINUOUS
================================ */
window.quizData["present-perfect-continuous"] = [
  {
    question: "They ___ for 2 hours.",
    options: ["have studied", "have been studying", "are studying", "study"],
    answer: 1,
    explain: "have/has been + V-ing"
  }
];

/* ================================
   5. PAST SIMPLE
================================ */
window.quizData["past-simple"] = [
  {
    question: "He ___ to the beach yesterday.",
    options: ["go", "goes", "went", "is going"],
    answer: 2,
    explain: "Yesterday → V2"
  }
];

/* ================================
   6. PAST CONTINUOUS
================================ */
window.quizData["past-continuous"] = [
  {
    question: "I ___ dinner when he called.",
    options: ["was cooking", "am cooking", "cooked", "is cooking"],
    answer: 0,
    explain: "was/were + V-ing"
  }
];

/* ================================
   7. PAST PERFECT
================================ */
window.quizData["past-perfect"] = [
  {
    question: "She ___ before he arrived.",
    options: ["left", "had left", "was leaving", "leaves"],
    answer: 1,
    explain: "had + V3"
  }
];

/* ================================
   8. PAST PERFECT CONTINUOUS
================================ */
window.quizData["past-perfect-continuous"] = [
  {
    question: "They ___ for 2 hours before the rain.",
    options: ["had worked", "had been working", "worked", "were working"],
    answer: 1,
    explain: "had been + V-ing"
  }
];

/* ================================
   9. FUTURE SIMPLE
================================ */
window.quizData["future-simple"] = [
  {
    question: "I think it ___ tomorrow.",
    options: ["rains", "will rain", "is raining", "rain"],
    answer: 1,
    explain: "will + V"
  }
];

/* ================================
   10. FUTURE CONTINUOUS
================================ */
window.quizData["future-continuous"] = [
  {
    question: "This time tomorrow, I ___ to Hanoi.",
    options: ["will fly", "will be flying", "am flying", "fly"],
    answer: 1,
    explain: "will be + V-ing"
  }
];

/* ================================
   11. FUTURE PERFECT
================================ */
window.quizData["future-perfect"] = [
  {
    question: "By 2025, I ___ college.",
    options: ["will finish", "will have finished", "finish", "finished"],
    answer: 1,
    explain: "will have + V3"
  }
];

/* ================================
   12. FUTURE PERFECT CONTINUOUS
================================ */
window.quizData["future-perfect-continuous"] = [
  {
    question: "By next month, I ___ here for 2 years.",
    options: ["will work", "will have worked", "will have been working", "work"],
    answer: 2,
    explain: "will have been + V-ing"
  }
];
