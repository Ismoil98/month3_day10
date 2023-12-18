module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px"
		},
    extend: {
      colors: {
				firstColor: "#525560",
				secondColor: "#0B0706",
				btnColor: "#1D2130",
        white: "#fff"
			},
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}