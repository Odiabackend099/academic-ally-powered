import DOMPurify from 'dompurify';

// Input validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 100;
};

export const validateMessage = (message: string): boolean => {
  return message.trim().length <= 1000;
};

// Sanitization utilities
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input.trim());
};

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br'],
    ALLOWED_ATTR: []
  });
};

// Rate limiting check (client-side)
export const checkRateLimit = (action: string, maxAttempts: number = 5): boolean => {
  const key = `rate_limit_${action}`;
  const attempts = localStorage.getItem(key);
  const lastAttempt = localStorage.getItem(`${key}_time`);
  const now = Date.now();
  
  if (lastAttempt && now - parseInt(lastAttempt) < 60000) { // 1 minute window
    const currentAttempts = attempts ? parseInt(attempts) : 0;
    if (currentAttempts >= maxAttempts) {
      return false;
    }
    localStorage.setItem(key, (currentAttempts + 1).toString());
  } else {
    localStorage.setItem(key, '1');
    localStorage.setItem(`${key}_time`, now.toString());
  }
  
  return true;
};