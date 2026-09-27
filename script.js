const translations = {

    ru: {

        navAbout: "ОБ ИГРЕ",
        navScreenshots: "ГЕЙМПЛЕЙ",
        navDownload: "СКАЧАТЬ",

        heroDescription:
            "Ты просто хотел найти нормальный противогаз. Теперь у тебя есть бункер, лопата и очень плохие решения.",

        downloadButton:
            "СКАЧАТЬ ИГРУ ↓",

        ticker1:
            "СТАРЫЕ БУНКЕРЫ",

        ticker2:
            "ПРОТИВОГАЗЫ",

        ticker3:
            "ФИЛЬТРЫ",

        ticker4:
            "ЛОПАТА",

        ticker5:
            "ЗАЧЕМ ЭТО ВСЁ?",

        aboutLabel:
            "ОПИСАНИЕ",

        aboutTitle:
            "ЗДЕСЬ НИКТО <span>НЕ ЗНАЕТ, ЧТО ПРОИСХОДИТ.</span>",

        aboutLead:
            "Digger: Zone — игра про исследование старых бункеров, поиск противогазов, фильтров и прочих вещей, которые нормальный человек давно бы оставил в земле.",

        aboutText1:
            "Ходи по заброшенным объектам, открывай странные помещения, собирай полезный хлам и пытайся понять, почему здесь вообще есть ещё один коридор.",

        aboutText2:
            "И да — лопата зачем-то тоже нужна. Не спрашивай.",

        feature1Title:
            "СТАРЫЕ БУНКЕРЫ",

        feature1Text:
            "Коридоры, комнаты, подвалы и места, куда лучше было не заходить.",

        feature2Title:
            "ПОИСК ХЛАМА",

        feature2Text:
            "Противогазы, фильтры и другие сокровища цивилизации.",

        feature3Title:
            "АБСУРД",

        feature3Text:
            "Никаких гарантий, что происходящее имеет хоть какой-то смысл.",

        screenshotsLabel:
            "ГЕЙМПЛЕЙ",

        screenshotsHint:
            "Реальные скриншоты игры.",

        shot1:
            "ВХОД В ЗОНУ",

        shot2:
            "СТАРЫЙ БУНКЕР",

        shot3:
            "ЧТО-ТО НАЙДЕНО",

        shot4:
            "НЕ НАДО БЫЛО СЮДА ИДТИ",

        officialWarning:
            "ОФИЦИАЛЬНОЕ ПРЕДУПРЕЖДЕНИЕ",

        warningText:
            "Разработчик не несёт ответственности за найденные вами противогазы, внезапные желания копать землю и вопросы «а зачем мне этот фильтр?»." ,

        quote:
            "«Я зашёл просто посмотреть.» <span>— человек, который уже третий час в бункере</span>",

        downloadLabel:
            "ЗАГРУЗКА",

        downloadTitle:
            "ГОТОВ <span>КОПАТЬ?</span>",

        downloadText:
            "Скачивай игру, запускай и отправляйся туда, где нормальные люди не ходят.",

        downloadGame:
            "⬇ СКАЧАТЬ DIGGER: ZONE",

        itchButton:
            "ОТКРЫТЬ НА ITCH.IO ↗",

        downloadNote:
            "Файл игры: game/Digger-Zone.zip",

        footerText:
            "Сделано с лопатой, пылью и сомнительными решениями.",

        backTop:
            "НАВЕРХ ↑"
    },


    en: {

        navAbout:
            "ABOUT",

        navScreenshots:
            "GAMEPLAY",

        navDownload:
            "DOWNLOAD",

        heroDescription:
            "You just wanted to find a decent gas mask. Now you have a bunker, a shovel and some terrible decisions.",

        downloadButton:
            "DOWNLOAD GAME ↓",

        ticker1:
            "OLD BUNKERS",

        ticker2:
            "GAS MASKS",

        ticker3:
            "FILTERS",

        ticker4:
            "SHOVEL",

        ticker5:
            "WHY IS ANY OF THIS HERE?",

        aboutLabel:
            "DESCRIPTION",

        aboutTitle:
            "NOBODY HERE <span>KNOWS WHAT'S GOING ON.</span>",

        aboutLead:
            "Digger: Zone is a game about exploring old bunkers and searching for gas masks, filters and other things a normal person would have left buried.",

        aboutText1:
            "Explore abandoned locations, open suspicious rooms, collect useful junk and try to understand why there is yet another corridor.",

        aboutText2:
            "And yes — somehow the shovel is useful too. Don't ask.",

        feature1Title:
            "OLD BUNKERS",

        feature1Text:
            "Corridors, rooms, basements and places you probably shouldn't enter.",

        feature2Title:
            "JUNK HUNTING",

        feature2Text:
            "Gas masks, filters and other treasures of civilization.",

        feature3Title:
            "ABSURDITY",

        feature3Text:
            "No guarantees that anything happening here makes any sense.",

        screenshotsLabel:
            "GAMEPLAY",

        screenshotsHint:
            "Real screenshots from the game.",

        shot1:
            "ENTERING THE ZONE",

        shot2:
            "OLD BUNKER",

        shot3:
            "FOUND SOMETHING",

        shot4:
            "SHOULDN'T HAVE COME HERE",

        officialWarning:
            "OFFICIAL WARNING",

        warningText:
            "The developer is not responsible for gas masks you find, sudden urges to dig holes, or questions like 'why do I need this filter?'.",

        quote:
            "“I just came in to look around.” <span>— a person who has been in the bunker for three hours</span>",

        downloadLabel:
            "DOWNLOAD",

        downloadTitle:
            "READY <span>TO DIG?</span>",

        downloadText:
            "Download the game, launch it and go somewhere normal people don't.",

        downloadGame:
            "⬇ DOWNLOAD DIGGER: ZONE",

        itchButton:
            "OPEN ON ITCH.IO ↗",

        downloadNote:
            "Game file: game/Digger-Zone.zip",

        footerText:
            "Made with a shovel, dust and questionable decisions.",

        backTop:
            "BACK TO TOP ↑"
    }

};


function setLanguage(language) {

    const dictionary = translations[language];

    document.documentElement.lang = language;


    document
        .querySelectorAll("[data-lang]")
        .forEach(element => {

            const key = element.dataset.lang;

            if (dictionary[key] !== undefined) {

                element.innerHTML = dictionary[key];

            }

        });


    document
        .querySelectorAll(".language-button")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.language === language
            );

        });


    localStorage.setItem(
        "digger-zone-language",
        language
    );
}


document
    .querySelectorAll(".language-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            setLanguage(
                button.dataset.language
            );

        });

    });


const savedLanguage =
    localStorage.getItem("digger-zone-language") || "ru";


setLanguage(savedLanguage);


/* Появление блоков при прокрутке */

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(
        ".feature, .screenshot, .warning-box, .download-card"
    )
    .forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });