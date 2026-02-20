// =============================================
// РЕАЛЬНІ ПРОДУКТИ CORSAIR
// =============================================

const products = [
    // === РІДИННЕ ОХОЛОДЖЕННЯ CORSAIR ===
    {
        id: 1,
        name: "Corsair iCUE Link Titan 360 RX LCD Black",
        category: "Рідинне охолодження",
        price: 15699,
        image: "https://img.ktc.ua/img/base/1_505/1/628641.webp",
        images: [
            "https://img.ktc.ua/img/base/1_505/5/628645.jpg",
            "https://img.ktc.ua/img/base/1_505/0/628640.jpg",
            "https://img.ktc.ua/img/base/1_505/3/628643.jpg"
        ],
        description: "Преміум система рідинного охолодження з 2.1\" IPS LCD екраном та радіатором 360мм.",
        fullDescription: "iCUE H150i ELITE LCD XT - топова система охолодження від Corsair з вбудованим IPS дисплеєм для відображення температури, GIF-анімацій та системної інформації. Три 120мм ML RGB вентилятори забезпечують чудове охолодження та низький рівень шуму.",
        specs: [
            "Радіатор: 360мм (3x120мм ML RGB)",
            "LCD екран: 2.1\" IPS 480x480px",
            "TDP: до 350W",
            "Швидкість: 400-2400 RPM",
            "Шум: 20-36 дБ",
            "Гарантія: 5 років",
            "RGB: CORSAIR iCUE",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "2.1\" IPS дисплей з анімаціями",
            "Керування через CORSAIR iCUE",
            "ML RGB Elite вентилятори",
            "Продуктивна помпа до 2400 RPM",
            "Простий монтаж"
        ]
    },
    {
        id: 2,
        name: "Corsair iCUE H150i Elite LCD XT Display",
        category: "Рідинне охолодження",
        price: 7499,
        image: "https://img.telemart.ua/814400-1040606-product_popup/corsair-icue-h150i-elite-lcd-xt-display-cw-9060075-ww-814400.jpg",
        images: [
            "https://img.telemart.ua/814400-1040610/corsair-icue-h150i-elite-lcd-xt-display-cw-9060075-ww-814400.jpg",
            "https://img.telemart.ua/814400-1040607/corsair-icue-h150i-elite-lcd-xt-display-cw-9060075-ww-814400.jpg"
        ],
        description: "Компактна 240мм система з RGB підсвіткою та чудовою продуктивністю.",
        fullDescription: "iCUE H100i RGB ELITE пропонує відмінний баланс між продуктивністю, компактністю та ціною. Два 120мм ML RGB вентилятори забезпечують тихе та ефективне охолодження.",
        specs: [
            "Радіатор: 240мм (2x120мм ML RGB)",
            "Підсвітка: RGB ARGB",
            "TDP: до 250W",
            "Швидкість: 400-2000 RPM",
            "Шум: 20-33 дБ",
            "Гарантія: 5 років",
            "RGB: CORSAIR iCUE",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Компактний радіатор 240мм",
            "ML RGB Elite вентилятори",
            "Інтеграція з iCUE",
            "Тихий режим роботи",
            "Легке встановлення"
        ]
    },
    {
        id: 3,
        name: "Corsair Nautilus 360 RS LCD Black",
        category: "Рідинне охолодження",
        price: 8499,
        image: "https://img.ktc.ua/img/base/1_505/7/791157.webp",
        images: [
            "https://img.ktc.ua/img/base/1_505/5/791155.jpg",
            "https://img.ktc.ua/img/base/1_505/3/791153.jpg"
        ],
        description: "Потужна система з 420мм радіатором та LCD дисплеєм для максимальної продуктивності.",
        fullDescription: "iCUE H170i ELITE LCD - найпотужніша система в лінійці H-series. Радіатор 420мм з трьома 140мм вентиляторами забезпечує неперевершене охолодження навіть для найпотужніших процесорів.",
        specs: [
            "Радіатор: 420мм (3x140мм ML RGB)",
            "LCD екран: 2.1\" IPS 480x480px",
            "TDP: до 400W+",
            "Швидкість: 400-2000 RPM",
            "Шум: 18-35 дБ",
            "Гарантія: 5 років",
            "RGB: CORSAIR iCUE",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Максимальна продуктивність",
            "2.1\" IPS LCD дисплей",
            "Три 140мм ML RGB вентилятори",
            "Ідеально для розгону",
            "Premium якість"
        ]
    },
    {
        id: 4,
        name: "CORSAIR iCUE H60i RGB PRO XT",
        category: "Рідинне охолодження",
        price: 3999,
        image: "https://content2.rozetka.com.ua/goods/images/big/525699526.jpg",
        images: [
            "https://content.rozetka.com.ua/goods/images/big/525699546.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/525699729.jpg"
        ],
        description: "Компактна 120мм система для невеликих корпусів з RGB підсвіткою.",
        fullDescription: "iCUE H60i RGB PRO XT - компактне рідинне охолодження для малих корпусів. Один 120мм ML RGB вентилятор забезпечує кращу продуктивність ніж повітряні кулери.",
        specs: [
            "Радіатор: 120мм (1x120мм ML RGB)",
            "Підсвітка: RGB ARGB",
            "TDP: до 150W",
            "Швидкість: 400-2000 RPM",
            "Шум: 22-34 дБ",
            "Гарантія: 5 років",
            "RGB: CORSAIR iCUE",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Компактний розмір",
            "ML RGB вентилятор",
            "Для малих корпусів",
            "RGB підсвітка",
            "iCUE інтеграція"
        ]
    },
    
    {
        id: 6,
        name: "CORSAIR iCUE H150i RGB PRO XT",
        category: "Рідинне охолодження",
        price: 5999,
        image: "https://img.telemart.ua/491645-630654-product_popup/corsair-icue-h170i-elite-capellix-xt-cw-9060071-ww.jpg",
        images: [
            "https://img.telemart.ua/491645-630658/corsair-icue-h170i-elite-capellix-xt-cw-9060071-ww.jpg",
            "https://img.telemart.ua/491645-630656/corsair-icue-h170i-elite-capellix-xt-cw-9060071-ww.jpg"
        ],
        description: "Надійна 360мм система з RGB підсвіткою та тихою роботою.",
        fullDescription: "iCUE H150i RGB PRO XT - перевірена часом система охолодження з радіатором 360мм. ML RGB вентилятори забезпечують відмінний баланс продуктивності та шуму.",
        specs: [
            "Радіатор: 360мм (3x120мм ML RGB)",
            "Підсвітка: RGB ARGB 16 LED",
            "TDP: до 330W",
            "Швидкість: 400-2000 RPM",
            "Шум: 20-34 дБ",
            "Гарантія: 5 років",
            "RGB: CORSAIR iCUE",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Перевірена продуктивність",
            "16 RGB LED помпа",
            "ML RGB вентилятори",
            "Надійна конструкція",
            "iCUE керування"
        ]
    },

    // === ПОВІТРЯНЕ ОХОЛОДЖЕННЯ CORSAIR ===
    {
        id: 7,
        name: "CORSAIR iCUE A115",
        category: "Повітряне охолодження",
        price: 4299,
        image: "https://content.rozetka.com.ua/goods/images/big/419031977.jpg",
        images: [
            "https://content1.rozetka.com.ua/goods/images/big/419031980.jpg"
        ],
        description: "Преміум башточний кулер з RGB вентилятором 140мм та продуктивністю до 250W TDP.",
        fullDescription: "iCUE A115 - топовий повітряний кулер від Corsair з одним 140мм QX140 RGB вентилятором. Чудова альтернатива рідинному охолодженню з простим встановленням.",
        specs: [
            "Вентилятор: 1x140мм QX RGB",
            "Теплові трубки: 5x6мм",
            "TDP: до 250W",
            "Швидкість: 550-1500 RPM",
            "Шум: 10-33 дБ",
            "Висота: 167мм",
            "Гарантія: 5 років",
            "RGB: CORSAIR iCUE",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Максимальна продуктивність для повітря",
            "QX140 RGB вентилятор",
            "5 теплових трубок",
            "Тихий режим роботи",
            "Легке встановлення"
        ]
    },
    {
        id: 8,
        name: "CORSAIR A500",
        category: "Повітряне охолодження",
        price: 3499,
        image: "https://content2.rozetka.com.ua/goods/images/big/441818259.jpg",
        images: [
            "https://content1.rozetka.com.ua/goods/images/big/441818266.jpg"
        ],
        description: "Двовежова система з двома 120мм ML вентиляторами для потужного охолодження.",
        fullDescription: "A500 - професійна двовежова система охолодження. Два 120мм ML вентилятори та чотири теплові трубки забезпечують відмінну продуктивність для ігрових систем.",
        specs: [
            "Вентилятори: 2x120мм ML",
            "Теплові трубки: 4x6мм",
            "TDP: до 220W",
            "Швидкість: 400-2000 RPM",
            "Шум: 20-36 дБ",
            "Висота: 170мм",
            "Гарантія: 5 років",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Двовежова конструкція",
            "Два ML вентилятори",
            "Чудова продуктивність",
            "Преміум матеріали",
            "Легке встановлення"
        ]
    },
    {
        id: 9,
        name: "CORSAIR Air A70",
        category: "Повітряне охолодження",
        price: 1999,
        image: "https://content2.rozetka.com.ua/goods/images/big/599303153.jpg",
        images: [
            "https://content.rozetka.com.ua/goods/images/big/599303158.jpg"
        ],
        description: "Компактний башточний кулер для основних ігрових систем.",
        fullDescription: "Air A70 - доступний та ефективний кулер для середнього сегменту. Чудовий вибір для ігрових систем з помірним бюджетом.",
        specs: [
            "Вентилятор: 1x120мм PWM",
            "Теплові трубки: 3x6мм",
            "TDP: до 150W",
            "Швидкість: 600-1800 RPM",
            "Шум: 18-30 дБ",
            "Висота: 150мм",
            "Гарантія: 2 роки",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Доступна ціна",
            "Компактні розміри",
            "Тихий режим",
            "Легке встановлення",
            "Надійна конструкція"
        ]
    },
    {
        id: 10,
        name: "CORSAIR Air A60",
        category: "Повітряне охолодження",
        price: 1499,
        image: "https://content2.rozetka.com.ua/goods/images/big/566088953.jpg",
        images: [
            "https://content2.rozetka.com.ua/goods/images/big/566088953.jpg"
        ],
        description: "Ультра-компактний кулер для бюджетних збірок та офісних ПК.",
        fullDescription: "Air A60 - найдоступніше рішення від Corsair для базових систем. Компактний розмір та низький рівень шуму роблять його ідеальним для офісних ПК.",
        specs: [
            "Вентилятор: 1x92мм PWM",
            "Теплові трубки: 2x6мм",
            "TDP: до 95W",
            "Швидкість: 600-1800 RPM",
            "Шум: 16-28 дБ",
            "Висота: 125мм",
            "Гарантія: 2 роки",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Бюджетна ціна",
            "Компактний",
            "Тихий",
            "Для офісних ПК",
            "Просте встановлення"
        ]
    },
    {
        id: 11,
        name: "CORSAIR iCUE A115 ELITE",
        category: "Повітряне охолодження",
        price: 4999,
        image: "https://content2.rozetka.com.ua/goods/images/big/410174123.jpg",
        images: [
            "https://content2.rozetka.com.ua/goods/images/big/410174132.jpg"
        ],
        description: "Топова версія A115 з двома RGB вентиляторами для максимальної продуктивності.",
        fullDescription: "iCUE A115 ELITE - абсолютна вершина повітряного охолодження Corsair. Два QX RGB вентилятори та шість теплових трубок забезпечують продуктивність на рівні рідинних систем.",
        specs: [
            "Вентилятори: 2x140мм QX RGB",
            "Теплові трубки: 6x6мм",
            "TDP: до 270W",
            "Швидкість: 550-1500 RPM",
            "Шум: 10-33 дБ",
            "Висота: 167мм",
            "Гарантія: 5 років",
            "RGB: CORSAIR iCUE",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Максимальна продуктивність",
            "Два QX RGB вентилятори",
            "6 теплових трубок",
            "RGB керування через iCUE",
            "Преміум якість"
        ]
    },
    {
        id: 12,
        name: "CORSAIR Air A500 High Performance",
        category: "Повітряне охолодження",
        price: 3999,
        image: "https://content1.rozetka.com.ua/goods/images/big/428366159.jpg",
        images: [
            "https://content1.rozetka.com.ua/goods/images/big/428366161.jpg"
        ],
        description: "Вдосконалена версія A500 з покращеною продуктивністю.",
        fullDescription: "Air A500 High Performance - вдосконалена версія популярного A500 з п'ятьма тепловими трубками та покращеними ML Elite вентиляторами.",
        specs: [
            "Вентилятори: 2x120мм ML Elite",
            "Теплові трубки: 5x6мм",
            "TDP: до 240W",
            "Швидкість: 400-2000 RPM",
            "Шум: 18-34 дБ",
            "Висота: 170мм",
            "Гарантія: 5 років",
            "Сокети: Intel LGA1700/1200/115x, AMD AM5/AM4"
        ],
        features: [
            "Покращена продуктивність",
            "ML Elite вентилятори",
            "5 теплових трубок",
            "Відмінний баланс",
            "Надійність Corsair"
        ]
    }
];
