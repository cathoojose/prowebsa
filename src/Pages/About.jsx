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
import vectorImg from "../assets/vector2.png";


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
  
  // Define visionImg with a valid image URL
  const visionImg = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80';

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'bleu',
          py: 10,
          textAlign: 'center',
          backgroundImage: `url(${vectorImg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          // backgroundSize:'1000px's
        
        }}
      >
        <Container maxWidth="lg">
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

      {/* Stats Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
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
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
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
  <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
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
        transition: 'all 0.9s ease-in-out',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transform: 'scale(1)',
        '&:hover': {
          backgroundColor: 'primary.main',
          color: 'white',
          boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
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
        transition: 'all 1.9s ease-in-out',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transform: 'scale(1)',
        '&:hover': {
          backgroundColor: '#ff5600',
          color: 'white',
          boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
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
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
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
      </Box>

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