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

window.quizData["present-simple"] = [
  {question:"She ___ to school every day.", options:["go","goes","is going","going"], answer:1, explain:"He/She/It + V(s/es)"},
  {question:"I usually ___ breakfast at 7.", options:["have","has","am having","having"], answer:0, explain:"I/You/We/They + V"},
  {question:"The sun ___ in the east.", options:["rise","rises","is rising","rose"], answer:1, explain:"Sự thật hiển nhiên"},
  {question:"He ___ coffee, he prefers tea.", options:["don’t drink","doesn’t drink","isn’t drinking","not drink"], answer:1, explain:"He → doesn’t + V"},
  {question:"We ___ English every Monday.", options:["study","studies","are study","studying"], answer:0, explain:"Thói quen"},
  {question:"Water ___ at 100°C.", options:["boil","boils","is boiling","boiled"], answer:1, explain:"Scientific fact"},
  {question:"Dogs ___ meat.", options:["eat","eats","are eating","eated"], answer:0, explain:"Habit"},
  {question:"My father ___ TV in the evening.", options:["watch","watches","is watching","watching"], answer:1, explain:"He/She/It + V(s/es)"},
  {question:"Anna ___ her homework after school.", options:["do","does","is doing","doing"], answer:1, explain:"does + V"},
  {question:"He rarely ___ breakfast.", options:["eat","eats","is eat","eating"], answer:1, explain:"Trạng từ tần suất + Present Simple"},
  {question:"My parents ___ in a big company.", options:["works","working","work","are work"], answer:2, explain:"Plural → work"},
  {question:"The museum ___ at 8.", options:["open","opens","is opening","opened"], answer:1, explain:"Schedule"},
  {question:"My brother never ___ late.", options:["is","are","be","being"], answer:0, explain:"To be + adj"},
  {question:"We ___ a car, so we take the bus.", options:["don’t have","doesn’t have","aren’t have","not have"], answer:0, explain:"don’t + have"},
  {question:"The Earth ___ around the Sun.", options:["move","moves","is moving","moved"], answer:1, explain:"Fact"},
  {question:"Lisa ___ French very well.", options:["speak","speaks","is speak","speaking"], answer:1, explain:"He/She/It + V(s/es)"},
  {question:"My friends often ___ to the cinema.", options:["go","goes","going","are go"], answer:0, explain:"Habit"},
  {question:"His job ___ a lot of traveling.", options:["require","requires","is requiring","required"], answer:1, explain:"Singular subject"},
  {question:"They ___ near my house.", options:["live","lives","are living","living"], answer:0, explain:"Permanent situation"},
  {question:"Tom ___ well with his team.", options:["gets along","get along","is get along","get alongs"], answer:0, explain:"Phrasal verb"}
];

window.quizData["present-continuous"] = [
  {
    question: "She ___ TV right now.",
    options: ["watches", "is watching", "watch", "watching"],
    answer: 1,
    explain: "Dấu hiệu: right now → Present Continuous"
  },
  {
    question: "They ___ dinner at the moment.",
    options: ["eat", "are eating", "eating", "ate"],
    answer: 1,
    explain: "At the moment → đang diễn ra"
  },
  {
    question: "Look! The dog ___ the ball.",
    options: ["chases", "is chasing", "chasing", "chased"],
    answer: 1,
    explain: "Look! → hành động đang diễn ra"
  },
  {
    question: "I ___ to music right now.",
    options: ["listen", "listens", "am listening", "listening"],
    answer: 2,
    explain: "am/is/are + V-ing"
  },
  {
    question: "The kids ___ outside.",
    options: ["are playing", "play", "played", "playing"],
    answer: 0,
    explain: "Hành động đang diễn ra"
  },
  {
    question: "She can't talk. She ___ a shower.",
    options: ["takes", "is taking", "take", "taking"],
    answer: 1,
    explain: "Đang trong quá trình"
  },
  {
    question: "We ___ for the bus right now.",
    options: ["wait", "are waiting", "waiting", "waited"],
    answer: 1,
    explain: "right now → Present Continuous"
  },
  {
    question: "He ___ his homework at the moment.",
    options: ["do", "is doing", "does", "doing"],
    answer: 1,
    explain: "am/is/are + V-ing"
  },
  {
    question: "Listen! Someone ___.",
    options: ["sing", "sings", "is singing", "singing"],
    answer: 2,
    explain: "Listen! → hành động đang diễn ra"
  },
  {
    question: "My mom ___ dinner now.",
    options: ["cooks", "is cooking", "cook", "cooking"],
    answer: 1,
    explain: "now → Present Continuous"
  },
  {
    question: "The students ___ an English lesson.",
    options: ["are having", "have", "had", "having"],
    answer: 0,
    explain: "are + V-ing"
  },
  {
    question: "Don't disturb him. He ___.",
    options: ["is studying", "studies", "study", "studying"],
    answer: 0,
    explain: "Đang trong quá trình"
  },
  {
    question: "Look! The train ___.",
    options: ["comes", "is coming", "come", "coming"],
    answer: 1,
    explain: "Look! → Present Continuous"
  },
  {
    question: "The baby ___ now.",
    options: ["sleep", "is sleeping", "sleeps", "sleeping"],
    answer: 1,
    explain: "now → Present Continuous"
  },
  {
    question: "They ___ a new project this week.",
    options: ["are working on", "work on", "worked on", "working on"],
    answer: 0,
    explain: "this week → ongoing temporary action"
  },
  {
    question: "She ___ her keys again.",
    options: ["is losing", "loses", "lost", "lose"],
    answer: 0,
    explain: "Ám chỉ hành động xảy ra nhiều lần gần đây"
  },
  {
    question: "I ___ for my friend. He’s late.",
    options: ["am waiting", "wait", "waiting", "waited"],
    answer: 0,
    explain: "am + V-ing"
  },
  {
    question: "Mark ___ for the exam these days.",
    options: ["is studying", "studies", "studied", "study"],
    answer: 0,
    explain: "Thời điểm mang tính tạm thời"
  },
  {
    question: "We ___ a good time.",
    options: ["are having", "have", "having", "had"],
    answer: 0,
    explain: "are + V-ing"
  },
  {
    question: "The weather ___ worse and worse.",
    options: ["is getting", "gets", "got", "getting"],
    answer: 0,
    explain: "Thay đổi dần dần → Present Continuous"
  }
];

window.quizData["present-perfect"] = [
  {
    question: "I ___ my homework already.",
    options: ["did", "have done", "do", "has done"],
    answer: 1,
    explain: "have/has + V3"
  },
  {
    question: "She ___ in London since 2010.",
    options: ["lived", "has lived", "lives", "is living"],
    answer: 1,
    explain: "since + mốc thời gian → Present Perfect"
  },
  {
    question: "They ___ their project yet.",
    options: ["haven’t finished", "didn’t finish", "don’t finish", "haven’t finish"],
    answer: 0,
    explain: "have/has + not + V3"
  },
  {
    question: "He ___ that movie three times.",
    options: ["has watched", "watched", "watches", "is watching"],
    answer: 0,
    explain: "Kinh nghiệm → Present Perfect"
  },
  {
    question: "We ___ this restaurant before.",
    options: ["has tried", "tried", "have tried", "try"],
    answer: 2,
    explain: "have/has + V3"
  },
  {
    question: "She ___ her keys!",
    options: ["has lost", "lost", "loses", "is losing"],
    answer: 0,
    explain: "Hành động vừa xảy ra → Present Perfect"
  },
  {
    question: "I ___ never ___ to Japan.",
    options: ["have…been", "has…been", "have…went", "has…gone"],
    answer: 0,
    explain: "never + have/has + V3"
  },
  {
    question: "The children ___ lunch yet.",
    options: ["haven’t eaten", "didn't eat", "don’t eat", "haven’t ate"],
    answer: 0,
    explain: "yet → câu phủ định Present Perfect"
  },
  {
    question: "He ___ his leg, so he can’t walk.",
    options: ["has broken", "broke", "breaks", "is breaking"],
    answer: 0,
    explain: "Ảnh hưởng đến hiện tại"
  },
  {
    question: "We ___ here for two hours.",
    options: ["waited", "have waited", "are waiting", "wait"],
    answer: 1,
    explain: "for + khoảng thời gian → Present Perfect"
  },
  {
    question: "She ___ many countries.",
    options: ["has visited", "visited", "visits", "is visiting"],
    answer: 0,
    explain: "Kinh nghiệm → Present Perfect"
  },
  {
    question: "They ___ the car since last month.",
    options: ["have had", "had", "has had", "are having"],
    answer: 0,
    explain: "have + had (V3)"
  },
  {
    question: "My father ___ a new job.",
    options: ["has found", "found", "finds", "is finding"],
    answer: 0,
    explain: "have/has + V3"
  },
  {
    question: "I ___ my phone.",
    options: ["have lost", "lost", "am losing", "lose"],
    answer: 0,
    explain: "Hành động xảy ra gần đây"
  },
  {
    question: "She ___ her homework just now.",
    options: ["has finished", "finished", "finish", "is finishing"],
    answer: 0,
    explain: "just → Present Perfect"
  },
  {
    question: "We ___ each other for 10 years.",
    options: ["have known", "knew", "know", "are knowing"],
    answer: 0,
    explain: "State verb + for → Present Perfect"
  },
  {
    question: "He ___ breakfast yet.",
    options: ["hasn’t had", "didn’t have", "doesn’t have", "hasn’t have"],
    answer: 0,
    explain: "yet → phủ định"
  },
  {
    question: "I ___ already ___ this book.",
    options: ["have…read", "has…read", "have…reading", "read…have"],
    answer: 0,
    explain: "have/has + V3"
  },
  {
    question: "They ___ just ___.",
    options: ["have…arrived", "has…arrived", "arrived…have", "are arriving"],
    answer: 0,
    explain: "just → Present Perfect"
  },
  {
    question: "The teacher ___ the test papers.",
    options: ["has collected", "collected", "collects", "is collecting"],
    answer: 0,
    explain: "have/has + V3"
  }
];

window.quizData["present-perfect-continuous"] = [
  {
    question: "She ___ for three hours.",
    options: ["has been studying", "has studied", "is studying", "studies"],
    answer: 0,
    explain: "have/has been + V-ing"
  },
  {
    question: "I ___ this book since morning.",
    options: ["have been reading", "read", "am reading", "have read"],
    answer: 0,
    explain: "since + thời điểm → PPC"
  },
  {
    question: "They ___ here for a long time.",
    options: ["have been waiting", "waited", "wait", "are waiting"],
    answer: 0,
    explain: "for + khoảng thời gian"
  },
  {
    question: "He ___ TV all day.",
    options: ["has been watching", "watched", "watches", "is watching"],
    answer: 0,
    explain: "Hành động kéo dài tới hiện tại"
  },
  {
    question: "We ___ English for two years.",
    options: ["have been learning", "learned", "learn", "are learning"],
    answer: 0,
    explain: "for + duration"
  },
  {
    question: "It ___ raining since morning.",
    options: ["has been", "has been raining", "is raining", "rained"],
    answer: 1,
    explain: "has been + V-ing"
  },
  {
    question: "She is tired because she ___.",
    options: ["has been running", "ran", "runs", "is running"],
    answer: 0,
    explain: "Ảnh hưởng đến hiện tại → PPC"
  },
  {
    question: "My mom ___ dinner for 30 minutes.",
    options: ["has been cooking", "cooks", "cooked", "is cooking"],
    answer: 0,
    explain: "have/has been + V-ing"
  },
  {
    question: "They ___ the project all week.",
    options: ["have been working on", "work on", "worked on", "are working on"],
    answer: 0,
    explain: "all week → PPC"
  },
  {
    question: "He ___ to fix his bike.",
    options: ["has been trying", "tried", "tries", "is trying"],
    answer: 0,
    explain: "Đang cố gắng suốt thời gian"
  },
  {
    question: "We ___ for you since 2 PM.",
    options: ["have been waiting", "waited", "wait", "are waiting"],
    answer: 0,
    explain: "since + time → PPC"
  },
  {
    question: "The kids ___ too much noise.",
    options: ["have been making", "made", "make", "are making"],
    answer: 0,
    explain: "Hành vi lặp lại gần đây → PPC"
  },
  {
    question: "She ___ well lately.",
    options: ["hasn’t been sleeping", "didn’t sleep", "doesn’t sleep", "is not sleeping"],
    answer: 0,
    explain: "Negative PPC"
  },
  {
    question: "I ___ to improve my English.",
    options: ["have been trying", "tried", "try", "am trying"],
    answer: 0,
    explain: "have been + V-ing"
  },
  {
    question: "They ___ for a new apartment.",
    options: ["have been looking", "looked", "look", "are looking"],
    answer: 0,
    explain: "Ongoing search"
  },
  {
    question: "He ___ too much recently.",
    options: ["has been smoking", "smoked", "smokes", "is smoking"],
    answer: 0,
    explain: "recently → PPC"
  },
  {
    question: "We ___ to contact him all morning.",
    options: ["have been trying", "tried", "try", "are trying"],
    answer: 0,
    explain: "all morning → PPC"
  },
  {
    question: "She ___ for a new job since January.",
    options: ["has been looking", "looked", "looks", "is looking"],
    answer: 0,
    explain: "since + month → PPC"
  },
  {
    question: "They are hot because they ___.",
    options: ["have been running", "run", "ran", "are running"],
    answer: 0,
    explain: "Kết quả hiện tại"
  },
  {
    question: "I ___ this computer all day.",
    options: ["have been using", "used", "use", "am using"],
    answer: 0,
    explain: "have been + V-ing"
  }
];

window.quizData["past-simple"] = [
  {
    question: "She ___ to school yesterday.",
    options: ["goes", "went", "go", "gone"],
    answer: 1,
    explain: "yesterday → dùng V2 → went"
  },
  {
    question: "They ___ dinner at 7 PM.",
    options: ["eat", "ate", "eaten", "eating"],
    answer: 1,
    explain: "V2 của eat = ate"
  },
  {
    question: "I ___ a new phone last week.",
    options: ["buy", "bought", "buys", "buyed"],
    answer: 1,
    explain: "last week → quá khứ đơn"
  },
  {
    question: "He ___ a movie last night.",
    options: ["watched", "watch", "watches", "watching"],
    answer: 0,
    explain: "V-ed cho động từ thường"
  },
  {
    question: "We ___ in Hanoi in 2010.",
    options: ["lived", "live", "lives", "living"],
    answer: 0,
    explain: "mốc thời gian quá khứ → V-ed"
  },
  {
    question: "She ___ English when she was 10.",
    options: ["learned", "learn", "learning", "learns"],
    answer: 0,
    explain: "was 10 → quá khứ"
  },
  {
    question: "They ___ the project yesterday afternoon.",
    options: ["finished", "finish", "finishes", "finishing"],
    answer: 0,
    explain: "yesterday afternoon → V-ed"
  },
  {
    question: "I ___ him two days ago.",
    options: ["meet", "met", "meets", "meeting"],
    answer: 1,
    explain: "V2 của meet = met"
  },
  {
    question: "The dog ___ loudly last night.",
    options: ["barked", "barks", "bark", "is barking"],
    answer: 0,
    explain: "last night → past simple"
  },
  {
    question: "My mom ___ a cake yesterday.",
    options: ["made", "makes", "make", "making"],
    answer: 0,
    explain: "V2 của make = made"
  },
  {
    question: "He ___ home early yesterday.",
    options: ["came", "comes", "come", "coming"],
    answer: 0,
    explain: "V2 của come = came"
  },
  {
    question: "They ___ soccer last Sunday.",
    options: ["played", "play", "plays", "playing"],
    answer: 0,
    explain: "Last Sunday → V-ed"
  },
  {
    question: "The company ___ a new product in 2020.",
    options: ["launched", "launch", "launches", "launching"],
    answer: 0,
    explain: "V-ed"
  },
  {
    question: "He ___ his wallet this morning.",
    options: ["lost", "lose", "loses", "losing"],
    answer: 0,
    explain: "V2 của lose = lost"
  },
  {
    question: "I ___ very tired yesterday.",
    options: ["was", "were", "am", "be"],
    answer: 0,
    explain: "I → was"
  },
  {
    question: "They ___ at home last night.",
    options: ["were", "was", "are", "be"],
    answer: 0,
    explain: "They → were"
  },
  {
    question: "She ___ me a letter last month.",
    options: ["sent", "send", "sends", "sending"],
    answer: 0,
    explain: "V2 của send = sent"
  },
  {
    question: "We ___ the test last Friday.",
    options: ["took", "take", "taken", "taking"],
    answer: 0,
    explain: "V2 của take = took"
  },
  {
    question: "He ___ a car when he was 20.",
    options: ["bought", "buy", "buys", "buying"],
    answer: 0,
    explain: "V2 của buy = bought"
  },
  {
    question: "They ___ the house five years ago.",
    options: ["built", "build", "builds", "building"],
    answer: 0,
    explain: "V2 của build = built"
  }
];

window.quizData["past-continuous"] = [
  {
    question: "I ___ dinner when she called.",
    options: ["was cooking", "am cooking", "cooked", "cook"],
    answer: 0,
    explain: "Hành động đang diễn ra → was/were + V-ing"
  },
  {
    question: "They ___ TV at 8 PM last night.",
    options: ["were watching", "watched", "watch", "are watching"],
    answer: 0,
    explain: "Thời điểm cụ thể trong quá khứ → were + V-ing"
  },
  {
    question: "She ___ when it started to rain.",
    options: ["was running", "ran", "runs", "is running"],
    answer: 0,
    explain: "Đang chạy thì trời mưa"
  },
  {
    question: "We ___ to music at that moment.",
    options: ["were listening", "listened", "listen", "are listening"],
    answer: 0,
    explain: "at that moment → Past Continuous"
  },
  {
    question: "He ___ a book when I saw him.",
    options: ["was reading", "read", "reads", "is reading"],
    answer: 0,
    explain: "Hành động đang diễn ra → was + V-ing"
  },
  {
    question: "They ___ football when it got dark.",
    options: ["were playing", "played", "play", "are playing"],
    answer: 0,
    explain: "Đang chơi thì trời tối"
  },
  {
    question: "She ___ for the bus when I met her.",
    options: ["was waiting", "waited", "wait", "is waiting"],
    answer: 0,
    explain: "was/were + V-ing"
  },
  {
    question: "The students ___ an exam at 10 AM.",
    options: ["were taking", "took", "take", "are taking"],
    answer: 0,
    explain: "at 10 AM (quá khứ) → Past Continuous"
  },
  {
    question: "I ___ my homework when he arrived.",
    options: ["was doing", "did", "do", "am doing"],
    answer: 0,
    explain: "Hành động đang diễn ra → Past Continuous"
  },
  {
    question: "They ___ lunch when I came.",
    options: ["were having", "had", "have", "are having"],
    answer: 0,
    explain: "were + V-ing"
  },
  {
    question: "The birds ___ in the trees.",
    options: ["were singing", "sang", "sing", "are singing"],
    answer: 0,
    explain: "Hành động kéo dài lúc đó"
  },
  {
    question: "He ___ home when I saw him.",
    options: ["was going", "went", "goes", "is going"],
    answer: 0,
    explain: "Hành động đang diễn ra tại 1 thời điểm"
  },
  {
    question: "She ___ dinner while I was watching TV.",
    options: ["was cooking", "cooked", "cook", "is cooking"],
    answer: 0,
    explain: "while + Past Continuous"
  },
  {
    question: "We ___ outside when the storm started.",
    options: ["were sitting", "sat", "sit", "are sitting"],
    answer: 0,
    explain: "Hành động bị gián đoạn bởi hành động khác"
  },
  {
    question: "He ___ when I called him.",
    options: ["was sleeping", "slept", "sleep", "is sleeping"],
    answer: 0,
    explain: "was/were + V-ing"
  },
  {
    question: "The kids ___ in the yard.",
    options: ["were playing", "played", "play", "are playing"],
    answer: 0,
    explain: "Hành động diễn ra tại thời điểm quá khứ"
  },
  {
    question: "I ___ to fix the computer.",
    options: ["was trying", "tried", "try", "am trying"],
    answer: 0,
    explain: "Quá khứ liên tục"
  },
  {
    question: "She ___ to me when the phone rang.",
    options: ["was talking", "talked", "talk", "is talking"],
    answer: 0,
    explain: "was + V-ing"
  },
  {
    question: "They ___ the house when it started raining.",
    options: ["were cleaning", "cleaned", "clean", "are cleaning"],
    answer: 0,
    explain: "Hành động đang diễn ra → Past Continuous"
  },
  {
    question: "We ___ a great time at the party.",
    options: ["were having", "had", "have", "are having"],
    answer: 0,
    explain: "were + V-ing"
  }
];

window.quizData["past-perfect"] = [
  {
    question: "She ___ already ___ the report when the boss arrived.",
    options: ["had…finished", "has…finished", "finished", "was finishing"],
    answer: 0,
    explain: "Hành động xảy ra trước quá khứ → had + V3"
  },
  {
    question: "When I arrived, they ___ home.",
    options: ["had left", "left", "leave", "were leaving"],
    answer: 0,
    explain: "Hành động rời đi xảy ra trước"
  },
  {
    question: "He ___ the letter before I asked.",
    options: ["had written", "wrote", "writes", "was writing"],
    answer: 0,
    explain: "had + V3"
  },
  {
    question: "We ___ dinner before she came.",
    options: ["had eaten", "ate", "eat", "were eating"],
    answer: 0,
    explain: "Hành động ăn xảy ra trước"
  },
  {
    question: "They ___ the movie before.",
    options: ["had seen", "saw", "were seeing", "see"],
    answer: 0,
    explain: "Kinh nghiệm trước 1 thời điểm quá khứ"
  },
  {
    question: "She ___ her homework before 8 PM.",
    options: ["had finished", "finished", "finishes", "was finishing"],
    answer: 0,
    explain: "before + mốc quá khứ → Past Perfect"
  },
  {
    question: "He didn’t want to go because he ___ there before.",
    options: ["had been", "was", "is", "were"],
    answer: 0,
    explain: "had + been"
  },
  {
    question: "After they ___ the house, the rain started.",
    options: ["had left", "left", "leave", "were leaving"],
    answer: 0,
    explain: "after + Past Perfect"
  },
  {
    question: "She ___ a mistake before she realized it.",
    options: ["had made", "made", "makes", "was making"],
    answer: 0,
    explain: "Hành động làm lỗi xảy ra trước"
  },
  {
    question: "I ___ the song before you played it.",
    options: ["had heard", "heard", "hear", "was hearing"],
    answer: 0,
    explain: "had + V3"
  },
  {
    question: "They ___ the new manager before the meeting.",
    options: ["had met", "met", "meet", "were meeting"],
    answer: 0,
    explain: "Hành động gặp xảy ra trước"
  },
  {
    question: "The movie ___ when we arrived.",
    options: ["had started", "started", "starts", "was starting"],
    answer: 0,
    explain: "Hành động bắt đầu → trước arrival"
  },
  {
    question: "She ___ the news before I called.",
    options: ["had heard", "heard", "hears", "was hearing"],
    answer: 0,
    explain: "had + heard"
  },
  {
    question: "He ___ tired because he had run a lot.",
    options: ["was", "had been", "is", "were"],
    answer: 1,
    explain: "Trạng thái kéo dài trước thời điểm trong quá khứ"
  },
  {
    question: "We ___ the room before the guests came.",
    options: ["had cleaned", "cleaned", "clean", "were cleaning"],
    answer: 0,
    explain: "had + V3"
  },
  {
    question: "After she ___ breakfast, she left for work.",
    options: ["had eaten", "ate", "eats", "was eating"],
    answer: 0,
    explain: "after + Past Perfect"
  },
  {
    question: "They ___ the game because they had practiced hard.",
    options: ["won", "had won", "win", "were winning"],
    answer: 0,
    explain: "had practiced → nguyên nhân"
  },
  {
    question: "The bus ___ before we got to the station.",
    options: ["had left", "left", "leave", "was leaving"],
    answer: 0,
    explain: "Hành động rời đi xảy ra trước"
  },
  {
    question: "I ___ never ___ sushi before that day.",
    options: ["had…tried", "have…tried", "tried", "was trying"],
    answer: 0,
    explain: "never + had + V3"
  },
  {
    question: "She ___ him before he became famous.",
    options: ["had known", "knew", "knows", "was knowing"],
    answer: 0,
    explain: "Quan hệ kéo dài trước một thời điểm quá khứ"
  }
];

window.quizData["past-perfect-continuous"] = [
  {
    question: "She was tired because she ___ all day.",
    options: ["had been working", "worked", "was working", "has worked"],
    answer: 0,
    explain: "Nguyên nhân trước quá khứ → had been + V-ing"
  },
  {
    question: "They ___ for two hours before the bus arrived.",
    options: ["had been waiting", "waited", "were waiting", "wait"],
    answer: 0,
    explain: "Hành động kéo dài → PPC"
  },
  {
    question: "He ___ for a new job before he found one.",
    options: ["had been looking", "looked", "was looking", "looks"],
    answer: 0,
    explain: "had been + V-ing"
  },
  {
    question: "We ___ for 30 minutes before it started to rain.",
    options: ["had been walking", "walked", "were walking", "walk"],
    answer: 0,
    explain: "Trước khi trời mưa → PPC"
  },
  {
    question: "She ___ English for years before she moved to the UK.",
    options: ["had been studying", "studied", "was studying", "studies"],
    answer: 0,
    explain: "Hành động liên tục trước quá khứ"
  },
  {
    question: "They ___ in the sun, so they felt hot.",
    options: ["had been sitting", "sat", "were sitting", "sit"],
    answer: 0,
    explain: "Kết quả xuất hiện → PPC"
  },
  {
    question: "He ___ too much before the doctor told him to stop.",
    options: ["had been smoking", "smoked", "was smoking", "smokes"],
    answer: 0,
    explain: "Hành vi kéo dài"
  },
  {
    question: "The children ___ all morning before lunch.",
    options: ["had been playing", "played", "were playing", "play"],
    answer: 0,
    explain: "all morning → PPC"
  },
  {
    question: "I ___ to find my keys for an hour before I found them.",
    options: ["had been trying", "tried", "was trying", "try"],
    answer: 0,
    explain: "Hành động kéo dài trước"
  },
  {
    question: "She ___ for three months before she got promoted.",
    options: ["had been working", "worked", "was working", "works"],
    answer: 0,
    explain: "had been + V-ing"
  },
  {
    question: "They ___ the game for hours before it ended.",
    options: ["had been playing", "played", "play", "were playing"],
    answer: 0,
    explain: "for hours → PPC"
  },
  {
    question: "We ___ for Tom for a long time before he arrived.",
    options: ["had been waiting", "waited", "were waiting", "wait"],
    answer: 0,
    explain: "Hành động kéo dài"
  },
  {
    question: "He ___ the guitar before he became famous.",
    options: ["had been practicing", "practiced", "was practicing", "practices"],
    answer: 0,
    explain: "Kéo dài → PPC"
  },
  {
    question: "The workers ___ for months before the project was completed.",
    options: ["had been working", "worked", "were working", "work"],
    answer: 0,
    explain: "had been + gerund"
  },
  {
    question: "She ___ her hair before the guests came.",
    options: ["had been drying", "dried", "was drying", "dries"],
    answer: 0,
    explain: "Trước khi khách tới"
  },
  {
    question: "They ___ the house for two years before they sold it.",
    options: ["had been repairing", "repaired", "were repairing", "repair"],
    answer: 0,
    explain: "Hành động kéo dài → PPC"
  },
  {
    question: "I ___ too long before he answered.",
    options: ["had been waiting", "waited", "was waiting", "wait"],
    answer: 0,
    explain: "had been + V-ing"
  },
  {
    question: "She ___ on her essay before she submitted it.",
    options: ["had been working", "worked", "was working", "works"],
    answer: 0,
    explain: "Hành động kéo dài trước quá khứ"
  },
  {
    question: "The kids ___ for hours, so they wanted to rest.",
    options: ["had been running", "ran", "were running", "run"],
    answer: 0,
    explain: "Kết quả → mệt → PPC"
  },
  {
    question: "We ___ about an hour before the lights came back.",
    options: ["had been waiting", "waited", "were waiting", "wait"],
    answer: 0,
    explain: "PPC nhấn mạnh thời gian chờ"
  }
];

window.quizData["future-simple"] = [
  {
    question: "I think it ___ tomorrow.",
    options: ["will rain", "rains", "is raining", "rain"],
    answer: 0,
    explain: "Dự đoán tương lai → will + V"
  },
  {
    question: "She ___ help you with your homework.",
    options: ["will", "is", "does", "going to"],
    answer: 0,
    explain: "Lời hứa → will"
  },
  {
    question: "They ___ arrive next week.",
    options: ["will", "are", "were", "did"],
    answer: 0,
    explain: "will + V (ngầm hiểu V)"
  },
  {
    question: "We ___ the meeting at 10 AM.",
    options: ["will start", "start", "are starting", "started"],
    answer: 0,
    explain: "Future plan (neutral) → will"
  },
  {
    question: "He ___ probably come late.",
    options: ["will", "comes", "is coming", "coming"],
    answer: 0,
    explain: "probably → dấu hiệu của will"
  },
  {
    question: "I ___ call you later.",
    options: ["will", "am", "do", "may"],
    answer: 0,
    explain: "Quyết định ngay lúc nói"
  },
  {
    question: "The train ___ arrive on time.",
    options: ["will", "is", "does", "has"],
    answer: 0,
    explain: "Dự đoán tương lai"
  },
  {
    question: "She thinks he ___ pass the exam.",
    options: ["will", "is", "does", "passes"],
    answer: 0,
    explain: "He thinks → dự đoán"
  },
  {
    question: "I promise I ___ help you.",
    options: ["will", "am", "do", "can"],
    answer: 0,
    explain: "Lời hứa → will"
  },
  {
    question: "They ___ travel to Japan next year.",
    options: ["will", "travel", "are traveling", "have traveled"],
    answer: 0,
    explain: "next year → will"
  },
  {
    question: "He ___ finish the report soon.",
    options: ["will", "is", "does", "finish"],
    answer: 0,
    explain: "will + V"
  },
  {
    question: "We ___ see you again.",
    options: ["will", "see", "are seeing", "saw"],
    answer: 0,
    explain: "will + V"
  },
  {
    question: "I think she ___ be happy.",
    options: ["will", "is", "was", "be"],
    answer: 0,
    explain: "Dự đoán → will"
  },
  {
    question: "They ___ move to a new house.",
    options: ["will", "are", "were", "move"],
    answer: 0,
    explain: "Kế hoạch không chính thức → will"
  },
  {
    question: "He ___ probably win the match.",
    options: ["will", "wins", "is winning", "won"],
    answer: 0,
    explain: "probably → dấu hiệu của will"
  },
  {
    question: "The weather ___ be hot tomorrow.",
    options: ["will", "is", "was", "be"],
    answer: 0,
    explain: "Dự báo thời tiết → will"
  },
  {
    question: "I ___ go with you.",
    options: ["will", "am", "go", "going"],
    answer: 0,
    explain: "will + V"
  },
  {
    question: "She ___ finish the task later.",
    options: ["will", "finished", "finishes", "finish"],
    answer: 0,
    explain: "will + V"
  },
  {
    question: "They ___ open a new shop soon.",
    options: ["will", "open", "are opening", "opened"],
    answer: 0,
    explain: "Dự đoán tương lai"
  },
  {
    question: "He ___ help us with the project.",
    options: ["will", "helps", "is helping", "help"],
    answer: 0,
    explain: "will + V"
  }
];

window.quizData["future-continuous"] = [
  {
    question: "This time tomorrow, I ___ to Hanoi.",
    options: ["will be traveling", "travel", "am traveling", "will travel"],
    answer: 0,
    explain: "Thời điểm cụ thể tương lai → will be + V-ing"
  },
  {
    question: "At 8 PM tonight, they ___ dinner.",
    options: ["will be having", "have", "had", "will have"],
    answer: 0,
    explain: "will be + V-ing"
  },
  {
    question: "She ___ for her exam next week.",
    options: ["will be studying", "studies", "studied", "study"],
    answer: 0,
    explain: "Hành động đang diễn ra trong tương lai"
  },
  {
    question: "Don't call me at 9 AM. I ___ a meeting.",
    options: ["will be having", "will have", "have", "am having"],
    answer: 0,
    explain: "9 AM là thời điểm xác định → Future Continuous"
  },
  {
    question: "They ___ in Paris this time next year.",
    options: ["will be living", "live", "lived", "are living"],
    answer: 0,
    explain: "this time next year → will be + V-ing"
  },
  {
    question: "He ___ when you arrive.",
    options: ["will be sleeping", "sleeps", "slept", "sleep"],
    answer: 0,
    explain: "Hành động đang diễn ra trước tại tương lai"
  },
  {
    question: "We ___ the new system tomorrow morning.",
    options: ["will be testing", "test", "tested", "will test"],
    answer: 0,
    explain: "Tương lai có thời điểm cụ thể"
  },
  {
    question: "She ___ the piano during the party.",
    options: ["will be playing", "plays", "played", "will play"],
    answer: 0,
    explain: "Hành động đang diễn ra"
  },
  {
    question: "I ___ in the office all afternoon.",
    options: ["will be working", "work", "worked", "working"],
    answer: 0,
    explain: "all afternoon → kéo dài → Future Continuous"
  },
  {
    question: "They ___ for the competition next week.",
    options: ["will be preparing", "prepare", "prepared", "will prepare"],
    answer: 0,
    explain: "will be + V-ing"
  },
  {
    question: "The kids ___ with their cousins tomorrow.",
    options: ["will be playing", "play", "played", "playing"],
    answer: 0,
    explain: "Hành động đang diễn ra (tương lai)"
  },
  {
    question: "He ___ the presentation while you’re away.",
    options: ["will be working on", "works on", "worked on", "work on"],
    answer: 0,
    explain: "will be + V-ing"
  },
  {
    question: "At 10 PM, I ___ on my project.",
    options: ["will be working", "work", "worked", "working"],
    answer: 0,
    explain: "10 PM → future continuous"
  },
  {
    question: "She ___ to the dentist this afternoon.",
    options: ["will be going", "goes", "went", "go"],
    answer: 0,
    explain: "Hành động theo lịch nhưng mô tả tiến trình"
  },
  {
    question: "They ___ their new house next week.",
    options: ["will be decorating", "decorate", "decorated", "decorating"],
    answer: 0,
    explain: "Thời điểm tương lai cụ thể"
  },
  {
    question: "We ___ the report when the meeting starts.",
    options: ["will be finishing", "finish", "finished", "will finish"],
    answer: 0,
    explain: "Hành động đang tiến hành tại tương lai"
  },
  {
    question: "He ___ the car when you come back.",
    options: ["will be washing", "washes", "washed", "wash"],
    answer: 0,
    explain: "will be + V-ing"
  },
  {
    question: "She ___ at the hotel this weekend.",
    options: ["will be staying", "stays", "stayed", "stay"],
    answer: 0,
    explain: "Tương lai có thời gian xác định"
  },
  {
    question: "They ___ for the exam all day tomorrow.",
    options: ["will be studying", "study", "studied", "will study"],
    answer: 0,
    explain: "all day tomorrow → Future Continuous"
  },
  {
    question: "I ___ home when you call later.",
    options: ["will be driving", "drive", "drove", "driving"],
    answer: 0,
    explain: "Suy đoán tiến trình"
  }
];

window.quizData["future-perfect"] = [
  {
    question: "By this time tomorrow, I ___ the report.",
    options: ["will have finished", "finish", "finished", "will finish"],
    answer: 0,
    explain: "will have + V3 → hoàn thành trước tương lai"
  },
  {
    question: "She ___ the project by next week.",
    options: ["will have completed", "completed", "completes", "will complete"],
    answer: 0,
    explain: "by + time → Future Perfect"
  },
  {
    question: "They ___ the house before winter comes.",
    options: ["will have built", "build", "built", "will build"],
    answer: 0,
    explain: "Hoàn thành trước một mốc tương lai"
  },
  {
    question: "He ___ all the exercises by tonight.",
    options: ["will have done", "does", "did", "will do"],
    answer: 0,
    explain: "will have + V3"
  },
  {
    question: "We ___ the meeting before you arrive.",
    options: ["will have started", "started", "start", "will start"],
    answer: 0,
    explain: "before + hành động khác ở tương lai → F.P."
  },
  {
    question: "By next month, she ___ driving lessons.",
    options: ["will have taken", "takes", "took", "take"],
    answer: 0,
    explain: "will have + V3"
  },
  {
    question: "I ___ this book by tomorrow.",
    options: ["will have read", "read", "reads", "will read"],
    answer: 0,
    explain: "Hoàn thành trước ngày mai"
  },
  {
    question: "They ___ the bridge by 2026.",
    options: ["will have built", "built", "will build", "build"],
    answer: 0,
    explain: "Năm tương lai rõ ràng → Future Perfect"
  },
  {
    question: "She ___ the TV series by the time I visit her.",
    options: ["will have watched", "watched", "watches", "watch"],
    answer: 0,
    explain: "by the time + Future Perfect"
  },
  {
    question: "We ___ enough money to buy a house next year.",
    options: ["will have saved", "save", "saved", "will save"],
    answer: 0,
    explain: "will have + V3"
  },
  {
    question: "He ___ the task by the deadline.",
    options: ["will have finished", "finished", "finishes", "finish"],
    answer: 0,
    explain: "before deadline → F.P."
  },
  {
    question: "By next year, I ___ here for 10 years.",
    options: ["will have lived", "lived", "live", "live"],
    answer: 0,
    explain: "will have + V3"
  },
  {
    question: "The students ___ the test before the bell rings.",
    options: ["will have completed", "completed", "complete", "will complete"],
    answer: 0,
    explain: "Hoàn thành trước tương lai"
  },
  {
    question: "She ___ all her work before 5 PM.",
    options: ["will have done", "did", "does", "will do"],
    answer: 0,
    explain: "will have + V3"
  },
  {
    question: "They ___ enough food for the trip by tomorrow.",
    options: ["will have prepared", "prepared", "prepare", "preparing"],
    answer: 0,
    explain: "will have + V3"
  },
  {
    question: "By the end of this month, we ___ all the lessons.",
    options: ["will have learned", "learn", "learned", "will learn"],
    answer: 0,
    explain: "by the end of… → Future Perfect"
  },
  {
    question: "He ___ the car before summer starts.",
    options: ["will have fixed", "fixed", "fixes", "will fix"],
    answer: 0,
    explain: "fix → fixed (V3)"
  },
  {
    question: "She ___ cooking by the time the guests arrive.",
    options: ["will have finished", "finished", "finishes", "finish"],
    answer: 0,
    explain: "by the time + Future Perfect"
  },
  {
    question: "I ___ the movie by the time you come home.",
    options: ["will have watched", "watched", "watch", "watching"],
    answer: 0,
    explain: "will have + V3"
  },
  {
    question: "They ___ all the tasks before the manager checks.",
    options: ["will have completed", "completed", "complete", "will complete"],
    answer: 0,
    explain: "Hoàn thành trước hành động khác trong tương lai"
  }
];

window.quizData["future-perfect-continuous"] = [
  {
    question: "By next month, I ___ here for 5 years.",
    options: ["will have been working", "worked", "work", "will work"],
    answer: 0,
    explain: "will have been + V-ing → kéo dài đến tương lai"
  },
  {
    question: "By noon, they ___ for 4 hours.",
    options: ["will have been traveling", "travel", "traveled", "will travel"],
    answer: 0,
    explain: "for + khoảng thời gian → FPC"
  },
  {
    question: "She ___ English for 3 years by this summer.",
    options: ["will have been studying", "studies", "studied", "is studying"],
    answer: 0,
    explain: "Hành động liên tục đến tương lai"
  },
  {
    question: "They ___ the project for months by December.",
    options: ["will have been working on", "worked on", "work on", "are working on"],
    answer: 0,
    explain: "will have been + V-ing"
  },
  {
    question: "By tonight, he ___ for 10 hours.",
    options: ["will have been driving", "drives", "drove", "will drive"],
    answer: 0,
    explain: "Thời lượng kéo dài đến tương lai"
  },
  {
    question: "We ___ this game for two hours by the time you arrive.",
    options: ["will have been playing", "played", "play", "are playing"],
    answer: 0,
    explain: "by the time + FPC"
  },
  {
    question: "She ___ for the test all day by the evening.",
    options: ["will have been preparing", "prepared", "prepares", "will prepare"],
    answer: 0,
    explain: "all day → hành động kéo dài"
  },
  {
    question: "He ___ for a new job for a long time by next year.",
    options: ["will have been looking", "looked", "looks", "is looking"],
    answer: 0,
    explain: "Thời lượng kéo dài đến tương lai"
  },
  {
    question: "By next week, they ___ in the new office for a month.",
    options: ["will have been working", "worked", "work", "are working"],
    answer: 0,
    explain: "will have been + V-ing"
  },
  {
    question: "She ___ too much by the end of the day.",
    options: ["will have been talking", "talks", "talked", "is talking"],
    answer: 0,
    explain: "Hành động kéo dài"
  },
  {
    question: "By Friday, I ___ for a solution for two weeks.",
    options: ["will have been searching", "searched", "search", "am searching"],
    answer: 0,
    explain: "for + duration"
  },
  {
    question: "He ___ for hours before the doctor sees him.",
    options: ["will have been waiting", "waited", "waits", "is waiting"],
    answer: 0,
    explain: "before + FPC"
  },
  {
    question: "By the time she arrives, we ___ here for 30 minutes.",
    options: ["will have been waiting", "wait", "waited", "are waiting"],
    answer: 0,
    explain: "will have been + V-ing"
  },
  {
    question: "They ___ the machine for years by 2030.",
    options: ["will have been using", "used", "use", "are using"],
    answer: 0,
    explain: "kéo dài đến mốc tương lai"
  },
  {
    question: "She ___ yoga for a long time by the time you join.",
    options: ["will have been practicing", "practiced", "practices", "is practicing"],
    answer: 0,
    explain: "thể hiện hành động kéo dài"
  },
  {
    question: "We ___ for the final match for months by next June.",
    options: ["will have been training", "trained", "train", "are training"],
    answer: 0,
    explain: "will have been + V-ing"
  },
  {
    question: "He ___ up early for weeks by the end of the program.",
    options: ["will have been waking", "woke", "wakes", "is waking"],
    answer: 0,
    explain: "FPC nhấn mạnh quá trình"
  },
  {
    question: "By 10 PM, I ___ for five hours.",
    options: ["will have been studying", "studied", "study", "am studying"],
    answer: 0,
    explain: "for + time → FPC"
  },
  {
    question: "The kids ___ in the pool for hours by noon.",
    options: ["will have been swimming", "swam", "swim", "are swimming"],
    answer: 0,
    explain: "Hành động kéo dài đến mốc tương lai"
  },
  {
    question: "She ___ for the competition for a year by July.",
    options: ["will have been practicing", "practiced", "practices", "is practicing"],
    answer: 0,
    explain: "will have been + V-ing"
  }
];
