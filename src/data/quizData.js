const quizData = [
    {
      question: "What is React primarily used for?",
      options: ["Styling", "Database", "UI building", "Backend"],
      answer: "UI building",
    },
    {
      question: "Which hook is for side effects?",
      options: ["useState", "useEffect", "useReducer", "useMemo"],
      answer: "useEffect",
    },
    {
      question: "What is JSX?",
      options: [
        "JavaScript with XML",
        "A CSS preprocessor",
        "JSON parser",
        "React hook",
      ],
      answer: "JavaScript with XML",
    },
    {
      question: "Which hook is used to manage component state?",
      options: ["useEffect", "useReducer", "useContext", "useState"],
      answer: "useState",
    },
    {
      question: "What is a component in React?",
      options: [
        "A CSS file",
        "A reusable piece of UI",
        "A database connection",
        "A server function",
      ],
      answer: "A reusable piece of UI",
    },
    {
      question: "How do you pass data from parent to child component?",
      options: ["Context", "Hooks", "Props", "State"],
      answer: "Props",
    },
    {
      question: "What is the use of `key` in a list?",
      options: [
        "To add styling",
        "To uniquely identify list items",
        "To encrypt data",
        "To trigger re-renders",
      ],
      answer: "To uniquely identify list items",
    },
    {
      question: "Which lifecycle method runs after the component mounts?",
      options: ["componentDidMount", "componentWillUnmount", "render", "useEffect"],
      answer: "componentDidMount",
    },
    {
      question: "Which of these is a controlled component?",
      options: [
        "HTML form with no state",
        "React form with state handling",
        "Static component",
        "Dynamic import",
      ],
      answer: "React form with state handling",
    },
    {
      question: "What does `useRef` hook do?",
      options: [
        "Creates a reactive state",
        "Accesses DOM elements or persist values",
        "Triggers re-render",
        "Shares context",
      ],
      answer: "Accesses DOM elements or persist values",
    },
    {
      question: "What is virtual DOM?",
      options: [
        "A clone of the real DOM",
        "A lightweight JS representation of the real DOM",
        "A browser API",
        "A Node.js component",
      ],
      answer: "A lightweight JS representation of the real DOM",
    },
    {
      question: "Which method is used to lift state up?",
      options: [
        "Passing props",
        "Callbacks from child to parent",
        "useContext",
        "useReducer",
      ],
      answer: "Callbacks from child to parent",
    },
    {
      question: "What is the default behavior of `useEffect`?",
      options: [
        "Runs once on mount",
        "Runs on every render",
        "Runs only on unmount",
        "Runs before render",
      ],
      answer: "Runs on every render",
    },
    {
      question: "How can we memoize expensive computation?",
      options: ["useEffect", "useMemo", "useState", "useCallback"],
      answer: "useMemo",
    },
    {
      question: "What does `React.Fragment` do?",
      options: [
        "Adds a div wrapper",
        "Renders multiple elements without extra nodes",
        "Adds new context",
        "Defines a component",
      ],
      answer: "Renders multiple elements without extra nodes",
    },
    {
      question: "What is the purpose of `useCallback`?",
      options: [
        "Call API",
        "Prevent unnecessary re-creations of functions",
        "Run after render",
        "Share state",
      ],
      answer: "Prevent unnecessary re-creations of functions",
    },
    {
      question: "Which hook provides global-like state sharing?",
      options: ["useState", "useReducer", "useContext", "useEffect"],
      answer: "useContext",
    },
    {
      question: "Which statement about props is true?",
      options: [
        "Props can be modified inside component",
        "Props are read-only",
        "Props are like useState",
        "Props require reducer",
      ],
      answer: "Props are read-only",
    },
    {
      question: "How do you conditionally render content?",
      options: [
        "Using `if` or ternary inside JSX",
        "Using only CSS",
        "Using context",
        "Using lifecycle method",
      ],
      answer: "Using `if` or ternary inside JSX",
    },
    {
      question: "What is the purpose of `ReactDOM.createPortal`?",
      options: [
        "To create nested components",
        "To render outside parent DOM hierarchy",
        "To improve state",
        "To use suspense",
      ],
      answer: "To render outside parent DOM hierarchy",
    },
    {
      question: "Which hook would you use for reducers?",
      options: ["useState", "useEffect", "useReducer", "useMemo"],
      answer: "useReducer",
    },
    {
      question: "What does lifting state up mean?",
      options: [
        "Moving state to a higher component to share it",
        "Passing props down",
        "Using Context",
        "Moving state to Redux",
      ],
      answer: "Moving state to a higher component to share it",
    },
    {
      question: "What does `lazy()` and `Suspense` enable in React?",
      options: [
        "Server-side rendering",
        "Code splitting and lazy loading",
        "Optimized CSS",
        "Better context management",
      ],
      answer: "Code splitting and lazy loading",
    },
    {
      question: "What is reconciliation in React?",
      options: [
        "Fixing merge conflicts",
        "Comparing new and old virtual DOM",
        "Bundling code",
        "Linting JSX",
      ],
      answer: "Comparing new and old virtual DOM",
    },
    {
      question: "Which of these helps avoid prop drilling?",
      options: ["useReducer", "React Router", "useContext", "useMemo"],
      answer: "useContext",
    },
  ];
  
  export default quizData;
  