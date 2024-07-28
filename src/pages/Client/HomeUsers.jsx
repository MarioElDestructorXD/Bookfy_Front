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

export default function Home() {
  const [books] = useState([]);
  const [, setActiveStep] = useState(0);
  const [actionBooks, setActionBooks] = useState([]);
  const navigate = useNavigate();

  const maxSteps = books.length;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const actionResponse = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=subject:action"
        );
        const actionBooksData = actionResponse.data.items.map((item) => ({
          src: item.volumeInfo.imageLinks?.thumbnail,
          title: item.volumeInfo.title,
          description: item.volumeInfo.description?.slice(0, 100) + "...",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prevActiveStep) =>
        prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [maxSteps]);

  const handleCardClick = (book) => {
    MySwal.fire({
      title: book.title,
      html: (
        <Box>
          <img src={book.src} alt={book.title} style={{ width: "100%" }} />
          <Typography variant="subtitle2" color="text.secondary">
            {book.genres.join(", ")}
          </Typography>
          <Typography variant="body2">{book.description}</Typography>
          <button
            onClick={() => {
              navigate("/reading", { state: { pdfUrl: book.pdfUrl } });
              MySwal.close();
            }}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Leer libro
          </button>
        </Box>
      ),
      showConfirmButton: false,
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
      {actionBooks.length > 0 && (
        <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
          {actionBooks.map((book, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Card sx={{ height: 400 }} onClick={() => handleCardClick(book)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={book.src}
                  alt={book.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {book.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
