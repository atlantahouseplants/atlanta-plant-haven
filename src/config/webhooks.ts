// Webhook configuration for form submissions
// Update these URLs with your actual webhook endpoints

export const WEBHOOK_URLS = {
  businessQuote: process.env.REACT_APP_BUSINESS_QUOTE_WEBHOOK || 'https://your-webhook-endpoint.com/business-quote',
  corporateGifting: process.env.REACT_APP_CORPORATE_WEBHOOK || 'https://your-webhook-endpoint.com/corporate-gifting',
  plantDoctor: process.env.REACT_APP_PLANT_DOCTOR_WEBHOOK || 'https://your-webhook-endpoint.com/plant-doctor',
  homeConsultation: process.env.REACT_APP_HOME_CONSULTATION_WEBHOOK || 'https://your-webhook-endpoint.com/home-consultation',
  bulkOrder: process.env.REACT_APP_BULK_ORDER_WEBHOOK || 'https://your-webhook-endpoint.com/bulk-order',
} as const;

// Fallback webhook for development/testing
export const DEFAULT_WEBHOOK = 'https://webhook.placeholder.com/form-submission';