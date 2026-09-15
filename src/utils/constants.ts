export const ACADEMY_PHONE = '966543414074';
export const ACADEMY_PHONE_DISPLAY = '+966543414074';
export const ACADEMY_EMAIL = 'info@alqima.sa';
export const ACADEMY_LOCATION = 'حي الزهراء - داخل مدارس دار الحنان - جدة';
export const ACADEMY_LOCATION_AR = 'حي الزهراء - داخل مدارس دار الحنان - جدة';
export const ACADEMY_LOCATION_EN = 'Al Zahra District – Inside Dar Al-Hanan Schools – Jeddah';
export const WHATSAPP_NUMBER = '966543414074';
export const WHATSAPP_URL = 'https://wa.me/966543414074';
export const WHATSAPP_MESSAGE_URL = 'https://wa.me/966543414074?text=' + encodeURIComponent('السلام عليكم، أود الاستفسار عن برامج وعروض أكاديمية القمة الرياضية لأبنائي.');

export const getWhatsAppUrl = (message?: string) => {
  if (!message) return WHATSAPP_URL;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
