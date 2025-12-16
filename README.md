# 👟 Sneaker Zone

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Language](https://img.shields.io/badge/Language-Arabic-green)
![License](https://img.shields.io/badge/License-MIT-blue)

**Sneaker Zone** is a fully responsive, front-end e-commerce interface designed for a footwear store. Built with vanilla JavaScript, HTML5, and CSS3, it features a native RTL (Right-to-Left) layout optimized for Arabic users using the Tahoma font family.

The project demonstrates core DOM manipulation concepts including dynamic sliders, product filtering, interactive galleries, and client-side form validation.

## 🌟 Key Features

### 🏠 Home Page
- **Hero Section:** Features a centered layout with a prominent product showcase. The main image utilizes `box-shadow` for depth and rounded corners for a modern look.
- **Auto-Playing Slider:** A custom JavaScript carousel that cycles through featured products every 3 seconds.
- **Call to Action:** Distinctive orange buttons (`background: orange`) designed to drive user engagement.

### 🛍️ Product Catalog
- **Responsive Grid System:** Utilizes CSS Flexbox (`display: flex`, `flex-wrap: wrap`) to create a fluid grid where product cards adjust automatically based on screen width.
- **Smart Filtering:** Interactive filter buttons (All, Nike, Adidas) that toggle product visibility instantly without page reloads.
- **Card Design:** Each product is contained within a styled card featuring a clean white background, subtle borders, and consistent spacing.

### 🔍 Product Details
- **Interactive Color Picker:** Users can click on color swatches (Black, Red, Blue) to dynamically update the main product image.
- **Visual Feedback:** Selected colors are visually highlighted to indicate active state.

### 📞 Contact Page
- **Form Validation:** Native JavaScript validation prevents empty submissions.
- **User Feedback:** Displays distinct success (Green) or error (Red) messages based on input status.

---

## 🎨 UI/UX & Styling Strategy

The project implements a cohesive design system using **CSS3**:

| Component | Design Decision | Source |
| :--- | :--- | :--- |
| **Typography** | Uses `Tahoma, sans-serif` globally for optimal Arabic text readability. | `home.css` |
| **Navigation** | Dark theme (`#333` background) with Flexbox spacing for clear hierarchy. | `home.css` |
| **Layouts** | **Flexbox** is used extensively for the navigation bar and product grid to ensure alignment and responsiveness. | `products.css` |
| **Visuals** | Soft shadows (`0 4px 8px rgba(0,0,0,0.2)`) and rounded borders (`border-radius: 10px`) create a polished feel. | `home.css` |

---

## 👥 Project Team Members
This project was collaboratively developed by:

Youssif Tarek Ahmed - Team Leader & Home Page Developer

Youssif Ahmed Yehia - Product Page Developer

Omar Amr Mohamed - Details Page Developer

Malak Ezzat Nabel - Contact Page Developer

---

## 📂 Project Structure

The project is organized to separate concerns (Structure, Style, and Logic).

```text
Sneaker-Zone/
│
├── index.html          # Homepage
├── products.html       # Product listing
├── details.html        # Single product view
├── contact.html        # Contact form
│
├── css/                # Stylesheets
│   ├── home.css        # Hero section & global nav styles
│   ├── products.css    # Flexbox grid & card styles
│   ├── details.css     # Product view specific styles
│   └── contact.css     # Form layout styles
│
└── js/                 # JavaScript Logic
    ├── home.js         # Slider logic
    ├── products.js     # Filtering logic
    ├── details.js      # Image switching logic
    └── contact.js      # Form validation
