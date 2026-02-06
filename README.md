# 📖 Dictionary Web App

A professional, feature-rich dictionary web application built with vanilla JavaScript. Search for any English word to get definitions, pronunciations, synonyms, and more.

## ✨ Features

- 🔍 **Word Search**: Search for any English word and get comprehensive definitions
- 🔊 **Pronunciation Audio**: Listen to correct pronunciations when available
- 📚 **Multiple Meanings**: View all meanings with different parts of speech (noun, verb, etc.)
- 🔗 **Synonyms**: Click on synonyms to instantly search for related words
- 🎨 **Theme Toggle**: Switch between light and dark modes with localStorage persistence
- 🖋️ **Font Selection**: Choose between Sans Serif, Serif, and Mono fonts
- ⚡ **Loading States**: Smooth loading indicators for better UX
- ❌ **Error Handling**: User-friendly error messages for invalid searches
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## 🚀 Live Demo

[View Live Demo](https://yourusername.github.io/DictionaryApp/)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **SCSS/CSS3** - Modern styling with variables and mixins
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JavaScript
- **Free Dictionary API** - Real-time word data
- **Local Storage** - Persist user preferences (theme, font)

## 🏗️ Architecture

This project follows professional development patterns:

- **Component-Based Architecture**: Modular, reusable components
- **Separation of Concerns**: State management, API calls, and UI rendering are separated
- **Data-First Development**: Single source of truth with centralized state management
- **Async/Await Pattern**: Modern asynchronous JavaScript
- **Error Handling**: Comprehensive try/catch blocks with user-friendly messages

### 📂 Project Structure

```
DictionaryApp/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Compiled CSS from SCSS
├── scss/
│   ├── main.scss           # Main SCSS entry point
│   ├── _variables.scss     # Design tokens (colors, fonts, spacing)
│   ├── _base.scss          # Base styles
│   ├── _components.scss    # Component styles
│   ├── _theme.scss         # Theme (light/dark) styles
│   └── ...                 # Other SCSS partials
├── js/
│   ├── main.js             # Application entry point
│   ├── state.js            # State management
│   ├── api.js              # API integration
│   ├── components/         # UI components
│   │   ├── SearchBar.js
│   │   ├── WordDefinition.js
│   │   ├── EmptyState.js
│   │   ├── LoadingState.js
│   │   └── ErrorState.js
│   └── utils/              # Utility functions
│       ├── theme.js
│       ├── font.js
│       └── handlers.js
├── assets/
│   ├── images/             # Icons and images
│   └── fonts/              # Custom fonts
└── package.json            # Project dependencies
```

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/DictionaryApp.git
   cd DictionaryApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   This will:
   - Compile SCSS to CSS with watch mode
   - Start live-server on http://localhost:5500

4. **Build for production**
   ```bash
   npm run sass
   ```
   Compiles SCSS to optimized CSS

## 🎯 Usage

1. Type any English word in the search box
2. Press Enter or click the search button
3. View definitions, pronunciations, and examples
4. Click on synonyms to search for related words
5. Toggle between light/dark themes
6. Change font style to your preference

## 🧪 API Reference

This app uses the [Free Dictionary API](https://dictionaryapi.dev/):

```
GET https://api.dictionaryapi.dev/api/v2/entries/en/{word}
```

No authentication required.

## 🎨 Design Features

- **Modern UI/UX**: Clean, professional interface
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized asset loading
- **Cross-Browser**: Works on all modern browsers
- **Mobile-First**: Responsive design approach

## 📝 Scripts

```bash
npm run sass        # Compile SCSS once
npm run sass:watch  # Watch SCSS for changes
npm run dev         # Run development server with live reload
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Free Dictionary API](https://dictionaryapi.dev/) for providing the word data
- Font families from Google Fonts
- Icons and assets

---

**Built with ❤️ using Vanilla JavaScript**
