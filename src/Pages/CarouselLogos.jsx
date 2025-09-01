import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Exemple d’images (mets les logos de tes partenaires ici)
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";


const logos = [logo1, logo2, logo3, logo4, logo5];

export default function CarouselLogos() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        py: 6,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            animation: "scroll 20s linear infinite",
            width: "max-content",
            "@keyframes scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {/* On double les logos pour un effet infini */}
          {[...logos, ...logos].map((logo, index) => (
           <Box
           key={index}
           component="img"
           src={logo}
           alt={`logo-${index}`}
           sx={{
             height: 100,
             width: "auto",
             flexShrink: 0,
             opacity: 1, // lisible et clair
             transition: "all 0.3s ease",
             "&:hover": { transform: "scale(1.05)" }, // petit zoom sympa au survol
           }}
         />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
