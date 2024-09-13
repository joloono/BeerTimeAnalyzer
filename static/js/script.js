document.addEventListener('DOMContentLoaded', () => {
    const checkButton = document.getElementById('checkBeerTime');
    const resultElement = document.getElementById('result');
    const jokeElement = document.getElementById('joke');
    let retryCount = 0;
    const jokes = [
        "Weisch wieso d'Ente immer eis Bei ufhebed? Wüu wenn si beidi ufhebed, würdes umkeie!",
        "Was macht en Schwiizer, wenn er sich in Finger schniidet? Er goes to the Toblerone!",
        "Wieso gönd Appezeller nöd gern id Schuel? Wüu dete chasch nöd abschriibe!",
        "Was isch s'Lieblingsgetränk vom Schwiizer Bär? Bärner Bier natürli!",
        "Wieso hend d'Schwiizer kei Angst vor em Tüüfel? Will si scho gnueg Hörner uf de Chöpf hend!",
        "Was isch s'Lieblingsässe vom Schwiizer Polizist? Verkehrschäsli!",
        "Wie nennt mer en Schwiizer ohni Humor? Normaal!",
        "Was isch de Unterschied zwüsche eme Schwiizer und eme Igel? De Igel het meh Stachle!",
        "Wieso bruched d'Schwiizer kei GPS? Will si sowieso immer neutral bliibed!",
        "Was isch s'Lieblingsbuech vom Schwiizer? S'Schwiizer Buech natürli!",
        "Wie rüeft mer im Schwiizer Zoo? Chum use, du Murmeli!",
        "Was isch de Unterschied zwüsche eme Schwiizer und eme Chamäleon? S'Chamäleon cha d'Farb wechsle!",
        "Wieso gönd d'Schwiizer nöd gern schwimme? Will si Angscht hend, dass si schmelzed wie Schoggi!",
        "Was isch s'Motto vode Schwiizer Armee? Mir sind neutral, aber au bewaffnet!",
        "Wieso isch de Schwiizer Käs so löchrig? Will d'Chüeh uf de Alp so viel jodled!",
        "Was isch de Unterschied zwüsche eme Schwiizer und eme Fondue? S'Fondue cha au mal heiss werde!",
        "Wieso hend d'Schwiizer kei Angst vor Tsunamis? Will si scho gnueg Welle uf de Flagge hend!",
        "Was isch s'Lieblingstier vom Schwiizer? De Schoggihas natürli!",
        "Wieso gönd d'Schwiizer nöd gern id Wüeschti? Will si dete kei Berge zum verstecke hend!",
        "Was isch de Unterschied zwüsche eme Schwiizer und eme Uhrwerk? S'Uhrwerk cha au mal z'spaat cho!",
        "Wieso bruched d'Schwiizer kei Wecker? Will si scho s'Chuchichäschtli hend zum ufwache!",
        "Was isch s'Lieblingsgetränk vom Schwiizer Banker? Geld-Shots!",
        "Wieso hend d'Schwiizer kei Angst vor em Klimawandel? Will si scho immer uf de Berge glebt hend!",
        "Was isch de Unterschied zwüsche eme Schwiizer und eme Schoggifondue? S'Schoggifondue cha au mal flüssig sii!",
        "Wieso gönd d'Schwiizer nöd gern uf Safari? Will si scho gnueg Tierli uf de Münze hend!"
    ];

    checkButton.addEventListener('click', checkBeerTime);

    function checkBeerTime() {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 16) {
            resultElement.textContent = "Ja, es ist Bierzeit! 🍻";
            resultElement.style.color = 'green';
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            jokeElement.textContent = randomJoke;
            retryCount = 0;
        } else {
            resultElement.textContent = "Noch nicht, warte bis nach 16 Uhr.";
            resultElement.style.color = 'red';
            retryCount++;

            if (retryCount >= 3) {
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                jokeElement.textContent = randomJoke;
            } else {
                jokeElement.textContent = '';
            }
        }
    }
});
