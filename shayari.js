/* ========================================================
   BIRTHDAY SHAYARI & WISHES DATABASE
   29+ Curated Hindi, Hinglish, Romantic & Fun Birthday Shayaris
   ======================================================== */

const shayariData = [
    {
        id: 1,
        category: "Dosti Aur Yaari (Friends)",
        wish: "Janamdin Mubarak Dost!",
        text: "Aasmaan ki bulandiyon par naam ho aapka,\nChand ki dharti par mukaam ho aapka,\nHum to rehte hain choti si duniya mein,\nPar khuda kare saara jahan ho aapka!"
    },
    {
        id: 2,
        category: "Dosti Aur Yaari (Friends)",
        wish: "Happy Birthday!",
        text: "Har lamha aapke hothon pe muskaan rahe,\nHar gham se aapka daaman anjaan rahe,\nJiske saath mehak uthe aapki zindagi,\nHamesha aapke saath wo insaan rahe."
    },
    {
        id: 3,
        category: "Dosti Aur Yaari (Friends)",
        wish: "Janamdin Mubarak!",
        text: "Yaar ka janamdin hai, jashn to banta hai,\nKhushiyon ka har rang tere aangan mein sajta hai,\nDua hai meri, tu hamesha yuhi muskuraye,\nTeri dosti ka saaya hamesha hum pe rahe."
    },
    {
        id: 4,
        category: "Dosti Aur Yaari (Friends)",
        wish: "Happy Birthday Bestie!",
        text: "Deepak mein noor na hota,\nTanha dil majboor na hota,\nHum aapko khud birthday wish karne aate,\nAgar aapka ghar itna door na hota!"
    },
    {
        id: 5,
        category: "Mohabbat Aur Pyaar (Partner / Love)",
        wish: "Janamdin Mubarak Meri Jaan!",
        text: "Tumhari is ada ka kya jawab doon,\nApne pyaar ko kya tohfa, kya gulaab doon,\nKoi achha sa phool hota to mangwaata maali se,\nJo khud gulaab hai, use kya gulaab doon!"
    },
    {
        id: 6,
        category: "Mohabbat Aur Pyaar (Partner / Love)",
        wish: "Happy Birthday Love!",
        text: "Zindagi ki kuch khaas duayein lelo humse,\nJanamdin par kuch nazraane lelo humse,\nBhar de rang jo tere jeevan ke palon mein,\nAaj wo pyaari muskurahatein lelo humse."
    },
    {
        id: 7,
        category: "Mohabbat Aur Pyaar (Partner / Love)",
        wish: "Janamdin Mubarak!",
        text: "Na aasmaan se tapkaaye gaye ho,\nNa upar se giraye gaye ho,\nAaj ke din bade naseeb se,\nHumse milane ke liye banaye gaye ho!"
    },
    {
        id: 8,
        category: "Mohabbat Aur Pyaar (Partner / Love)",
        wish: "Happy Birthday My Love!",
        text: "Hum aapse door hain to kya hua,\nDil se to hamesha aapke paas hain,\nJanamdin ka ye din aapke liye,\nAur bhi zyada khaas hai!"
    },
    {
        id: 9,
        category: "Dua Aur Aashirwad (Blessings)",
        wish: "Janamdin Mubarak Ho!",
        text: "Har din se khoobsurat ho aaj ka din ye,\nHum jise guzaarna nahi chahte aapke bin ye,\nWaise to dil deta hai sadaa hi dua aapko,\nPhir bhi kehte hain, mubarak ho janamdin ye!"
    },
    {
        id: 10,
        category: "Dua Aur Aashirwad (Blessings)",
        wish: "Very Happy Birthday!",
        text: "Khuda buri nazar se bachaye aapko,\nChand sitaron se sajaye aapko,\nGham kya hota hai ye aap bhool hi jaao,\nKhuda zindagi mein itna hasaye aapko."
    },
    {
        id: 11,
        category: "Dua Aur Aashirwad (Blessings)",
        wish: "Janamdin Ki Shubhkamnayein!",
        text: "Sagar ki gehrai se gehra ho astitva aapka,\nAasmaan ki unchai se uncha ho vyaktitva aapka,\nJanamdin ki bohot-bohot shubhkamnayein,\nSadaa khushiyon se bhara rahe jeevan aapka!"
    },
    {
        id: 12,
        category: "Dua Aur Aashirwad (Blessings)",
        wish: "Happy Birthday!",
        text: "Phoolon ne amrit ka jaam bheja hai,\nSuraj ne gagan se salaam bheja hai,\nMubarak ho aapko janamdin ka ye mauqa,\nHumne tahe-dil se ye paigham bheja hai!"
    },
    {
        id: 13,
        category: "Mazaak Masti (Fun & Lighthearted)",
        wish: "Treat Kab Hai?",
        text: "Khuda kare tumhe aisi khushi mile,\nJanamdin pe cake ke saath acchi party mile,\nHum to bas yahi dua karte hain tere liye,\nKi jab bhi mile, teri taraf se badhiya treat mile!"
    },
    {
        id: 14,
        category: "Mazaak Masti (Fun & Lighthearted)",
        wish: "Happy Birthday Buddy!",
        text: "Birthday pe chaand ka noor mile,\nKhushiyon ka ek bada sa samandar mile,\nPar cake ka sabse bada tukda,\nSirf aur sirf mere hi andar mile!"
    },
    {
        id: 15,
        category: "Special Birthday Wish",
        wish: "Happy Birthday to You! 🎂",
        text: "Har din se pyara lagta hai hume ye khaas din,\nJise hum bitana nahi chahte aapke bin.\nWaise to dil deta hai sada hi dua aapko,\nPhir bhi kehte hain — Happy Birthday! 🎉"
    },
    {
        id: 16,
        category: "Special Birthday Wish",
        wish: "Naya Janamdin Mubarak! ❤️",
        text: "Phoolon ne amrit ka jaam bheja hai,\nSuraj ne gagan se salaam bheja hai.\nMubarak ho aapko naya janamdin,\nHumne dil se ye paigaam bheja hai."
    },
    {
        id: 17,
        category: "Special Birthday Wish",
        wish: "Har Dua Aapke Saath! 🎈",
        text: "Khushiyon ki mehfil har pal sajti rahe,\nHar dua aapke saath chalti rahe.\nHar janamdin aapka itna khaas ho,\nKi duniya aapki muskaan dekhti rahe."
    },
    {
        id: 18,
        category: "Special Birthday Wish",
        wish: "Naya Din Nayi Umang! 🌟",
        text: "Zindagi ki har subah khushiyon se bhari ho,\nHar shaam sapno se saja ho.\nJanamdin par bas itni dua hai,\nHar din aapke liye naya ho."
    },
    {
        id: 19,
        category: "Special Birthday Wish",
        wish: "Janamdin Sabse Khaas! 🎊",
        text: "Muskurahat kabhi kam na ho,\nKhushiyan kabhi kam na ho.\nBhagwan kare har saal aapka,\nJanamdin sabse khaas ho."
    },
    {
        id: 20,
        category: "Mohabbat Aur Pyaar (Partner / Love)",
        wish: "Sukoon & Love ❤️",
        text: "Khushbu bankar teri saanson mein sama jayenge,\nSukoon bankar tere dil mein utar jayenge.\nMahsoos karne ki koshish karna,\nDoor rehkar bhi tere paas nazar aayenge."
    },
    {
        id: 21,
        category: "Dua Aur Aashirwad (Blessings)",
        wish: "Har Sapna Sach Ho 🎂",
        text: "Har khushi tumhare kadam chume,\nHar sapna tumhara sach ho.\nJanamdin par bas itni dua hai,\nHar din tumhare liye khaas ho."
    },
    {
        id: 22,
        category: "Mazaak Masti (Fun & Lighthearted)",
        wish: "Happy Birthday Superstar! 🎉",
        text: "Aaj ka din sirf tumhara hai,\nKhushiyon ka ye nazara hai.\nCake bhi tumhara, celebration bhi tumhara,\nHappy Birthday, Superstar!"
    },
    {
        id: 23,
        category: "Mohabbat Aur Pyaar (Partner / Love)",
        wish: "Pyare Aap! ❤️",
        text: "Chand se pyari chandni,\nChandni se pyari raat.\nRaat se pyari zindagi,\nAur zindagi se pyare aap."
    },
    {
        id: 24,
        category: "Dua Aur Aashirwad (Blessings)",
        wish: "Roshan Rahe Har Lamha 🎂",
        text: "Har lamha aapka roshan rahe,\nHar sapna poora hota rahe.\nKhushiyon ki baarish hoti rahe,\nAur chehre par muskaan rehti rahe."
    },
    {
        id: 25,
        category: "Dua Aur Aashirwad (Blessings)",
        wish: "Dil Se Nikli Dua 🌸",
        text: "Dil se nikli hai dua,\nKhushiyon se bhar jaye har raah.\nJanamdin par mile itni khushiyan,\nKi yaad rahe har saal."
    },
    {
        id: 26,
        category: "Dua Aur Aashirwad (Blessings)",
        wish: "Rab Se Dua 🎁",
        text: "Rab se bas ek hi dua,\nHar khushi mile bina wajah.\nHar sapna tumhara poora ho,\nAur har din ho Birthday jaisa."
    },
    {
        id: 27,
        category: "Mazaak Masti (Fun & Lighthearted)",
        wish: "Style Forever! 😎",
        text: "Umar sirf ek number hai,\nStyle to tumhara forever hai.\nSmile kabhi kam na ho,\nLife hamesha awesome rahe."
    },
    {
        id: 28,
        category: "Dua Aur Aashirwad (Blessings)",
        wish: "Always Mashhoor Raho 🎉",
        text: "Dua hai har pal khush raho,\nHar mushkil se door raho.\nKhuda kare har saal,\nAur bhi zyada mashhoor raho."
    },
    {
        id: 29,
        category: "Special Birthday Wish",
        wish: "Nayi Baat ❤️",
        text: "Janamdin ki bahut bahut badhai,\nHar dua ho tumhare saath.\nKhushiyan itni mile tumhe,\nKi har din ban jaye ek nayi baat."
    }
];

// Alias for compatibility
const birthdayShayari = shayariData;

/**
 * Returns a random shayari from database
 * @param {string|null} category Optional category keyword filter
 * @returns {Object} { id, category, wish, text }
 */
function getRandomShayari(category = null) {
    let pool = shayariData;
    if (category) {
        const filtered = shayariData.filter(s => 
            s.category && s.category.toLowerCase().includes(category.toLowerCase())
        );
        if (filtered.length > 0) pool = filtered;
    }
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
}

/**
 * Gets a formatted random shayari text personalized for recipient
 * @param {string} recipientName
 * @param {string|null} category
 * @returns {Object} { wish, text }
 */
function getPersonalizedShayari(recipientName = '', category = null) {
    const item = getRandomShayari(category);
    let text = item.text;
    let wish = item.wish;
    if (recipientName) {
        wish = wish.replace(/dost|buddy|love|superstar/gi, recipientName);
    }
    return {
        wish: wish,
        text: text,
        category: item.category
    };
}