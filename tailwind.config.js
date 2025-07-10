module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#FCC019", // yellow-400
        secondary: "#0A4685", // blue-800
        accent: "#EDF5FC", // blue-50
        background: "#FFFFFF", // white
        surface: "#F8FAFC", // slate-50
        'text-primary': "#1F2937", // gray-800
        'text-secondary': "#6B7280", // gray-500
        success: "#10B981", // emerald-500
        warning: "#F59E0B", // amber-500
        error: "#EF4444", // red-500
        border: "#E5E7EB", // gray-200
        'primary-border': "#FCC019", // yellow-400
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'headline': '700',
        'headline-bold': '800',
        'cta': '600',
        'accent': '400',
        'accent-bold': '600',
      },
      boxShadow: {
        'testimonial': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'hero': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'slide-up': 'slideUp 300ms ease-in-out',
      },
      keyframes: {
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}