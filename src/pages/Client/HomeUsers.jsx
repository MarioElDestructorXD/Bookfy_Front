import { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const truncateText = (text, length) => {
  return text.length > length ? `${text.slice(0, length)}...` : text;
};

export default function HomeUser() {
  const [actionBooks, setActionBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const actionResponse = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:action"
        );
        const actionBooksData = actionResponse.data.items.map((item) => ({
          src: item.volumeInfo.imageLinks?.thumbnail,
          title: item.volumeInfo.title,
          description:
            item.volumeInfo.description || "No description available.",
          genres: item.volumeInfo.categories || [],
          pdfUrl: item.accessInfo?.pdf?.downloadLink || "#",
        }));
        setActionBooks(actionBooksData);
      } catch (error) {
        console.error("Error fetching books data: ", error);
      }
    };

    fetchBooks();
  }, []);

  const handleCardClick = (book) => {
    MySwal.fire({
      html: (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Box sx={{ flex: 1, mr: 2 }}>
            <img
              src={book.src}
              alt={book.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Box>

          <Box sx={{ flex: 2 }}>
            <Typography variant="h5" fontWeight="bold">
              {book.title}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
              {book.genres.map((genre, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor:
                      genre === "Fantasy" ? "#FF5733" : "#FFC300",
                    borderRadius: "15px",
                    padding: "2px 8px",
                    fontSize: "0.8rem",
                    color: "#fff",
                  }}
                >
                  {genre}
                </Box>
              ))}
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              {truncateText(book.description, 100)}
            </Typography>
            <button
              onClick={() => {
                navigate("/reading", { state: { pdfUrl: book.pdfUrl } });
                MySwal.close();
              }}
              style={{
                marginTop: "20px",
                padding: "10px 40px",
                backgroundColor: "#28A745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Leer
            </button>
          </Box>
        </Box>
      ),
      showConfirmButton: false,
      width: "600px",
      padding: "20px",
      background: "#fff",
      backdrop: "rgba(0,0,0,0.4)",
      customClass: {
        popup: "rounded-lg",
      },
    });
  };

  return (
    <Box sx={{ maxWidth: "auto", flexGrow: 1, mx: "auto", mt: 4 }}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          width: "100%",
          height: "100%",
          background: "#000",
          borderRadius: 5,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <Box
          slot="container-start"
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "130%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-2.jpg)",
          }}
          data-swiper-parallax="-23%"
        />
        <SwiperSlide>
          <Box
            sx={{
              padding: 4,
            }}
          >
            <Box
              className="title"
              sx={{ fontSize: 41, fontWeight: 300 }}
              data-swiper-parallax="-300"
            >
              Slide 1
            </Box>
            <Box
              className="subtitle"
              sx={{ fontSize: 21 }}
              data-swiper-parallax="-200"
            >
              Subtitle
            </Box>
            <Box
              className="text"
              sx={{ fontSize: 14, maxWidth: 400, lineHeight: 1.3 }}
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              padding: 4,
            }}
          >
            <Box
              className="title"
              sx={{ fontSize: 41, fontWeight: 300 }}
              data-swiper-parallax="-300"
            >
              Slide 2
            </Box>
            <Box
              className="subtitle"
              sx={{ fontSize: 21 }}
              data-swiper-parallax="-200"
            >
              Subtitle
            </Box>
            <Box
              className="text"
              sx={{ fontSize: 14, maxWidth: 400, lineHeight: 1.3 }}
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              padding: 4,
            }}
          >
            <Box
              className="title"
              sx={{ fontSize: 41, fontWeight: 300 }}
              data-swiper-parallax="-300"
            >
              Slide 3
            </Box>
            <Box
              className="subtitle"
              sx={{ fontSize: 21 }}
              data-swiper-parallax="-200"
            >
              Subtitle
            </Box>
            <Box
              className="text"
              sx={{ fontSize: 14, maxWidth: 400, lineHeight: 1.3 }}
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
        Acción
      </Typography>
      <Divider orientation="horizontal" flexItem />
      <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
        {actionBooks.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: "10px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                height: "100%",
                overflow: "hidden",
              }}
              onClick={() => handleCardClick(book)}
            >
              <CardMedia
                component="img"
                image={book.src}
                alt={book.title}
                sx={{
                  width: "30%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px 0 0 10px",
                }}
              />
              <CardContent
                sx={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "16px",
                }}
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {truncateText(book.title, 25)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    height: "60px",
                  }}
                >
                  {truncateText(book.description, 100)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
