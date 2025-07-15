# Khubab Shams – Portfolio Website

A minimal, modern, and responsive portfolio website for Khubab Shams.

## 🚀 Overview
This project showcases my skills, experience, and projects as a software developer specializing in Python, Odoo ERP, and web/mobile technologies. The site is built with clean HTML and CSS, and features a contact form powered by EmailJS.

_Developed and customized with [Cursor](https://www.cursor.so/) AI assistant._

## ✨ Features
- Responsive, minimal design
- Skills and project showcase
- Contact form (EmailJS integration)
- Social links (GitHub, LinkedIn)
- Favicon and PWA manifest support

## 📁 Folder Structure
```
/
├── public/
│   ├── favicon.ico, .png, .webmanifest, etc.
├── src/
│   ├── index.html
│   ├── styles.css
│   └── img/
│       ├── avatar-profile.png
│       └── (other images)
├── .gitignore
└── README.md
```

## 🛠️ Setup & Usage
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
2. **Open `src/index.html` in your browser.**
3. **To use the contact form:**
   - [Sign up for EmailJS](https://www.emailjs.com/)
   - Create a service, email template, and get your public key
   - Replace the placeholders in the script at the bottom of `index.html` with your actual EmailJS credentials:
     ```js
     emailjs.init('YOUR_PUBLIC_KEY');
     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ...)
     ```

## 🖌️ Customization
- **Profile image:** Replace `src/img/avatar-profile.png` with your own.
- **Skills & Projects:** Edit the relevant sections in `src/index.html`.
- **Colors & styles:** Edit `src/styles.css`.

## 🌐 Deployment
You can deploy this site on GitHub Pages, Netlify, Vercel, or any static hosting provider.

- For GitHub Pages, place the contents of `src/` and `public/` in your repository and configure Pages to serve from the root or `/src`.

## 📬 Contact
For questions or collaboration, use the contact form on the site or email: [khubabShams@gmail.com](mailto:khubabShams@gmail.com)

---

> Built and customized with ❤️ by Khubab Shams and [Cursor](https://www.cursor.so/)
