import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				/* IEQ Capital specific colors */
				gold: {
					DEFAULT: 'hsl(var(--gold))',
					foreground: 'hsl(var(--gold-foreground))'
				},
				navy: {
					DEFAULT: 'hsl(var(--navy))',
					light: 'hsl(var(--navy-light))',
					dark: 'hsl(var(--navy-dark))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'parallax-slow': {
					'0%': {
						transform: 'translateY(0px)'
					},
					'100%': {
						transform: 'translateY(-50px)'
					}
				},
				'parallax-fast': {
					'0%': {
						transform: 'translateY(0px)'
					},
					'100%': {
						transform: 'translateY(-100px)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--gold) / 0.3)',
						opacity: '1'
					},
					'50%': {
						boxShadow: '0 0 40px hsl(var(--gold) / 0.6)',
						opacity: '0.8'
					}
				},
				// Professional fade animations with refined easing
				'fade-in-elegant': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px) scale(0.95)',
						filter: 'blur(4px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				'fade-in-stagger': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px) rotateX(15deg)'
					},
					'50%': {
						opacity: '0.5',
						transform: 'translateY(30px) rotateX(7.5deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) rotateX(0deg)'
					}
				},
				// Sophisticated slide animations
				'slide-reveal': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateX(-20%)',
						opacity: '0.7'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-up-reveal': {
					'0%': {
						transform: 'translateY(100%) scale(0.9)',
						opacity: '0',
						filter: 'blur(10px)'
					},
					'60%': {
						transform: 'translateY(-10%) scale(1.02)',
						opacity: '0.8',
						filter: 'blur(2px)'
					},
					'100%': {
						transform: 'translateY(0) scale(1)',
						opacity: '1',
						filter: 'blur(0px)'
					}
				},
				// Advanced scaling animations
				'scale-in-bounce': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.3) rotate(-10deg)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05) rotate(2deg)'
					},
					'70%': {
						transform: 'scale(0.98) rotate(-1deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)'
					}
				},
				'scale-reveal': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(30px)',
						filter: 'blur(8px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)',
						filter: 'blur(0px)'
					}
				},
				// Professional parallax effects
				'parallax-hero': {
					'0%': { transform: 'translateY(0px) scale(1)' },
					'100%': { transform: 'translateY(-120px) scale(1.1)' }
				},
				'parallax-content': {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-80px)' }
				},
				'parallax-background': {
					'0%': { transform: 'translateY(0px) scale(1)' },
					'100%': { transform: 'translateY(-200px) scale(1.2)' }
				},
				// Sophisticated glow and floating effects
				'glow-sophisticated': {
					'0%, 100%': {
						boxShadow: '0 0 30px hsl(var(--gold) / 0.2), 0 0 60px hsl(var(--gold) / 0.1)',
						filter: 'brightness(1)'
					},
					'50%': {
						boxShadow: '0 0 50px hsl(var(--gold) / 0.4), 0 0 100px hsl(var(--gold) / 0.2)',
						filter: 'brightness(1.1)'
					}
				},
				'float-elegant': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'33%': {
						transform: 'translateY(-15px) rotate(1deg)'
					},
					'66%': {
						transform: 'translateY(-5px) rotate(-0.5deg)'
					}
				},
				// Text reveal animations
				'text-reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100%) skewY(7deg)',
						filter: 'blur(4px)'
					},
					'25%': {
						opacity: '0.25',
						transform: 'translateY(50%) skewY(3deg)',
						filter: 'blur(2px)'
					},
					'50%': {
						opacity: '0.75',
						transform: 'translateY(10%) skewY(1deg)',
						filter: 'blur(1px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0%) skewY(0deg)',
						filter: 'blur(0px)'
					}
				},
				// Magnetic hover effects
				'magnetic-pull': {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'50%': { transform: 'scale(1.05) rotate(1deg)' },
					'100%': { transform: 'scale(1.1) rotate(0deg)' }
				},
				'elastic-scale': {
					'0%': { transform: 'scale(1)' },
					'30%': { transform: 'scale(1.25)' },
					'40%': { transform: 'scale(1.15)' },
					'50%': { transform: 'scale(1.25)' },
					'65%': { transform: 'scale(1.05)' },
					'75%': { transform: 'scale(1.12)' },
					'100%': { transform: 'scale(1.1)' }
				},
				// Wave and ripple effects
				'wave-sophisticated': {
					'0%': { 
						transform: 'scaleY(1)',
						opacity: '0.7'
					},
					'50%': { 
						transform: 'scaleY(1.8)',
						opacity: '1'
					},
					'100%': { 
						transform: 'scaleY(1)',
						opacity: '0.7'
					}
				},
				'ripple-effect': {
					'0%': {
						transform: 'scale(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(4)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Professional entrance animations
				'fade-in-elegant': 'fade-in-elegant 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'fade-in-stagger': 'fade-in-stagger 1.4s cubic-bezier(0.23, 1, 0.32, 1)',
				'slide-reveal': 'slide-reveal 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-up-reveal': 'slide-up-reveal 1.8s cubic-bezier(0.23, 1, 0.32, 1)',
				'scale-in-bounce': 'scale-in-bounce 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'scale-reveal': 'scale-reveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'text-reveal': 'text-reveal 1.6s cubic-bezier(0.23, 1, 0.32, 1)',
				// Continuous animations
				'float-elegant': 'float-elegant 6s ease-in-out infinite',
				'glow-sophisticated': 'glow-sophisticated 3s ease-in-out infinite',
				'wave-sophisticated': 'wave-sophisticated 2s ease-in-out infinite',
				'ripple-effect': 'ripple-effect 1.5s ease-out infinite',
				// Parallax animations
				'parallax-hero': 'parallax-hero 20s linear infinite',
				'parallax-content': 'parallax-content 15s linear infinite',
				'parallax-background': 'parallax-background 25s linear infinite',
				// Interactive hover animations
				'magnetic-pull': 'magnetic-pull 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'elastic-scale': 'elastic-scale 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
