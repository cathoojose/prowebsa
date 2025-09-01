import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProjectPopup({
  open,
  onClose,
  title,
  description,
  images = [],
  link,
  tech = [],
}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          overflow: "hidden",
        },
      }}
    >
      {/* Header */}
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
        {title || "Project Details"}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Content */}
      <DialogContent dividers>
        {images.length > 0 && (
          <Slider {...settings}>
            {/* Première slide = Banner + description + tech + bouton */}
            <Box sx={{ p: 1 }}>
              <Box
                component="img"
                src={images[0]}
                alt="banner"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  objectFit: "cover",
                  mb: 2,
                }}
              />
              <Typography variant="body1" sx={{ color: "text.secondary", mb: 1 }}>
                {description ||
                  "This is the project description. Replace it with your own details."}
              </Typography>
              {tech.length > 0 && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontStyle: "italic", mb: 2 }}
                >
                  Tech stack: {tech.join(", ")}
                </Typography>
              )}
              {link && (
                <Button
                  size="small"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    bgcolor: "#ff5600",
                    "&:hover": { bgcolor: "#bf3a27" },
                  }}
                >
                  Visit Website
                </Button>
              )}
            </Box>

            {/* Slides suivantes = juste les mockups/sites */}
            {images.slice(1).map((img, idx) => (
              <Box
                key={idx}
                component="img"
                src={img}
                alt={`mockup-${idx}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />
            ))}
          </Slider>
        )}
      </DialogContent>
    </Dialog>
  );
}
