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
import bookService from '../../shared/service/Book';

export default function SwiperView() {

    return (
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
              "url(https://cdn.pixabay.com/photo/2016/11/29/12/50/bookcases-1869616_1280.jpg)",
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
              sx={{ fontSize: 41, fontWeight: 300 , color: '#F05600' }}
              data-swiper-parallax="-300"
            >
              Slide 1
            </Box>
            <Box
              className="subtitle"
              sx={{ fontSize: 21 , color: '#FFC107'}}
              data-swiper-parallax="-200"
            >
              Subtitle
            </Box>
            <Box
              className="text"
              sx={{ fontSize: 14, maxWidth: 400, lineHeight: 1.3, color: 'white' }}
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
              padding: 4, // Puedes ajustar este valor según sea necesario
            }}
          >
            <Box
              className="title"
              sx={{ fontSize: 41, fontWeight: 300 , color: '#F05600' }}
              data-swiper-parallax="-300"
            >
              Slide 1
            </Box>
            <Box
              className="subtitle"
              sx={{ fontSize: 21 , color: '#FFC107'}}
              data-swiper-parallax="-200"
            >
              Subtitle
            </Box>
            <Box
              className="text"
              sx={{ fontSize: 14, maxWidth: 400, lineHeight: 1.3, color: 'white' }}
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
              sx={{ fontSize: 41, fontWeight: 300 , color: '#F05600' }}
              data-swiper-parallax="-300"
            >
              Slide 1
            </Box>
            <Box
              className="subtitle"
              sx={{ fontSize: 21 , color: '#FFC107'}}
              data-swiper-parallax="-200"
            >
              Subtitle
            </Box>
            <Box
              className="text"
              sx={{ fontSize: 14, maxWidth: 400, lineHeight: 1.3, color: 'white' }}
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
    );
}