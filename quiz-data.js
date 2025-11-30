/* ========================================================
   QUIZ DATABASE – FULL 12 TENSES (240 QUESTIONS)
   Sử dụng cho Binh Blog – quiz.html
======================================================== */

window.quizData = {};

/* ========================================================
   1) PRESENT SIMPLE – 20 QUESTIONS
======================================================== */
window.quizData["present-simple"] = {
  title: "Bài tập – Present Simple",
  desc: "Chọn đáp án đúng cho thì Hiện tại đơn.",
  questions: [
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
  ]
};

/* ========================================================
   2) PRESENT CONTINUOUS – 20 QUESTIONS
======================================================== */
window.quizData["present-continuous"] = {
  title: "Bài tập – Present Continuous",
  desc: "Chọn đáp án đúng cho thì Hiện tại tiếp diễn.",
  questions: [
    {question:"She ___ now.", options:["is cooking","cook","cooks","cooking"], answer:0, explain:"now → be + V-ing"},
    {question:"They ___ TV at the moment.", options:["are watching","watch","watches","watching"], answer:0, explain:"at the moment → Present Continuous"},
    {question:"I ___ to music right now.", options:["am listening","listen","listens","listening"], answer:0, explain:"right now → be + V-ing"},
    {question:"The kids ___ in the yard.", options:["are playing","play","plays","playing"], answer:0, explain:"be + V-ing"},
    {question:"My mom ___ dinner.", options:["is making","make","makes","making"], answer:0},
    {question:"Look! He ___.", options:["is running","runs","run","running"], answer:0},
    {question:"We ___ English this week.", options:["are studying","study","studies","are study"], answer:0},
    {question:"She ___ for her exam.", options:["is preparing","prepare","prepares","preparing"], answer:0},
    {question:"Listen! The birds ___.", options:["are singing","sing","sings","singing"], answer:0},
    {question:"The weather ___ colder.", options:["is getting","gets","get","getting"], answer:0},
    {question:"I ___ my homework now.", options:["am doing","do","does","doing"], answer:0},
    {question:"He ___ a book at the moment.", options:["is reading","reads","read","reading"], answer:0},
    {question:"They ___ some coffee.", options:["are drinking","drink","drinks","drinking"], answer:0},
    {question:"The dog ___ loudly.", options:["is barking","barks","bark","barking"], answer:0},
    {question:"She ___ to school today.", options:["is walking","walk","walks","walking"], answer:0},
    {question:"He ___ with his friends.", options:["is chatting","chat","chats","chatting"], answer:0},
    {question:"The baby ___", options:["is crying","cries","cry","crying"], answer:0},
    {question:"We ___ our bikes.", options:["are riding","ride","rides","riding"], answer:0},
    {question:"She ___ her car.", options:["is washing","wash","washes","washing"], answer:0},
    {question:"I ___ for my keys.", options:["am looking","look","looks","looking"], answer:0}
  ]
};

/* ========================================================
   3) PRESENT PERFECT – 20 QUESTIONS
======================================================== */
window.quizData["present-perfect"] = {
  title: "Bài tập – Present Perfect",
  desc: "Chọn đáp án đúng cho thì Hiện tại hoàn thành.",
  questions: [
    {question:"I ___ this movie before.", options:["have seen","saw","see","seeing"], answer:0},
    {question:"She ___ here for 3 years.", options:["has lived","lives","lived","is living"], answer:0},
    {question:"They ___ to Paris twice.", options:["have been","went","go","are going"], answer:0},
    {question:"He ___ already ___ lunch.", options:["has / had","have / had","had / has","has / has"], answer:0},
    {question:"We ___ our homework.", options:["have finished","finish","finished","are finishing"], answer:0},
    {question:"She ___ him since 2010.", options:["has known","knew","knows","is knowing"], answer:0},
    {question:"I ___ just ___ the news.", options:["have / heard","heard","hear","am hearing"], answer:0},
    {question:"They ___ never ___ Japan.", options:["have / visited","visited","visit","are visiting"], answer:0},
    {question:"He ___ already.", options:["has left","left","leaves","is leaving"], answer:0},
    {question:"We ___ many times.", options:["have met","met","meet","are meeting"], answer:0},
    {question:"She ___ yet.", options:["hasn’t arrived","didn’t arrive","isn’t arriving","arrives"], answer:0},
    {question:"I ___ my keys!", options:["have lost","lost","lose","am losing"], answer:0},
    {question:"They ___ the task.", options:["have done","did","do","are doing"], answer:0},
    {question:"He ___ his leg.", options:["has broken","broke","breaks","is breaking"], answer:0},
    {question:"We ___ enough food.", options:["have bought","bought","buy","are buying"], answer:0},
    {question:"I ___ him recently.", options:["haven’t seen","didn’t see","don’t see","am not seeing"], answer:0},
    {question:"She ___ the book.", options:["has written","wrote","writes","is writing"], answer:0},
    {question:"They ___ just ___ home.", options:["have / come","came","come","are coming"], answer:0},
    {question:"He ___ COVID.", options:["has had","had","has","is having"], answer:0},
    {question:"We ___ that film.", options:["have watched","watched","watch","are watching"], answer:0}
  ]
};

/* ========================================================
   4) PRESENT PERFECT CONTINUOUS – 20 QUESTIONS
======================================================== */
window.quizData["present-perfect-continuous"] = {
  title: "Bài tập – Present Perfect Continuous",
  desc: "Chọn đáp án đúng cho thì Hiện tại hoàn thành tiếp diễn.",
  questions: [
    {question:"She ___ for 2 hours.", options:["has been studying","studied","studies","is studying"], answer:0},
    {question:"They ___ since morning.", options:["have been working","worked","work","are working"], answer:0},
    {question:"He ___ all day.", options:["has been running","ran","runs","is running"], answer:0},
    {question:"I ___ English for 5 years.", options:["have been learning","learned","learn","am learning"], answer:0},
    {question:"It ___ raining.", options:["has been","is","was","has been raining"], answer:3},
    {question:"We ___ this project.", options:["have been doing","did","do","are doing"], answer:0},
    {question:"She ___ too much coffee.", options:["has been drinking","drinks","drank","is drinking"], answer:0},
    {question:"They ___ TV for 3 hours.", options:["have been watching","watch","watched","are watching"], answer:0},
    {question:"I ___ for you.", options:["have been waiting","waited","wait","am waiting"], answer:0},
    {question:"He ___ football.", options:["has been playing","played","plays","is playing"], answer:0},
    {question:"We ___ for 20 minutes.", options:["have been walking","walked","walk","are walking"], answer:0},
    {question:"She ___ to lose weight.", options:["has been trying","tried","tries","is trying"], answer:0},
    {question:"They ___ harder recently.", options:["have been working","worked","work","are working"], answer:0},
    {question:"He ___ well.", options:["has been sleeping","sleeps","slept","is sleeping"], answer:0},
    {question:"I ___ this game.", options:["have been playing","played","play","am playing"], answer:0},
    {question:"We ___ too long!", options:["have been waiting","waited","wait","are waiting"], answer:0},
    {question:"She ___ emails all day.", options:["has been writing","wrote","writes","is writing"], answer:0},
    {question:"They ___ around the city.", options:["have been walking","walk","walked","are walking"], answer:0},
    {question:"He ___ since morning.", options:["has been studying","studies","studied","is studying"], answer:0},
    {question:"I ___ tired lately.", options:["have been feeling","felt","feel","am feeling"], answer:0}
  ]
};

/* ========================================================
   5) PAST SIMPLE – 20 QUESTIONS
======================================================== */
window.quizData["past-simple"] = {
  title: "Bài tập – Past Simple",
  desc: "Chọn đáp án đúng cho thì Quá khứ đơn.",
  questions: [
    {question:"I ___ to school yesterday.", options:["went","go","goes","am going"], answer:0},
    {question:"She ___ a new car.", options:["bought","buy","buys","is buying"], answer:0},
    {question:"They ___ football last week.", options:["played","play","plays","are playing"], answer:0},
    {question:"He ___ TV last night.", options:["watched","watch","watches","is watching"], answer:0},
    {question:"We ___ late.", options:["were","are","was","be"], answer:0},
    {question:"I ___ him two days ago.", options:["met","meet","meets","am meeting"], answer:0},
    {question:"The weather ___ cold.", options:["was","were","is","be"], answer:0},
    {question:"She ___ her homework.", options:["did","does","do","doing"], answer:0},
    {question:"They ___ home early.", options:["left","leave","leaves","are leaving"], answer:0},
    {question:"I ___ a cake yesterday.", options:["made","make","makes","am making"], answer:0},
    {question:"He ___ sick.", options:["felt","feel","feels","is feeling"], answer:0},
    {question:"We ___ a movie.", options:["saw","see","sees","are seeing"], answer:0},
    {question:"She ___ sad.", options:["was","were","is","be"], answer:0},
    {question:"They ___ happy.", options:["were","was","are","be"], answer:0},
    {question:"He ___ the window.", options:["opened","open","opens","opening"], answer:0},
    {question:"I ___ the book.", options:["read","reads","readed","am reading"], answer:0},
    {question:"We ___ to Da Nang.", options:["traveled","travel","travels","are traveling"], answer:0},
    {question:"He ___ the guitar.", options:["played","play","plays","playing"], answer:0},
    {question:"She ___ English.", options:["studied","study","studies","is studying"], answer:0},
    {question:"They ___ dinner.", options:["had","have","has","are having"], answer:0}
  ]
};

/* ========================================================
   6) PAST CONTINUOUS – 20 QUESTIONS
======================================================== */
window.quizData["past-continuous"] = {
  title: "Bài tập – Past Continuous",
  desc: "Chọn đáp án đúng cho thì Quá khứ tiếp diễn.",
  questions: [
    {question:"I ___ TV when he called.", options:["was watching","watched","watch","am watching"], answer:0},
    {question:"She ___ dinner at 7 PM.", options:["was cooking","cooked","cooks","is cooking"], answer:0},
    {question:"They ___ football yesterday.", options:["were playing","played","play","are playing"], answer:0},
    {question:"He ___ when it started raining.", options:["was walking","walked","walk","is walking"], answer:0},
    {question:"We ___ to music.", options:["were listening","listened","listen","are listening"], answer:0},
    {question:"She ___ homework.", options:["was doing","did","does","is doing"], answer:0},
    {question:"The kids ___ loudly.", options:["were shouting","shouted","shout","are shouting"], answer:0},
    {question:"I ___ when the phone rang.", options:["was sleeping","slept","sleep","am sleeping"], answer:0},
    {question:"They ___ dinner.", options:["were having","had","have","are having"], answer:0},
    {question:"He ___ a book.", options:["was reading","read","reads","is reading"], answer:0},
    {question:"The dog ___.", options:["was barking","barked","barks","is barking"], answer:0},
    {question:"We ___ outside.", options:["were sitting","sat","sit","are sitting"], answer:0},
    {question:"The students ___ in class.", options:["were studying","studied","study","are studying"], answer:0},
    {question:"I ___ coffee.", options:["was drinking","drank","drink","am drinking"], answer:0},
    {question:"She ___ the house.", options:["was cleaning","cleaned","cleans","is cleaning"], answer:0},
    {question:"They ___ to school.", options:["were going","went","go","are going"], answer:0},
    {question:"He ___ his bike.", options:["was fixing","fixed","fix","is fixing"], answer:0},
    {question:"We ___ the news.", options:["were watching","watched","watch","are watching"], answer:0},
    {question:"She ___ the room.", options:["was entering","entered","enters","is entering"], answer:0},
    {question:"They ___ songs.", options:["were singing","sang","sing","are singing"], answer:0}
  ]
};

/* ========================================================
   7) PAST PERFECT – 20 QUESTIONS
======================================================== */
window.quizData["past-perfect"] = {
  title: "Bài tập – Past Perfect",
  desc: "Chọn đáp án đúng cho thì Quá khứ hoàn thành.",
  questions: [
    {question:"She ___ before he arrived.", options:["had left","left","leaves","has left"], answer:0},
    {question:"They ___ dinner when I came.", options:["had finished","finished","finish","are finishing"], answer:0},
    {question:"He ___ the book before 10 PM.", options:["had read","read","reads","has read"], answer:0},
    {question:"I ___ my homework when he called.", options:["had done","did","do","have done"], answer:0},
    {question:"We ___ already.", options:["had left","left","leave","has left"], answer:0},
    {question:"She ___ the movie.", options:["had watched","watched","watches","has watched"], answer:0},
    {question:"They ___ to school.", options:["had gone","went","go","have gone"], answer:0},
    {question:"He ___ the car.", options:["had repaired","repaired","repairs","has repaired"], answer:0},
    {question:"I ___ him before.", options:["had met","met","meet","have met"], answer:0},
    {question:"We ___ breakfast.", options:["had eaten","ate","eat","have eaten"], answer:0},
    {question:"The rain ___ before we arrived.", options:["had stopped","stopped","stops","has stopped"], answer:0},
    {question:"She ___ the letter.", options:["had written","wrote","writes","has written"], answer:0},
    {question:"They ___ the house.", options:["had cleaned","cleaned","cleans","has cleaned"], answer:0},
    {question:"He ___ sick.", options:["had felt","felt","feels","has felt"], answer:0},
    {question:"We ___ the film before.", options:["had seen","saw","see","have seen"], answer:0},
    {question:"She ___ the cake.", options:["had made","made","makes","has made"], answer:0},
    {question:"They ___ together.", options:["had worked","worked","work","have worked"], answer:0},
    {question:"We ___ the news.", options:["had heard","heard","hear","have heard"], answer:0},
    {question:"He ___ football.", options:["had played","played","plays","has played"], answer:0},
    {question:"I ___ to the store.", options:["had gone","went","go","have gone"], answer:0}
  ]
};

/* ========================================================
   8) PAST PERFECT CONTINUOUS – 20 QUESTIONS
======================================================== */
window.quizData["past-perfect-continuous"] = {
  title: "Bài tập – Past Perfect Continuous",
  desc: "Chọn đáp án đúng cho thì Quá khứ hoàn thành tiếp diễn.",
  questions: [
    {question:"She ___ for 2 hours.", options:["had been studying","studied","studies","was studying"], answer:0},
    {question:"They ___ since morning.", options:["had been working","worked","work","were working"], answer:0},
    {question:"He ___ all day.", options:["had been running","ran","runs","was running"], answer:0},
    {question:"I ___ English for 5 years.", options:["had been learning","learned","learn","was learning"], answer:0},
    {question:"It ___ raining.", options:["had been","was","is","had been raining"], answer:3},
    {question:"We ___ this project.", options:["had been doing","did","do","were doing"], answer:0},
    {question:"She ___ too much coffee.", options:["had been drinking","drinks","drank","was drinking"], answer:0},
    {question:"They ___ TV for 3 hours.", options:["had been watching","watched","watch","were watching"], answer:0},
    {question:"I ___ for you.", options:["had been waiting","waited","wait","was waiting"], answer:0},
    {question:"He ___ football.", options:["had been playing","played","plays","was playing"], answer:0},
    {question:"We ___ for 20 minutes.", options:["had been walking","walked","walk","were walking"], answer:0},
    {question:"She ___ to lose weight.", options:["had been trying","tried","tries","was trying"], answer:0},
    {question:"They ___ harder.", options:["had been working","worked","work","were working"], answer:0},
    {question:"He ___ well.", options:["had been sleeping","slept","sleeps","was sleeping"], answer:0},
    {question:"I ___ this game.", options:["had been playing","played","play","was playing"], answer:0},
    {question:"We ___ too long!", options:["had been waiting","waited","wait","were waiting"], answer:0},
    {question:"She ___ emails all day.", options:["had been writing","wrote","writes","was writing"], answer:0},
    {question:"They ___ around the city.", options:["had been walking","walk","walked","were walking"], answer:0},
    {question:"He ___ since morning.", options:["had been studying","studied","studies","was studying"], answer:0},
    {question:"I ___ tired lately.", options:["had been feeling","felt","feel","was feeling"], answer:0}
  ]
};

/* ========================================================
   9) FUTURE SIMPLE – 20 QUESTIONS
======================================================== */
window.quizData["future-simple"] = {
  title: "Bài tập – Future Simple",
  desc: "Chọn đáp án đúng cho thì Tương lai đơn.",
  questions: [
    {question:"I ___ you tomorrow.", options:["will see","see","am seeing","saw"], answer:0},
    {question:"She ___ soon.", options:["will arrive","arrives","is arriving","arrived"], answer:0},
    {question:"They ___ later.", options:["will call","call","called","are calling"], answer:0},
    {question:"He ___ the exam.", options:["will pass","passes","passed","is passing"], answer:0},
    {question:"We ___ a new house.", options:["will buy","buy","buys","bought"], answer:0},
    {question:"It ___ rain.", options:["will","rains","is raining","rain"], answer:0},
    {question:"She ___ your homework.", options:["will help","helps","helped","is helping"], answer:0},
    {question:"They ___ to Da Nang.", options:["will travel","travel","traveled","are traveling"], answer:0},
    {question:"He ___ coffee.", options:["will drink","drinks","drank","is drinking"], answer:0},
    {question:"I ___ home soon.", options:["will go","go","went","am going"], answer:0},
    {question:"We ___ together.", options:["will work","work","worked","are working"], answer:0},
    {question:"She ___ the truth.", options:["will know","knows","knew","is knowing"], answer:0},
    {question:"They ___ dinner.", options:["will cook","cook","cooked","are cooking"], answer:0},
    {question:"He ___ the door.", options:["will open","opens","opened","is opening"], answer:0},
    {question:"I ___ you.", options:["will help","help","helped","am helping"], answer:0},
    {question:"We ___ money.", options:["will save","save","saved","are saving"], answer:0},
    {question:"She ___ the cat.", options:["will feed","feeds","fed","is feeding"], answer:0},
    {question:"They ___ the news.", options:["will hear","hear","heard","are hearing"], answer:0},
    {question:"He ___ faster.", options:["will run","runs","ran","is running"], answer:0},
    {question:"I ___ the lesson.", options:["will learn","learn","learned","am learning"], answer:0}
  ]
};

/* ========================================================
   10) NEAR FUTURE (BE GOING TO) – 20 QUESTIONS
======================================================== */
window.quizData["near-future"] = {
  title: "Bài tập – Near Future (Be going to)",
  desc: "Chọn đáp án đúng cho cấu trúc Be going to.",
  questions: [
    {question:"I ___ eat.", options:["am going to","is going to","are going to","going to"], answer:0},
    {question:"She ___ travel.", options:["is going to","are going to","am going to","is go to"], answer:0},
    {question:"They ___ move.", options:["are going to","is going to","am going to","going"], answer:0},
    {question:"He ___ study.", options:["is going to","are going to","am going to","is study"], answer:0},
    {question:"We ___ help you.", options:["are going to","is going to","am going to","going"], answer:0},
    {question:"I ___ buy a new phone.", options:["am going to","is going to","are going to","will"], answer:0},
    {question:"She ___ cook dinner.", options:["is going to","are going to","am going to","going"], answer:0},
    {question:"They ___ visit us.", options:["are going to","is going to","am going to","visit"], answer:0},
    {question:"He ___ watch TV.", options:["is going to","are going to","am going to","watch"], answer:0},
    {question:"We ___ travel soon.", options:["are going to","is going to","am going to","travel"], answer:0},
    {question:"I ___ read that book.", options:["am going to","is going to","are going to","read"], answer:0},
    {question:"She ___ play tennis.", options:["is going to","are going to","am going to","play"], answer:0},
    {question:"They ___ move house.", options:["are going to","is going to","am going to","move"], answer:0},
    {question:"He ___ study harder.", options:["is going to","are going to","am going to","study"], answer:0},
    {question:"We ___ buy a car.", options:["are going to","is going to","am going to","buy"], answer:0},
    {question:"I ___ exercise.", options:["am going to","is going to","are going to","exercise"], answer:0},
    {question:"She ___ change jobs.", options:["is going to","are going to","am going to","change"], answer:0},
    {question:"They ___ adopt a pet.", options:["are going to","is going to","am going to","adopt"], answer:0},
    {question:"He ___ call her.", options:["is going to","are going to","am going to","call"], answer:0},
    {question:"We ___ start soon.", options:["are going to","is going to","am going to","start"], answer:0}
  ]
};

/* ========================================================
   11) FUTURE CONTINUOUS – 20 QUESTIONS
======================================================== */
window.quizData["future-continuous"] = {
  title: "Bài tập – Future Continuous",
  desc: "Chọn đáp án đúng cho thì Tương lai tiếp diễn.",
  questions: [
    {question:"I ___ at 8 PM.", options:["will be working","work","worked","am working"], answer:0},
    {question:"She ___ soon.", options:["will be arriving","arrives","arrived","is arriving"], answer:0},
    {question:"They ___ dinner.", options:["will be having","have","had","are having"], answer:0},
    {question:"He ___ TV.", options:["will be watching","watches","watched","is watching"], answer:0},
    {question:"We ___ together.", options:["will be working","work","worked","are working"], answer:0},
    {question:"I ___ at home.", options:["will be staying","stay","stayed","am staying"], answer:0},
    {question:"She ___ a book.", options:["will be reading","reads","read","is reading"], answer:0},
    {question:"They ___ soon.", options:["will be traveling","travel","traveled","are traveling"], answer:0},
    {question:"He ___ coffee.", options:["will be drinking","drinks","drank","is drinking"], answer:0},
    {question:"We ___ dinner.", options:["will be cooking","cook","cooked","are cooking"], answer:0},
    {question:"I ___ tomorrow.", options:["will be studying","study","studied","am studying"], answer:0},
    {question:"She ___ online.", options:["will be working","works","worked","is working"], answer:0},
    {question:"They ___ football.", options:["will be playing","play","played","are playing"], answer:0},
    {question:"He ___ outside.", options:["will be sitting","sits","sat","is sitting"], answer:0},
    {question:"We ___ songs.", options:["will be singing","sing","sang","are singing"], answer:0},
    {question:"I ___ him.", options:["will be meeting","meet","met","am meeting"], answer:0},
    {question:"She ___ French.", options:["will be speaking","speaks","spoke","is speaking"], answer:0},
    {question:"They ___ home.", options:["will be going","go","went","are going"], answer:0},
    {question:"He ___ faster.", options:["will be running","runs","ran","is running"], answer:0},
    {question:"We ___ later.", options:["will be calling","call","called","are calling"], answer:0}
  ]
};

/* ========================================================
   12) FUTURE PERFECT – 20 QUESTIONS
======================================================== */
window.quizData["future-perfect"] = {
  title: "Bài tập – Future Perfect",
  desc: "Chọn đáp án đúng cho thì Tương lai hoàn thành.",
  questions: [
    {question:"I ___ by 8 PM.", options:["will have finished","finish","finished","am finishing"], answer:0},
    {question:"She ___ soon.", options:["will have arrived","arrives","arrived","is arriving"], answer:0},
    {question:"They ___ dinner.", options:["will have cooked","cook","cooked","are cooking"], answer:0},
    {question:"He ___ the book.", options:["will have read","reads","read","is reading"], answer:0},
    {question:"We ___ together.", options:["will have worked","work","worked","are working"], answer:0},
    {question:"I ___ homework.", options:["will have done","do","did","am doing"], answer:0},
    {question:"She ___ the car.", options:["will have repaired","repairs","repaired","is repairing"], answer:0},
    {question:"They ___ the house.", options:["will have cleaned","clean","cleaned","are cleaning"], answer:0},
    {question:"He ___ breakfast.", options:["will have eaten","eats","ate","is eating"], answer:0},
    {question:"We ___ home.", options:["will have gone","go","went","are going"], answer:0},
    {question:"I ___ him.", options:["will have met","meet","met","am meeting"], answer:0},
    {question:"She ___ the lesson.", options:["will have learned","learns","learned","is learning"], answer:0},
    {question:"They ___ enough money.", options:["will have saved","save","saved","are saving"], answer:0},
    {question:"He ___ to school.", options:["will have gone","goes","went","is going"], answer:0},
    {question:"We ___ this movie.", options:["will have watched","watch","watched","are watching"], answer:0},
    {question:"I ___ the test.", options:["will have passed","pass","passed","am passing"], answer:0},
    {question:"She ___ English.", options:["will have studied","studies","studied","is studying"], answer:0},
    {question:"They ___ the truth.", options:["will have known","know","knew","are knowing"], answer:0},
    {question:"He ___ the song.", options:["will have sung","sings","sang","is singing"], answer:0},
    {question:"We ___ the project.", options:["will have completed","complete","completed","are completing"], answer:0}
  ]
};

/* ========================================================
   END OF FILE
======================================================== */
