import React, { useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import CampaignIcon from '@mui/icons-material/Campaign';
import SecurityIcon from '@mui/icons-material/Security';
import LanIcon from '@mui/icons-material/Lan';
import TimelineIcon from '@mui/icons-material/Timeline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InsightsIcon from '@mui/icons-material/Insights';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function Services() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = Math.random() * 1 - 0.5;
        this.dy = Math.random() * 1 - 0.5;
        this.radius = 2;
      }

      update() {
        if (this.x < 0 || this.x > canvas.width) this.dx = -this.dx;
        if (this.y < 0 || this.y > canvas.height) this.dy = -this.dy;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.fill();
      }
    }

    function createParticles() {
      for (let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(56,189,248,${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => p.update());
      connectParticles();
      requestAnimationFrame(animate);
    }

    createParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

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
  ];

  const faqs = t("servicesPage.faqs.items", { returnObjects: true });

 const radius = { xs: 120, sm: 180, md: 250 }; // distance hub → nodes

const nodes = [
  { icon: "☁️", text: t("servicesPage.nodes.cloud") },
  { icon: "💾", text: t("servicesPage.nodes.database") },
  { icon: "🖥️", text: t("servicesPage.nodes.server") },
  { icon: "✉️", text: t("servicesPage.nodes.email") },
  { icon: "💻", text: t("servicesPage.nodes.monitor") },
  { icon: "📱", text: t("servicesPage.nodes.tablet") }
];



  return (
    <>
      {/* Hero avec animation en arrière-plan */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#0a192f',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        />
        
        {/* Nœuds du réseau */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '100%', md: '900px' },
            height: { xs: '400px', md: '600px' },
            margin: 'auto',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #38bdf8, #0a192f)',
              boxShadow: '0 0 40px rgba(56, 189, 248, 0.9)',
              animation: 'pulse 3s infinite',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '20px',
              color: 'white',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
                '50%': { transform: 'translate(-50%, -50%) scale(1.1)' }
              }
            }}
          >
            {t("servicesPage.hero.title")}
          </Box>

          {/* Les nœuds */}
      {nodes.map((node, index) => {
  const angle = (index / nodes.length) * 2 * Math.PI; // répartis en cercle
  return (
    <Box
      key={index}
      sx={{
        position: "absolute",
        top: {
          xs: `calc(50% + ${radius.xs * Math.sin(angle)}px)`,
          sm: `calc(50% + ${radius.sm * Math.sin(angle)}px)`,
          md: `calc(50% + ${radius.md * Math.sin(angle)}px)`
        },
        left: {
          xs: `calc(50% + ${radius.xs * Math.cos(angle)}px)`,
          sm: `calc(50% + ${radius.sm * Math.cos(angle)}px)`,
          md: `calc(50% + ${radius.md * Math.cos(angle)}px)`
        },
        transform: "translate(-50%, -50%)",
        width: { xs: "70px", sm: "90px", md: "110px" },
        height: { xs: "70px", sm: "90px", md: "110px" },
        borderRadius: "50%",
        border: "2px solid #38bdf8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: { xs: "11px", sm: "13px", md: "14px" },
        fontWeight: "bold",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(56,189,248,0.7)",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(5px)",
        "&:hover": {
          transform: "translate(-50%, -50%) scale(1.15)",
          boxShadow: "0 0 35px rgba(56,189,248,1)"
        }
      }}
    >
      <Box sx={{ fontSize: { xs: "18px", sm: "22px", md: "28px" }, mb: "4px" }}>
        {node.icon}
      </Box>
      {node.text}
    </Box>
  );
})}


        </Box>
      </Box>

      {/* Services Grid */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
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
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                    }
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
  );
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
  );
}
