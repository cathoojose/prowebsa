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

import images2 from '../assets/images2.jpg'

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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${images2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
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
      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              bgcolor: '#e9e9e9',
              borderRadius: 2,
              px: { xs: 2, md: 6 },
              py: { xs: 4, md: 6 },
              textAlign: 'center',
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
