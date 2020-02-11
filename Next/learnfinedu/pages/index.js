import Link from "next/link";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArticleCard from '../components/Reusable/ArticleCard';

// import "../styles.scss"


const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <p className="example">Hello Next.js</p>
      </div>
      {/* <ArticleCard /> */}
      <Footer />
    </div>
  );
};


export default App;
