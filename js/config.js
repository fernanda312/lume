// LUME — configuration. PLACEHOLDERS ONLY.
// The owner replaces these values at deploy time (see README.md).
// No password, no API key, no secret ever belongs in this file.
window.LUME_CONFIG = {
  SUPABASE_URL: "SUPABASE_URL",
  SUPABASE_ANON_KEY: "SUPABASE_ANON_KEY",
  // Admin gate: the single admin email. The owner writes the real email here
  // at deploy time. Until it is set, nobody can open /admin.
  ADMIN_EMAIL: "ADMIN_EMAIL_POR_DEFINIR",
  // Fallback group link format, editable in admin > Definições da loja.
  // The buyer replaces it with the real group link.
  DEFAULT_GROUP_URL: "https://chat.whatsapp.com/LUMEGrupo"
};
