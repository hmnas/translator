let selectTag = document.querySelectorAll('select')
let translateBtn = document.querySelector('button')
let translationFrom = document.querySelector('.text-form')
let translationTo = document.querySelector('.translate-form')
let exchange = document.querySelector('.exchange')
let icons = document.querySelectorAll('.row i')


let countries = {
    'aa': 'Afar',
    'ab': 'Abkhazian',
    'af': 'Afrikaans',
    'ak': 'Akan',
    'am': 'Amharic',
    'ar': 'Arabic',
    'as': 'Assamese',
    'aw': 'Awadhi',
    'ay': 'Aymara',
    'az': 'Azerbaijani',
    'b1': 'Bhojpuri',
    'b2': 'Maithili',
    'ba': 'Bashkir',
    'be': 'Belarussian',
    'bg': 'Bulgarian',
    'bh': 'Bihari',
    'bi': 'Bislama',
    'bl': 'Balochi',
    'bn': 'Bengali',
    'bo': 'Tibetan',
    'br': 'Breton',
    'ca': 'Catalan', // language g
    'cb': 'Cebuano',
    'ce': 'Chechen', // language g
    'co': 'Corsican',
    'cs': 'Czech',
    'cy': 'Welsh', // language g
    'da': 'Danish',
    'de': 'German',
    'dk': 'Dakhini',
    'dz': 'Bhutani',
    'el': 'Greek',
    'en': 'English',
    'eo': 'Esperanto', // language g
    'es': 'Spanish',
    'et': 'Estonian',
    'eu': 'Basque', // language g
    'fa': 'Persian',
    'fi': 'Finnish',
    'fj': 'Fiji',
    'fo': 'Faeroese',
    'fr': 'French',
    'fy': 'Frisian',
    'ga': 'Irish',
    'gd': 'Scottish Gaelic', // language g
    'gl': 'Galician', // language g
    'gn': 'Guarani',
    'gu': 'Gujarati',
    'ha': 'Hausa',
    'hi': 'Hindi',
    'hr': 'Croatian',
    'ht': 'Haitian Creole',
    'hu': 'Hungarian',
    'hy': 'Armenian',
    'ia': 'Interlingua', // language g
    'ie': 'Interlingue', // language g
    'ik': 'Inupiak', // language g
    'in': 'Indonesian',
    'is': 'Icelandic',
    'it': 'Italian',
    'iw': 'Hebrew',
    'ja': 'Japanese',
    'ji': 'Yiddish', // language g
    'jw': 'Javanese',
    'ka': 'Georgian',
    'kb': 'Kabyle',
    'ki': 'Konkani',
    'kk': 'Kazakh',
    'kl': 'Greenlandic',
    'km': 'Khmer',
    'kn': 'Kannada',
    'ko': 'Korean',
    'ks': 'Kashmiri',
    'ku': 'Kurdish',
    'ky': 'Kirghiz',
    'la': 'Latin',
    'lb': 'Luxembourgish',
    'lm': 'Lombard',
    'ln': 'Lingala',
    'lo': 'Laothian',
    'lt': 'Lithuanian',
    'lv': 'Latvian',
    'mg': 'Malagasy',
    'mi': 'Maori',
    'mk': 'Macedonian',
    'ml': 'Malayalam',
    'mn': 'Mongolian',
    'mo': 'Moldavian',
    'mr': 'Marathi',
    'ms': 'Malay',
    'mt': 'Maltese',
    'mu': 'Makhuwa',
    'mw': 'Marwari',
    'my': 'Burmese',
    'na': 'Nauru',
    'ne': 'Nepali',
    'nl': 'Dutch',
    'no': 'Norwegian',
    'oc': 'Occitan',
    'om': 'Oromo',
    'or': 'Oriya',
    'pa': 'Punjabi',
    'pl': 'Polish',
    'ps': 'Pashto',
    'pt': 'Portuguese',
    'qu': 'Quechua',
    'ri': 'Rifian',
    'rm': 'Rhaeto-Romance',
    'rn': 'Kirundi',
    'ro': 'Romanian',
    'ru': 'Russian',
    'rw': 'Kinyarwanda',
    'sa': 'Sanskrit',
    'sd': 'Sangro',
    'sg': 'Sangro',
    'sh': 'Serbo-Croatian',
    'si': 'Sinhalese',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'sm': 'Samoan',
    'sn': 'Shona',
    'so': 'Somali',
    'sq': 'Albanian',
    'sr': 'Serbian',
    'ss': 'Siswati',
    'st': 'Sesotho',
    'su': 'Sundanese',
    'sv': 'Swedish',
    'sw': 'Swahili',
    'ta': 'Tamil',
    'te': 'Telugu',
    'tg': 'Tajik',
    'th': 'Thai',
    'ti': 'Tigrinya',
    'tk': 'Turkmen',
    'tl': 'Tagalog',
    'tm': 'Tuareg', // language g
    'tn': 'Setswana',
    'to': 'Tonga',
    'tr': 'Turkish',
    'ts': 'Tsonga',
    'tt': 'Tatar',
    'tw': 'Twi',
    'tz': 'Tamazight', // language g
    'ug': 'Uyghur',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'vo': 'Volapuk', // language g
    'wo': 'Wolof',
    'xh': 'Xhosa',
    'yo': 'Yoruba',
    'zh': 'Chinese',
    'zu': 'Zulu'
}

selectTag.forEach((select, id) => {
    for (country in countries) {
        // console.log(country, countries[country])
        let selected;
        if (id == 0 && country == 'en') {
            selected = "selected"
        } else if (id == 1 && country == 'ur') {
            selected = "selected"
        }
        let option = `<option value="${country}" ${selected}>${countries[country]}</option>`
        select.insertAdjacentHTML('beforeend', option)
    }
})


translateBtn.addEventListener('click', function () {

    let text = translationFrom.value
    let translateFrom = selectTag[0].value
    let translateTo = selectTag[1].value
    if (!text) return
    translationTo.setAttribute('placeholder', 'Translating...')
    console.log(text, translateFrom, translateTo)
    let api = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`
    fetch(api).then(res => res.json()).then((data) => {
        console.log(data)
        translationTo.value = data.responseData.translatedText
        translationTo.setAttribute('placeholder', 'Translation')
    })

})

exchange.addEventListener('click', function () {
    let temp = translationFrom.value
    translationFrom.value = translationTo.value
    translationTo.value = temp

    let tempLang = selectTag[0].value
    selectTag[0].value = selectTag[1].value
    selectTag[1].value = tempLang
})


icons.forEach((icon) => {
    icon.addEventListener('click', function (e) {
        console.log(e.target)
        if (e.target.classList.contains('fa-copy')) {
            if (e.target.id == 'from') {
                // console.log('from clicked')
                navigator.clipboard.writeText(translationFrom.value)
            } else {
                // console.log('to clicked')
                navigator.clipboard.writeText(translationTo.value)
            }
        } else {
            // console.log('speech clicked')
            let speak;
            if (e.target.id == 'from') {
                speak = new SpeechSynthesisUtterance(translationFrom.value)
                // speak.lang = selectTag[0].value
            } else {
                speak = new SpeechSynthesisUtterance(translationTo.value)
                // speak.lang = selectTag[1].value
            }
            speechSynthesis.speak(speak)
        }
    })
})