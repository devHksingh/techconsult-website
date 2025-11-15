# TechConsult - Professional IT Consulting Website

A modern, responsive IT consulting firm website built with React, TypeScript, and Tailwind CSS. This project showcases professional services, team information, client testimonials, and includes a fully functional contact form integrated with Web3Forms.



## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Multiple Pages**: Home, About, Services, and Contact pages
- **Contact Form**: Integrated with Web3Forms for email notifications
- **Form Validation**: Client-side validation using React Hook Form and Zod
- **WhatsApp Integration**: Direct messaging capability
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Technology Stack

This project is built using modern web technologies:

- **React** - UI library for building component-based interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router** - Client-side routing for single-page application
- **React Hook Form** - Performant form validation library
- **Zod** - TypeScript-first schema validation
- **Axios** - Promise-based HTTP client for API requests
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - Re-usable component library built with Radix UI

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)
- Git for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/techconsult-website.git
cd techconsult-website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

This project requires environment variables for Web3Forms integration and WhatsApp contact functionality.

#### Create `.env` File

1. In the root directory of your project, create a new file named `.env`
2. Copy the contents from `.env.example` to your new `.env` file
3. Fill in your actual values

```bash
# Create .env file
cp .env.example .env
```

#### Environment Variables

Your `.env` file should contain:

```env
VITE_WEB3FORMS_ACCESS_KEY=your-actual-access-key-here
VITE_WHATSAPP_NUMBER=+1234567890
VITE_WHATSAPP_MESSAGE=Hello! I'd like to discuss IT consulting services.
```

**Variable Details:**

- `VITE_WEB3FORMS_ACCESS_KEY`: Your unique Web3Forms access key (see below for how to get this)
- `VITE_WHATSAPP_NUMBER`: Your WhatsApp business number in international format (e.g., +15551234567)
- `VITE_WHATSAPP_MESSAGE`: Default message when users click WhatsApp contact button

> 
### 4. Getting Your Web3Forms Access Key

Web3Forms is a free service that sends form submissions directly to your email without requiring a backend server.

**Steps to get your access key:**

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click on **"Get Started for Free"** or **"Create Access Key"**
3. Enter your email address where you want to receive form submissions
4. Click **"Create Access Key"**
5. Check your email for a verification link
6. Click the verification link to activate your access key
7. Copy your **Access Key** from the confirmation page
8. Paste it into your `.env` file as the value for `VITE_WEB3FORMS_ACCESS_KEY`

**Example:**
```env
VITE_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8
```

> **Note**: Web3Forms free plan includes 250 submissions per month, which is perfect for most small to medium-sized businesses.

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will start at `http://localhost:5173` (or another port if 5173 is occupied).

### 6. Build for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `dist` folder.

### 7. Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
techconsult-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   └── ui/         # shadcn/ui components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── pages/          # Page components
│   │   ├── Homepage.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── router.tsx      # React Router configuration
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Application entry point
├── .env.example        # Environment variables template
├── .env               # Your local environment variables (not in git)
├── .gitignore         # Git ignore rules
├── index.html         # HTML entry point
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── README.md          # This file
```

## 🎨 Customization

### Update Company Information

1. **Contact Details**: Update email, phone, and address in `src/pages/Contact.tsx`
2. **About Page**: Modify company story and team members in `src/pages/About.tsx`
3. **Services**: Edit service offerings in `src/pages/Services.tsx`
4. **Homepage**: Customize hero section and testimonials in `src/pages/Homepage.tsx`

### Change Color Scheme

The color scheme is defined in `tailwind.config.js`. The current professional theme uses:
- Primary: Blue (#3B82F6)
- Secondary: Cyan (#06B6D4)
- Dark: Slate (#0F172A)

To change colors, modify the `theme.extend.colors` section in `tailwind.config.js`.

### Update Logo

Replace the logo in the `public` folder and update the reference in `src/layout/CommonLayout.tsx`.

## 📧 Contact Form Configuration

The contact form in `src/pages/Contact.tsx` uses Web3Forms API. Key features:

- Client-side validation with React Hook Form and Zod
- Required fields: Name, Email, Subject, Message
- Optional fields: Phone, Company
- Real-time error messages
- Success/error toast notifications
- Form resets after successful submission

### Form Validation Schema

The form uses Zod for schema validation. Current rules:
- Name: Minimum 2 characters
- Email: Valid email format
- Phone: Minimum 10 digits (optional)
- Subject: Minimum 5 characters
- Message: Minimum 10 characters

## 🔧 Troubleshooting

### Common Issues

**Issue**: Form submissions not working
- **Solution**: Verify your `VITE_WEB3FORMS_ACCESS_KEY` is correct and activated

**Issue**: WhatsApp link not opening
- **Solution**: Ensure `VITE_WHATSAPP_NUMBER` is in international format with country code

**Issue**: Build errors related to TypeScript
- **Solution**: Run `npm run type-check` to identify type errors

**Issue**: Styles not applying correctly
- **Solution**: Make sure Tailwind CSS is properly configured and `npm run dev` is running

## 🚀 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify
1. Build the project: `npm run build`
2. Drag and drop `dist` folder to Netlify
3. Or connect GitHub repo for automatic deployments

### Manual Deployment
1. Build: `npm run build`
2. Upload contents of `dist` folder to your web server

> **Remember**: Add your environment variables in your hosting platform's dashboard.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.





---

Built with ❤️ using React, TypeScript, and Tailwind CSS