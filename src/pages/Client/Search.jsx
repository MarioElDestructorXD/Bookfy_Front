import { useState } from "react";
import { Box, Modal, Pagination } from "@mui/material";
import { ViewModuleIcon, ViewListIcon } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import NavbarBusqueda from "./../../components/navBar/NavbarBusqueda";
import CardLibro from "../../pages/Books/CardLibro";
import DetailedCardLibro from "../../pages/Books/DetailedCardLibro";
import libros from "../../pages/Books/ListLibro";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};

export default function Search() {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedLibro, setSelectedLibro] = useState(null);
  const [searchType, setSearchType] = useState("title");
  const [view, setView] = useState("grid"); // Estado para la vista
  const librosPorPagina = 3;

  const searchQuery = new URLSearchParams(location.search).get("q") || "";

  const filteredLibros = libros.filter((libro) => {
    if (searchType === "title") {
      return libro.title.toLowerCase().includes(searchQuery.toLowerCase());
    } else if (searchType === "category") {
      return libro.category.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false;
  });

  const pageCount = Math.ceil(filteredLibros.length / librosPorPagina);

  const librosMostrados = filteredLibros.slice(
    (pageNumber - 1) * librosPorPagina,
    pageNumber * librosPorPagina
  );

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  const handleLeerClick = (libro) => {
    setSelectedLibro(libro);
  };

  const handleClose = () => {
    setSelectedLibro(null);
  };

  const handleChangeTab = (event, newValue) => {
    if (newValue === 0) {
      setSearchType("title");
    } else if (newValue === 1) {
      setSearchType("category");
    }
    setPageNumber(1);
  };

  const handleChangeView = (view) => {
    setView(view);
  };

  return (
    <>
      <NavbarBusqueda
        value={searchType === "title" ? 0 : 1}
        onChange={handleChangeTab}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <IconButton onClick={() => handleChangeView("list")}>
          <ViewListIcon color={view === "list" ? "primary" : "default"} />
        </IconButton>
        <IconButton onClick={() => handleChangeView("grid")}>
          <ViewModuleIcon color={view === "grid" ? "primary" : "default"} />
        </IconButton>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: view === "grid" ? "wrap" : "nowrap",
          flexDirection: view === "list" ? "column" : "row",
        }}
      >
        {librosMostrados.map((libro, index) => (
          <CardLibro
            key={index}
            image={libro.src}
            title={libro.title}
            categories={libro.category}
            description={libro.description}
            onClick={() => handleLeerClick(libro)}
            style={{
              margin: view === "grid" ? "10px" : "0",
              width: view === "grid" ? "30%" : "100%",
            }}
          />
        ))}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Pagination
          count={pageCount}
          page={pageNumber}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </div>

      <Modal
        open={!!selectedLibro}
        onClose={handleClose}
        aria-labelledby="detailed-book-card-title"
        aria-describedby="detailed-book-card-description"
      >
        <Box sx={style}>
          {selectedLibro && (
            <DetailedCardLibro
              image={selectedLibro.src}
              title={selectedLibro.title}
              categories={selectedLibro.category}
              description={selectedLibro.description}
              onClose={handleClose}
            />
          )}
        </Box>
      </Modal>
    </>
  );
}
