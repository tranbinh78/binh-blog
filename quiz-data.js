/* ============================================
   QUIZ DATABASE – Binh Blog (12 Tenses × 20)
   ============================================ */

const QUIZ_DATABASE = {};

/* ================================
   1. PRESENT SIMPLE (20 QUESTIONS)
   ================================ */
QUIZ_DATABASE["present-simple"] = [
  {question:"She ___ to school every day.", options:["go","goes","is going","going"], answer:1, explain:"He/She/It + V(s/es)"},
  {question:"I usually ___ breakfast at 7.", options:["have","has","am having","having"], answer:0, explain:"I/You/We/They + V"},
  {question:"The sun ___ in the east.", options:["rise","rises","is rising","rose"], answer:1, explain:"Sự thật hiển nhiên"},
  {question:"He ___ coffee, he prefers tea.", options:["don’t drink","doesn’t drink","isn’t drinking","not drink"], answer:1, explain:"He → doesn’t + V"},
  {question:"We ___ English every Monday.", options:["study","studies","are study","studying"], answer:0, explain:"Thói quen"},
  {question:"Water ___ at 100°C.", options:["boil","boils","is boiling","boiled"], answer:1, explain:"Fact"},
  {question:"Dogs ___ meat.", options:["eat","eats","are eating","eated"], answer:0, explain:"Habits"},
  {question:"My father ___ TV in the evening.", options:["watch","watches","is watching","watching"], answer:1, explain:"He/She/It + V(s/es)"},
  {question:"Anna ___ her homework after school.", options:["do","does","is doing","doing"], answer:1, explain:"does + V"},
  {question:"He rarely ___ breakfast.", options:["eat","eats","is eat","eating"], answer:1, explain:"Adverb + Present simple"},
  {question:"My parents ___ in a big company.", options:["works","working","work","are work"], answer:2, explain:"Plural → work"},
  {question:"The museum ___ at 8.", options:["open","opens","is opening","opened"], answer:1, explain:"Schedule"},
  {question:"My brother never ___ late.", options:["is","are","be","being"], answer:0, explain:"State verb 'to be'"},
  {question:"We ___ a car, so we take the bus.", options:["don’t have","doesn’t have","aren’t have","not have"], answer:0, explain:"don’t + have"},
  {question:"The Earth ___ around the Sun.", options:["move","moves","is moving","moved"], answer:1, explain:"Fact"},
  {question:"Lisa ___ French very well.", options:["speak","speaks","is speak","speaking"], answer:1, explain:"He/She/It + V(s/es)"},
  {question:"My friends often ___ to the cinema.", options:["go","goes","going","are go"], answer:0, explain:"Habit"},
  {question:"His job ___ a lot of traveling.", options:["require","requires","is requiring","required"], answer:1, explain:"Singular subject"},
  {question:"They ___ near my house.", options:["live","lives","are living","living"], answer:0, explain:"Permanent situation"},
  {question:"Tom ___ well with his team.", options:["gets along","get along","is get along","get alongs"], answer:0, explain:"Phrasal verb"}
];

/* ==================================
   2. PRESENT CONTINUOUS (20 QUESTIONS)
   ================================== */
QUIZ_DATABASE["present-continuous"] = [
  {question:"She ___ TV now.", options:["watch","watches","is watching","watching"], answer:2, explain:"now → be + V-ing"},
  {question:"I ___ English at the moment.", options:["study","am studying","studying","is studying"], answer:1, explain:"at the moment"},
  {question:"They ___ dinner right now.", options:["have","are having","having","has"], answer:1},
  {question:"Look! He ___.", options:["runs","is running","run","running"], answer:1},
  {question:"The children ___ loudly.", options:["shout","are shouting","shouting","is shouting"], answer:1},
  {question:"She ___ for the exam these days.", options:["studies","is studying","study","studying"], answer:1},
  {question:"We ___ a new project.", options:["are working on","work on","working on","are work on"], answer:0},
  {question:"He ___ his homework now.", options:["does","do","is doing","doing"], answer:2},
  {question:"They ___ to music.", options:["listen","are listening","listening","is listening"], answer:1},
  {question:"I ___ to the market.", options:["am going","go","going","is go"], answer:0},
  {question:"She ___ the piano at the moment.", options:["plays","is playing","play","playing"], answer:1},
  {question:"The dog ___ in the yard.", options:["run","runs","is running","running"], answer:2},
  {question:"He ___ a new phone now.", options:["buys","is buying","buy","buying"], answer:1},
  {question:"The teacher ___ to us.", options:["is talking","talk","talks","talking"], answer:0},
  {question:"I ___ flowers now.", options:["water","am watering","watering","is watering"], answer:1},
  {question:"They ___ a movie.", options:["watch","are watching","watched","watching"], answer:1},
  {question:"She ___ late today.", options:["is coming","comes","come","coming"], answer:0},
  {question:"We ___ for the bus.", options:["wait","are waiting","waiting","is waiting"], answer:1},
  {question:"He ___ a sandwich.", options:["eat","eats","is eating","eating"], answer:2},
  {question:"I ___ tired today.", options:["am feeling","feel","feels","is feel"], answer:0}
];

/* =============================
   3. PRESENT PERFECT (20)
   ============================= */
QUIZ_DATABASE["present-perfect"] = [
  {question:"I ___ finished my homework.", options:["have","has","having","have been"], answer:0},
  {question:"She ___ lived here since 2010.", options:["has","have","is","was"], answer:0},
  {question:"They ___ just arrived.", options:["have","has","are","were"], answer:0},
  {question:"He ___ never been to Japan.", options:["has","have","is","was"], answer:0},
  {question:"We ___ seen that movie three times.", options:["have","has","seen","are"], answer:0},
  {question:"She ___ already eaten.", options:["has","have","is","was"], answer:0},
  {question:"They ___ studied English for 5 years.", options:["have","has","are","were"], answer:0},
  {question:"I ___ lost my keys.", options:["have","has","am","was"], answer:0},
  {question:"He ___ broken his arm.", options:["has","have","is","was"], answer:0},
  {question:"We ___ visited London.", options:["have","has","are","were"], answer:0},
  {question:"She ___ never tried sushi.", options:["has","have","is","was"], answer:0},
  {question:"They ___ completed the task.", options:["have","has","are","were"], answer:0},
  {question:"He ___ written 3 books.", options:["has","have","is","was"], answer:0},
  {question:"I ___ seen him today.", options:["have","has","am","was"], answer:0},
  {question:"She ___ gone to work.", options:["has","have","is","was"], answer:0},
  {question:"They ___ known each other for years.", options:["have","has","are","were"], answer:0},
  {question:"We ___ cleaned the house.", options:["have","has","are","were"], answer:0},
  {question:"He ___ already finished.", options:["has","have","is","was"], answer:0},
  {question:"I ___ lived here for a long time.", options:["have","has","am","was"], answer:0},
  {question:"She ___ cooked dinner.", options:["has","have","is","was"], answer:0}
];

/* =================================
   4. PRESENT PERFECT CONTINUOUS (20)
   ================================= */
QUIZ_DATABASE["present-perfect-continuous"] = [
  {question:"I ___ studying for 3 hours.", options:["have been","has been","am","was"], answer:0},
  {question:"She ___ working here since May.", options:["has been","have been","is","was"], answer:0},
  {question:"They ___ playing football all morning.", options:["have been","has been","are","were"], answer:0},
  {question:"He ___ reading that book lately.", options:["has been","have been","is","was"], answer:0},
  {question:"We ___ waiting for you.", options:["have been","has been","are","were"], answer:0},
  {question:"She ___ cooking for an hour.", options:["has been","have been","is","was"], answer:0},
  {question:"They ___ studying English.", options:["have been","has been","are","were"], answer:0},
  {question:"I ___ thinking about it.", options:["have been","has been","am","was"], answer:0},
  {question:"He ___ running.", options:["has been","have been","is","was"], answer:0},
  {question:"We ___ cleaning the house.", options:["have been","has been","are","were"], answer:0},
  {question:"She ___ practicing all day.", options:["has been","have been","is","was"], answer:0},
  {question:"They ___ talking.", options:["have been","has been","are","were"], answer:0},
  {question:"I ___ working on this.", options:["have been","has been","am","was"], answer:0},
  {question:"He ___ learning Spanish.", options:["has been","have been","is","was"], answer:0},
  {question:"We ___ fixing the car.", options:["have been","has been","are","were"], answer:0},
  {question:"She ___ trying her best.", options:["has been","have been","is","was"], answer:0},
  {question:"They ___ living here.", options:["have been","has been","are","were"], answer:0},
  {question:"I ___ calling you.", options:["have been","has been","am","was"], answer:0},
  {question:"He ___ studying all day.", options:["has been","have been","is","was"], answer:0},
  {question:"We ___ waiting for hours.", options:["have been","has been","are","were"], answer:0}
];

/* =========================
   5. PAST SIMPLE (20)
   ========================= */
QUIZ_DATABASE["past-simple"] = [
  {question:"She ___ to school yesterday.", options:["go","goes","went","gone"], answer:2},
  {question:"I ___ a new phone last week.", options:["buy","bought","buys","buyed"], answer:1},
  {question:"They ___ dinner at 7.", options:["have","had","has","having"], answer:1},
  {question:"We ___ a movie last night.", options:["watch","watched","watches","watching"], answer:1},
  {question:"He ___ early.", options:["left","leave","leaves","leaving"], answer:0},
  {question:"I ___ tired yesterday.", options:["was","were","am","be"], answer:0},
  {question:"They ___ at home.", options:["were","was","are","be"], answer:0},
  {question:"She ___ sick.", options:["was","were","is","are"], answer:0},
  {question:"We ___ to Da Nang.", options:["travel","traveled","travels","traveling"], answer:1},
  {question:"I ___ my keys.", options:["lost","lose","losing","loose"], answer:0},
  {question:"He ___ the window.", options:["opened","open","opens","opening"], answer:0},
  {question:"They ___ late.", options:["arrived","arrives","arrive","arriving"], answer:0},
  {question:"She ___ lunch.", options:["made","make","makes","making"], answer:0},
  {question:"The dog ___ loudly.", options:["barked","barks","bark","barking"], answer:0},
  {question:"We ___ in a small house.", options:["lived","live","lives","living"], answer:0},
  {question:"I ___ that book.", options:["read","reads","reading","readed"], answer:0},
  {question:"They ___ soccer.", options:["played","play","plays","playing"], answer:0},
  {question:"He ___ an email.", options:["sent","send","sending","sends"], answer:0},
  {question:"We ___ tired.", options:["were","was","are","am"], answer:0},
  {question:"She ___ the door.", options:["closed","close","closing","closes"], answer:0}
];

/* ==========================
   6. PAST CONTINUOUS (20)
   ========================== */
QUIZ_DATABASE["past-continuous"] = [
  {question:"I ___ when you called.", options:["was sleeping","sleep","am sleeping","slept"], answer:0},
  {question:"They ___ dinner at 7.", options:["were having","have","had","having"], answer:0},
  {question:"She ___ TV.", options:["was watching","watched","watches","watching"], answer:0},
  {question:"We ___ to music.", options:["were listening","listen","listened","listening"], answer:0},
  {question:"He ___ when I saw him.", options:["was running","runs","ran","running"], answer:0},
  {question:"The kids ___ outside.", options:["were playing","play","played","playing"], answer:0},
  {question:"She ___ late.", options:["was coming","comes","come","came"], answer:0},
  {question:"They ___ loudly.", options:["were talking","talk","talked","talking"], answer:0},
  {question:"I ___ for the bus.", options:["was waiting","wait","waited","waiting"], answer:0},
  {question:"He ___ lunch.", pptions:["was eating","eat","ate","eating"], answer:0},
  {question:"We ___ the house.", options:["were cleaning","clean","cleaned","cleaning"], answer:0},
  {question:"She ___ a book.", options:["was reading","read","reads","reading"], answer:0},
  {question:"They ___ football.", options:["were playing","play","played","playing"], answer:0},
  {question:"He ___ home.", options:["was going","go","went","going"], answer:0},
  {question:"The dog ___.", options:["was barking","barks","barked","barking"], answer:0},
  {question:"We ___ a movie.", options:["were watching","watch","watched","watching"], answer:0},
  {question:"I ___ him yesterday.", options:["was meeting","meet","met","meeting"], answer:0},
  {question:"She ___ dinner.", options:["was making","makes","made","making"], answer:0},
  {question:"They ___ tired.", options:["were feeling","feel","felt","feeling"], answer:0},
  {question:"He ___ in bed.", options:["was lying","lies","lay","lying"], answer:0}
];

/* ==========================
   7. PAST PERFECT (20)
   ========================== */
QUIZ_DATABASE["past-perfect"] = [
  {question:"She ___ before I arrived.", options:["had left","left","was leaving","leaves"], answer:0},
  {question:"I ___ my work before 6 PM.", options:["had finished","finished","finish","was finishing"], answer:0},
  {question:"They ___ dinner.", options:["had eaten","ate","eat","were eating"], answer:0},
  {question:"We ___ the movie.", options:["had watched","watched","watch","were watching"], answer:0},
  {question:"He ___ home.", options:["had gone","went","goes","going"], answer:0},
  {question:"The train ___ already.", options:["had left","left","leaves","was leaving"], answer:0},
  {question:"I ___ the keys.", options:["had lost","lost","lose","was losing"], answer:0},
  {question:"They ___ him before.", options:["had met","met","meet","were meeting"], answer:0},
  {question:"She ___ the letter.", options:["had written","wrote","writes","was writing"], answer:0},
  {question:"We ___ tired.", options:["had been","were","are","be"], answer:0},
  {question:"He ___ the book.", options:["had read","read","reads","was reading"], answer:0},
  {question:"They ___ the game.", options:["had won","won","win","winning"], answer:0},
  {question:"I ___ to the shop.", options:["had gone","went","go","going"], answer:0},
  {question:"She ___ her homework.", options:["had done","did","does","doing"], answer:0},
  {question:"The dog ___ the food.", options:["had eaten","ate","eat","eating"], answer:0},
  {question:"We ___ home.", options:["had returned","returned","return","returning"], answer:0},
  {question:"He ___ early.", options:["had left","left","leaves","leaving"], answer:0},
  {question:"They ___ the car.", options:["had repaired","repaired","repair","repairing"], answer:0},
  {question:"I ___ for hours.", options:["had waited","waited","wait","waiting"], answer:0},
  {question:"She ___ him before.", options:["had seen","saw","sees","seeing"], answer:0}
];

/* ====================================
   8. PAST PERFECT CONTINUOUS (20)
   ==================================== */
QUIZ_DATABASE["past-perfect-continuous"] = [
  {question:"I ___ studying for 2 hours before you came.", options:["had been","have been","was","am"], answer:0},
  {question:"She ___ working all day.", options:["had been","has been","was","is"], answer:0},
  {question:"They ___ playing.", options:["had been","have been","were","are"], answer:0},
  {question:"We ___ waiting.", options:["had been","were","are","have been"], answer:0},
  {question:"He ___ running.", options:["had been","was","is","has been"], answer:0},
  {question:"The kids ___ shouting.", options:["had been","were","are","have been"], answer:0},
  {question:"I ___ cooking.", options:["had been","was","am","have been"], answer:0},
  {question:"She ___ reading.", options:["had been","was","is","has been"], answer:0},
  {question:"They ___ trying.", options:["had been","were","are","have been"], answer:0},
  {question:"We ___ cleaning.", options:["had been","were","are","have been"], answer:0},
  {question:"He ___ sleeping.", options:["had been","was","is","has been"], answer:0},
  {question:"I ___ calling him.", options:["had been","was","am","have been"], answer:0},
  {question:"They ___ living here.", options:["had been","were","are","have been"], answer:0},
  {question:"She ___ practicing.", options:["had been","was","is","has been"], answer:0},
  {question:"We ___ fixing the car.", options:["had been","were","are","have been"], answer:0},
  {question:"He ___ studying.", options:["had been","was","is","has been"], answer:0},
  {question:"I ___ waiting for hours.", options:["had been","was","am","have been"], answer:0},
  {question:"They ___ working.", options:["had been","were","are","have been"], answer:0},
  {question:"We ___ talking.", options:["had been","were","are","have been"], answer:0},
  {question:"She ___ learning English.", options:["had been","was","is","has been"], answer:0}
];

/* ================================
   9. FUTURE SIMPLE (20)
   ================================ */
QUIZ_DATABASE["future-simple"] = [
  {question:"I ___ help you.", options:["will","am","is","was"], answer:0},
  {question:"She ___ come tomorrow.", options:["will","is","are","was"], answer:0},
  {question:"They ___ go soon.", options:["will","are","is","was"], answer:0},
  {question:"We ___ visit him.", options:["will","are","is","were"], answer:0},
  {question:"He ___ study.", options:["will","is","are","was"], answer:0},
  {question:"I ___ call you later.", options:["will","am","is","was"], answer:0},
  {question:"She ___ buy it.", options:["will","is","are","was"], answer:0},
  {question:"They ___ help us.", options:["will","are","is","were"], answer:0},
  {question:"We ___ see.", options:["will","is","are","were"], answer:0},
  {question:"He ___ win.", options:["will","is","are","was"], answer:0},
  {question:"I ___ try again.", options:["will","am","is","was"], answer:0},
  {question:"She ___ cook.", options:["will","is","are","was"], answer:0},
  {question:"They ___ travel.", options:["will","are","is","was"], answer:0},
  {question:"We ___ work harder.", options:["will","are","is","were"], answer:0},
  {question:"He ___ drive.", options:["will","is","are","was"], answer:0},
  {question:"I ___ join.", options:["will","am","is","was"], answer:0},
  {question:"She ___ start now.", options:["will","is","are","was"], answer:0},
  {question:"They ___ finish soon.", options:["will","are","is","was"], answer:0},
  {question:"We ___ move.", options:["will","is","are","were"], answer:0},
  {question:"He ___ speak.", options:["will","is","are","was"], answer:0}
];

/* ==================================
   10. FUTURE CONTINUOUS (20)
   ================================== */
QUIZ_DATABASE["future-continuous"] = [
  {question:"I ___ working tomorrow.", options:["will be","am","is","was"], answer:0},
  {question:"She ___ traveling next week.", options:["will be","is","are","was"], answer:0},
  {question:"They ___ waiting for you.", options:["will be","are","is","was"], answer:0},
  {question:"We ___ studying at 7 PM.", options:["will be","are","is","were"], answer:0},
  {question:"He ___ sleeping.", options:["will be","is","are","was"], answer:0},
  {question:"I ___ driving.", options:["will be","am","is","was"], answer:0},
  {question:"She ___ cooking.", options:["will be","is","are","was"], answer:0},
  {question:"They ___ cleaning.", options:["will be","are","is","were"], answer:0},
  {question:"We ___ preparing.", options:["will be","are","is","were"], answer:0},
  {question:"He ___ eating.", options:["will be","is","are","was"], answer:0},
  {question:"I ___ waiting.", options:["will be","am","is","was"], answer:0},
  {question:"She ___ working.", options:["will be","is","are","was"], answer:0},
  {question:"They ___ traveling.", options:["will be","are","is","were"], answer:0},
  {question:"We ___ talking.", options:["will be","are","is","were"], answer:0},
  {question:"He ___ cooking.", options:["will be","is","are","was"], answer:0},
  {question:"I ___ studying.", options:["will be","am","is","was"], answer:0},
  {question:"She ___ waiting.", options:["will be","is","are","was"], answer:0},
  {question:"They ___ meeting us.", options:["will be","are","is","were"], answer:0},
  {question:"We ___ watching a movie.", options:["will be","are","is","were"], answer:0},
  {question:"He ___ running.", options:["will be","is","are","was"], answer:0}
];

/* ==============================
   11. FUTURE PERFECT (20)
   ============================== */
QUIZ_DATABASE["future-perfect"] = [
  {question:"I ___ finished by 5 PM.", options:["will have","will","am","is"], answer:0},
  {question:"She ___ completed the task.", options:["will have","will","is","was"], answer:0},
  {question:"They ___ left by noon.", options:["will have","will","are","is"], answer:0},
  {question:"We ___ arrived.", options:["will have","will","are","were"], answer:0},
  {question:"He ___ done it.", options:["will have","will","is","was"], answer:0},
  {question:"I ___ eaten.", options:["will have","am","is","was"], answer:0},
  {question:"She ___ finished.", options:["will have","will","is","was"], answer:0},
  {question:"They ___ gone.", options:["will have","will","are","is"], answer:0},
  {question:"We ___ cleaned.", options:["will have","will","are","were"], answer:0},
  {question:"He ___ left early.", options:["will have","will","is","was"], answer:0},
  {question:"I ___ done it.", options:["will have","am","is","was"], answer:0},
  {question:"She ___ cooked.", options:["will have","will","is","was"], answer:0},
  {question:"They ___ returned.", options:["will have","will","are","is"], answer:0},
  {question:"We ___ moved.", options:["will have","will","are","were"], answer:0},
  {question:"He ___ started.", options:["will have","will","is","was"], answer:0},
  {question:"I ___ begun.", options:["will have","am","is","was"], answer:0},
  {question:"She ___ studied.", options:["will have","will","is","was"], answer:0},
  {question:"They ___ finished.", options:["will have","will","are","is"], answer:0},
  {question:"We ___ learned.", options:["will have","will","are","were"], answer:0},
  {question:"He ___ spoken.", options:["will have","will","is","was"], answer:0}
];

/* ==========================================
   12. FUTURE PERFECT CONTINUOUS (20)
   ========================================== */
QUIZ_DATABASE["future-perfect-continuous"] = [
  {question:"I ___ working for 5 hours.", options:["will have been","will","am","is"], answer:0},
  {question:"She ___ studying all day.", options:["will have been","will","is","was"], answer:0},
  {question:"They ___ waiting.", options:["will have been","will","are","is"], answer:0},
  {question:"We ___ traveling.", options:["will have been","will","are","were"], answer:0},
  {question:"He ___ sleeping.", options:["will have been","will","is","was"], answer:0},
  {question:"I ___ learning English.", options:["will have been","am","is","was"], answer:0},
  {question:"She ___ preparing.", options:["will have been","will","is","was"], answer:0},
  {question:"They ___ working.", options:["will have been","will","are","were"], answer:0},
  {question:"We ___ studying.", options:["will have been","will","are","were"], answer:0},
  {question:"He ___ practicing.", options:["will have been","will","is","was"], answer:0},
  {question:"I ___ calling him.", options:["will have been","am","is","was"], answer:0},
  {question:"She ___ cooking.", options:["will have been","will","is","was"], answer:0},
  {question:"They ___ trying.", options:["will have been","will","are","is"], answer:0},
  {question:"We ___ cleaning.", options:["will have been","will","are","were"], answer:0},
  {question:"He ___ fixing the car.", options:["will have been","will","is","was"], answer:0},
  {question:"I ___ waiting for hours.", options:["will have been","am","is","was"], answer:0},
  {question:"She ___ practicing all morning.", options:["will have been","will","is","was"], answer:0},
  {question:"They ___ living here.", options:["will have been","are","is","was"], answer:0},
  {question:"We ___ talking.", options:["will have been","will","are","were"], answer:0},
  {question:"He ___ studying.", options:["will have been","will","is","was"], answer:0}
];
