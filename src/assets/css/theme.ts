const base = {
  fontSize: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: ''
  },
  margin: {
    sm: '',
    md: '',
    lg: ''
  },
  padding: {
    sm: '',
    md: '',
    lg: ''
  }
};

export const light = {
  color: {
    primary: 'hsl(249, 10%, 40%)',
    secondary: 'hsl(0, 0%, 95%)',
    primaryDarken: 'hsl(249, 10%, 20%)',
    secondaryDarken: 'hsl(0, 0%, 85%)'
  },
  ...base
};

export const dark = {
  color: {
    primary: '',
    secondary: '',
    primaryDarken: '',
    secondaryDarken: ''
  },
  ...base
};
