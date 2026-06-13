# My Muslim App

A comprehensive Islamic companion web application featuring the Holy Quran, prayer times, and Islamic duas (supplications).

## Features

- **📖 Holy Quran**: Complete Quran text with multiple English translations
  - Naskh (Uthmani) script for clarity
  - 4 English translation options (Sahih International, Pickthall, Yusuf Ali, Hilali & Khan)
  - Toggle between Arabic-only and Arabic with translation display modes
  - All 114 Surahs with verse-by-verse display

- **⏰ Prayer Times**: Accurate prayer times for any location
  - Real-time prayer time calculation using Aladhan API
  - Location search with geocoding (Nominatim)
  - Current prayer highlighted in gold, next prayer in blue
  - Support for any location worldwide

- **📿 Islamic Duas**: Curated supplications for every occasion
  - 8 categories: Prayers, Praising Allah, Travel, Morning & Evening, Food & Drink, Home & Family, Joy & Etiquette, Sickness & Death
  - Arabic text with full harakat (diacritical marks)
  - English translations
  - Dynamic category selection

## APIs Used

- **Al-Quran Cloud API** - Quran text with multiple scripts and translations
- **Aladhan API** - Prayer times calculation
- **Nominatim OSM API** - Geocoding for location search

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla - No frameworks)
- **Responsive Design**: Mobile-first approach with hamburger menu
- **Browser Compatible**: Works in all modern browsers

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/abdulai1sow/MyMuslimApp.git
cd MyMuslimApp
```

2. Open in a local server:

```bash
python3 -m http.server 8000
```

3. Visit `http://localhost:8000` in your browser

## File Structure

```
quranApp/
├── index.html          # Home page
├── prayer-times.html   # Prayer times page
├── quran.html         # Quran reader page
├── duas.html          # Duas page
├── styles.css         # Main stylesheet
├── script.js          # Core functionality
└── README.md          # This file
```

## Features Details

### Home Page

- Welcome message
- Feature cards for Prayer Times, Quran, and Duas
- Quick navigation to all sections

### Prayer Times Page

- Location search input
- Current prayer highlighted (Active badge)
- Next prayer highlighted (Next badge)
- Prayer information and timing
- Responsive layout

### Quran Reader

- Surah selector with all 114 chapters
- Translation selector with 4 options
- Display mode toggle (Arabic only / With Translation)
- RTL/LTR text handling
- Verse-by-verse display with translations

### Duas Section

- 8 category buttons (3 rows on desktop, responsive on mobile)
- Beautiful card-based layout
- Arabic with harakat + English translations
- Dynamic category switching

### Mobile Navigation

- Hamburger menu for mobile devices
- Smooth animations
- Automatic menu close on link click

## Responsive Design

- Desktop: Full horizontal navigation, 3-column feature cards
- Tablet: Adjusted layouts
- Mobile: Hamburger menu, single-column layouts, optimized for small screens

## Future Enhancements

- Offline caching with service workers
- Audio Quran playback
- Search functionality within Quran verses
- Bookmark favorite verses
- Dark mode toggle
- Customizable prayer calculation methods
- Hijri date display

## License

Open source - Feel free to use, modify, and distribute.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## Contact

For questions or suggestions, please create an issue on GitHub.

---

Made with ❤️ for the Muslim community
