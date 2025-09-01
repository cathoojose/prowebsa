import React from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import { Link as RouterLink } from 'react-router-dom'
import homeHero from '../assets/Homepages.jpg'
import webImage from '../assets/web.jpg'
import CarouselLogos from "./CarouselLogos";

import CodeIcon from '@mui/icons-material/Code'
import MarketingIcon from '@mui/icons-material/Campaign';
import SecurityIcon from '@mui/icons-material/Security';

// i18n
import { useTranslation } from "react-i18next";

export default function Homepage() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [
    { title: t("homepage.services.web.title"), desc: t("homepage.services.web.desc"), icon: <CodeIcon sx={{ mr: 1, color: '#ff5600' }} /> },
    { title: t("homepage.services.marketing.title"), desc: t("homepage.services.marketing.desc"), icon: <MarketingIcon sx={{ mr: 1, color: '#ff5600' }} /> },
    { title: t("homepage.services.security.title"), desc: t("homepage.services.security.desc"), icon: <SecurityIcon sx={{ mr: 1, color: '#ff5600' }} /> },
  ];

  const teamMembers = [
    { name: t("homepage.team.0.name"), role: t("homepage.team.0.role") },
    { name: t("homepage.team.1.name"), role: t("homepage.team.1.role") },
    { name: t("homepage.team.2.name"), role: t("homepage.team.2.role") },
    { name: t("homepage.team.3.name"), role: t("homepage.team.3.role") },
  ];

  const textBlocks = [
    {
      title: t("homepage.blocks.0.title"),
      textLines: t("homepage.blocks.0.lines", { returnObjects: true }),
      align: "left",
    },
    {
      title: t("homepage.blocks.1.title"),
      textLines: t("homepage.blocks.1.lines", { returnObjects: true }),
      align: "right",
    },
    {
      title: t("homepage.blocks.2.title"),
      textLines: t("homepage.blocks.2.lines", { returnObjects: true }),
      align: "left",
    },
    {
      title: t("homepage.blocks.3.title"),
      textLines: t("homepage.blocks.3.lines", { returnObjects: true }),
      align: "right",
    },
    {
      title: t("homepage.blocks.4.title"),
      textLines: t("homepage.blocks.4.lines", { returnObjects: true }),
      align: "left",
      highlight: true,
    },
  ];

  return (
    <>
      {/* ===== Hero Section ===== */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: { xs: 420, md: 520 },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${homeHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.35)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Stack spacing={2} sx={{ maxWidth: { xs: '100%', md: '70%' } }}>
            <Typography variant="h3" fontWeight={800} sx={{ color: 'common.white' }}>
              {t("homepage.hero.title")}
            </Typography>
            <Typography variant="h6" sx={{ color: 'common.white', opacity: 0.95, fontWeight: 400 }}>
              {t("homepage.hero.subtitle")}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
              <Button component={RouterLink} to="/about" variant="contained"
                sx={{ bgcolor: '#ff5600', '&:hover': { bgcolor: '#bf3a27' } }}>
                {t("homepage.hero.learn_more")}
              </Button>
              <Button component={RouterLink} to="/contact" variant="outlined"
                sx={{ color: 'common.white', borderColor: 'common.white',
                  '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                {t("homepage.hero.hire")}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ===== Explore Our Services ===== */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={800} sx={{ mb: 3 }}>
            {t("homepage.services.title")}
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, alignItems: 'stretch' }}>
            {services.map((svc) => (
              <Box key={svc.title} sx={{ minWidth: 0 }}>
                <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left', py: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {React.cloneElement(svc.icon, { sx: { fontSize: 50, color: '#ff5600' } })}
                  </Box>
                  <Typography variant="h6" fontWeight={800} sx={{ mb: 1.5 }}>
                    {svc.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary"
                    sx={{ textAlign: 'justify', textJustify: 'inter-word', hyphens: 'auto', px: 2 }}>
                    {svc.desc}
                  </Typography>
                </Card>
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button component={RouterLink} to="/services" variant="contained" size="large"
              sx={{ bgcolor: '#ff5600', '&:hover': { bgcolor: '#bf3a27' }, px: 5 }}>
              {t("homepage.services.all")}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ===== Web Image Section ===== */}
      <Box component="section"
        sx={{
          position: 'relative',
          my: 4,
          backgroundImage: `url(${webImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0, 0, 0, 0.84)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 } }}>
          <Stack spacing={4}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" fontWeight={800} sx={{ color: 'common.white', mb: 2 }}>
                {t("homepage.vision.title")}
              </Typography>
              {t("homepage.vision.lines", { returnObjects: true }).map((line, i) => (
                <Typography key={i} variant="body1"
                  sx={{ color: 'common.white', maxWidth: 820, mx: 'auto', textJustify: 'inter-word', mb: 2 }}>
                  {line}
                </Typography>
              ))}
            </Box>

            {textBlocks.map((block, idx) => (
              <Grid container spacing={4} key={idx}
                justifyContent={block.align === "left" ? "flex-start" : "flex-end"}>
                <Grid item xs={12} md={6} sx={{ textAlign: block.align }}>
                  <Typography variant="h5" fontWeight={900} sx={{ color: 'common.white', mb: 1 }}>
                    {block.title}
                  </Typography>

                  {block.textLines.map((line, i) => (
                    <Typography key={i} variant={block.highlight ? "h6" : "body1"}
                      sx={{
                        color: block.highlight ? '#ff5600' : 'common.white',
                        fontWeight: block.highlight ? 800 : 400,
                        textAlign: block.align,
                        textJustify: 'inter-word',
                      }}>
                      {line}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Container>
      </Box>

      <CarouselLogos />

     <div>
      {/*

       ===== Our Team =====
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight={800} sx={{ mb: 4 }}>
            {t("homepage.team.title")}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {teamMembers.map((m, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar alt={m.name} sx={{ bgcolor: '#e0e0e0', color: 'text.primary' }}>
                        {m.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                      </Avatar>
                      <Box>
                        <Typography variant="body1" fontWeight={700}>{m.name}</Typography>
                        <Typography variant="caption" color="text.secondary">{m.role}</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

     */ }
     </div>

      {/* ===== Join Us ===== */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: '#efefef', borderRadius: 2, px: { xs: 2, md: 6 }, py: { xs: 4, md: 6 }, textAlign: 'center' }}>
            <Typography variant="h4" fontWeight={800} sx={{ mb: 1 }}>
              {t("homepage.join.title")}
            </Typography>
            <Typography variant="h6" fontWeight={800} sx={{ mb: 3 }}>
              {t("homepage.join.subtitle")}
            </Typography>
            <Button component={RouterLink} to="/contact" onClick={scrollToTop} size="large"
              variant="contained" sx={{ bgcolor: '#ff5600', '&:hover': { bgcolor: '#f27438' }, px: 5, borderRadius: 2 }}>
              {t("homepage.join.button")}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}
