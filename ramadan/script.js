// الحالة العامة
let currentLang = "ar";
let currentCategory = null;


///////////////////////
////باقي الاموجيات////
//////////////////////


// البيانات
const categories = {
  eid_fitr: {
    name: { ar: "عيد الفطر", en: "Eid Fitr" },
    messages: {
      ar: ["كل عام وأنتم بخير 🌙", "عيد سعيد ❤️",
       "عيد فطر سعيد عليكم، تقبل الله منا ومنكم الصيام والقيام ❤️",
       "أسأل الله أن يعيده علينا وأنتم بأفضل حال 🌸",
        "عيد سعيد مليء بالفرح والسعادة 🎉",
        "تقبل الله طاعتكم وصالح أعمالكم 🌙",
        "عيد مليء بالفرح والسرور لكم ولأحبابكم ❤️",
        "أسأل الله أن يعيده علينا أعوام عديدة ونحن بأفضل حال 🌸",
        "أتمنى لكم عيد مليء بالمفاجآت السعيدة والذكريات الجميلة 🎉",
      ],
      en: ["Eid Mubarak 🌙", "Happy Eid ❤️",
        "Happy Eid! May Allah accept our fasting and prayers ❤️",
        "May Allah bless us with another Eid while keeping you in the best condition 🌸",
        "Wishing you a joyful and blessed Eid 🎉",
        "May Allah accept your good deeds and prayers 🌙",
        "Wishing you a joyous Eid with your loved ones ❤️",
        "May Allah grant us many more Eids in good health and happiness 🌸",
        "Wishing you an Eid full of happy surprises and beautiful memories 🎉",


      ],
    },
  
  },
  eid_adha: {
    name: { ar: "عيد الأضحى", en: "Eid Adha" },
    messages: {
     ar: [
  "عيد أضحى مبارك 🐑",
  "تقبل الله طاعتكم وأعاد عليكم الأيام بالخير 🌙",
  "كل عام وأنتم بخير، عيد سعيد مليء بالفرح ❤️",
  "أعاده الله عليكم باليمن والبركات 🌸",
  "عيد مبارك على الجميع مليء بالسعادة والسرور 🎉"
],
en: [
  "Blessed Eid Al Adha 🐑",
  "May Allah accept your deeds and bring you goodness 🌙",
  "Happy Eid! Wishing you joy and happiness ❤️",
  "May Allah bring this Eid with blessings and prosperity 🌸",
  "Blessed Eid to everyone full of happiness and joy 🎉"
]
    }
  },
  marriage: {
    name: { ar: "زواج", en: "Marriage" },
    messages: {
      ar: [
  "ألف مبروك الزواج ❤️ نتمنى لكما حياة مليئة بالسعادة والحب والبركة 🌸",
  "بارك الله لكما وبارك عليكما وجمع بينكما في خير 🤵👰",
  "نتمنى لكما بداية رائعة ومليئة بالفرح والنجاح في حياتكما الزوجية 💖",
  "أتمنى أن يكون بيتكما مليئاً بالمحبة والضحك والذكريات الجميلة 🏡✨",
  "عيد الحب الزوجي يبدأ اليوم! ألف مبروك وأيام مليئة بالسعادة لكم ❤️",
  "أسأل الله أن يجعل حياتكما مليئة بالحب والاحترام والتفاهم 🌹",
  "أجمل التهاني للعروسين، نتمنى لكم مستقبلاً مشرقاً ومليئاً بالفرح 🎉"
],
en: [
  "Congratulations on your wedding ❤️ Wishing you a life full of happiness, love, and blessings 🌸",
  "May Allah bless you and bring you together in goodness 🤵👰",
  "Wishing you a wonderful start filled with joy and success in your married life 💖",
  "May your home be full of love, laughter, and beautiful memories 🏡✨",
  "Your journey of love begins today! Congrats and happy days ahead ❤️",
  "May Allah fill your life with love, respect, and understanding 🌹",
  "Best wishes to the newlyweds, wishing you a bright and joyful future 🎉"
]
    }
  },
  graduation: {
    name: { ar: "تخرج", en: "Graduation" },
    messages: {
    ar: [
  "مبروك التخرج 🎓! يوم تعبك وجهدك وصل اليوم للنجاح 🌟",
  "ألف مبروك! فلتبدأ رحلة جديدة مليئة بالفرص والمغامرات 💼✨",
  "تهانينا على إنجازك الكبير! الآن أنت جاهز لمواجهة العالم وتحقيق أحلامك 🌸",
  "اليوم يومك! استمتع بكل لحظة واحتفل بما حققته ❤️",
  "مبروك التخرج! فلتكن بداية لمستقبل مشرق ومليء بالنجاحات 🌟🎉",
  "أحسنت! تعبك ومثابرتك أثمروا اليوم. استعد لمغامرات جديدة 💪",
  "اليوم أنت نجم التخرج ⭐️ فلتستمتع باللحظة ولتخطط لمستقبل أفضل",
  "تهانينا لك! اجعل النجاح عادة والحلم هدف دائم 🎯",
  "مبروك لك على هذا الإنجاز! تذكر أن كل خطوة صغيرة تقود لنجاح كبير 🌹",
  "اليوم تتوج سنوات من الجد والاجتهاد، فلتحتفل بحب وسعادة مع من تحب 💖"
],
en: [
  "Congrats on your graduation 🎓! Your hard work and effort paid off 🌟",
  "Congratulations! A new journey full of opportunities and adventures begins 💼✨",
  "Well done on your big achievement! You are now ready to face the world and chase your dreams 🌸",
  "Today is your day! Enjoy every moment and celebrate what you accomplished ❤️",
  "Congrats! May this be the start of a bright future filled with successes 🌟🎉",
  "Awesome job! Your effort and persistence have paid off. Get ready for new adventures 💪",
  "Today you are the star of graduation ⭐️ Enjoy the moment and plan for a better future",
  "Congratulations! Make success a habit and your dreams a constant goal 🎯",
  "Well done on this milestone! Remember that every small step leads to great success 🌹",
  "Today crowns years of hard work, so celebrate with love and joy with your loved ones 💖"
]
    }
  },

Birthday: {
    name: { ar: "عيد ميلاد", en: "Birthday" },
    messages: {
      ar: [
  "عيد ميلاد سعيد 🎂! أتمنى لك يوم مليء بالضحك والسعادة 🌟",
  "كل سنة وأنت طيب! اليوم يومك استمتع بكل لحظة 🎉",
  "عيد ميلاد ممتع مليء بالمفاجآت والهدايا ❤️",
  "أتمنى لك سنة جديدة مليئة بالنجاحات والفرح 🌸",
  "اليوم نحتفل بك! ابتسم وعيش اللحظة 😎",
  "عيد ميلاد سعيد! خلي كل يوم جديد أحلى من اللي قبله 🎁",
  "أتمنى لك سنة مليانة مغامرات وتجارب حلوة 💫",
  "عيد ميلاد سعيد! كل أحلامك تتحقق السنة دي ✨",
  "احتفل باليوم ده مع الناس اللي بتحبهم ❤️🎉",
  "كل سنة وأنت أسعد، وأقوى، وأجمل 😎🌟",
  "أتمنى لك يوم مليء بالضحك، الحلوى، والذكريات الجميلة 🎂",
  "عيد ميلاد سعيد! خلي الابتسامة دايمًا على وشك 😁",
  "سنة جديدة سعيدة! كل لحظة فيها فرصة جديدة 🌈",
  "كل سنة وأنت مليان طاقة وحماس وحب ❤️💥",
  "عيد ميلاد سعيد! خلي اليوم مليان فرحة وضحك 🎊"
],
en: [
  "Happy Birthday 🎂! Wishing you a day full of laughter and joy 🌟",
  "Happy B-Day! Today is all about you, enjoy every moment 🎉",
  "Have a fun birthday full of surprises and gifts ❤️",
  "Wishing you a new year full of success and happiness 🌸",
  "Today we celebrate YOU! Smile and live the moment 😎",
  "Happy Birthday! Make every new day better than the last 🎁",
  "Wishing you a year full of adventures and amazing experiences 💫",
  "Happy Birthday! May all your dreams come true this year ✨",
  "Celebrate today with the people you love ❤️🎉",
  "Wishing you a year full of happiness, strength, and awesomeness 😎🌟",
  "May your day be filled with laughter, cake, and beautiful memories 🎂",
  "Happy Birthday! Keep that smile on your face always 😁",
  "A happy new year of life! Every moment is a new chance 🌈",
  "Wishing you full of energy, fun, and love this year ❤️💥",
  "Happy Birthday! Make today full of joy and laughter 🎊"
]
    }
      
    
},

mother_day: {
  name: { ar: "عيد الأم", en: "Mother's Day" },
  messages: {
    ar: [
      "كل سنة وأنتِ طيبة يا أمي ❤️ أنتِ أجمل هدية في حياتي 🌸",
      "عيد أم سعيد! شكراً لكل الحب والرعاية اللي بتقدميها لي 🌹",
      "أمي الحبيبة، أتمنى لك يوم مليان سعادة وضحك 💖",
      "أمي يا أغلى ما عندي، كل يوم وانتِ بخير 🌟",
      "شكراً على كل التضحيات والحب، أحبك أمي ❤️",
      "عيد أم سعيد! أنتِ الشمس اللي بتنور حياتي ☀️",
      "كل لحظة معاكِ أمي مليانة حب ودفء 🌸",
      "أمي الحنونة، أتمنى لك أيام مليانة فرح وسعادة 💐",
      "أمي، أنتِ البطل الحقيقي في حياتي 💪❤️",
      "عيد أم سعيد! دايمًا تكوني مصدر سعادتي وابتسامتي 😘"
    ],
    en: [
      "Happy Mother's Day ❤️ You are the most beautiful gift in my life 🌸",
      "Happy Mother's Day! Thanks for all the love and care you give me 🌹",
      "Dear Mom, wishing you a day full of happiness and laughter 💖",
      "Mom, my dearest, may every day be as wonderful as you 🌟",
      "Thank you for all your sacrifices and love, I love you Mom ❤️",
      "Happy Mother's Day! You are the sun that lights up my life ☀️",
      "Every moment with you, Mom, is full of love and warmth 🌸",
      "Dear Mom, wishing you days full of joy and happiness 💐",
      "Mom, you are the real hero in my life 💪❤️",
      "Happy Mother's Day! Always be my source of joy and smile 😘"
    ]
  }
},
valentines_day: {
  name: { ar: "عيد الحب", en: "Valentine's Day" },
  messages: {
    ar: [
      "عيد حب سعيد! ❤️ أحبك كل يوم أكتر 🌹",
      "لك كل الحب والدفء في هذا اليوم المميز 💖",
      "أنت السبب في ابتسامتي اليوم وكل يوم 😘",
      "عيد حب سعيد! دايمًا نعيش الحب والسعادة مع بعض 🌸",
      "أرسل لك كل قلبي اليوم، وكل يوم 💌",
      "كل لحظة معاك مليانة فرح وحب 💕",
      "عيد حب سعيد! خلي اليوم مليان ضحك وذكريات جميلة 🌟",
      "أنت النور في حياتي، عيد حب سعيد 💖",
      "اليوم نحتفل بالحب اللي يجمعنا ❤️",
      "أحبك أكثر مما الكلمات تعبر 💘"
    ],
    ///////////////here/////////////
    en: [
      "Happy Valentine's Day! ❤️ I love you more every day 💘",
      "Wishing you all the love and warmth on this special day ✨❤️",
      "You are the reason for my smile today and every day 💞",
      "Happy Valentine's! Always living love and happiness together 💌",
      "Sending you all my heart today and every day 🎀",
      "Every moment with you is full of joy and love 💕🎊",
      "Happy Valentine's! Make today full of laughter and memories 🌞",
      "You are the light in my life, Happy Valentine's 🎉🎆",
      "Today we celebrate the love that unites us 🎉",
      "I love you more than words can express 🎈"
    ]
  }
},

new_year: {
  name: { ar: "رأس السنة", en: "New Year" },
  messages: {
    ar: [
      "سنة جديدة سعيدة🌞 أتمنى لك أيام مليانة نجاح وفرح 😁",
      "كل عام وأنت بخير! خلي السنة دي أحلى من اللي فاتت 🙌",
      "سنة جديدة = فرص جديدة! اغتنم كل لحظة 🎊",
      "أتمنى لك سنة مليانة مغامرات وتجارب جديدة ",
      "سنة سعيدة! خلي كل يوم فيها مليان ابتسامات وضحك 😁",
      "وداعًا للسنة القديمة، وأهلًا بالسنة الجديدة 🎆",
      "أتمنى لك كل الحب والسعادة في السنة الجديدة 💕",
      "سنة جديدة سعيدة! خليك متفائل وعيش كل لحظة 🎊",
      "كل بداية جديدة فيها فرصة لتغيير حياتك للأفضل 🌞",
      "سنة جديدة سعيدة! خلّي أحلامك تتحقق السنة دي ✨"
    ],
    en: [
      "Happy New Year! 🌞 Wishing you days full of success and joy 🎊",
      "Happy New Year! Make this year better than the last 🙌",
      "New year = new opportunities! Make the most of every moment ❤️",
      "Wishing you a year full of adventures and new experiences ",
      "Happy New Year! Fill every day with smiles and laughter 😁",
      "Goodbye old year, hello new year 🎆",
      "Wishing you all love and happiness in the new year 💕",
      "Happy New Year! Stay positive and enjoy every moment 🎉",
      "Every new beginning is a chance to change your life for the better 🌞",
      "Happy New Year! Make your dreams come true this year ✨"
    ]
  }
}

}

/////////////////////////////
// بداية التشغيل
/////////////////////////////
function init() {
  renderCategories();
}
init();

/////////////////////////////
// القائمة الجانبية
/////////////////////////////
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("show");
}

/////////////////////////////
// عرض الأقسام
/////////////////////////////
function renderCategories(filteredKeys = null) {
  const list = filteredKeys || Object.keys(categories);
  const ul = document.getElementById("categoryList");

  ul.innerHTML = "";

  list.forEach(key => {
    const li = document.createElement("li");
    li.textContent = categories[key].name[currentLang];
    li.onclick = () => loadCategory(key);
    ul.appendChild(li);
  });
}

/////////////////////////////
// تحميل قسم
/////////////////////////////
function loadCategory(key) {
  currentCategory = key;

  const messages = categories[key].messages[currentLang];
  renderMessages(messages);

  toggleMenu();
}

/////////////////////////////
// عرض الرسائل
/////////////////////////////
function renderMessages(list) {
  const container = document.getElementById("messages");
  container.innerHTML = "";

  list.forEach(msg => {
    const card = document.createElement("div");
    card.className = "card";

    const text = document.createElement("p");
    text.textContent = msg;

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    // زر النسخ
    const copyBtn = document.createElement("button");
    copyBtn.className = "btn";
    copyBtn.textContent = currentLang === "ar" ? "نسخ" : "Copy";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(msg);
      alert(currentLang === "ar" ? "تم النسخ ✅" : "Copied ✅");
    };

    // زر المشاركة
    const shareBtn = document.createElement("button");
    shareBtn.className = "btn";
    shareBtn.textContent = currentLang === "ar" ? "مشاركة" : "Share";
    shareBtn.onclick = () => shareWhatsApp(msg);

    btnGroup.appendChild(copyBtn);
    btnGroup.appendChild(shareBtn);

    card.appendChild(text);
    card.appendChild(btnGroup);

    container.appendChild(card);
  });
}

/////////////////////////////
// واتساب
/////////////////////////////
function shareWhatsApp(msg) {
  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/////////////////////////////
// اللغة
/////////////////////////////
function toggleLang() {
  currentLang = currentLang === "ar" ? "en" : "ar";

  // تغيير زر اللغة
  document.getElementById("langBtn").textContent =
    currentLang === "ar" ? "EN" : "AR";

  // تغيير اتجاه الصفحة
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  // تغيير placeholder
  document.getElementById("search").placeholder =
    currentLang === "ar" ? "ابحث عن مناسبة..." : "Search for event...";

  renderCategories();

  if (currentCategory) {
    renderMessages(categories[currentCategory].messages[currentLang]);
  }
}

/////////////////////////////
// البحث
/////////////////////////////
function searchCategories() {
  const value = document.getElementById("search").value.toLowerCase();

  const filtered = Object.keys(categories).filter(key =>
    categories[key].name[currentLang].toLowerCase().includes(value)
  );

  renderCategories(filtered);
}

/////////////////////////////
// Dark Mode
/////////////////////////////
const toggleDarkBtn = document.getElementById("toggleDark");

const themes = ["light-theme", "dark-theme"];
let currentThemeIndex = 0;

// تحميل الثيم المحفوظ
const savedTheme = localStorage.getItem("theme");

if (savedTheme && themes.includes(savedTheme)) {
  document.body.classList.remove(...themes);
  document.body.classList.add(savedTheme);
  currentThemeIndex = themes.indexOf(savedTheme);
} else {
  document.body.classList.add(themes[0]);
}

// زر تغيير الثيم
if (toggleDarkBtn) {
  toggleDarkBtn.addEventListener("click", () => {
    document.body.classList.remove(...themes);

    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    const newTheme = themes[currentThemeIndex];
    document.body.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  });
}