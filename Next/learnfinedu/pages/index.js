import Link from "next/link";
import Header from '../components/Header';
import ArticleCard from '../components/Reusable/ArticleCard';

// import "../styles.scss"


const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <ArticleCard />
        <p className="example">Hello Next.js</p>
      </div>
    </div>
  );
};


export default App;
