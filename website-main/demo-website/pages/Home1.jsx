import Header from "../section/Header";
import Hero from "../section/Hero";
import Footer from "../section/Footer";
import Node from "../section/node";
import Midlesection from "../section/midlesection";
import NextTo from "../section/nextToheroSwection"

function Home1() {
  return (
    <>
      <Header />
      <Hero />
      <div className="py-9">
        <NextTo />
      </div>
      <Midlesection />
      <Node />

      <Footer />
    </>
  );
}

export default Home1;
