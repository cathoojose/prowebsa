import React from 'react';
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
  Public,
  Visibility
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import aboutImg from "../assets/about.jpg";


// Team data
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: '10+ years of industry experience with a vision for innovative solutions.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    bio: 'Full-stack developer specializing in modern web technologies.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Creative Director',
    bio: 'Award-winning designer with a passion for user-centered design.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'David Wilson',
    role: 'Marketing Director',
    bio: 'Digital marketing expert with a track record of successful campaigns.',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

// Values data - now using translation keys
const values = [
  { icon: <TrendingUp />, titleKey: 'value_innovation', descriptionKey: 'value_innovation_desc' },
  { icon: <Diversity3 />, titleKey: 'value_collaboration', descriptionKey: 'value_collaboration_desc' },
  { icon: <EmojiEvents />, titleKey: 'value_excellence', descriptionKey: 'value_excellence_desc' },
  { icon: <Public />, titleKey: 'value_global', descriptionKey: 'value_global_desc' }
];

// Stats data - now using translation keys
const stats = [
  { labelKey: 'stats_years', value: '12+' },
  { labelKey: 'stats_clients', value: '250+' },
  { labelKey: 'stats_projects', value: '500+' },
  { labelKey: 'stats_team', value: '40+' }
];

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();
  const titlePurpleGradientStyle = {
    background: 'linear-gradient(90deg, rgba(113, 27, 171, 1) 0%, rgba(175, 60, 251, 1) 50%, rgba(210,120,255,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent'
  };

  // Define visionImg with a valid image URL
  const visionImg = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 420, md: 520 },
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: 'common.white',
          py: 10,
          overflow: 'hidden',
          background: `radial-gradient(1200px 800px at 70% 0%, #1a0f2a, rgba(26,15,42,0.4) 60%),
                       radial-gradient(900px 600px at 0% 20%, #12091f, rgba(18,9,31,0.2) 60%),
                       linear-gradient(180deg, #0b0614 0%, #1a0f2a 60%, #0b0614 100%)`
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.15)' }} />
        {/* Neon purple bubbles background */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              borderRadius: '50%',
              filter: 'blur(8px)',
              background: 'radial-gradient(circle at 30% 30%, rgba(180, 70, 255, 0.6), rgba(120, 30, 220, 0) 60%)',
              width: 340,
              height: 340,
              animation: 'floatY 9s ease-in-out infinite',
              boxShadow: 'inset -20px -30px 60px rgba(0,0,0,0.25), 0 20px 40px rgba(0,0,0,0.35)'
            },
            '&::before': { top: -80, left: -60, animationDelay: '0s' },
            '&::after': {
              bottom: -120, right: -100,
              background: 'radial-gradient(circle at 70% 70%, rgba(190, 90, 255, 0.55), rgba(120, 30, 220, 0) 60%)',
              width: 420, height: 420, animationDelay: '3s'
            },
            '@keyframes floatY': {
              '0%, 100%': { transform: 'translateY(0) scale(1)' },
              '50%': { transform: 'translateY(-20px) scale(1.05)' }
            }
          }}
        />
        {/* Additional bubbles for depth */}
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Box sx={{ position: 'absolute', top: 60, left: 80, width: 140, height: 140, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(195, 100, 255, 0.6), rgba(120, 30, 220, 0) 65% )',
            filter: 'blur(2px)', animation: 'floatX 12s ease-in-out infinite',
            boxShadow: 'inset -10px -20px 40px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.25)'}} />
          <Box sx={{ position: 'absolute', top: 120, left: 180, width: 90, height: 90, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(205, 120, 255, 0.5), rgba(120, 30, 220, 0) 65% )',
            filter: 'blur(1px)', animation: 'floatX 14s ease-in-out -2s infinite',
            boxShadow: 'inset -8px -16px 32px rgba(0,0,0,0.25), 0 8px 16px rgba(0,0,0,0.25)'}} />
          <Box sx={{ position: 'absolute', top: 200, right: 140, width: 190, height: 190, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(185, 90, 255, 0.55), rgba(120, 30, 220, 0) 60% )',
            filter: 'blur(3px)', animation: 'floatX 16s ease-in-out -4s infinite',
            boxShadow: 'inset -14px -24px 48px rgba(0,0,0,0.28), 0 14px 28px rgba(0,0,0,0.28)'}} />
          <Box sx={{ position: 'absolute', bottom: 60, right: 60, width: 120, height: 120, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(210, 120, 255, 0.55), rgba(120, 30, 220, 0) 60% )',
            filter: 'blur(2px)', animation: 'floatX 18s ease-in-out -6s infinite',
            boxShadow: 'inset -10px -20px 40px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.25)'}} />
          <Box sx={{
            '@keyframes floatX': {
              '0%, 100%': { transform: 'translateX(0) translateY(0)' },
              '50%': { transform: 'translateX(18px) translateY(-10px)' }
            }
          }} />
        </Box>
        {/* Parallax waves at the bottom */}
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Box sx={{ position: 'absolute', bottom: -40, left: '-20%', width: '140%', height: '32%',
            background: 'radial-gradient(120% 100% at 50% 100%, rgba(20,8,35,0.95) 55%, rgba(20,8,35,0) 56%)',
            animation: 'drift 22s linear infinite', opacity: 0.9 }} />
          <Box sx={{ position: 'absolute', bottom: -30, left: '-25%', width: '150%', height: '26%',
            background: 'radial-gradient(120% 100% at 50% 100%, rgba(26,10,45,0.95) 55%, rgba(26,10,45,0) 56%)',
            animation: 'drift 28s linear -6s infinite', opacity: 0.8 }} />
          <Box sx={{ position: 'absolute', bottom: -20, left: '-30%', width: '160%', height: '22%',
            background: 'radial-gradient(120% 100% at 50% 100%, rgba(32,12,56,0.95) 55%, rgba(32,12,56,0) 56%)',
            animation: 'drift 36s linear -12s infinite', opacity: 0.75 }} />
          <Box sx={{
            '@keyframes drift': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-6%)' }
            }
          }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, ...titlePurpleGradientStyle }}>
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

      {/* Stats Section */}
      {/* <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" component="div" color="primary" gutterBottom sx={{ fontWeight: 700 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {t(`about.${stat.labelKey}`)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

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
                <Box
                  sx={{
                    fontSize: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2
                  }}
                >
                </Box>
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
                <Box
                  sx={{
                    fontSize: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2
                  }}
                >
                </Box>
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

      {/* Team Section */}
      {/* <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
            {t('about.team_title')}
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card sx={{ height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                    <Avatar
                      src={member.avatar}
                      sx={{ width: 120, height: 120 }}
                    />
                  </Box>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {member.name}
                    </Typography>
                    <Chip
                      label={member.role}
                      sx={{
                        mb: 2,
                        backgroundColor: '#ff5600',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#e04e00',
                        }
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

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