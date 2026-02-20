document.addEventListener('DOMContentLoaded', () => {
    // Analytics Tracking
    const trackArrival = () => {
        let visits = parseInt(localStorage.getItem('siteVisits') || '0');
        visits++;
        localStorage.setItem('siteVisits', visits);

        // Track Platform info
        let analytics = JSON.parse(localStorage.getItem('siteAnalytics') || '{}');
        if (!sessionStorage.getItem('platformTracked')) {
            const platform = navigator.platform;
            const ua = navigator.userAgent;
            let browser = 'Boshqa';
            if (ua.includes('Chrome')) browser = 'Chrome';
            if (ua.includes('Firefox')) browser = 'Firefox';
            if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';

            analytics['platforms'] = analytics['platforms'] || {};
            analytics['platforms'][platform] = (analytics['platforms'][platform] || 0) + 1;

            analytics['browsers'] = analytics['browsers'] || {};
            analytics['browsers'][browser] = (analytics['browsers'][browser] || 0) + 1;

            sessionStorage.setItem('platformTracked', 'true');
            localStorage.setItem('siteAnalytics', JSON.stringify(analytics));
        }
    };
    trackArrival();

    const trackClick = (type) => {
        let analytics = JSON.parse(localStorage.getItem('siteAnalytics') || '{}');
        analytics[type] = (analytics[type] || 0) + 1;
        localStorage.setItem('siteAnalytics', JSON.stringify(analytics));
    };

    // Add click tracking to buttons
    document.querySelectorAll('.open-modal').forEach(btn => {
        btn.addEventListener('click', () => trackClick('batafsil_click'));
    });
    document.querySelector('.btn-call')?.addEventListener('click', () => trackClick('call_click'));
    document.querySelector('.contact-form')?.addEventListener('submit', () => trackClick('form_submit'));


    // Translation System
    const translations = {
        uz: {
            "nav-home": "Asosiy",
            "nav-about": "Biz haqimizda",
            "nav-programs": "Dasturlar",
            "nav-teachers": "Ustozlar",
            "nav-news": "Yangiliklar",
            "nav-contact": "Aloqa",
            "nav-call": "Bog'lanish",
            "hero-subtitle": "Kelajak Maktabi",
            "hero-title": "Kelajakni <span>Biz Bilan</span> Quring",
            "hero-desc": "LUMOS SCHOOL - bu nafaqat maktab, balki istedodlar va innovatsiyalar makonidir. Sifatli ta'lim orqali yuksak cho'qqilarni zabt eting.",
            "hero-btn-1": "Batafsil ma'lumot",
            "hero-btn-2": "Hoziroq ro'yxatdan o'ting",
            "stats-grad": "O'quvchilar",
            "stats-teachers": "O'qituvchilar",
            "stats-rooms": "Barcha xonalar",
            "stats-awards": "Yutuqlarimiz",
            "about-exp": "Yillik tajriba",
            "about-subtitle": "Zamonaviy Texnologiyalar",
            "about-title": "Ma'lumotlarni Avtomatlashtirish darslari",
            "about-desc": "LUMOS SCHOOLda o'quvchilar Make va Google Sheets yordamida ma'lumotlarni avtomatlashtirishni o'rganishadi. Biz nafaqat nazariya, balki real loyihalar ustida ishlash imkonini beramiz. Ma'lumotlarni tartibli va oson boshqarishni biz bilan o'rganing.",
            "about-list-1": "Zamonaviy o'quv texnologiyalari",
            "about-list-2": "Tajribali va xalqaro o'qituvchilar",
            "about-list-3": "Keng qamrovli sport va san'at to'garaklari",
            "about-btn": "Batafsil o'qish",
            "programs-subtitle": "O'quv dasturlari",
            "programs-title": "Bizning Maxsus Yo'nalishlarimiz",
            "prog-it-title": "IT va Dasturlash",
            "prog-it-desc": "Kompyuter savodxonligidan tortib murakkab dasturlash tillarigacha o'rgatamiz.",
            "prog-science-title": "Arab Tili",
            "prog-science-desc": "Arab tilini eng tajribali ustozlardan mukammal tarzda o'rganing.",
            "prog-lang-title": "English Tili",
            "prog-lang-desc": "IELTS va kundalik muloqot uchun ingliz tilini o'rganing.",
            "common-more": "Batafsil",
            "teachers-subtitle": "Malakali jamoa",
            "teachers-title": "Bizning eng yaxshi ustozlarimiz",
            "teacher-1-role": "Matematika o'qituvchisi",
            "teacher-1-desc": "10 yillik tajribaga ega oliy toifali pedagog.",
            "teacher-2-role": "IT va Dasturlash",
            "teacher-2-desc": "Full-stack dasturchi va xalqaro sertifikatlar sohibi.",
            "teacher-3-role": "Ingliz tili (IELTS 8.5)",
            "teacher-3-desc": "O'quvchilarni xalqaro imtihonlarga tayyorlash mutaxassisi.",
            "teacher-4-role": "Arab tili ustoz",
            "teacher-4-desc": "Innovatsion metodikalar orqali fanni o'rgatuvchi tajribali ustoz.",
            "news-subtitle": "Yangiliklar",
            "news-title": "Maktabimizda nimalar bor?",
            "news-1-title": "Zamonaviy suzish havzasi (Basseyn)",
            "news-1-desc": "Maktabimizda o'quvchilar uchun barcha xavfsizlik qoidalariga javob beradigan, suv harorati doimiy nazorat qilinadigan shinam basseyn mavjud.",
            "news-1-date": "",
            "news-2-title": "Bizning maktabimizda oshxona bor",
            "news-2-desc": "Oshpazlarimiz tomonidan o'quvchilarga 3 mahal mazali ovqatlar beriladi. Nonushtaga: 3 xil buterbrod va 3 xil kashalar. Tushlikka: 3 xil suyuq ovqat va 3 xil quyuq ovqat. Poldnikka: 3 xil mazali shirinliklar.",
            "news-2-date": "",
            "news-3-date": "15-mart, 2024",
            "news-4-title": "Professional Futbol Maydoni",
            "news-4-desc": "Maktabimizda o'quvchilar uchun xalqaro standartlarga mos sun'iy qoplamali futbol maydoni mavjud.",
            "news-4-date": "",
            "news-5-title": "Zamonaviy Voleybol Maydoni",
            "news-5-desc": "O'quvchilarimiz nafaqat bilim, balki voleybol orqali jismoniy baquvvatlikka ham ega bo'lishadi.",
            "news-5-date": "",
            "news-6-title": "Karate To'garagi",
            "news-6-desc": "Bolalar uchun o'z-o'zini himoya qilish va intizomni o'rgatuvchi professional karate darslari.",
            "news-6-date": "",

            "news-more": "Davomini o'qish",
            "contact-title": "Biz bilan bog'laning",
            "contact-desc": "Savollaringiz bormi? Ma'lumot qoldiring, biz sizga tez orada qo'ng'iroq qilamiz.",
            "contact-addr": "1-filial: Samarqand darvoza, 2-filial: Chilonzor",
            "form-name": "Ismingiz",
            "form-email": "Email manzilingiz",
            "form-msg": "Xabaringiz",
            "form-btn": "Habar yuborish",
            "footer-brand-desc": "LUMOS SCHOOL - eng ilg'or metodikalar va zamonaviy ta'lim standarti asosida ish yurituvchi maktab.",
            "footer-links-1-title": "Tezkor havolalar",
            "footer-links-2-title": "Bog'lanish",
            "footer-qabul": "Qabul bo'limi",
            "footer-students": "Talabalar hayoti",
            "footer-faq": "FAQ",
            "footer-admin": "Admin Panel",
            "footer-copy": "© 2024 LUMOS SCHOOL. Barcha huquqlar himoyalangan.",
            "modal-features-title": "Asosiy yo'nalishlar:",
            "branches-subtitle": "Bizning filiallarimiz",
            "branches-title": "Toshkentning turli tumanlaridagi qulay nuqtalar",
            "branch-1-name": "Lumos Mind (Chilonzor)",
            "branch-1-addr": "Toshkent, Chilonzor tumani",
            "branch-2-name": "Lumos Mind (Samarqand Darvoza)",
            "branch-2-addr": "Toshkent, Samarqand Darvoza tumani",
            "branch-phone": "+998 95 800 58 00"
        },
        ru: {
            "nav-home": "Главная",
            "nav-about": "О нас",
            "nav-programs": "Программы",
            "nav-teachers": "Учителя",
            "nav-news": "Новости",
            "nav-contact": "Контакты",
            "nav-call": "Связаться",
            "hero-subtitle": "Школа Будущего",
            "hero-title": "Стройте будущее <span>вместе с нами</span>",
            "hero-desc": "LUMOS SCHOOL — это не просто школа, а пространство талантов и инноваций. Достигайте высот через качественное образование.",
            "hero-btn-1": "Подробнее",
            "hero-btn-2": "Зарегистрироваться сейчас",
            "stats-grad": "Ученики",
            "stats-teachers": "Учителя",
            "stats-rooms": "Все комнаты",
            "stats-awards": "Наши достижения",
            "about-exp": "Лет опыта",
            "about-subtitle": "Современные Технологии",
            "about-title": "Уроки Автоматизации Данных",
            "about-desc": "В LUMOS SCHOOL студенты учатся автоматизировать данные с помощью Make и Google Sheets. Мы предлагаем не просто теорию, но и возможность работать над реальными проектами. Научитесь управлять данными организованно и легко вместе с нами.",
            "about-list-1": "Современные технологии обучения",
            "about-list-2": "Опытные международные педагоги",
            "about-list-3": "Обширные спортивные и творческие кружки",
            "about-btn": "Узнать больше",
            "programs-subtitle": "Учебные программы",
            "programs-title": "Наши специальные направления",
            "prog-it-title": "IT и Программирование",
            "prog-it-desc": "Обучаем от компьютерной грамотности до сложных языков программирования.",
            "prog-science-title": "Арабский Язык",
            "prog-science-desc": "Изучайте арабский язык в совершенстве у самых опытных преподавателей.",
            "prog-lang-title": "Английский Язык",
            "prog-lang-desc": "Изучайте английский язык для IELTS и повседневного общения.",
            "common-more": "Подробнее",
            "teachers-subtitle": "Квалифицированная команда",
            "teachers-title": "Наши лучшие учителя",
            "teacher-1-role": "Учитель математики",
            "teacher-1-desc": "Педагог высшей категории с 10-летним стажем.",
            "teacher-2-role": "IT и Программирование",
            "teacher-2-desc": "Full-stack разработчик и обладатель международных сертификатов.",
            "teacher-3-role": "Английский язык (IELTS 8.5)",
            "teacher-3-desc": "Специалист по подготовке студентов к международным экзаменам.",
            "teacher-4-role": "Учитель арабского языка",
            "teacher-4-desc": "Опытный наставник, использующий инновационные методики.",
            "news-subtitle": "Новости",
            "news-title": "Что есть в нашей школе?",
            "news-1-title": "Современный плавательный бассейн",
            "news-1-desc": "В нашей школе открыт современный бассейн, где учащиеся могут заниматься плаванием под присмотром опытных инструкторов.",
            "news-1-date": "",
            "news-2-title": "В нашей школе есть столовая",
            "news-2-desc": "Наши повара предоставляют учащимся трехразовое вкусное питание.",
            "news-2-date": "",
            "news-3-date": "15 марта, 2024",
            "news-4-title": "Профессиональное Футбольное Поле",
            "news-4-desc": "В нашей школе есть футбольное поле с искусственным покрытием, соответствующее международным стандартам.",
            "news-4-date": "",
            "news-5-title": "Современная Волейбольная Площадка",
            "news-5-desc": "Наши ученики укрепляют здоровье и командный дух через игру в волейбол на современной площадке.",
            "news-5-date": "",
            "news-6-title": "Секция Карате",
            "news-6-desc": "Профессиональные уроки карате для детей, обучающие самообороне и дисциплине.",
            "news-6-date": "",

            "news-more": "Читать далее",
            "contact-title": "Свяжитесь с нами",
            "contact-desc": "У вас есть вопросы? Оставьте данные, и мы свяжемся с вами в ближайшее время.",
            "contact-addr": "1-й филиал: Самарканд дарвоза, 2-й филиал: Чиланзар",
            "form-name": "Ваше имя",
            "form-email": "Ваш Email",
            "form-msg": "Ваше сообщение",
            "form-btn": "Отправить сообщение",
            "footer-brand-desc": "LUMOS SCHOOL — это школа, работающая на основе передовых методик и современных образовательных стандартов.",
            "footer-links-1-title": "Быстрые ссылки",
            "footer-links-2-title": "Контакты",
            "footer-qabul": "Отдел приема",
            "footer-students": "Студенческая жизнь",
            "footer-faq": "FAQ",
            "footer-admin": "Панель администратора",
            "footer-copy": "© 2024 LUMOS SCHOOL. Все права защищены.",
            "modal-features-title": "Основные направления:",
            "branches-subtitle": "Наши филиалы",
            "branches-title": "Удобные локации в разных районах Ташкента",
            "branch-1-name": "Lumos Mind (Чилонзор)",
            "branch-1-addr": "Ташкент, Чилонзорский район",
            "branch-2-name": "Lumos Mind (Самарканд Дарвоза)",
            "branch-2-addr": "Ташкент, район Самарканд Дарвоза",
            "branch-phone": "+998 95 800 58 00"
        },
        en: {
            "nav-home": "Home",
            "nav-about": "About Us",
            "nav-programs": "Programs",
            "nav-teachers": "Teachers",
            "nav-news": "News",
            "nav-contact": "Contact",
            "nav-call": "Contact Us",
            "hero-subtitle": "School of Future",
            "hero-title": "Build Your <span>Future</span> With Us",
            "hero-desc": "LUMOS SCHOOL - is not just a school, but a place for talent and innovation. Reach the heights through quality education.",
            "hero-btn-1": "More Information",
            "hero-btn-2": "Register Now",
            "stats-grad": "Students",
            "stats-teachers": "Teachers",
            "stats-rooms": "All rooms",
            "stats-awards": "Our Achievements",
            "about-exp": "Years of experience",
            "about-subtitle": "Modern Technologies",
            "about-title": "Data Automation Lessons",
            "about-desc": "At LUMOS SCHOOL, students learn how to automate data using Make and Google Sheets. We provide the opportunity to work on real projects, not just theory. Learn to manage data organized and easily with us.",
            "about-list-1": "Modern educational technologies",
            "about-list-2": "Experienced and international teachers",
            "about-list-3": "Comprehensive sports and arts clubs",
            "about-btn": "Read More",
            "programs-subtitle": "Educational Programs",
            "programs-title": "Our Special Directions",
            "prog-it-title": "IT and Programming",
            "prog-it-desc": "We teach everything from computer literacy to complex programming languages.",
            "prog-science-title": "Arabic Language",
            "prog-science-desc": "Learn Arabic perfectly from the most experienced teachers.",
            "prog-lang-title": "English Language",
            "prog-lang-desc": "Learn English for IELTS and daily communication.",
            "common-more": "Details",
            "teachers-subtitle": "Qualified Team",
            "teachers-title": "Our Best Teachers",
            "teacher-1-role": "Math Teacher",
            "teacher-1-desc": "Higher category teacher with 10 years of experience.",
            "teacher-2-role": "IT and Programming",
            "teacher-2-desc": "Full-stack developer and holder of international certificates.",
            "teacher-3-role": "English Teacher (IELTS 8.5)",
            "teacher-3-desc": "Specialist in preparing students for international exams.",
            "teacher-4-role": "Arabic Teacher",
            "teacher-4-desc": "Experienced teacher using innovative methodologies.",
            "news-subtitle": "News",
            "news-title": "What's in our school?",
            "news-1-title": "Modern Swimming Pool",
            "news-1-desc": "Our school features a modern swimming pool that meets all safety standards with professional instructors and clean environment.",
            "news-1-date": "",
            "news-2-title": "Our school has a canteen",
            "news-2-desc": "Our chefs provide students with delicious 3-course meals.",
            "news-2-date": "",
            "news-3-title": "Innovative Library",
            "news-3-desc": "A modern and cozy library for our students, equipped with all types of literature.",
            "news-3-date": "March 15, 2024",

            "news-more": "Read more",
            "contact-title": "Contact Us",
            "contact-desc": "Do you have questions? Leave your details, and we will call you back soon.",
            "contact-addr": "1st Branch: Samarqand Darvoza, 2nd Branch: Chilonzor",
            "form-name": "Your name",
            "form-email": "Your email address",
            "form-msg": "Your message",
            "form-btn": "Send Message",
            "footer-brand-desc": "LUMOS SCHOOL - a school that operates based on advanced methodologies and modern educational standards.",
            "footer-links-1-title": "Quick Links",
            "footer-links-2-title": "Contact",
            "footer-qabul": "Admissions Office",
            "footer-students": "Student Life",
            "footer-faq": "FAQ",
            "footer-admin": "Admin Panel",
            "footer-copy": "© 2024 LUMOS SCHOOL. All rights reserved.",
            "modal-features-title": "Main Directions:",
            "branches-subtitle": "Our Branches",
            "branches-title": "Convenient locations in different districts of Tashkent",
            "branch-1-name": "Lumos Mind (Chilanzar)",
            "branch-1-addr": "Tashkent, Chilanzar district",
            "branch-2-name": "Lumos Mind (Samarqand Darvoza)",
            "branch-2-addr": "Tashkent, Samarqand Darvoza district",
            "branch-phone": "+998 95 800 58 00"
        },
    };

    const programData = {
        uz: {
            it: {
                title: "IT va Dasturlash",
                desc: "Bizning IT bo'limimizda o'quvchilar eng zamonaviy texnologiyalar va dasturlash tillarini o'rganadilar. Biz nafaqat nazariya, balki real loyihalar ustida ishlash imkonini beramiz.",
                features: ["Python dasturlash tili", "Frontend (HTML, CSS, JS)", "Mobil ilovalar yaratish", "Kiberxavfsizlik asoslari", "Sun'iy intellekt", "Grafik dizayn"]
            },
            "science": {
                title: "Arab Tili",
                desc: "Bizning arab tili kurslarimizda siz Qur'on tilini mukammal o'rganasiz. Bizda nafaqat grammatika, balki jonli muloqotga ham katta e'tibor beriladi.",
                features: ["Sarf va Nahv", "Qiroat asoslari", "Tafsir saboqlari", "Jonli muloqot", "Xattotlik san'ati", "Olimpiadalarga tayyorgarlik"]
            },
            "lang": {
                title: "English Tili",
                desc: "Global dunyoda muvaffaqiyatga erishish uchun ingliz tilini bilish juda muhim. Bizda o'rganish jarayoni interaktiv va qiziqarli usullar bilan olib boriladi.",
                features: ["IELTS (Intensive)", "Speaking Clubs", "Akademik yozuv", "Business English", "Native Speakers bilan suhbat", "Grammatika kurslari"]
            }
        },
        ru: {
            it: {
                title: "IT и Программирование",
                desc: "В нашем IT-отделе студенты изучают самые современные технологии и языки программирования. Мы предлагаем не только теорию, но и возможность работать над реальными проектами.",
                features: ["Язык программирования Python", "Frontend (HTML, CSS, JS)", "Создание мобильных приложений", "Основы кибербезопасности", "Искусственный интеллект", "Графический дизайн"]
            },
            "science": {
                title: "Арабский Язык",
                desc: "На наших курсах арабского языка вы в совершенстве изучите язык Корана. Мы уделяем большое внимание не только грамматике, но и живому общению.",
                features: ["Sarf и Nahv", "Основы Кираата", "Уроки Тафсира", "Живое общение", "Искусство каллиграфии", "Подготовка к олимпиадам"]
            },
            "lang": {
                title: "Английский Язык",
                desc: "Знание английского языка крайне важно для успеха в глобальном мире. Наш процесс обучения проходит с использованием интерактивных и увлекательных методов.",
                features: ["IELTS (Интенсив)", "Разговорные клубы", "Академическое письмо", "Business English", "Общение с носителями языка", "Курсы грамматики"]
            }
        },
        en: {
            it: {
                title: "IT and Programming",
                desc: "In our IT department, students learn the most modern technologies and programming languages. We provide the opportunity to work on real projects, not just theory.",
                features: ["Python programming language", "Frontend (HTML, CSS, JS)", "Mobile app creation", "Cybersecurity basics", "Artificial intelligence", "Graphic design"]
            },
            "science": {
                title: "Arabic Language",
                desc: "In our Arabic language courses, you will learn the language of the Quran perfectly. We focus not only on grammar but also on live communication.",
                features: ["Sarf and Nahv", "Foundation of Qira'at", "Tafsir lessons", "Live communication", "Calligraphy art", "Preparation for Olympiads"]
            },
            "lang": {
                title: "English Language",
                desc: "Knowing English is crucial for success in a global world. Our learning process is conducted using interactive and fun methods.",
                features: ["IELTS (Intensive)", "Speaking Clubs", "Academic Writing", "Business English", "Conversation with Native Speakers", "Grammar courses"]
            }
        }
    };

    const newsData = {
        uz: {
            "news-1": {
                title: "Zamonaviy suzish havzasi (Basseyn)",
                desc: "Maktabimizda o'quvchilar uchun barcha xavfsizlik qoidalariga javob beradigan, suv harorati doimiy nazorat qilinadigan (28-30°C) katta va shinam basseyn mavjud. Professional filtratsiya tizimi suvning har doim tiniq va toza bo'lishini ta'minlaydi. Tajribali murabbiylarimiz har bir bolaga suzishni noldan o'rgatishadi va sog'lig'ini mustahkamlashga yordam berishadi.",
                date: ""
            },
            "news-2": {
                title: "Bizning maktabimizda oshxona bor",
                desc: "Oshpazlarimiz tomonidan o'quvchilarga 3 mahal mazali ovqatlar beriladi. Nonushtaga: 3 xil buterbrod va 3 xil kashalar. Tushlikka: 3 xil suyuq ovqat va 3 xil quyuq ovqat. Poldnikka: 3 xil mazali shirinliklar.",
                date: ""
            },
            "news-3": {
                title: "Innovatsion kutubxona",
                desc: "Maktabimizda o'quvchilar uchun boy kitob zaxirasiga ega bo'lgan zamonaviy va shinam kutubxona xizmat ko'rsatmoqda. Bu yerda o'quvchilar ham badiiy, ham ilmiy adabiyotlar bilan tanishishlari mumkin.",
                date: "15-mart, 2024"
            },
            "news-4": {
                title: "Professional Futbol Maydoni",
                desc: "LUMOS SCHOOL hududida yuqori sifatli sun'iy qoplamali futbol maydoni barpo etilgan. Bu yerda o'quvchilar nafaqat tanaffus paytida, balki maxsus futbol to'garaklarida ham shug'ullanishadi. Maydon barcha xavfsizlik standartlariga javob beradi va kechki payt yoritish tizimi bilan ta'minlangan.",
                date: ""
            },
            "news-5": {
                title: "Zamonaviy Voleybol Maydoni",
                desc: "Voleybol — bu jamoaviy ruhni shakllantiruvchi ajoyib sport turi. Bizning voleybol maydonimiz maxush yumshoq qoplama va zamonaviy to'rlar bilan jihozlangan. Professional murabbiylarimiz o'quvchilarga o'yin texnikasini va jamoada ishlash mahoratini o'rgatishadi.",
                date: ""
            },
            "news-6": {
                title: "Karate To'garagi",
                desc: "Karate nafaqat sport, balki kuchli intizom va o'z-o'zini anglash san'atidir. Tajribali murabbiy (Qora belbog' sohibi) rahbarligida bolalar jismoniy chidamlilik, tezkorlik va o'zlarini himoya qilish sirlarini o'rganishadi. Mashg'ulotlar maxsus jihozlangan tatami zalida o'tkaziladi.",
                date: ""
            },

        },
        ru: {
            "news-1": {
                title: "Современный плавательный бассейн",
                desc: "В нашей школе открыт современный бассейн, оборудованный по мировым стандартам. Постоянный контроль температуры воды (28-30°C) и современная система очистки обеспечивают комфорт и безопасность. Наши профессиональные тренеры помогут вашему ребенку освоить технику плавания и укрепить иммунитет.",
                date: ""
            },
            "news-2": {
                title: "В нашей школе есть столовая",
                desc: "Наши повара предоставляют учащимся трехразовое вкусное питание. На завтрак: 3 вида бутербродов и 3 вида каш. На обед: 3 вида супов и 3 вида вторых блюд. На полдник: 3 вида вкусных десертов.",
                date: ""
            },
            "news-3": {
                title: "Инновационная библиотека",
                desc: "В нашей школе для учеников открыта современная и уютная библиотека с богатым книжным фондом. Здесь учащиеся могут ознакомиться как с художественной, так и с научной литературой.",
                date: "15 марта, 2024"
            },
            "news-4": {
                title: "Профессиональное Футбольное Поле",
                desc: "На территории LUMOS SCHOOL создано футбольное поле с высококачественным искусственным покрытием. Здесь ученики занимаются не только во время перемен, но и в специальных секциях по футболу. Поле отвечает всем стандартам безопасности и оснащено системой освещения.",
                date: ""
            },
            "news-5": {
                title: "Современная Волейбольная Площадка",
                desc: "Волейбол — отличный вид спорта, формирующий командный дух. Наша площадка оснащена специальным мягким покрытием и современными сетками. Тренеры обучают технике игры и навыкам командной работы.",
                date: ""
            },
            "news-6": {
                title: "Секция Карате",
                desc: "Карате — это не только спорт, но и искусство самообладания. Под руководством опытного тренера дети развивают физическую выносливость, скорость и изучают секреты самообороны. Занятия проходят в специально оборудованном зале.",
                date: ""
            },

        },
        en: {
            "news-1": {
                title: "Modern Swimming Pool",
                desc: "Our school features a high-standard swimming pool with constant temperature control (28-30°C) and an advanced water filtration system. Professional coaches provide swimming lessons for all ages, focusing on safety, health, and swimming techniques.",
                date: ""
            },
            "news-2": {
                title: "Our school has a canteen",
                desc: "Our chefs provide students with delicious 3-course meals. Breakfast: 3 types of sandwiches and 3 types of porridge. Lunch: 3 types of soups and 3 types of main dishes. Afternoon snack: 3 types of delicious desserts.",
                date: ""
            },
            "news-3": {
                title: "Innovative Library",
                desc: "A modern and cozy library with a rich collection of books is available for students in our school. Here, students can explore both fiction and scientific literature.",
                date: "March 15, 2024"
            },

        }
    };

    let currentLang = localStorage.getItem('lang') || 'uz';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.documentElement.lang = lang;
        document.documentElement.dir = 'ltr';
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    // Initialize with saved or default language
    setLanguage(currentLang);


    // Modal Management
    const modal = document.getElementById('program-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalFeatures = document.getElementById('modal-features-list');
    const modalIcon = document.querySelector('.modal-icon i');
    const closeModal = document.querySelector('.close-modal');

    document.querySelectorAll('.open-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.program-card');
            const id = card.getAttribute('data-id');
            const data = programData[currentLang][id];
            const iconClass = card.querySelector('.program-icon i').className;

            if (data) {
                modalTitle.innerText = data.title;
                modalDesc.innerText = data.desc;
                modalIcon.className = iconClass;

                modalFeatures.innerHTML = '';
                data.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.innerText = feature;
                    modalFeatures.appendChild(li);
                });

                modal.classList.add('active');
                document.body.classList.add('locked');
            }
        });
    });

    const closeProgramModal = () => {
        modal.classList.remove('active');
        document.body.classList.remove('locked');
    };

    closeModal.addEventListener('click', closeProgramModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeProgramModal();
    });

    // News Modal Management
    const newsModal = document.getElementById('news-modal');
    const newsModalTitle = document.getElementById('news-modal-title');
    const newsModalDesc = document.getElementById('news-modal-desc');
    const newsModalDate = document.getElementById('news-modal-date');
    const closeNewsModal = document.querySelector('.close-news-modal');

    document.querySelectorAll('.news-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-news-id');
            const data = newsData[currentLang][id];

            if (data) {
                newsModalTitle.innerText = data.title;
                newsModalDesc.innerText = data.desc;
                newsModalDate.innerText = data.date;

                newsModal.classList.add('active');
                document.body.classList.add('locked');
            }
        });
    });

    const closeNewsModalFunc = () => {
        newsModal.classList.remove('active');
        document.body.classList.remove('locked');
    };

    if (closeNewsModal) {
        closeNewsModal.addEventListener('click', closeNewsModalFunc);
    }

    window.addEventListener('click', (e) => {
        if (e.target === newsModal) closeNewsModalFunc();
    });


    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('input[data-i18n-placeholder="form-name"]').value;
            const email = contactForm.querySelector('input[data-i18n-placeholder="form-email"]').value;
            const message = contactForm.querySelector('textarea').value;

            // Save to localStorage for Admin Panel
            const applications = JSON.parse(localStorage.getItem('applications') || '[]');
            applications.push({
                name,
                email,
                message,
                date: new Date().toLocaleDateString(),
                status: 'Yangi'
            });
            localStorage.setItem('applications', JSON.stringify(applications));

            // Redirecting to Telegram user
            window.open(`https://t.me/abdulo_k`, '_blank');

            alert(currentLang === 'uz'
                ? 'Xabaringiz qabul qilindi! @abdulo_k Telegram profiliga yo\'naltirilmoqda.'
                : 'Ваше сообщение принято! Перенаправляем в Telegram @abdulo_k.');

            contactForm.reset();
        });
    }


    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal Animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                if (entry.target.classList.contains('counter')) {
                    startCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-up, .animate-left, .animate-right, .animate-fade, .counter').forEach(el => {
        observer.observe(el);
    });

    function startCounter(el) {
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 2000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.innerText = target + (el.innerText.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                el.innerText = Math.floor(current);
            }
        }, stepTime);
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }

    // Login Modal Logic
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLoginModal = document.querySelector('.close-login-modal');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.classList.add('active');
            document.body.classList.add('locked');
        });
    }

    if (closeLoginModal) {
        closeLoginModal.addEventListener('click', () => {
            loginModal.classList.remove('active');
            document.body.classList.remove('locked');
        });
    }

    if (loginModal) {
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
                document.body.classList.remove('locked');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('reg-name').value;
            const surname = document.getElementById('reg-surname').value;
            const age = parseInt(document.getElementById('reg-age').value);
            const className = document.getElementById('reg-class').value;

            if (age > 18) {
                loginError.style.display = 'block';
                loginError.innerText = "Kechirasiz, yoshingiz 18 dan katta bo'lgani uchun ro'yxatdan o'ta olmaysiz.";
                return;
            }

            loginError.style.display = 'none';

            // Terminal Log message as requested
            console.log(`${name} ${surname} kirdi`);

            // Save for Admin Panel
            const students = JSON.parse(localStorage.getItem('registeredStudents') || '[]');
            students.push({
                name,
                surname,
                age,
                class: className,
                date: new Date().toLocaleDateString()
            });
            localStorage.setItem('registeredStudents', JSON.stringify(students));

            alert(`Muvaffaqiyatli ro'yxatdan o'tdingiz, ${name}!`);
            loginModal.classList.remove('active');
            document.body.classList.remove('locked');
            loginForm.reset();
        });
    }

    // Admission Modal Logic
    const admissionModal = document.getElementById('admission-modal');
    const openAdmissionBtns = document.querySelectorAll('.open-admission-modal');
    const closeAdmissionModal = document.querySelector('.close-admission-modal');
    const termsCheckbox = document.getElementById('terms-agree');
    const acceptAdmissionBtn = document.getElementById('accept-admission-btn');

    if (openAdmissionBtns) {
        openAdmissionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                admissionModal.classList.add('active');
                document.body.classList.add('locked');
            });
        });
    }

    if (closeAdmissionModal) {
        closeAdmissionModal.addEventListener('click', () => {
            admissionModal.classList.remove('active');
            document.body.classList.remove('locked');
        });
    }

    if (admissionModal) {
        window.addEventListener('click', (e) => {
            if (e.target === admissionModal) {
                admissionModal.classList.remove('active');
                document.body.classList.remove('locked');
            }
        });
    }

    // Quiz Data (Mixed Questions: Math, Logic, General Knowledge)
    // Quiz Data (Multi-language)
    const quizQuestions = {
        uz: {
            1: [
                { q: "45 + 37 = ?", options: ["72", "82", "92"], a: 1 },
                { q: "12 x 3 = ?", options: ["32", "36", "46"], a: 1 },
                { q: "Qaysi fasl Yozdan keyin keladi?", options: ["Bahor", "Kuz", "Qish"], a: 1 },
                { q: "Alifboning 15-harfi qaysi?", options: ["L", "M", "N"], a: 2 },
                { q: "Quyosh qaysi tamosha botadi?", options: ["Sharq", "G'arb", "Janub"], a: 1 },
                { q: "O'zbekiston bayrog'ida nechta yulduz bor?", options: ["10", "12", "14"], a: 1 },
                { q: "100 - 45 = ?", options: ["45", "55", "65"], a: 1 },
                { q: "Filning nechta oyog'i bor?", options: ["2", "4", "6"], a: 1 },
                { q: "Eng kichik ikki xonali son?", options: ["1", "10", "11"], a: 1 },
                { q: "Dunyodagi eng baland cho'qqi?", options: ["Everest", "K2", "Monblan"], a: 0 }
            ],
            5: [
                { q: "3/4 + 1/2 = ?", options: ["4/6", "5/4", "1"], a: 1 },
                { q: "0.25 x 40 = ?", options: ["10", "1", "100"], a: 0 },
                { q: " 'Efficient' so'zining tarjimasi?", options: ["Samarali", "Kuchli", "Tezkor"], a: 0 },
                { q: "O'zbekiston poytaxti qachon Toshkent bo'lgan?", options: ["1924", "1930", "1991"], a: 1 },
                { q: " 'Opportunity' so'zining tarjimasi?", options: ["Imkoniyat", "Maqsad", "Yutuq"], a: 0 },
                { q: "672 / 8 = ?", options: ["84", "74", "94"], a: 0 },
                { q: "Uchburchakning yuzi formula?", options: ["a*b", "(a*h)/2", "a+b+c"], a: 1 },
                { q: "Kvadrat ildiz 625?", options: ["25", "15", "35"], a: 0 },
                { q: " 'Determine' so'zining tarjimasi?", options: ["Aniqlash", "O'zgartirish", "Topish"], a: 0 },
                { q: "Eng katta materik?", options: ["Afrika", "Osiyo", "Yevropa"], a: 1 }
            ],
            8: [
                { q: " (x + 3)^2 = x^2 + ? + 9", options: ["3x", "6x", "9x"], a: 1 },
                { q: "Logarifm 8 asos 2 bo'yicha?", options: ["2", "3", "4"], a: 1 },
                { q: " 'Sustainability' so'zining ma'nosi?", options: ["Barqarorlik", "Rivojlanish", "Tejamkorlik"], a: 0 },
                { q: "O'zbekistonning eng uzun daryosi?", options: ["Sirdaryo", "Amudaryo", "Zarafshon"], a: 1 },
                { q: "Arab tilida 'Mustaqillik' nima deyiladi?", options: ["Istiqlal", "Hurriyat", "Vatan"], a: 0 },
                { q: "Pifagor teoremasi formula?", options: ["a+b=c", "a^2+b^2=c^2", "a*b=c"], a: 1 },
                { q: "500 ning 17.5%?", options: ["85.5", "87.5", "90"], a: 1 },
                { q: " 'Sophisticated' so'zining tarjimasi?", options: ["Murakkab", "Oddiy", "Eski"], a: 0 },
                { q: "Alisher Navoiy qachon tug'ilgan?", options: ["1441", "1483", "1436"], a: 0 },
                { q: "15 ning kubi?", options: ["225", "3375", "1125"], a: 1 }
            ],
            11: [
                { q: "sin(2x) ifodasi teng?", options: ["2sin(x)cos(x)", "sin^2(x)-cos^2(x)", "2sin(x)"], a: 0 },
                { q: "e^0 teng?", options: ["0", "1", "e"], a: 1 },
                { q: " 'Ambiguity' so'zining ma'nosi?", options: ["Aniqmaslik", "Murakkablik", "Xatolik"], a: 0 },
                { q: "Amir Temur nechanchi yili vafot etgan?", options: ["1405", "1396", "1402"], a: 0 },
                { q: "Arab tilida 'Ma'rifat' so'zi ma'nosi?", options: ["Bilim", "Nur", "Maqsad"], a: 0 },
                { q: "Integral ln(x) dx?", options: ["x ln(x) - x", "1/x", "ln(x)^2"], a: 0 },
                { q: "Yorug'lik tezligi (vakuumda)?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s"], a: 0 },
                { q: " 'Pragmatic' so'zining tarjimasi?", options: ["Amaliy", "Nazariy", "Aqlli"], a: 0 },
                { q: "Dunyodagi eng chuqur ko'l?", options: ["Baykal", "Kaspiy", "Orol"], a: 0 },
                { q: "Integral 0 dan pi gacha sin(x)dx?", options: ["0", "1", "2"], a: 2 }
            ]
        },
        ru: {
            1: [
                { q: "Школа по-узбекски?", options: ["Bog'cha", "Maktab", "Universitet"], a: 1 }, // Uzb
                { q: "Привет на арабском?", options: ["Assalomu alaykum", "Marhaban", "Shukran"], a: 0 }, // Arab
                { q: "Сумма углов треугольника?", options: ["180", "360", "90"], a: 0 }, // Math
                { q: "15% от 200?", options: ["20", "30", "40"], a: 1 }, // Math (New)
                { q: "Перевод слова Computer?", options: ["Компьютер", "Телефон", "Телевизор"], a: 0 }, // Eng
                { q: "Доброе утро по-узбекски?", options: ["Xayrli tun", "Xayrli tong", "Xayrli kun"], a: 1 }, // Uzb
                { q: "45 + 37 = ?", options: ["72", "82", "92"], a: 1 },
                { q: "12 x 3 = ?", options: ["32", "36", "46"], a: 1 },
                { q: "Какое время года идет после Лета?", options: ["Весна", "Осень", "Зима"], a: 1 },
                { q: "15-я буква алфавита?", options: ["Л", "М", "Н"], a: 2 },
                { q: "С какой стороны заходит солнце?", options: ["Восток", "Запад", "Юг"], a: 1 },
                { q: "Сколько звезд на флаге Узбекистана?", options: ["10", "12", "14"], a: 1 },
                { q: "100 - 45 = ?", options: ["45", "55", "65"], a: 1 },
                { q: "Сколько ног у слона?", options: ["2", "4", "6"], a: 1 },
                { q: "Наименьшее двузначное число?", options: ["1", "10", "11"], a: 1 },
                { q: "Самая высокая вершина мира?", options: ["Эверест", "К2", "Монблан"], a: 0 }
            ],
            5: [
                { q: "3/4 + 1/2 = ?", options: ["4/6", "5/4", "1"], a: 1 },
                { q: "0.25 x 40 = ?", options: ["10", "1", "100"], a: 0 },
                { q: "Перевод слова 'Efficient'?", options: ["Эффективный", "Сильный", "Быстрый"], a: 0 },
                { q: "Когда Ташкент стал столицей Узбекистана?", options: ["1924", "1930", "1991"], a: 1 },
                { q: "Перевод слова 'Opportunity'?", options: ["Возможность", "Цель", "Успех"], a: 0 },
                { q: "672 / 8 = ?", options: ["84", "74", "94"], a: 0 },
                { q: "Формула площади треугольника?", options: ["a*b", "(a*h)/2", "a+b+c"], a: 1 },
                { q: "Квадратный корень из 625?", options: ["25", "15", "35"], a: 0 },
                { q: "Перевод слова 'Determine'?", options: ["Определять", "Изменять", "Находить"], a: 0 },
                { q: "Самый большой материк?", options: ["Африка", "Азия", "Европа"], a: 1 }
            ],
            8: [
                { q: "(x + 3)^2 = x^2 + ? + 9", options: ["3x", "6x", "9x"], a: 1 },
                { q: "Логарифм 8 по основанию 2?", options: ["2", "3", "4"], a: 1 },
                { q: "Значение слова 'Sustainability'?", options: ["Устойчивость", "Развитие", "Экономия"], a: 0 },
                { q: "Самая длинная река Узбекистана?", options: ["Сырдарья", "Амударья", "Зарафшан"], a: 1 },
                { q: "Как на арабском языке 'Независимость'?", options: ["Istiqlal", "Hurriyat", "Vatan"], a: 0 },
                { q: "Формула теоремы Пифагора?", options: ["a+b=c", "a^2+b^2=c^2", "a*b=c"], a: 1 },
                { q: "17.5% от 500?", options: ["85.5", "87.5", "90"], a: 1 },
                { q: "Перевод слова 'Sophisticated'?", options: ["Сложный", "Простой", "Старый"], a: 0 },
                { q: "Когда родился Алишер Навои?", options: ["1441", "1483", "1436"], a: 0 },
                { q: "Куб числа 15?", options: ["225", "3375", "1125"], a: 1 }
            ],
            11: [
                { q: "чему равно выражение sin(2x)?", options: ["2sin(x)cos(x)", "sin^2(x)-cos^2(x)", "2sin(x)"], a: 0 },
                { q: "e^0 равно?", options: ["0", "1", "e"], a: 1 },
                { q: "Значение слова 'Ambiguity'?", options: ["Неопределенность", "Сложность", "Ошибка"], a: 0 },
                { q: "В каком году умер Амир Темур?", options: ["1405", "1396", "1402"], a: 0 },
                { q: "Значение слова 'Ма'рифат' на арабском?", options: ["Знание", "Свет", "Цель"], a: 0 },
                { q: "Интеграл ln(x) dx?", options: ["x ln(x) - x", "1/x", "ln(x)^2"], a: 0 },
                { q: "Скорость света (в вакууме)?", options: ["300,000 км/с", "150,000 км/с", "500,000 км/с"], a: 0 },
                { q: "Перевод слова 'Pragmatic'?", options: ["Прагматичный", "Теоретический", "Умный"], a: 0 },
                { q: "Самое глубокое озеро в мире?", options: ["Байкал", "Каспийское", "Аральское"], a: 0 },
                { q: "Интеграл от 0 до pi sin(x)dx?", options: ["0", "1", "2"], a: 2 }
            ]
        },
        en: {
            1: [
                { q: "45 + 37 = ?", options: ["72", "82", "92"], a: 1 },
                { q: "12 x 3 = ?", options: ["32", "36", "46"], a: 1 },
                { q: "Which season comes after Summer?", options: ["Spring", "Autumn", "Winter"], a: 1 },
                { q: "What is the 15th letter of the alphabet?", options: ["L", "M", "N"], a: 2 },
                { q: "On which side does the sun set?", options: ["East", "West", "South"], a: 1 },
                { q: "How many stars are on the flag of Uzbekistan?", options: ["10", "12", "14"], a: 1 },
                { q: "100 - 45 = ?", options: ["45", "55", "65"], a: 1 },
                { q: "How many legs does an elephant have?", options: ["2", "4", "6"], a: 1 },
                { q: "What is the smallest two-digit number?", options: ["1", "10", "11"], a: 1 },
                { q: "What is the highest peak in the world?", options: ["Everest", "K2", "Mont Blanc"], a: 0 }
            ],
            5: [
                { q: "3/4 + 1/2 = ?", options: ["4/6", "5/4", "1"], a: 1 },
                { q: "0.25 x 40 = ?", options: ["10", "1", "100"], a: 0 },
                { q: "Translation of 'Samarali'?", options: ["Efficient", "Strong", "Fast"], a: 0 },
                { q: "When did Tashkent become the capital of Uzbekistan?", options: ["1924", "1930", "1991"], a: 1 },
                { q: "Translation of 'Imkoniyat'?", options: ["Opportunity", "Goal", "Success"], a: 0 },
                { q: "672 / 8 = ?", options: ["84", "74", "94"], a: 0 },
                { q: "Formula for the area of a triangle?", options: ["a*b", "(a*h)/2", "a+b+c"], a: 1 },
                { q: "Square root of 625?", options: ["25", "15", "35"], a: 0 },
                { q: "Translation of 'Aniqlash'?", options: ["Determine", "Change", "Find"], a: 0 },
                { q: "What is the largest continent?", options: ["Africa", "Asia", "Europe"], a: 1 }
            ],
            8: [
                { q: "(x + 3)^2 = x^2 + ? + 9", options: ["3x", "6x", "9x"], a: 1 },
                { q: "Logarithm of 8 base 2?", options: ["2", "3", "4"], a: 1 },
                { q: "Meaning of 'Barqarorlik'?", options: ["Sustainability", "Development", "Economy"], a: 0 },
                { q: "What is the longest river in Uzbekistan?", options: ["Syr Darya", "Amu Darya", "Zarafshon"], a: 1 },
                { q: "How to say 'Independence' in Arabic?", options: ["Istiqlal", "Hurriyat", "Vatan"], a: 0 },
                { q: "Pythagorean theorem formula?", options: ["a+b=c", "a^2+b^2=c^2", "a*b=c"], a: 1 },
                { q: "17.5% of 500?", options: ["85.5", "87.5", "90"], a: 1 },
                { q: "Translation of 'Murakkab'?", options: ["Sophisticated", "Simple", "Old"], a: 0 },
                { q: "When was Alisher Navoiy born?", options: ["1441", "1483", "1436"], a: 0 },
                { q: "Cube of 15?", options: ["225", "3375", "1125"], a: 1 }
            ],
            11: [
                { q: "What is sin(2x) equal to?", options: ["2sin(x)cos(x)", "sin^2(x)-cos^2(x)", "2sin(x)"], a: 0 },
                { q: "What is e^0 equal to?", options: ["0", "1", "e"], a: 1 },
                { q: "Meaning of 'Ambiguity'?", options: ["Uncertainty", "Complexity", "Error"], a: 0 },
                { q: "In what year did Amir Temur die?", options: ["1405", "1396", "1402"], a: 0 },
                { q: "Meaning of 'Marifat' in Arabic?", options: ["Knowledge", "Light", "Goal"], a: 0 },
                { q: "Integral of ln(x) dx?", options: ["x ln(x) - x", "1/x", "ln(x)^2"], a: 0 },
                { q: "Speed of light (in vacuum)?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s"], a: 0 },
                { q: "Translation of 'Amaliy'?", options: ["Pragmatic", "Theoretical", "Smart"], a: 0 },
                { q: "What is the deepest lake in the world?", options: ["Baikal", "Caspian", "Aral"], a: 0 },
                { q: "Integral from 0 to pi of sin(x)dx?", options: ["0", "1", "2"], a: 2 }
            ]
        }
    };

    // Helper to fill gaps for other classes with nearest available data
    // For brevity, map 2,3,4 to 1; 6,7 to 5; 9,10 to 8 or 11 logic.
    // In a real app, I'd fill all. Here I'll add logic to fallback.

    let userScore = 0;

    // Admission Logic
    if (termsCheckbox && acceptAdmissionBtn) {
        // Validation for inputs
        const checkInputs = () => {
            const name = document.getElementById('adm-name').value;
            const surname = document.getElementById('adm-surname').value;
            const age = document.getElementById('adm-age').value;
            const phone = document.getElementById('adm-phone').value;
            const cls = document.getElementById('adm-class').value;

            if (name && surname && age && phone && cls && termsCheckbox.checked) {
                acceptAdmissionBtn.disabled = false;
                acceptAdmissionBtn.style.opacity = '1';
                acceptAdmissionBtn.style.cursor = 'pointer';
            } else {
                acceptAdmissionBtn.disabled = true;
                acceptAdmissionBtn.style.opacity = '0.5';
                acceptAdmissionBtn.style.cursor = 'not-allowed';
            }
        };

        termsCheckbox.addEventListener('change', checkInputs);
        document.getElementById('adm-name').addEventListener('input', checkInputs);
        document.getElementById('adm-surname').addEventListener('input', checkInputs);
        document.getElementById('adm-age').addEventListener('input', checkInputs);
        document.getElementById('adm-phone').addEventListener('input', checkInputs);
        document.getElementById('adm-class').addEventListener('change', checkInputs);


        acceptAdmissionBtn.addEventListener('click', () => {
            const studentClass = parseInt(document.getElementById('adm-class').value);
            const studentName = document.getElementById('adm-name').value;
            const studentSurname = document.getElementById('adm-surname').value;
            const studentPhone = document.getElementById('adm-phone').value;

            // Detect Language
            const currentLang = localStorage.getItem('lang') || 'uz';

            // Close Admission Modal
            admissionModal.classList.remove('active');

            // Open Quiz Modal
            const quizModal = document.getElementById('quiz-modal');
            const quizContainer = document.getElementById('quiz-container');

            // Select questions based on language and class
            // Fallback logic for classes not explicitly defined
            let questions = [];
            let langQuestions = quizQuestions[currentLang] || quizQuestions['uz'];

            if (langQuestions[studentClass]) {
                questions = langQuestions[studentClass];
            } else if (studentClass <= 4) {
                questions = langQuestions[1]; // Use grade 1 questions for 1-4
            } else if (studentClass <= 7) {
                questions = langQuestions[5]; // Use grade 5 questions for 5-7
            } else if (studentClass <= 9) {
                questions = langQuestions[8] || langQuestions[5]; // Use grade 8 logic if exists (I didn't add 8 above for RU/EN to save space, will fallback)
            } else {
                questions = langQuestions[11] || langQuestions[5];
            }

            // Ensure there are questions to display, fallback to Uz grade 1 if absolutely nothing
            if (!questions || questions.length === 0) questions = quizQuestions['uz'][1];

            userScore = 0;
            quizModal.classList.add('active');

            let html = '';
            questions.forEach((q, index) => {
                html += `
                    <div class="quiz-question" style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <p style="font-weight: bold; margin-bottom: 10px;">${index + 1}. ${q.q}</p>
                        <div class="options" style="display: flex; gap: 15px;">
                            ${q.options.map((opt, i) => `
                                <label style="cursor: pointer; display: flex; align-items: center; gap: 5px;">
                                    <input type="radio" name="q${index}" value="${i}"> ${opt}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `;
            });

            html += `<button class="btn btn-primary full-width" onclick="submitQuiz(${studentClass}, '${studentName}', '${studentSurname}', '${studentPhone}', '${currentLang}')">Javoblarni yuborish</button>`;

            quizContainer.innerHTML = html;
            document.getElementById('quiz-result').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
        });
    }

    // Global func for submitting quiz
    window.submitQuiz = function (cls, name, surname, phone, lang = 'uz') {
        let questions = [];
        let langQuestions = quizQuestions[lang] || quizQuestions['uz'];

        if (langQuestions[cls]) {
            questions = langQuestions[cls];
        } else if (cls <= 4) {
            questions = langQuestions[1];
        } else if (cls <= 7) {
            questions = langQuestions[5];
        } else if (cls <= 9) {
            questions = langQuestions[8] || langQuestions[5];
        } else {
            questions = langQuestions[11] || langQuestions[5];
        }

        let score = 0;
        let detailedResults = [];

        questions.forEach((q, index) => {
            const selectedInput = document.querySelector(`input[name="q${index}"]:checked`);
            let userAnsText = "Belgilanmagan";
            let isCorrect = false;

            if (selectedInput) {
                const val = parseInt(selectedInput.value);
                userAnsText = q.options[val];
                if (val === q.a) {
                    score++;
                    isCorrect = true;
                }
            }

            detailedResults.push({
                question: q.q,
                userAnswer: userAnsText,
                correctAnswer: q.options[q.a],
                isCorrect: isCorrect
            });
        });

        // Save Results for Admin Panel
        const examResults = JSON.parse(localStorage.getItem('examResults') || '[]');
        examResults.push({
            name: name,
            surname: surname,
            phone: phone,
            class: cls,
            score: score,
            total: questions.length,
            details: detailedResults,
            date: new Date().toLocaleString()
        });
        localStorage.setItem('examResults', JSON.stringify(examResults));

        // Show Result
        const resultDiv = document.getElementById('quiz-result');
        const container = document.getElementById('quiz-container');
        const scoreTitle = document.getElementById('result-score');
        const msg = document.getElementById('result-message');
        const startDay = document.getElementById('start-day');

        container.style.display = 'none';
        resultDiv.style.display = 'block';

        scoreTitle.innerText = `${score} / ${questions.length}`;

        if (score >= 3) {
            // Success Logic (Day Calculation)
            const today = new Date().getDay();
            let dayMsg = "";

            if (today === 1) dayMsg = "Seshanbadan";
            else if (today === 2) dayMsg = "Chorshanbadan";
            else if (today === 3) dayMsg = "Payshanbadan";
            else if (today === 4) dayMsg = "Jumadan";
            else if (today === 5) dayMsg = "Dushanbadan";
            else dayMsg = "Dushanbadan";

            msg.innerHTML = `Tabriklaymiz, ${name}! Siz imtihondan o'tdingiz. <br> Maktabga <b>${dayMsg}</b> kelishingiz mumkin.`;
            msg.style.color = "green";
        } else {
            msg.innerText = `Siz maktabimizga kelib boshqatdan ishlab keting, hurmatli o'quvchi.`;
            msg.style.color = "red";
        }
    };

    window.closeQuiz = function () {
        document.getElementById('quiz-modal').classList.remove('active');
        document.body.classList.remove('locked');
        // Reset Inputs
        document.getElementById('adm-name').value = '';
        document.getElementById('adm-age').value = '';
        document.getElementById('adm-class').value = '';
        document.getElementById('terms-agree').checked = false;
        document.getElementById('accept-admission-btn').disabled = true;
        document.getElementById('accept-admission-btn').style.opacity = '0.5';
    };

    // Lumos AI Chat Logic
    const aiBtn = document.getElementById('lumos-ai-btn');
    const aiModal = document.getElementById('ai-modal');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-chat');
    const closeAiModal = document.querySelector('.close-ai-modal');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            aiBtn.classList.add('show');
        } else {
            aiBtn.classList.remove('show');
        }
    });

    aiBtn.addEventListener('click', () => {
        aiModal.classList.add('active');
        document.body.classList.add('locked');
    });

    if (closeAiModal) {
        closeAiModal.addEventListener('click', () => {
            aiModal.classList.remove('active');
            document.body.classList.remove('locked');
        });
    }

    const addMessage = (text, sender) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}-message`;
        msgDiv.innerHTML = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const handleAIResponse = (userText) => {
        const text = userText.toLowerCase().trim();
        let response = "";

        // Keywords for different categories
        const isGreeting = /salom|salam|assalom|qalaysiz|qalesiz|privet|hi|hello/.test(text);
        const asksName = /(ism|nom|nima deyiladi|ismini|school name)/.test(text);
        const asksQuantity = /(nechta|soni|qancha o'quvchi|qancha oqituvchi|student|o'qituvchi)/.test(text);
        const asksPrice = /narx|pul|to'lov|tulov|necha pul|price|cost|qancha/.test(text);
        const asksLocation = /manzil|qayerda|location|address|joylashgan|filial|map|xarita/.test(text);
        const asksContact = /tel|nomer|telefon|aloqa|bog'lanish|contact|telegram/.test(text);
        const asksFood = /ovqat|oshxona|poldnik|tushlik|nonushta|food|canteen/.test(text);
        const asksHours = /soat|vaqt|qachon|ish vaqti|open|time/.test(text);

        if (asksQuantity) {
            response = "<b>Lumos School</b>da hozirda <b>800 dan ortiq</b> o'quvchi tahsil olmoqda. Ularga <b>150 dan ortiq</b> yuqori malakali ustozlar ta'lim berishadi.";
        } else if (asksName) {
            response = "Bizning maktabimiz <b>LUMOS SCHOOL</b> deb nomlanadi. Biz o'quvchilarga eng ilg'or xalqaro standartlar asosida ta'lim beramiz.";
        } else if (isGreeting) {
            response = "Assalomu alaykum! Men <b>Lumos AI</b> yordamchisiman. Sizga maktabimiz, o'qish narxlari, manzillarimiz yoki darslar haqida ma'lumot bera olaman. Qanday savolingiz bor?";
        } else if (asksPrice) {
            response = "<b>Lumos School</b>da o'qish to'lovi bir oy uchun <b>5,000,000 so'm</b>ni tashkil etadi. Bu narx ichiga 3 mahal ovqat, barcha to'garaklar va sport mashg'ulotlari kiradi.";
        } else if (asksLocation) {
            response = "Bizning ikkita asosiy filialimiz bor: <br> 1. <b>Chilonzor tumani</b> <br> 2. <b>Samarqand Darvoza</b> (3-lola ko'chasi). <br> Saytning pastki qismidagi xarita orqali aniq lokatsiyani ko'rishingiz mumkin.";
        } else if (asksContact) {
            response = "Biz bilan bog'lanish uchun: <br> 📞 +998 95 800 58 00 <br> 📱 Telegram: <b>@abdulo_k</b>";
        } else if (asksFood) {
            response = "O'quvchilarimizga kuniga <b>3 mahal</b> issiq va sog'lom ovqatlar beriladi. Oshxonamizda tajribali oshpazlar sifatli mahsulotlardan foydalangan holda taomlar tayyorlashadi.";
        } else if (asksHours) {
            response = "Maktabimiz dushanbadan shanbagacha soat <b>08:00 dan 18:00 gacha</b> ishlaydi. Yakshanba - dam olish kuni.";
        } else {
            response = "Kechirasiz, bu savolingizni to'liq tushunmadim. Men <b>Lumos School</b> nomi, manzillari, narxlari yoki ovqatlanish tartibi haqida ma'lumot bera olaman. Iltimos, savolingizni aniqroq yozing.";
        }

        setTimeout(() => {
            addMessage(response, 'ai');
        }, 600);
    };

    const sendMessage = () => {
        const text = chatInput.value.trim();
        if (text) {
            addMessage(text, 'user');
            chatInput.value = '';
            handleAIResponse(text);
        }
    };

    if (sendBtn) {
        sendBtn.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }
});

// Global Logout Function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}
