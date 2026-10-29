# Permutation Generator

A simple, responsive web application that generates all unique permutations of a word using JavaScript recursion.

Built with **HTML, CSS, and vanilla JavaScript** as a hands-on project to practice JavaScript algorithms, DOM manipulation, and event handling.

## Features

- **Generate permutations:** Display all possible character arrangements of a word.
- **Unique results:** Automatically remove duplicate permutations using JavaScript `Set`.
- **Permutation counter:** Show the total number of unique permutations.
- **Input validation:** Accept only letters (A–Z), with a maximum of 7 characters.
- **Clear button:** Reset the input and generated results.
- **Responsive design:** Works on desktop and mobile devices.
- **No dependencies:** Runs directly in the browser.

## Technologies Used

- **HTML5** — Application structure
- **CSS3** — Styling and responsive layout
- **JavaScript (ES6+)** — Recursion, arrays, event listeners, and DOM manipulation

## How It Works

The application uses a recursive function called `permuteString()` to generate character permutations.

1. The user enters a word.
2. JavaScript validates the input.
3. The recursive function selects each character and generates permutations of the remaining characters.
4. A `Set` removes duplicate results.
5. The application displays the permutations and their total count.

### Example

**Input:**
```text
cat
```

**Output:**
```text
Total permutations: 6

cat, cta, act, atc, tca, tac
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/permutation-generator.git
   ```

2. Open the project folder.

3. Open `index.html` in your browser.

No installation or build process is required.

## Project Structure

```text
permutation-generator/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Live Demo

The application can be hosted for free using GitHub Pages.

**Live website:** Add your GitHub Pages URL here after deployment.

## What I Learned

This project helped me practice:

- Recursive functions and base cases
- Working with strings and arrays
- Using `slice()`, `Set`, and `forEach()`
- DOM manipulation with `createElement()` and `appendChild()`
- Event handling with `addEventListener()`
- Input validation using regular expressions
- Building responsive user interfaces

## Future Improvements

- Add a copy-to-clipboard feature.
- Allow users to download permutations.
- Add a loading indicator for larger inputs.
- Improve accessibility and keyboard interactions.

## License

This project is available for educational and personal use.
