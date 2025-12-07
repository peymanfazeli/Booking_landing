# Khodkar -- Smart Online Appointment System

A modern, lightweight, and fully responsive landing page for the
"Khodkar" smart scheduling platform.

## 🚀 Features

-   Fully designed UI using HTML + CSS\
-   Minimal, professional flat-design (Deep Navy + Soft Yellow Palette)\
-   100% responsive across devices\
-   Appointment/Contact form powered by Netlify Forms\
-   Sections included:
    -   Service introduction\
    -   Pain points of traditional booking\
    -   Benefits of automated scheduling\
    -   System features (Smart Calendar, SMS reminders, Online Payment,
        Dashboard)\
    -   Supported business categories\
    -   Product mockups and illustrations

------------------------------------------------------------------------

## 📁 Project Structure

    project/
    │
    ├── index.html            # Main landing page
    ├── style.css             # Full site styling
    ├── script.js             # (Optional) JS scripts
    │
    ├── assets/
    │   ├── images/           # App mockups
    │   └── fonts/
    │       └── IRANSans/     # Persian font
    │
    └── README_EN.md          # This file

------------------------------------------------------------------------

## ⚙️ Getting Started

### 1. Clone the project

``` bash
git clone <repository-url>
cd project
```

### 2. Run locally

Simply open `index.html` in a browser\
or use **Live Server**:

``` bash
Right click → Open with Live Server
```

------------------------------------------------------------------------

## 📮 Netlify Form Integration

The form is ready to work with Netlify without backend setup:

``` html
<form name="contact" method="POST" netlify data-netlify-redirect="/success">
```

Once deployed on Netlify, submissions are captured automatically.

------------------------------------------------------------------------

## 🎨 Design System

### Color Palette

  Color         Hex
  ------------- -----------
  Deep Navy     `#0f2440`
  Navy Dark     `#133a5a`
  Navy Blue     `#1e5a88`
  Soft Yellow   `#f5dd8a`
  Background    `#f7f9fb`

### Style Guidelines

-   Modern flat aesthetics\
-   Soft shadows\
-   Rounded UI elements\
-   IRANSans typography\
-   Clean, high-contrast layout

------------------------------------------------------------------------

## 🖼 Illustrations

All illustrations are generated using AI models (Flux Pro / DALL·E) with
a unified flat-design theme.

Images are located in:

    assets/images/

------------------------------------------------------------------------

## 📱 Responsive Design

Optimized for: - Mobile\
- Tablet\
- Desktop

Using CSS Grid, Flexbox, and media breakpoints:

``` css
@media (max-width: 900px) { ... }
@media (max-width: 640px) { ... }
```

------------------------------------------------------------------------

## 📌 Roadmap / TODO

-   [ ] Add pricing section\
-   [ ] Integrate real SMS API\
-   [ ] Add customer testimonials\
-   [ ] Add English/Farsi language toggle\
-   [ ] Add subtle animations

------------------------------------------------------------------------