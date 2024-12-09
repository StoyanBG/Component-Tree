import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const posts = [
  { id: 1, title: "React Basics", description: "An introduction to React components." },
  { id: 2, title: "Component Tree", description: "How components create a tree-like structure." },
  { id: 3, title: "Props and State", description: "Passing data down the tree." },
];

const App = () => (
  <div id="root">
    <Header />
    <Main posts={posts} />
    <Footer />
  </div>
);

export default App;
