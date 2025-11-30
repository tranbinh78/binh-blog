// ==========================================
// QUIZ DATA (Binh Blog)
// Format:
// window.quizData = {
//   "present-simple": {
//       title: "...",
//       desc: "...",
//       questions: [ {question, options:[], answer:index, explain}, ... ]
//   },
//   ...
// }
// ==========================================

window.quizData = window.quizData || {};

window.quizData["present-simple"] = {
  title: "Bài tập – PRESENT SIMPLE",
  desc: "Chọn đáp án đúng cho thì Hiện tại đơn (Present Simple).",
  questions: [
    { question:"She ___ to school every day.", options:["go","goes","is going","going"], answer:1, explain:"He/She/It + V(s/es)" },
    { question:"I usually ___ breakfast at 7.", options:["have","has","am having","having"], answer:0, explain:"I/You/We/They + V" },
    { question:"The sun ___ in the east.", options:["rise","rises","is rising","rose"], answer:1, explain:"Sự thật hiển nhiên" },
    { question:"He ___ coffee, he prefers tea.", options:["don't drink","doesn't drink","isn't drinking","not drink"], answer:1, explain:"He → doesn't + V" },
    { question:"We ___ English every Monday.", options:["study","studies","are study","studying"], answer:0, explain:"Thói quen" },
    { question:"Water ___ at 100°C.", options:["boil","boils","is boiling","boiled"], answer:1, explain:"Scientific fact" },
    { question:"Dogs ___ meat.", options:["eat","eats","are eating","eated"], answer:0, explain:"Habits" },
    { question:"My father ___ TV in the evening.", options:["watch","watches","is watching","watching"], answer:1, explain:"He/She/It + V(s/es)" },
    { question:"Anna ___ her homework after school.", options:["do","does","is doing","doing"], answer:1, explain:"does + V" },
    { question:"He rarely ___ breakfast.", options:["eat","eats","is eat","eating"], answer:1, explain:"Adverb + Present simple" },
    { question:"My parents ___ in a big company.", options:["works","working","work","are work"], answer:2, explain:"Plural subject → work" },
    { question:"The museum ___ at 8.", options:["open","opens","is opening","opened"], answer:1, explain:"Schedule" },
    { question:"My brother never ___ late.", options:["is","are","be","being"], answer:0, explain:"State verb 'to be' (singular)" },
    { question:"We ___ a car, so we take the bus.", options:["don't have","doesn't have","aren't have","not have"], answer:0, explain:"don't + have" },
    { question:"The Earth ___ around the Sun.", options:["move","moves","is moving","moved"], answer:1, explain:"Fact" },
    { question:"Lisa ___ French very well.", options:["speak","speaks","is speak","speaking"], answer:1, explain:"He/She/It + V(s/es)" },
    { question:"My friends often ___ to the cinema.", options:["go","goes","going","are go"], answer:0, explain:"Habit" },
    { question:"His job ___ a lot of traveling.", options:["require","requires","is requiring","required"], answer:1, explain:"Singular subject" },
    { question:"They ___ near my house.", options:["live","lives","are living","living"], answer:0, explain:"Permanent situation" },
    { question:"Tom ___ well with his team.", options:["gets along","get along","is get along","get alongs"], answer:0, explain:"Phrasal verb" }
  ]
};

// Template placeholders for other tenses (empty arrays to avoid undefined errors)
// You can fill these with the same shape {question, options:[], answer:, explain:}
window.quizData["present-continuous"] = {
  title: "Bài tập – PRESENT CONTINUOUS",
  desc: "Coming soon",
  questions: []
};

window.quizData["present-perfect"] = { title:"Present Perfect", desc:"Coming soon", questions: [] };
window.quizData["present-perfect-continuous"] = { title:"Present Perfect Continuous", desc:"Coming soon", questions: [] };
window.quizData["past-simple"] = { title:"Past Simple", desc:"Coming soon", questions: [] };
window.quizData["past-continuous"] = { title:"Past Continuous", desc:"Coming soon", questions: [] };
window.quizData["past-perfect"] = { title:"Past Perfect", desc:"Coming soon", questions: [] };
window.quizData["past-perfect-continuous"] = { title:"Past Perfect Continuous", desc:"Coming soon", questions: [] };
window.quizData["future-simple"] = { title:"Future Simple", desc:"Coming soon", questions: [] };
window.quizData["future-continuous"] = { title:"Future Continuous", desc:"Coming soon", questions: [] };
window.quizData["future-perfect"] = { title:"Future Perfect", desc:"Coming soon", questions: [] };
window.quizData["future-perfect-continuous"] = { title:"Future Perfect Continuous", desc:"Coming soon", questions: [] };

// Done.
