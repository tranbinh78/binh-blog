/* ============================================
   QUIZ DATABASE – Binh Blog (12 Tenses × 20)
   ============================================ */

// tạo biến global để quiz.html truy cập
window.quizData = {};

const QUIZ_DATABASE = window.quizData;

/* ================================
   1. PRESENT SIMPLE
================================ */
QUIZ_DATABASE["present-simple"] = [
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
QUIZ_DATABASE["present-continuous"] = [
  {
    question: "They ___ TV now.",
    options: ["watch", "are watching", "watched", "watching"],
    answer: 1,
    explain: "Dấu hiệu: now"
  }
];

/* ================================
   3. PRESENT PERFECT
================================ */
QUIZ_DATABASE["present-perfect"] = [
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
QUIZ_DATABASE["present-perfect-continuous"] = [
  {
    question: "They ___ for 2 hours.",
    options: ["have studied", "have been studying", "are studying", "studies"],
    answer: 1,
    explain: "have/has been + V-ing"
  }
];

/* ================================
   5. PAST SIMPLE
================================ */
QUIZ_DATABASE["past-simple"] = [
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
QUIZ_DATABASE["past-continuous"] = [
  {
    question: "I ___ dinner when he called.",
    options: ["was cooking", "am cooking", "cooked", "cook"],
    answer: 0,
    explain: "was/were + V-ing"
  }
];

/* ================================
   7. PAST PERFECT
================================ */
QUIZ_DATABASE["past-perfect"] = [
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
QUIZ_DATABASE["past-perfect-continuous"] = [
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
QUIZ_DATABASE["future-simple"] = [
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
QUIZ_DATABASE["future-continuous"] = [
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
QUIZ_DATABASE["future-perfect"] = [
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
QUIZ_DATABASE["future-perfect-continuous"] = [
  {
    question: "By next month, I ___ here for 2 years.",
    options: ["will work", "will have worked", "will have been working", "work"],
    answer: 2,
    explain: "will have been + V-ing"
  }
];
