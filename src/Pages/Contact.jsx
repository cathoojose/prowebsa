import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import contactImg from '../assets/contact.jpg'
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      {/* Banner */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: { xs: 320, md: 420 },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: `url(${contactImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.45)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Typography variant="h3" fontWeight={900} textAlign="center" sx={{ color: 'common.white' }}>
            {t("contact.title")}
          </Typography>
        </Container>
      </Box>

      {/* Infos + Form */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: "#f5f5f5" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 6,
            }}
          >
            {/* Colonne gauche : Infos */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight={900} sx={{ mb: 2 }}>
                {t("contact.info_title")}
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {t("contact.address_label")}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {t("contact.address")}
                </Typography>

                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {t("contact.phone_label")}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {t("contact.phone")}
                </Typography>

                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {t("contact.email_label")}
                </Typography>
                <Typography variant="body2">{t("contact.email")}</Typography>
              </Box>
            </Box>

            {/* Colonne droite : Formulaire */}
            <Box sx={{ flex: 2 }}>
              <Typography variant="h5" fontWeight={900} sx={{ mb: 2 }}>
                {t("contact.form_title")}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {t("contact.form_description")}
              </Typography>

              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  bgcolor: "white",
                  p: 3,
                  borderRadius: 2,
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                <TextField fullWidth size="small" label={t("contact.form_name")} sx={{ mb: 2 }} />
                <TextField fullWidth size="small" label={t("contact.form_enterprise")} sx={{ mb: 2 }} />
                <TextField fullWidth size="small" label={t("contact.form_email")} sx={{ mb: 2 }} />
                <TextField fullWidth size="small" label={t("contact.form_subject")} sx={{ mb: 2 }} />
                <TextField
                  fullWidth
                  size="small"
                  label={t("contact.form_message")}
                  multiline
                  minRows={4}
                  sx={{ mb: 2 }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#ff5600",
                    "&:hover": { bgcolor: '#0d5ca8' },
                  }}
                >
                  {t("contact.form_submit")}
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Google Map */}
      <Box component="section" sx={{ pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.674949729229!2d-72.331!3d18.531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMyJzAwLjAiTiA3MsKwMTknNTkuNiJX!5e0!3m2!1sen!2sht!4v1700000000000"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}





