// Global variables
let selectedTranslation = 'en.sahih';
let displayMode = 'with-translation';
let allSurahs = [];

// Translation options
const translationOptions = {
  'en.sahih': 'Sahih International',
  'en.pickthall': 'Pickthall',
  'en.yusuf': 'Yusuf Ali',
  'en.hilali': 'Hilali & Khan'
};

// Duas Collection with Harakat - Organized by Category
const duasCollection = {
  prayers: [
    {
      title: "Dua before Prayer",
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ وَخَيْرَهُ وَخَيْرَ مَا فِيهِ وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا فِيهِ",
      english: "O Allah, I ask You for the good of this day and the good that is in it, and I seek refuge in You from its evil and the evil that is in it."
    },
    {
      title: "Dua after Prayer",
      arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      english: "O Allah, You are As-Salam and from You is peace. Blessed are You, O Lord of Majesty and Honor."
    },
    {
      title: "Dua for Concentration in Prayer",
      arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
      english: "My Lord, expand for me my breast and ease for me my task, and untie the knot from my tongue."
    }
  ],
  praising: [
    {
      title: "Subhanallah",
      arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
      english: "Glory be to Allah and praise be to Him. Glory be to Allah, the Most Great."
    },
    {
      title: "La ilaha illallah",
      arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ",
      english: "There is no god but Allah alone, with no partner. To Him belongs the dominion and to Him belongs all praise."
    },
    {
      title: "Alhamdulillah",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      english: "All praise is due to Allah, the Lord of the worlds."
    }
  ],
  travel: [
    {
      title: "Dua for Journey",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِن وَعَثَاءِ السَّفَرِ وَكآبَةِ الْمَنْظَرِ وَسُوءِ الْحَالِ وَالْحَوْرِ بَعْدَ الْكَوْنِ",
      english: "O Allah, I seek refuge in You from the hardship of the journey and the distressing sights."
    },
    {
      title: "Dua Upon Traveling",
      arabic: "اللَّهُمَّ بِسْمِكَ أَنْطَلِقُ وَعَلَيْكَ أَتَوَكَّلُ",
      english: "O Allah, in Your name I depart and upon You I rely."
    }
  ],
  morning_evening: [
    {
      title: "Morning Dua",
      arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
      english: "O Allah, by You we have entered the morning and by You we enter the evening, by You we live and by You we die."
    },
    {
      title: "Evening Dua",
      arabic: "اللَّهُمَّ أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      english: "O Allah, the evening has come and the dominion belongs to Allah, the Lord of the worlds."
    }
  ],
  food_drink: [
    {
      title: "Dua Before Eating",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      english: "In the name of Allah, the Most Gracious, the Most Merciful."
    },
    {
      title: "Dua After Eating",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ",
      english: "All praise is due to Allah who fed us and gave us drink and made us among the Muslims."
    }
  ],
  home_family: [
    {
      title: "Dua for Family",
      arabic: "اللَّهُمَّ ارْزُقْنِي صَالِحًا يَكُونُ مِثْلِي وَلَا أَكُونُ مِثْلَ مَن ظَلَمَنِي وَارْزُقْنِي حُبًّا مِنْكَ",
      english: "O Allah, grant me a righteous spouse and do not make me like those who wronged me."
    },
    {
      title: "Dua for Children",
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
      english: "Our Lord, grant us comfort from our spouses and offspring and make us leaders for the righteous."
    }
  ],
  joy_etiquette: [
    {
      title: "Dua for Good Character",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْغَيْظِ وَالْغِنَّ",
      english: "O Allah, I seek refuge in You from rage and arrogance."
    },
    {
      title: "Dua for Happiness",
      arabic: "يَا مُحَوِّلَ الْأَحْوَالِ حَوِّلْ حَالَنَا إِلَىٰ أَحْسَنِ حَالٍ",
      english: "O Transformer of circumstances, transform our state to the best of states."
    }
  ],
  sickness_death: [
    {
      title: "Dua for the Sick",
      arabic: "اللَّهُمَّ اكْشِفْ عَنَّا الْبَلَاءَ كَمَا كَشَفْتَهُ عَن ثَمُودَ",
      english: "O Allah, remove from us hardship as You removed it from Thamud."
    },
    {
      title: "Dua When Visiting the Sick",
      arabic: "لَا بَأْسَ طَهُورٌ إِن شَاءَ اللَّهُ",
      english: "No harm, it will be a purification if Allah wills."
    },
    {
      title: "Dua for the Deceased",
      arabic: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ",
      english: "O Allah, forgive him and have mercy upon him, grant him wellness and pardon him."
    }
  ]
};

// Prayer Times Variables
let currentLat = 31.0159;  // Leesville, LA
let currentLng = -93.2605;
let currentLocationName = 'Leesville, Louisiana';

// Set active nav link
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Search location using Nominatim (free geocoding service)
async function searchLocation(locationName) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json&limit=1`
    );
    const data = await response.json();

    if (data && data.length > 0) {
      const result = data[0];
      currentLat = parseFloat(result.lat);
      currentLng = parseFloat(result.lon);
      currentLocationName = result.display_name;

      updateLocationDisplay();
      fetchPrayerTimes();
      return true;
    } else {
      alert('Location not found. Please try another search.');
      return false;
    }
  } catch (error) {
    console.error('Error searching location:', error);
    alert('Error searching location. Please try again.');
    return false;
  }
}

function updateLocationDisplay() {
  const locationDisplay = document.getElementById('currentLocation');
  if (locationDisplay) {
    locationDisplay.textContent = `📍 ${currentLocationName}`;
  }
}

// Setup location search event listeners
function setupLocationSearch() {
  const searchBtn = document.getElementById('searchBtn');
  const locationInput = document.getElementById('locationInput');

  if (searchBtn && locationInput) {
    searchBtn.addEventListener('click', () => {
      const location = locationInput.value.trim();
      if (location) {
        searchLocation(location);
      }
    });

    locationInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const location = locationInput.value.trim();
        if (location) {
          searchLocation(location);
        }
      }
    });

    // Set initial location display
    updateLocationDisplay();
  }
}

// Fetch Prayer Times
async function fetchPrayerTimes() {
  try {
    // Get today's date in DD-MM-YYYY format
    const today = new Date();
    const date = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${date}-${month}-${year}`;

    const response = await fetch(
      `https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${currentLat}&longitude=${currentLng}&method=2`
    );
    const data = await response.json();

    if (data.code === 200) {
      displayPrayerTimes(data.data.timings);
    }
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    const container = document.getElementById('prayerTimes');
    if (container) {
      container.innerHTML = '<div class="loading" style="color: red;">Error loading prayer times</div>';
    }
  }
}

function displayPrayerTimes(timings) {
  const prayerContainer = document.getElementById('prayerTimes');
  if (!prayerContainer) return;

  const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  const now = new Date();
  const currentTime = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');

  let currentPrayer = null;
  let nextPrayer = null;

  // Find current and next prayer
  for (let i = 0; i < prayers.length; i++) {
    if (timings[prayers[i]]) {
      if (timings[prayers[i]] <= currentTime) {
        currentPrayer = prayers[i];
      }
      if (!nextPrayer && timings[prayers[i]] > currentTime) {
        nextPrayer = prayers[i];
      }
    }
  }

  let html = '';
  prayers.forEach(prayer => {
    if (timings[prayer]) {
      const isCurrentOrNext = prayer === currentPrayer || prayer === nextPrayer;
      const isNext = prayer === nextPrayer;
      const classes = isCurrentOrNext ? (isNext ? 'prayer-time prayer-next' : 'prayer-time prayer-current') : 'prayer-time';

      html += `
                <div class="${classes}">
                    ${isNext ? '<div class="prayer-badge">Next</div>' : ''}
                    ${isCurrentOrNext && isCurrentOrNext !== isNext ? '<div class="prayer-badge current-badge">Active</div>' : ''}
                    <div class="prayer-name">${prayer}</div>
                    <div class="prayer-time-text">${timings[prayer]}</div>
                </div>
            `;
    }
  });

  prayerContainer.innerHTML = html;
}

// Fetch all Surahs from Al-Quran Cloud API
async function fetchSurahs() {
  try {
    const response = await fetch('https://api.alquran.cloud/v1/surah');
    const data = await response.json();

    if (data.code === 200 && data.data) {
      allSurahs = data.data;
      populateSurahSelect();
      // Load first surah by default
      if (allSurahs.length > 0) {
        loadSurah(allSurahs[0].number);
      }
    }
  } catch (error) {
    console.error('Error fetching surahs:', error);
    const select = document.getElementById('surahSelect');
    if (select) {
      select.innerHTML = '<option value="">Error loading chapters</option>';
    }
  }
}

function populateSurahSelect() {
  const select = document.getElementById('surahSelect');
  if (!select) return;

  let html = '';

  allSurahs.forEach(surah => {
    html += `<option value="${surah.number}">${surah.number}. ${surah.englishName}</option>`;
  });

  select.innerHTML = html;
  select.addEventListener('change', (e) => {
    if (e.target.value) {
      loadSurah(e.target.value);
    }
  });

  // Setup translation selector
  setupTranslationSelector();
}

function setupTranslationSelector() {
  const translationSelect = document.getElementById('translationSelect');
  const displayModeSelect = document.getElementById('displayMode');

  if (translationSelect) {
    let html = '';
    for (const [key, name] of Object.entries(translationOptions)) {
      html += `<option value="${key}" ${key === selectedTranslation ? 'selected' : ''}>${name}</option>`;
    }

    translationSelect.innerHTML = html;
    translationSelect.addEventListener('change', (e) => {
      selectedTranslation = e.target.value;
      const surahSelect = document.getElementById('surahSelect');
      if (surahSelect && surahSelect.value) {
        loadSurah(surahSelect.value);
      }
    });
  }

  if (displayModeSelect) {
    displayModeSelect.addEventListener('change', (e) => {
      displayMode = e.target.value;
      const surahSelect = document.getElementById('surahSelect');
      if (surahSelect && surahSelect.value) {
        loadSurah(surahSelect.value);
      }
    });
  }
}

// Load Surah content with Naskh Script from Al-Quran Cloud API
async function loadSurah(surahNumber) {
  try {
    // Fetch Arabic Naskh script and selected English translation in parallel
    const [arabicResponse, englishResponse] = await Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.quran-uthmani`),
      fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/${selectedTranslation}`)
    ]);

    const arabicData = await arabicResponse.json();
    const englishData = await englishResponse.json();

    if (arabicData.code === 200 && englishData.code === 200) {
      displaySurah(arabicData.data, englishData.data);
    } else {
      throw new Error('Failed to fetch surah data');
    }
  } catch (error) {
    console.error('Error fetching surah:', error);
    const quranContent = document.getElementById('quranContent');
    if (quranContent) {
      quranContent.innerHTML = '<div class="loading" style="color: red;">Error loading surah. Please try again.</div>';
    }
  }
}

function displaySurah(arabicSurah, englishSurah) {
  const quranContent = document.getElementById('quranContent');
  if (!quranContent) return;

  let html = `
        <div class="surah-info">
            <div class="surah-name">${arabicSurah.number}. ${arabicSurah.englishName}</div>
            <div class="surah-verses">Number of Verses: ${arabicSurah.ayahs.length}</div>
            <div class="surah-desc" style="font-size: 0.9rem; color: #64748b; margin-top: 8px;">Naskh Script (Uthmani)${displayMode === 'with-translation' ? ' with English Translation' : ''}</div>
        </div>
    `;

  arabicSurah.ayahs.forEach((ayah, index) => {
    const englishAyah = englishSurah && englishSurah.ayahs && englishSurah.ayahs[index] ? englishSurah.ayahs[index] : null;

    html += `
            <div class="verse">
                <div class="verse-text">${ayah.text}</div>
                ${displayMode === 'with-translation' && englishAyah ? `<div class="verse-translation">${englishAyah.text}</div>` : ''}
                <div class="verse-number">Verse: ${ayah.numberInSurah}</div>
            </div>
        `;
  });

  quranContent.innerHTML = html;
}

// Setup Hamburger Menu
function setupBurgerMenu() {
  const burgerMenu = document.getElementById('burgerMenu');
  const navList = document.getElementById('navList');

  if (burgerMenu && navList) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navList.classList.remove('active');
      });
    });
  }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  setupBurgerMenu();

  // Check which page we're on and load appropriate content
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  if (currentPage === 'prayer-times.html') {
    setupLocationSearch();
    fetchPrayerTimes();
  } else if (currentPage === 'quran.html') {
    fetchSurahs();
  } else if (currentPage === 'duas.html') {
    setupDuasPage();
  }
});

// Fetch Duas from API with fallback to local collection
async function fetchDuasFromAPI() {
  try {
    // Try fetching from Islamic-api.com
    const response = await fetch('https://api.api-ninjas.com/v1/duaa');
    if (response.ok) {
      const data = await response.json();
      // Transform API data to match our format
      return transformAPIData(data);
    }
  } catch (error) {
    console.log('API fetch failed, using local collection:', error);
  }
  // Return local collection as fallback
  return duasCollection;
}

function transformAPIData(apiData) {
  // Transform API response into our format
  const transformed = {
    fajr: [],
    dhuhr: [],
    asr: [],
    maghrib: [],
    isha: [],
    general: []
  };

  if (Array.isArray(apiData)) {
    apiData.forEach(dua => {
      const category = dua.category || 'general';
      if (transformed[category]) {
        transformed[category].push({
          title: dua.title || 'Dua',
          arabic: dua.text || '',
          english: dua.translation || ''
        });
      }
    });
  }

  return transformed;
}

// Setup Duas Page
async function setupDuasPage() {
  const categoryButtons = document.querySelectorAll('.category-btn');

  // Fetch duas dynamically
  let currentDuasCollection = await fetchDuasFromAPI();

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      categoryButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      // Display duas for selected category
      displayDuas(btn.getAttribute('data-category'), currentDuasCollection);
    });
  });

  // Display prayers duas by default
  displayDuas('prayers', currentDuasCollection);
}

// Display Duas
function displayDuas(prayer, duasData = duasCollection) {
  const duasContainer = document.getElementById('duasContainer');
  if (!duasContainer) return;

  const duas = duasData[prayer] || [];

  let html = '';
  duas.forEach((dua, index) => {
    html += `
            <div class="dua-card">
                <div class="dua-title">${index + 1}. ${dua.title}</div>
                <div class="dua-arabic">${dua.arabic}</div>
                <div class="dua-english">${dua.english}</div>
            </div>
        `;
  });

  duasContainer.innerHTML = html;
}
