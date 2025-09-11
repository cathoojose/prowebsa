import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
  Button
} from '@mui/material';
import {
  EmojiEvents,
  TrendingUp,
  Diversity3,
  Public
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import aboutImg from "../assets/about.jpg";

// Team data
// const teamMembers = [
//   {
//     name: 'Sarah Johnson',
//     role: 'CEO & Founder',
//     bio: '10+ years of industry experience with a vision for innovative solutions.',
//     avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//   },
//   {
//     name: 'Michael Chen',
//     role: 'Lead Developer',
//     bio: 'Full-stack developer specializing in modern web technologies.',
//     avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//   },
//   {
//     name: 'Emma Rodriguez',
//     role: 'Creative Director',
//     bio: 'Award-winning designer with a passion for user-centered design.',
//     avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//   },
//   {
//     name: 'David Wilson',
//     role: 'Marketing Director',
//     bio: 'Digital marketing expert with a track record of successful campaigns.',
//     avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//   }
// ];

// Values data
const values = [
  { icon: <TrendingUp />, titleKey: 'value_innovation', descriptionKey: 'value_innovation_desc' },
  { icon: <Diversity3 />, titleKey: 'value_collaboration', descriptionKey: 'value_collaboration_desc' },
  { icon: <EmojiEvents />, titleKey: 'value_excellence', descriptionKey: 'value_excellence_desc' },
  { icon: <Public />, titleKey: 'value_global', descriptionKey: 'value_global_desc' }
];

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 420;

    let points = [];
    for (let i = 0; i < 80; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of points) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#00f0ff";
        ctx.fill();
      }

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          let dx = points[i].x - points[j].x;
          let dy = points[i].y - points[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = "rgba(0, 240, 255," + (1 - dist / 120) + ")";
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  const visionImg = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

  return (
    <Box>
      {/* Animation Section (Spider Canvas) */}
      <Box sx={{ position: 'relative', minHeight: 420, bgcolor: '#0a0a0f' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        <Container maxWidth="lg" sx={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', color: 'white' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            {t('about.hero_title')}
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
            {t('about.hero_subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
              {t('about.about_title')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              {t('about.about_text1')}
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              {t('about.about_text2')}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              {t('about.about_text3')}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={aboutImg}
              alt="Our team"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6, textAlign: 'center'}}>
          {t('about.values_title')}
        </Typography>
        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
                <CardContent>
                  <Box
                    sx={{
                      color: '#ff5600',
                      fontSize: 50,
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {t(`about.${value.titleKey}`)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(`about.${value.descriptionKey}`)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission & Vision Section */}
      <Container maxWidth="lg" sx={{ py: 8, borderRadius: 4 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6, textAlign: 'center'}}>
          {t('about.mission_title')}
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{
              height: '100%',
              textAlign: 'center',
              p: 3,
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '20px',
              transition: 'all 0.25s ease-out',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transform: 'scale(1)',
              '&:hover': {
                boxShadow: `0 12px 24px rgba(0,0,0,0.2), 0 10px 35px ${theme.palette.primary.main}44, 0 0 0 6px ${theme.palette.primary.main}22`,
                transform: 'scale(1.10)',
              }
            }}>
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom>
                  {t('about.mission_our')}
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  {t('about.mission_text')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{
              height: '100%',
              textAlign: 'center',
              p: 3,
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '20px',
              transition: 'all 0.25s ease-out',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transform: 'scale(1)',
              '&:hover': {
                boxShadow: '0 12px 24px rgba(0,0,0,0.2), 0 10px 35px rgba(255,86,0,0.35), 0 0 0 6px rgba(255,86,0,0.15)',
                transform: 'scale(1.09)',
              }
            }}>
              <CardContent>
                <Typography variant="h4" component="h3" gutterBottom>
                  {t('about.vision_our')}
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  {t('about.vision_text')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          textAlign: 'center',
          color: 'white',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${visionImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={800} gutterBottom>
            {t('about.cta_title')}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            {t('about.cta_subtitle')}
          </Typography>
          <Button
            size="large"
            variant="contained"
            component={RouterLink}
            to="/contact"
            sx={{
              backgroundColor: '#ff5600',
              '&:hover': { backgroundColor: '#f27438' },
              px: 5
            }}
          >
            {t('about.cta_button')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
