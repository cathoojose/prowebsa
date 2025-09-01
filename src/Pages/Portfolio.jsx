import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LaunchIcon from "@mui/icons-material/Launch";

import homeHero from "../assets/Homepages.jpg";
import webImage from "../assets/web.png";
import sitebannerImage from "../assets/sitebanner1.png";
import siteImage from "../assets/site1.png";
import sitebanner2 from "../assets/sitebanner2.png";
import site2 from "../assets/site2.png";
import sitebanner3 from "../assets/sitebanner3.png";
import site3 from "../assets/site3.png";

import ProjectPopup from "./ProjectPopup";

export default function Portfolio() {
  const { t } = useTranslation();

  // Récupérer les tableaux JSON avec returnObjects
  const insights = t("portfolio.insights", { returnObjects: true });
  const faqs = t("portfolio.faqs", { returnObjects: true });
  const categories = t("portfolio.categories", { returnObjects: true });
  const portfolioItems = t("portfolio.portfolioItems", { returnObjects: true });

  return (
    <>
      <PortfolioSections portfolioItems={portfolioItems} categories={categories} />

      {/* Insights */}
      <Box component="section" sx={{ py: { xs: 8, md: 6 } }}>
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#f8f5f5", borderRadius: 3, p: { xs: 4, md: 4 }, boxShadow: 1 }}>
            <Typography variant="h5" fontWeight={800} sx={{ mb: 3, color: "primary.main" }}>
              {t("portfolio.sections.insightsTitle")}
            </Typography>
            <Grid container spacing={3}>
              {insights.map((ins, i) => (
                <Grid item key={i} xs={12} sm={6} md={4}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <InfoOutlinedIcon color="primary" />
                    <Box>
                      <Typography variant="subtitle1" fontWeight={700} gutterBottom>
                        {ins.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {ins.quote}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* FAQs */}
      <Box component="section" sx={{ pb: { xs: 8, md: 6 } }}>
        <Container maxWidth="lg">
          <Accordion defaultExpanded sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" fontWeight={800} color="primary.main">
                {t("portfolio.sections.faqsTitle")}
              </Typography>
            </AccordionSummary>
          </Accordion>

          {faqs.map((f, i) => (
            <Accordion key={i} disableGutters sx={{ mb: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: i % 2 === 0 ? '#f9f9f9' : 'white' }}>
                <Typography variant="body1" fontWeight={500}>
                  {i + 1}. {f.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ bgcolor: i % 2 === 0 ? '#f9f9f9' : 'white' }}>
                <Typography variant="body2" color="text.secondary">
                  {f.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  );
}

/* ===================== PORTFOLIO SECTIONS ===================== */
function PortfolioSections({ portfolioItems, categories }) {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  // Mapper les images correctes pour chaque projet
  const getProjectImages = (title, idx) => {
    if (title.includes("Universite Espoir")) {
      return [sitebannerImage, siteImage];
    } else if (title.includes("Calvary Chapel")) {
      return [sitebanner2, site2];
    } else if (title.includes("Lapawoli")) {
      return [sitebanner3, site3];
    }
    // Fallback basé sur l'index si le titre ne correspond pas
    switch(idx) {
      case 0: return [sitebannerImage, siteImage];
      case 1: return [sitebanner2, site2];
      case 2: return [sitebanner3, site3];
      default: return [sitebannerImage, siteImage];
    }
  };

  // Obtenir le lien correspondant au projet
  const getProjectLink = (title, idx) => {
    if (title.includes("Universite Espoir")) {
      return "https://www.uespoir.com";
    } else if (title.includes("Calvary Chapel")) {
      return "https://www.calvarychapelhaiti.com";
    } else if (title.includes("Lapawoli")) {
      return "https://www.lapawoli.com";
    }
    // Fallback basé sur l'index
    switch(idx) {
      case 0: return "https://www.uespoir.com";
      case 1: return "https://www.calvarychapelhaiti.com";
      case 2: return "https://www.lapawoli.com";
      default: return "#";
    }
  };

  return (
    <Box component="section" sx={{ pt: { xs: 8, md: 6 }, pb: 4 }}>
      <Container maxWidth="lg">
        <CategoryNav categories={categories} />
        <Typography variant="h6" fontWeight={900} sx={{ mt: 3, mb: 3, color: "primary.main" }}>
          {t("portfolio.sections.webDevelopment")}
        </Typography>

        <Grid container spacing={3}>
          {portfolioItems.map((item, idx) => (
            <Grid item key={idx} xs={12} md={4}>
              <PortfolioCard 
                item={item} 
                idx={idx} 
                image={getProjectImages(item.title, idx)[0]}
                link={getProjectLink(item.title, idx)}
                onLearnMore={() => setSelectedProject({
                  ...item, 
                  images: getProjectImages(item.title, idx),
                  link: getProjectLink(item.title, idx)
                })}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <ProjectPopup
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        description={selectedProject?.desc}
        images={selectedProject?.images || []}
        link={selectedProject?.link}
        tech={selectedProject?.tech}
      />
    </Box>
  );
}

/* ===================== CATEGORY NAV ===================== */
function CategoryNav({ categories }) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', pb: 2 }}>
      {categories.map((c, i) => (
        <Button 
          key={i} 
          variant={activeCategory === i ? "contained" : "outlined"} 
          onClick={() => setActiveCategory(i)}
          sx={{ 
            borderRadius: 3,
            whiteSpace: 'nowrap',
            minWidth: 'auto',
            px: 2
          }}
        >
          {c}
        </Button>
      ))}
    </Box>
  );
}

/* ===================== PORTFOLIO CARD ===================== */
function PortfolioCard({ item, idx, image, link, onLearnMore }) {
  const initials = item.title
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <Card 
      variant="outlined" 
      sx={{ 
        height: "100%", 
        display: "flex", 
        flexDirection: "column",
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        }
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={item.title}
        sx={{ 
          height: { xs: 200, sm: 220, md: 200 },
          objectFit: "cover" 
        }}
      />

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
            {initials}
          </Avatar>
          <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.2 }}>
            {item.title}
          </Typography>
        </Stack>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flexGrow: 1
          }}
        >
          {item.desc}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', p: 2, pt: 0 }}>
        <Button 
          size="small" 
          onClick={onLearnMore}
          sx={{ fontWeight: 600 }}
        >
          En savoir plus
        </Button>
        <Button 
          size="small" 
          endIcon={<LaunchIcon />}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontWeight: 600 }}
        >
          Visiter
        </Button>
      </CardActions>
    </Card>
  );
}