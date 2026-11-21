/* Ссылки на площадки.
   Вставляй прямые ссылки между кавычками: spotify, yandex, vk, apple.
   Пусто = кнопка на сайте ведёт на поиск по названию (для неофициальных релизов кнопок нет).
   Приоритет: ссылка трека → ссылка релиза. Если у трека своей ссылки нет, берётся ссылка альбома или сингла.
   Для синглов достаточно заполнить блок релиза. */
window.LINKS = {
  artists: {
    lija: {spotify:"https://open.spotify.com/artist/2TTlusXPTZc9gEzci8ZIAl",yandex:"https://music.yandex.ru/artist/23531762",vk:"https://vk.ru/artist/7518677109598894567",apple:"https://music.apple.com/us/artist/lija/1775495410"}, // LIJA
    aki: {spotify:"https://open.spotify.com/artist/4PdMTNF092OPPULfSzlNqx",yandex:"https://music.yandex.ru/artist/26634532",vk:"https://vk.ru/artist/5182356090644034333",apple:"https://music.apple.com/us/artist/aki/1413568082"}, // Aki!
    someone: {spotify:"https://open.spotify.com/artist/2L46fyyGCJUj3ZV3nUqlPl",yandex:"https://music.yandex.ru/artist/26634531",vk:"https://vk.ru/artist/8558867062349454414",apple:"https://music.apple.com/us/artist/someone/1177388395"}, // Someone
  },
  releases: {
    "lija-1": {spotify:"https://open.spotify.com/album/4AjVwLvKJ7m9X6X0aH0RT9?si=HhLGqCHARaunfbbfsX0tUQ",yandex:"https://music.yandex.ru/album/33770881?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000288246_22288246_cddbd6d437d47a6a60",apple:"https://music.apple.com/us/album/%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BD%D0%B5%D0%B5-%D0%BB%D0%B5%D1%82%D0%BE/1775826018"}, // Последнее лето
    "lija-9": {spotify:"https://open.spotify.com/track/5OZhrcnkIR4ROGRLLBqfJs?si=55f0bfdd4e6c4e4f",yandex:"https://music.yandex.ru/album/34087807?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/audio-2001408855_133408855",apple:"https://music.apple.com/us/album/lazer-vova-2-single/1780551402"}, // LAZER VOVA 2
    "lija-2": {spotify:"https://open.spotify.com/album/7ksvvxe3m1qN4xrpW8Ngc6?si=qhGYFbenTqCatAFZWvD5gQ",yandex:"https://music.yandex.ru/album/34723244?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000873503_22873503_5f66b9eb63ee7d3ad5",apple:"https://music.apple.com/us/album/new-way-2/1830464448"}, // NEW WAY 2
    "lija-11": {spotify:"https://open.spotify.com/album/5MIu03CVicGjbwU0YmB7xS?si=SLWSr3ehQVGziKfyNPYNog",yandex:"https://music.yandex.ru/album/35882151?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000576601_23576601_7d8deb6422f91974b2",apple:"https://music.apple.com/us/album/%D0%BD%D0%B5-%D0%B2%D0%B5%D1%80%D0%BD%D1%83%D1%81%D1%8C-single/1833560594"}, // Не вернусь
    "lija-3": {spotify:"https://open.spotify.com/album/6tXtxiMa9uyBu5hzmF3Upc?si=2lR3WxaHQe-Z3J22ss2tDg",yandex:"https://music.yandex.ru/album/37290077?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000595685_24595685_1068f29e7c34d19a78",apple:"https://music.apple.com/us/album/4-u-feat-act0r1-ep/1838244453"}, // 4 U
    "lija-16": {spotify:"https://open.spotify.com/album/4srJU0TsuSNeEOZ3Yvp3Co?si=9MFgYjXVQvCb61svxZXy_A",yandex:"https://music.yandex.ru/album/37529854?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000772472_24772472_1d176ed7694fe34bf7",apple:"https://music.apple.com/us/album/%D0%BF%D0%BE%D1%80%D0%BE%D0%B9-%D0%B4%D1%80%D1%83%D0%B3%D0%BE%D0%B9-%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9-%D1%85%D0%BE%D1%87%D0%B5%D1%82-single/1827982353"}, // Порой Другой Белый Хочет
    "lija-17": {spotify:"https://open.spotify.com/album/2dc7SCpCjxkY3quf1ysjPW?si=LuEsMQgzQ7e8iP_rT1xOeA",yandex:"https://music.yandex.ru/album/37775753?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000942553_24942553_e39864eb1c34e415fb",apple:"https://music.apple.com/us/album/%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-single/1832534230"}, // Головокружение
    "lija-18": {spotify:"https://open.spotify.com/track/52zwDnWcu6EmpL8rAV91d0?si=739f484b4dda4f82",yandex:"https://music.yandex.ru/album/37806750?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000964751_24964751_a4e52764879f134c95",apple:"https://music.apple.com/us/album/%D0%B1%D1%83%D0%B1%D0%BB%D0%B8%D0%BA-single/1832983192"}, // Бублик
    "lija-5": {spotify:"https://open.spotify.com/album/156WUlTHU9gufuRlqbUAkN?si=ydmgvlrASuKSO_8H47I9Hg",yandex:"https://music.yandex.ru/album/38528287?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000454754_25454754_7f9f3bb90040fa24f3",apple:"https://music.apple.com/us/album/music-is-me-pt-2/1847212599"}, // MUSIC IS ME, Pt. 2
    "lija-6": {spotify:"https://open.spotify.com/track/5fupnuqmXkPbwZW0OiGSvE?si=2971eaf9d70f4328",yandex:"https://music.yandex.ru/album/39007129?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000730495_25730495_0fbb096c1727611733",apple:"https://music.apple.com/us/album/nw-4-single/1857221524"}, // NW 4
    "lija-7": {spotify:"https://open.spotify.com/album/6FOKIniLr3G9zOvb6re2KV?si=idGaFr7NS9ShrbC29OcyDw",yandex:"https://music.yandex.ru/album/39872570?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000212399_26212399_2a768e77e842d9bafc",apple:"https://music.apple.com/us/album/lija/1866232808"}, // LIJA
    "lija-24": {spotify:"https://open.spotify.com/album/1MESothC6rwmiFDrmvayKK?si=VbiPJn9VQUuZKHy5oHdryw",yandex:"https://music.yandex.ru/album/41064376?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000980682_26980682_1ca3a1b86bf7d72e74",apple:"https://music.apple.com/us/album/more-remix-feat-act0r1-single/1885690831"}, // More (Remix)
    "lija-8": {spotify:"https://open.spotify.com/album/4pcnRltqD8j2j9JyIGFdr6?si=r87Sw2eRQe-OXLyhW44vuA",yandex:"https://music.yandex.ru/album/41069021?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000982793_26982793_474dc88c176bf0a529",apple:"https://music.apple.com/us/album/bm26-last-one/1885769833"}, // BM26 (Last One)
    "lija-26": {spotify:"https://open.spotify.com/album/4hFNfaavttMZsJyZ0EMXjB?si=De-d3HyhQZWCSyg_CRLzzQ",yandex:"https://music.yandex.ru/album/41377478?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000177045_27177045_1169e857443d3a9da0",apple:"https://music.apple.com/us/album/%D0%BD%D0%B5%D0%BD%D0%B0%D0%B2%D0%B8%D0%B6%D1%83-%D0%B7%D0%B8%D0%BC%D1%83-single/1890770765"}, // Ненавижу зиму
    "lija-9b": {spotify:"https://open.spotify.com/album/7jHUOHimFddJWmYLFhsIaf?si=J3n84FqSTiKIpchUOmjD1Q",yandex:"https://music.yandex.ru/album/41481590?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000301988_27301988_524251d4aeccffac46",apple:"https://music.apple.com/us/album/%D1%8D%D1%85%D0%BE-%D0%B2-%D0%BF%D1%83%D1%81%D1%82%D0%BE%D0%B9-%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%B5-ep/1892917028"}, // Эхо в пустой комнате
    "lija-28": {spotify:"https://open.spotify.com/album/73DBCDwGxK6OTGNSYZuxaF?si=MBkO6IhsSTifuELJRXoDWQ",yandex:"https://music.yandex.ru/album/41458544?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000283991_27283991_1fc95e515818296e89",apple:"https://music.apple.com/us/album/%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D1%81-single/1892197003"}, // Космос
    "lija-11b": {spotify:"https://open.spotify.com/album/7LnwvTxsYwzppPK9muycsP?si=Ss5-gRxLRkqfrsR0F2L1PA",yandex:"https://music.yandex.ru/album/43994155?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000270881_29270881_fffb2366528c1e4d6d",apple:"https://music.apple.com/us/album/lukoil-ep/6815047047"}, // Lukoil
    "lija-nikotin": {spotify:"https://open.spotify.com/album/0ha13J6yOp4qihZQAmFL1T?si=G7xEJBjfTOC5jFBBPQi5IA",yandex:"https://music.yandex.ru/album/43993281?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000271064_29271064_e75610d30294d7f294",apple:"https://music.apple.com/us/album/%D0%BD%D0%B8%D0%BA%D0%BE%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C-single/6815058141"}, // Никотиновая Любовь
    "lija-princes": {spotify:"https://open.spotify.com/track/0p0lDncgtsVPgxAdwdTQug?si=39c93edbd09e4080",yandex:"https://music.yandex.ru/album/44182864?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000423913_29423913_0554a41b1a9d4b4fcd",apple:"https://music.apple.com/us/album/%D0%BF%D1%80%D0%B8%D0%BD%D1%86%D1%8B-%D1%80%D0%B0%D0%B4%D0%B8-%D0%B4%D0%B5%D0%BD%D0%B5%D0%B3-single/6819123464"}, // Принцы ради денег
    "aki-vyhod": {spotify:"https://open.spotify.com/album/0jeoUvVC3lxbZM7vrx0sSG?si=zqglPRFaSoSghOBOcjm7Sw",yandex:"https://music.yandex.ru/album/44296285?utm_source=web&utm_medium=copy_link",vk:"https://vk.ru/music/playlist/-2000502900_29502900_a8e8106c48eb5cc294",apple:"https://music.apple.com/us/song/%D0%B2%D1%8B%D1%85%D0%BE%D0%B4/6822838854"}, // Выход...
  },
  tracks: {
    // нужны только если у трека есть своя ссылка, отличная от альбома

    // ===== Последнее лето =====
    "lija-1-01": {spotify:"",yandex:"",vk:"",apple:""}, // 1. на память
    "lija-1-02": {spotify:"",yandex:"",vk:"",apple:""}, // 2. новая жизнь
    "lija-1-03": {spotify:"",yandex:"",vk:"",apple:""}, // 3. прогулка
    "lija-1-04": {spotify:"",yandex:"",vk:"",apple:""}, // 4. та самая
    "lija-1-05": {spotify:"",yandex:"",vk:"",apple:""}, // 5. ночная прогулка
    "lija-1-06": {spotify:"",yandex:"",vk:"",apple:""}, // 6. алкоголь
    "lija-1-07": {spotify:"",yandex:"",vk:"",apple:""}, // 7. потерял себя
    "lija-1-08": {spotify:"",yandex:"",vk:"",apple:""}, // 8. слезы

    // ===== NEW WAY 2 =====
    "lija-2-01": {spotify:"",yandex:"",vk:"",apple:""}, // 1. NEW WAY 2
    "lija-2-02": {spotify:"",yandex:"",vk:"",apple:""}, // 2. Я Е%"Л РЭПЕРОВ
    "lija-2-03": {spotify:"",yandex:"",vk:"",apple:""}, // 3. высоко(ft.vladislavdbelya)
    "lija-2-04": {spotify:"",yandex:"",vk:"",apple:""}, // 4. LAZER VOVA 2
    "lija-2-05": {spotify:"",yandex:"",vk:"",apple:""}, // 5. сладкий дым(ft.Act0r1)
    "lija-2-06": {spotify:"",yandex:"",vk:"",apple:""}, // 6. приносят 2
    "lija-2-07": {spotify:"",yandex:"",vk:"",apple:""}, // 7. курю так много(outro)

    // ===== 4 U =====
    "lija-3-01": {spotify:"",yandex:"",vk:"",apple:""}, // 1. Пиздец
    "lija-3-02": {spotify:"",yandex:"",vk:"",apple:""}, // 2. Больше
    "lija-3-03": {spotify:"",yandex:"",vk:"",apple:""}, // 3. Амбиция
    "lija-3-04": {spotify:"",yandex:"",vk:"",apple:""}, // 4. Будущие (для тебя)

    // ===== MUSIC IS ME, Pt. 2 =====
    "lija-5-01": {spotify:"",yandex:"",vk:"",apple:""}, // 1. ИНТРО
    "lija-5-02": {spotify:"",yandex:"",vk:"",apple:""}, // 2. Чего добился
    "lija-5-03": {spotify:"",yandex:"",vk:"",apple:""}, // 3. Бублик
    "lija-5-04": {spotify:"",yandex:"",vk:"",apple:""}, // 4. В Поисках Клада
    "lija-5-05": {spotify:"",yandex:"",vk:"",apple:""}, // 5. Фейм. Телки и пачки
    "lija-5-06": {spotify:"",yandex:"",vk:"",apple:""}, // 6. Утро
    "lija-5-07": {spotify:"",yandex:"",vk:"",apple:""}, // 7. Каждый день
    "lija-5-08": {spotify:"",yandex:"",vk:"",apple:""}, // 8. Говорят
    "lija-5-09": {spotify:"",yandex:"",vk:"",apple:""}, // 9. Головокружение
    "lija-5-10": {spotify:"",yandex:"",vk:"",apple:""}, // 10. Даже Когда Ум…

    // ===== NW 4 =====
    "lija-6-01": {spotify:"",yandex:"",vk:"",apple:""}, // 1. NEW WAY 4 (HEAVY METAL 3)

    // ===== LIJA =====
    "lija-7-01": {spotify:"",yandex:"",vk:"",apple:""}, // 1. [SKIT] - L (LIGHT)
    "lija-7-02": {spotify:"",yandex:"",vk:"",apple:""}, // 2. Лицо в стекле
    "lija-7-03": {spotify:"",yandex:"",vk:"",apple:""}, // 3. Искры (FIRE)
    "lija-7-04": {spotify:"",yandex:"",vk:"",apple:""}, // 4. [SKIT] - I (IDENTITY)
    "lija-7-05": {spotify:"",yandex:"",vk:"",apple:""}, // 5. Белый шум
    "lija-7-06": {spotify:"",yandex:"",vk:"",apple:""}, // 6. J-прилив (J-Tide)
    "lija-7-07": {spotify:"",yandex:"",vk:"",apple:""}, // 7. [SKIT] - J (JOURNEY)
    "lija-7-08": {spotify:"",yandex:"",vk:"",apple:""}, // 8. Опять не правда
    "lija-7-09": {spotify:"",yandex:"",vk:"",apple:""}, // 9. Атомы
    "lija-7-10": {spotify:"",yandex:"",vk:"",apple:""}, // 10. [SKIT] - A (ACCEPTANCE)
    "lija-7-11": {spotify:"",yandex:"",vk:"",apple:""}, // 11. Игра Теней
    "lija-7-12": {spotify:"",yandex:"",vk:"",apple:""}, // 12. [SKIT] - FIN
    "lija-7-13": {spotify:"",yandex:"",vk:"",apple:""}, // 13. Дом (Ft.Три Дня Дождя) (Bonus)
    "lija-7-14": {spotify:"",yandex:"",vk:"",apple:""}, // 14. Тоже мечтаю (Ft. OG BUDA) (Bonus)

    // ===== BM26 (Last One) =====
    "lija-8-01": {spotify:"",yandex:"",vk:"",apple:""}, // 1. Я хочу поговорить (skit)
    "lija-8-02": {spotify:"",yandex:"",vk:"",apple:""}, // 2. BM26 INTRO
    "lija-8-03": {spotify:"",yandex:"",vk:"",apple:""}, // 3. Дедройт сука
    "lija-8-04": {spotify:"",yandex:"",vk:"",apple:""}, // 4. перекур 1 (skit)
    "lija-8-05": {spotify:"",yandex:"",vk:"",apple:""}, // 5. Бля нахуй ****
    "lija-8-06": {spotify:"",yandex:"",vk:"",apple:""}, // 6. More (Remix)(Ft.ActOr1) [Bonus]
    "lija-8-07": {spotify:"",yandex:"",vk:"",apple:""}, // 7. donor (Ft.Baby Cute) [Bonus]
    "lija-8-08": {spotify:"",yandex:"",vk:"",apple:""}, // 8. Не адекват
    "lija-8-09": {spotify:"",yandex:"",vk:"",apple:""}, // 9. перекур 2 (skit)
    "lija-8-10": {spotify:"",yandex:"",vk:"",apple:""}, // 10. Сплетни (Ft.Conflict)
    "lija-8-11": {spotify:"",yandex:"",vk:"",apple:""}, // 11. Потеря смысла [Bonus]
    "lija-8-12": {spotify:"",yandex:"",vk:"",apple:""}, // 12. Важно (skit)
    "lija-8-13": {spotify:"",yandex:"",vk:"",apple:""}, // 13. любит нарк* [Bonus]
    "lija-8-14": {spotify:"",yandex:"",vk:"",apple:""}, // 14. NEW YEAT
    "lija-8-15": {spotify:"",yandex:"",vk:"",apple:""}, // 15. перекур 3 (skit)
    "lija-8-16": {spotify:"",yandex:"",vk:"",apple:""}, // 16. Заебали
    "lija-8-17": {spotify:"",yandex:"",vk:"",apple:""}, // 17. Я не хотел бы чтобы у меня был такой трек 2
    "lija-8-18": {spotify:"",yandex:"",vk:"",apple:""}, // 18. Последний трек
    "lija-8-19": {spotify:"",yandex:"",vk:"",apple:""}, // 19. BM26 OUTRO (skit)

    // ===== Lukoil =====
    "lija-11b-01": {spotify:"",yandex:"",vk:"",apple:""}, // 1. Улетаю
    "lija-11b-02": {spotify:"",yandex:"",vk:"",apple:""}, // 2. Меняют
    "lija-11b-03": {spotify:"",yandex:"",vk:"",apple:""}, // 3. Космос
    "lija-11b-04": {spotify:"",yandex:"",vk:"",apple:""}, // 4. 5 в 1
    "lija-11b-05": {spotify:"",yandex:"",vk:"",apple:""}, // 5. Вряд ли идеальный друг

    // ===== Эхо в пустой комнате =====
    "lija-9b-01": {spotify:"",yandex:"",vk:"",apple:""}, // 1. ERROR
    "lija-9b-02": {spotify:"",yandex:"",vk:"",apple:""}, // 2. Привычки
    "lija-9b-03": {spotify:"",yandex:"",vk:"",apple:""}, // 3. Ненавижу зиму
    "lija-9b-04": {spotify:"",yandex:"",vk:"",apple:""}, // 4. Узоры Жизни
    "lija-9b-05": {spotify:"",yandex:"",vk:"",apple:""}, // 5. Комета (Ft.Неисправность) [BONUS]
    "lija-9b-06": {spotify:"",yandex:"",vk:"",apple:""}, // 6. Не поможет (Ft.Неисправность) [BONUS]
  }
};
