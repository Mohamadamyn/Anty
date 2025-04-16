// نقطة البداية لتطبيق أنـتـي
console.log("مرحبًا بك في تطبيق أنـتـي");

// إعدادات المستخدم الأولية
let userSettings = {
  language: "ar",
  theme: "light",
  parentalControl: true,
  ageGroup: "all"
};

// تحميل الإعدادات من التخزين المحلي إذا وجدت
if (localStorage.getItem("userSettings")) {
  userSettings = JSON.parse(localStorage.getItem("userSettings"));
  console.log("تم تحميل الإعدادات من التخزين المحلي.");
}

// حفظ الإعدادات
function saveSettings() {
  localStorage.setItem("userSettings", JSON.stringify(userSettings));
  console.log("تم حفظ الإعدادات.");
}

// دالة ترحيب
function greetUser(name = "المستخدم") {
  console.log(`أهلًا ${name}! يسعدنا انضمامك إلى تطبيق أنـتـي.`);
}

// دالة تسجيل دخول وهمية
function fakeLogin(email, password) {
  if (email && password) {
    console.log("تم تسجيل الدخول بنجاح!");
    return true;
  } else {
    console.log("الرجاء إدخال البريد الإلكتروني وكلمة المرور.");
    return false;
  }
}

// دالة لتغيير اللغة
function changeLanguage(lang) {
  const supportedLanguages = ["ar", "en", "fr"];
  if (supportedLanguages.includes(lang)) {
    userSettings.language = lang;
    console.log(`تم تغيير اللغة إلى: ${lang}`);
    saveSettings();
  } else {
    console.log("اللغة غير مدعومة.");
  }
}

// تفعيل أو إيقاف التحكم الأبوي
function toggleParentalControl() {
  userSettings.parentalControl = !userSettings.parentalControl;
  console.log(`التحكم الأبوي: ${userSettings.parentalControl ? "مفعل" : "معطل"}`);
  saveSettings();
}

// تفعيل أو إيقاف الوضع الليلي
function toggleDarkMode() {
  if (userSettings.theme === "light") {
    userSettings.theme = "dark";
    document.body.classList.add("dark-mode");
    console.log("تم تفعيل الوضع الليلي.");
  } else {
    userSettings.theme = "light";
    document.body.classList.remove("dark-mode");
    console.log("تم إيقاف الوضع الليلي.");
  }
  saveSettings();
}

// تطبيق الوضع الليلي عند التحميل إذا مفعل
if (userSettings.theme === "dark") {
  document.body.classList.add("dark-mode");
}

// تجربة الميزات
greetUser("أمينة");
fakeLogin("user@example.com", "123456");
changeLanguage("en");
toggleParentalControl();
// toggleDarkMode(); // فيك تشغلها عند الضغط على زر مثلاً