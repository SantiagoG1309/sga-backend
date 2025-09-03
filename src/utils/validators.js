// Utilidades para validaciones
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};

const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    throw new Error(`${fieldName} es requerido`);
  }
  return true;
};

const sanitizeString = (str) => {
  return str ? str.trim().replace(/[<>]/g, '') : '';
};

module.exports = {
  validateEmail,
  validatePhone,
  validateRequired,
  sanitizeString
};
