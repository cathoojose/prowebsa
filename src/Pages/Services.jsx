import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from "react-i18next"

import CodeIcon from '@mui/icons-material/Code'
import LanguageIcon from '@mui/icons-material/Language'
import CampaignIcon from '@mui/icons-material/Campaign'
import SecurityIcon from '@mui/icons-material/Security'
import LanIcon from '@mui/icons-material/Lan'
import TimelineIcon from '@mui/icons-material/Timeline'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import InsightsIcon from '@mui/icons-material/Insights'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'

// Removed static hero image in favor of animated background

export default function Services() {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [
    { key: 'webDev', icon: <CodeIcon fontSize="large" /> },
    { key: 'marketing', icon: <CampaignIcon fontSize="large" /> },
    { key: 'cybersecurity', icon: <SecurityIcon fontSize="large" /> },
    { key: 'network', icon: <LanIcon fontSize="large" /> },
    { key: 'data', icon: <TimelineIcon fontSize="large" /> },
    { key: 'consulting', icon: <SupportAgentIcon fontSize="large" /> },
    { key: 'insights', icon: <InsightsIcon fontSize="large" /> },
    { key: 'mobile', icon: <PhoneIphoneIcon fontSize="large" /> },
    { key: 'global', icon: <LanguageIcon fontSize="large" /> },
  ]

  const faqs = t("servicesPage.faqs.items", { returnObjects: true })

  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: { xs: 360, md: 460 },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: `radial-gradient(1000px 700px at 70% 0%,rgb(46, 25, 9), rgba(43, 24, 11, 0.4) 60%),
                        radial-gradient(800px 500px at 0% 20%, #120a05, rgba(18,10,5,0.2) 60%),
                        linear-gradient(180deg, #0e0906 0%, #140c07 60%, #0e0906 100%)`,
        }}
      >
        {/* Orange bubbles animation layer */}
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
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 120, 50, 0.55), rgba(255, 86, 0, 0) 60%)',
              width: 300,
              height: 300,
              animation: 'floatY 9s ease-in-out infinite',
              boxShadow: 'inset -20px -30px 60px rgba(0,0,0,0.25), 0 20px 40px rgba(0,0,0,0.35)'
            },
            '&::before': { top: -60, left: -40, animationDelay: '0s' },
            '&::after': {
              bottom: -100, right: -80,
              background: 'radial-gradient(circle at 70% 70%, rgba(255, 140, 70, 0.5), rgba(255, 86, 0, 0) 60%)',
              width: 380, height: 380, animationDelay: '3s'
            },
            '@keyframes floatY': {
              '0%, 100%': { transform: 'translateY(0) scale(1)' },
              '50%': { transform: 'translateY(-18px) scale(1.05)' }
            }
          }}
        />
        {/* Additional depth bubbles */}
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Box sx={{
            position: 'absolute', top: 50, left: 70, width: 120, height: 120, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(255, 150, 80, 0.6), rgba(255, 86, 0, 0) 65% )',
            filter: 'blur(2px)', animation: 'floatX 12s ease-in-out infinite',
            boxShadow: 'inset -10px -20px 40px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.25)'
          }} />
          <Box sx={{
            position: 'absolute', top: 110, left: 160, width: 80, height: 80, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(255, 160, 100, 0.5), rgba(255, 86, 0, 0) 65% )',
            filter: 'blur(1px)', animation: 'floatX 14s ease-in-out -2s infinite',
            boxShadow: 'inset -8px -16px 32px rgba(0,0,0,0.25), 0 8px 16px rgba(0,0,0,0.25)'
          }} />
          <Box sx={{
            position: 'absolute,', top: 180, right: 120, width: 170, height: 170, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(255, 140, 70, 0.55), rgba(255, 86, 0, 0) 60% )',
            filter: 'blur(3px)', animation: 'floatX 16s ease-in-out -4s infinite',
            boxShadow: 'inset -14px -24px 48px rgba(0,0,0,0.28), 0 14px 28px rgba(0,0,0,0.28)'
          }} />
          <Box sx={{
            position: 'absolute', bottom: 50, right: 50, width: 110, height: 110, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(255, 170, 110, 0.55), rgba(255, 86, 0, 0) 60% )',
            filter: 'blur(2px)', animation: 'floatX 18s ease-in-out -6s infinite',
            boxShadow: 'inset -10px -20px 40px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.25)'
          }} />
          <Box sx={{
            position: 'absolute', bottom: 120, right: 90, width: 160, height: 160, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(255, 170, 110, 0.55), rgba(255, 86, 0, 0) 60% )',
            filter: 'blur(2px)', animation: 'floatX 18s ease-in-out -6s infinite',
            boxShadow: 'inset -10px -20px 40px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.25)'
          }} />
          <Box sx={{
            '@keyframes floatX': {
              '0%, 100%': { transform: 'translateX(0) translateY(0)' },
              '50%': { transform: 'translateX(18px) translateY(-10px)' }
            }
          }} />
        </Box>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" fontWeight={900} sx={{ color: 'common.white' }}>
            {t("servicesPage.hero.title")}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: 'common.white', maxWidth: 900, mx: 'auto', mt: 1.5 }}
          >
            {t("servicesPage.hero.subtitle")}
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h5" fontWeight={800} sx={{ mb: 3 }}>
            {t("servicesPage.sectionTitle")}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 3,
            }}
          >
            {services.map((svc, i) => (
              <Box key={i}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                  }}
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: 1,
                      flexGrow: 1,
                    }}
                  >
                    <IconBadge>{svc.icon}</IconBadge>

                    <Typography variant="h6" fontWeight={800} sx={{ mt: 1 }}>
                      {t(`servicesPage.cards.${svc.key}.title`)}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 'auto' }}
                    >
                      {t(`servicesPage.cards.${svc.key}.desc`)}
                    </Typography>

                    {/*  <Button
                      size="small"
                      variant="contained"
                      sx={{ mt: 2, bgcolor: '#ff5600', '&:hover': { bgcolor: '#bf3a27' } }}
                    >
                      {t("servicesPage.cards.button")}
                    </Button>*/}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 }, position: 'relative', overflow: 'hidden',
        background: `radial-gradient(900px 600px at 80% 0%, #1a0f07, rgba(26,15,7,0.4) 60%),
                     linear-gradient(180deg, #0e0906 0%, #140c07 100%)` }}>
        {/* Orange bubbles animation layer for CTA */}
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
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 140, 70, 0.55), rgba(255, 86, 0, 0) 60%)',
              width: 260,
              height: 260,
              animation: 'floatY 9s ease-in-out infinite',
              boxShadow: 'inset -18px -28px 56px rgba(0,0,0,0.25), 0 18px 36px rgba(0,0,0,0.3)'
            },
            '&::before': { top: -70, left: -60, animationDelay: '0s' },
            '&::after': {
              bottom: -90, right: -70,
              background: 'radial-gradient(circle at 70% 70%, rgba(255, 160, 100, 0.5), rgba(255, 86, 0, 0) 60%)',
              width: 320, height: 320, animationDelay: '3s'
            },
            '@keyframes floatY': {
              '0%, 100%': { transform: 'translateY(0) scale(1)' },
              '50%': { transform: 'translateY(-16px) scale(1.05)' }
            }
          }}
        />
        {/* Small depth bubbles */}
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <Box sx={{ position: 'absolute', top: 40, left: 80, width: 100, height: 100, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(255, 150, 80, 0.55), rgba(255, 86, 0, 0) 65% )',
            filter: 'blur(2px)', animation: 'floatX 12s ease-in-out infinite',
            boxShadow: 'inset -8px -16px 32px rgba(0,0,0,0.25), 0 8px 16px rgba(0,0,0,0.25)'}} />
          <Box sx={{ position: 'absolute', top: 120, left: 160, width: 70, height: 70, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(255, 170, 110, 0.5), rgba(255, 86, 0, 0) 65% )',
            filter: 'blur(1px)', animation: 'floatX 14s ease-in-out -2s infinite',
            boxShadow: 'inset -6px -12px 24px rgba(0,0,0,0.25), 0 6px 12px rgba(0,0,0,0.25)'}} />
          <Box sx={{ position: 'absolute', bottom: 60, right: 80, width: 130, height: 130, borderRadius: '50%',
            background: 'radial-gradient( circle at 35% 35%, rgba(255, 140, 70, 0.55), rgba(255, 86, 0, 0) 60% )',
            filter: 'blur(2px)', animation: 'floatX 16s ease-in-out -4s infinite',
            boxShadow: 'inset -10px -20px 40px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.25)'}} />
          <Box sx={{
            '@keyframes floatX': {
              '0%, 100%': { transform: 'translateX(0) translateY(0)' },
              '50%': { transform: 'translateX(16px) translateY(-10px)' }
            }
          }} />
        </Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.20)',
              borderRadius: 2,
              px: { xs: 2, md: 6 },
              py: { xs: 4, md: 6 },
              textAlign: 'center',
              color: 'common.white',
            }}
          >
            <Typography variant="h5" fontWeight={800} sx={{ mb: 2 }}>
              {t("servicesPage.cta.title")}
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 900, mx: 'auto', mb: 3 }}>
              {t("servicesPage.cta.subtitle")}
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              onClick={scrollToTop}
              size="large"
              variant="contained"
              sx={{ bgcolor: '#ff5600', '&:hover': { bgcolor: '#f27438' }, px: 5, borderRadius: 2 }}
            >
              {t("servicesPage.cta.button")}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FAQs */}
      <Box component="section" sx={{ pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" fontWeight={800}>
                {t("servicesPage.faqs.title")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption" color="text.secondary">
                {t("servicesPage.faqs.subtitle")}
              </Typography>
            </AccordionDetails>
          </Accordion>

          {faqs.map((item, idx) => (
            <Accordion key={idx} disableGutters>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2">{idx + 1}. {item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  )
}

function IconBadge({ children }) {
  return (
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        backgroundColor: '#ffe9e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ff5600',
      }}
    >
      {children}
    </Box>
  )
}
