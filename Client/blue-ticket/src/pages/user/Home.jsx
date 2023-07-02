import React, { useState, useEffect } from "react";
import NavbarHomepage from "../../components/Navbars/NavbarHomepage";
import Carousel from "../../components/Carousel/Carousel";
import CardHome from "../../components/Card/CardHome";
import Footer from "../../components/Footer/Footer";
import ViewEvent from "./ViewEvent";
import SearchBox from "../../components/SearchBox";
import FilterButton from "../../components/Button/filterButton";
import context from "../../context/UserContex";
import EventService from "../../services/EventServices";
import CategoryService from "../../services/CategoryService";

const Home = () => {
  const [filter, setFilter] = useState("");
  const [event, setEvent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    fetchAllEvents();
  }, [title, currentPage]);
  
  const fetchAllEvents = async () => {
    const token = context.getToken();
    const response = await EventService.getAllEvents(
      token,
      currentPage,
      3, //De momento se deja en 3 para prueba, luego se cambia a 9
      title
    );
    console.log(response.content);
    if (!response.error) {
      const { content, total_pages } = response;
      setEvent(content);
      setTotalPages(total_pages);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  const handleSearch = (text) => {
    setTitle(text);
  };
  const handleFilterChange = (value) => {
    setFilter(value);
    // Aquí puedes realizar la lógica de filtrado de eventos según la opción seleccionada
  };
  //Obtiene todas las categorias
  const fetchAllCategories = async() => {
    const token = context.getToken();
    const response = await CategoryService.getAllEvents(token);
    console.log(response);
    if (!response.error) {
      response.data.forEach((item) => {
        console.log(item.description);
        setCategory(item.description);
      });
    }
  };
  return (
    <>
      <Carousel />
      <div>
        <div className="flex flex-row space-x-32 justify-center bg-blue h-20">
          <h1 className=" text-center text-white text-2xl font-bold my-5 md:text-3xl md:my-4 lg:text-4xl">Cartelera</h1>
          <SearchBox getTitle={handleSearch} />
        </div>
        <div className="flex justify-center mt-5 space-x-2">
          <button
            className={`relative text-sm px-2 py-1 md:p-3 leading-6 font-normal justify-center items-center focus:outline-none shadow border-2 border-locations-gray text-black rounded-xl ${
              filter === "Musical" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => handleFilterChange("Musical")}
          >
            Musical
          </button>
          {
            category &&
              category.map((c) => (
                <FilterButton
                key={c._id}
                isMainView={true}
                id={c._id}
                description={c.description}
                />
              ))}
          <button
            className={`relative text-sm px-2 py-1 md:p-3 leading-6 font-normal justify-center items-center focus:outline-none shadow border-2 border-locations-gray text-black rounded-xl ${
              filter === "Teatro" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={fetchAllCategories}
          >
            Teatro
          </button>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 justify-items-center mt-10 mx-auto max-w-7xl px-4"
          style={{ rowGap: "40px" }}
        >
          {event &&
            event.map((events) =>(
              <CardHome
                key={events._id}
                isMainView={true}
                id={events._id}
                title={events.title}
                image1={events.image1}
              />
            ))}
        </div>
        <div className="flex justify-center p-12">
          <button className="px-4 py-2 bg-orange rounded-md mr-4 text-black font-bold"
            onClick={handlePrevPage}
          >
            Anterior
          </button>
          <button className="px-4 py-2 bg-blue rounded-md text-white font-bold"
            onClick={handleNextPage}
          >
            Siguiente
          </button>
        </div>
        
        <div className="mt-2">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
