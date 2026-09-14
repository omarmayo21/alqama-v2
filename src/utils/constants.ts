export const ACADEMY_PHONE = '0123456789';
export const ACADEMY_PHONE_DISPLAY = '٠١٢-٣٤٥٦٧٨٩';
export const ACADEMY_EMAIL = 'info@alqima.sa';
export const ACADEMY_LOCATION = 'جدة، حي الروضة، المملكة العربية السعودية';
export const WHATSAPP_NUMBER = '966123456789';
export const WHATSAPP_URL = 'https://wa.me/966123456789';
export const WHATSAPP_MESSAGE_URL = 'https://wa.me/966123456789?text=' + encodeURIComponent('السلام عليكم، أود الاستفسار عن برامج وعروض أكاديمية القمة الرياضية لأبنائي.');

export const getWhatsAppUrl = (message?: string) => {
  if (!message) return WHATSAPP_URL;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
