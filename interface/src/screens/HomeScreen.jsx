import { useRef, useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import NewsCard from "../components/NewsCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function HomeScreen() {
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const news = [
    {
      heading: "UGC Equity Rules",
      category: "Education",
      date: "Jun 7, 2026",
      paragraph:
        "Some description 3-4 lines explaining the news article and attracting readers to continue reading.",
    },
    {
      heading: "Market Update",
      category: "Business",
      date: "Jun 7, 2026",
      paragraph:
        "Stock markets showed positive momentum today with major indices closing higher than expected.",
    },
    {
      heading: "Entertainment News",
      category: "Entertainment",
      date: "Jun 7, 2026",
      paragraph:
        "A major movie release has broken records and generated excitement among fans worldwide.",
    },
    {
      heading: "Sports Highlights",
      category: "Sports",
      date: "Jun 7, 2026",
      paragraph:
        "The championship game ended dramatically with a last-minute winning goal.",
    },
    {
      heading: "Technology",
      category: "Technology",
      date: "Jun 7, 2026",
      paragraph:
        "New AI developments continue to transform industries and create opportunities.",
    },
  ];

  return (
    <div>
      <Header />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://picsum.photos/1600/900"
          alt="hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute bottom-10 left-6 md:left-16 max-w-4xl text-white">
          <span className="bg-primary px-4 py-2 rounded-md text-sm uppercase font-semibold">
            Featured Story
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            UGC Equity Rules Spark Nationwide Debate
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            A detailed look into the latest policy changes and their impact on
            higher education institutions across India.
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="px-4 md:px-8 lg:px-16 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">
            Latest Stories
          </h2>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="bg-white p-3 rounded-full shadow-md hover:shadow-xl transition"
            >
              <IoIosArrowBack size={28} />
            </button>

            <button
              onClick={scrollRight}
              className="bg-white p-3 rounded-full shadow-md hover:shadow-xl transition"
            >
              <IoIosArrowForward size={28} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[340px] h-[430px] rounded-2xl bg-white shadow-md animate-pulse flex-shrink-0"
                >
                  <div className="h-52 bg-gray-200 rounded-t-2xl" />

                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                    <div className="h-6 bg-gray-200 rounded w-full mb-3" />
                    <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              ))
            : news.map((item, index) => (
                <NewsCard
                  key={index}
                  heading={item.heading}
                  paragraph={item.paragraph}
                  category={item.category}
                  date={item.date}
                />
              ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomeScreen;