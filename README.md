<div align="center">

<h1 style="font-family: 'Cooper Black', 'Arial Black', serif; font-size: 3.8rem; letter-spacing: 2px; color: #f59e0b; margin-bottom: 2px; text-shadow: 0 0 25px rgba(245, 158, 11, 0.45);">
  🏎️ AUTOMOTIVE HUB 🏎️
</h1>

<h3 style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; font-weight: 500; color: #fbbf24; margin-top: 6px; letter-spacing: 0.8px;">
  ◈ <i>Next-Gen Vehicle Discovery, Spec Telemetry & Direct Booking Portal</i> ◈
</h3>

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Custom_Theme-1572B6?style=for-the-badge&logo=css3&logoColor=white)](style.css)
[![Status](https://img.shields.io/badge/Portal-Active_Production-00ff66?style=for-the-badge&logo=statuspage&logoColor=0a0c10)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-a78bfa?style=for-the-badge&logo=open-source-initiative&logoColor=0a0c10)](LICENSE)

<br/><br/>

<p align="center">
  <a href="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/homepage-full-preview.png" target="_blank">
    <img src="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/homepage-full-preview.png" alt="Automotive Hub Platform Preview" width="100%" />
  </a>
</p>

<br/>

<p align="center" style="font-family: 'Bookman Old Style', 'URW Bookman', serif; font-size: 1.05rem;">
  <b>✦ <a href="#01-platform-overview">Overview</a> ✦</b> &nbsp;•&nbsp;
  <b>✦ <a href="#02-portal-interface-gallery">Visual Gallery</a> ✦</b> &nbsp;•&nbsp;
  <b>✦ <a href="#03-fleet-analytics--telemetry">Fleet Analytics</a> ✦</b> &nbsp;•&nbsp;
  <b>✦ <a href="#04-vehicle-inventory--specs">Fleet Matrix</a> ✦</b> &nbsp;•&nbsp;
  <b>✦ <a href="#05-system-architecture">Architecture</a> ✦</b> &nbsp;•&nbsp;
  <b>✦ <a href="#06-installation--quick-start">Quick Start</a> ✦</b> &nbsp;•&nbsp;
  <b>✦ <a href="#07-booking-manifest-format">Manifest Export</a> ✦</b>
</p>

---

</div>

<h2 id="01-platform-overview" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">🌌 01. Platform Overview</h2>

<p style="font-family: 'Bookman Old Style', 'URW Bookman', serif; font-size: 1.05rem; line-height: 1.7;">
<b>Automotive Hub</b> is a responsive single-page web portal for real-time vehicle discovery, performance telemetry, and instant booking — built with semantic HTML5, Vanilla JavaScript (ES6+), and Tailwind CSS with zero backend dependencies.
</p>

- **🔍 Search & Filter:** Explore 65+ vehicles across Sedans, SUVs, and Trucks by make, model, category, or city.
- **🏎️ Telemetry HUD:** Inspect dynamic 0–100 km/h acceleration, top speed, driving range, and live pricing.
- **📝 Direct Booking:** Client-side reservation pipeline with automated manifest export (<code>order_details.txt</code>).

---

<h2 id="02-portal-interface-gallery" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">📸 02. Portal Interface Gallery</h2>

<div align="center">

### 🌟 Interactive Discovery & Dynamic Showcase
<p align="center">
  <a href="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/homepage-full-preview.png" target="_blank">
    <img src="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/homepage-full-preview.png" alt="Automotive Hub Homepage" width="96%" />
  </a>
</p>
<sub style="font-family: 'Bookman Old Style', 'URW Bookman', serif;"><b>◈ Figure 1.0:</b> Hero portal featuring live multi-attribute search and responsive interface layout.</sub>

<br/><br/>

### 🏎️ Single Vehicle Telemetry & Detailed Specs
<p align="center">
  <a href="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/car-specs-showcase.png" target="_blank">
    <img src="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/car-specs-showcase.png" alt="Single Vehicle Telemetry & Specifications" width="96%" />
  </a>
</p>
<sub style="font-family: 'Bookman Old Style', 'URW Bookman', serif;"><b>◈ Figure 2.0:</b> Dedicated vehicle showcase featuring dynamic 0-100 km/h acceleration, top speed, driving range, and direct booking integration.</sub>

<br/><br/>

### 🚗 Vehicle Fleet Catalogue & Category Indexing
<p align="center">
  <a href="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/fleet-catalogue-grid.png" target="_blank">
    <img src="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/fleet-catalogue-grid.png" alt="Fleet Catalogue Grid View" width="96%" />
  </a>
</p>
<sub style="font-family: 'Bookman Old Style', 'URW Bookman', serif;"><b>◈ Figure 3.0:</b> Real-time category-filtered fleet grid displaying verified vehicle models, pricing, mileage, and fuel specifications.</sub>

<br/><br/>

### 📝 Client Reservation & Order Dispatch Console
<p align="center">
  <a href="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/booking-reservation.png" target="_blank">
    <img src="https://raw.githubusercontent.com/PriyanshuPundir01/Automotive_Hub/main/ss/booking-reservation.png" alt="Vehicle Booking Form" width="96%" />
  </a>
</p>
<sub style="font-family: 'Bookman Old Style', 'URW Bookman', serif;"><b>◈ Figure 4.0:</b> Integrated booking console with auto-populated vehicle selector and instant manifest generation.</sub>

</div>

---

<h2 id="03-fleet-analytics--telemetry" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">📊 03. Fleet Analytics & Telemetry</h2>

### 🚗 Vehicle Fleet Inventory Distribution
```mermaid
pie title Fleet Category Composition
    "Executive Sedans (Honda, VW, Skoda)" : 35
    "Premium & Compact SUVs (Creta, XUV700, Fortuner)" : 35
    "Commercial Trucks & Logistics (Tata, Mahindra, Isuzu)" : 30
```

### ⛽ Powertrain & Fuel Demographics
```mermaid
pie title Fuel Type Breakdown
    "Diesel Powertrains (SUVs & Commercial Fleet)" : 55
    "Petrol Engines (Performance Sedans & Compacts)" : 45
```

---

<h2 id="04-vehicle-inventory--specs" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">⚡ 04. Vehicle Fleet Matrix</h2>

<p style="font-family: 'Bookman Old Style', 'URW Bookman', serif; font-size: 1.02rem;">
Automotive Hub manages verified inventory records paired with real-time performance specs:
</p>

| Vehicle Class | Flagship Models | Price Range | 0–100 km/h | Top Speed | Max Range | Primary Fuel |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Executive Sedans** | *Honda City, VW Virtus, Skoda Slavia, Hyundai Verna* | `₹8.5L - ₹16.0L` | **9.5s – 12.0s** | `150 - 195 km/h` | `480 - 650 km` | Petrol / Diesel |
| **Premium SUVs** | *Mahindra XUV700, Toyota Fortuner, Jeep Compass* | `₹13.5L - ₹45.0L` | **9.2s – 12.0s** | `170 - 200 km/h` | `550 - 700 km` | Diesel / Petrol |
| **Compact SUVs** | *Tata Nexon, Maruti Brezza, Skoda Kushaq, Taigun* | `₹13.5L - ₹18.5L` | **9.8s – 11.0s** | `170 - 188 km/h` | `550 - 590 km` | Petrol |
| **Commercial Logistics** | *Tata Signa, BharatBenz 1117, Isuzu D-Max, Bolero* | `₹7.5L - ₹30.0L` | **11.0s – 15.0s** | `80 - 120 km/h` | `400 - 700 km` | Heavy-Duty Diesel |

---

<h2 id="05-system-architecture" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">🧬 05. System Architecture</h2>

```mermaid
flowchart TD
    subgraph Client ["🌐 USER INTERFACE LAYER"]
        A["Hero Search Engine"] --> B{"Input Resolver"}
        C["Category Selector (Sedan / SUV / Truck)"] --> D["Category Filter"]
    end

    subgraph CoreEngine ["🧠 CATALOGUE & FILTER ENGINE"]
        B -->|Make / Model / City Match| E["Dynamic Catalogue Renderer"]
        D -->|Category Key Match| E
        E --> F["Interactive Vehicle Grid"]
    end

    subgraph TelemetryView ["🏎️ TELEMETRY HUD"]
        F -->|Select Vehicle| G["Hero Spec Showcase"]
        G --> H1["0-100 km/h Acceleration"]
        G --> H2["Max Top Speed"]
        G --> H3["Maximum Range (km)"]
    end

    subgraph OrderPipeline ["📝 BOOKING & DISPATCH PIPELINE"]
        F -->|Book Now| I["Pre-populate Order Form"]
        I --> J["Form Submission Validator"]
        J --> K["Blob Manifest Compiler"]
        K --> L["Direct File Download (order_details.txt)"]
    end

    style Client fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#38bdf8
    style CoreEngine fill:#0f172a,stroke:#f59e0b,stroke-width:2px,color:#f59e0b
    style TelemetryView fill:#0f172a,stroke:#ec4899,stroke-width:2px,color:#ec4899
    style OrderPipeline fill:#0f172a,stroke:#10b981,stroke-width:2px,color:#10b981
```

---

<h2 id="06-installation--quick-start" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">🚀 06. Installation & Quick Start</h2>

### 📋 Prerequisites
- Any modern web browser (**Chrome**, **Firefox**, **Edge**, **Safari**)
- Optional: Local HTTP server (e.g., Live Server extension or Python `http.server`)

### 🔧 Setup & Execution

```bash
# 1. Clone the repository
git clone https://github.com/PriyanshuPundir01/Automotive_Hub.git
cd Automotive_Hub

# 2. Option A: Direct browser launch
# Double-click index.html or open it directly in your browser

# 3. Option B: Serve locally via Python
python -m http.server 8000

# 4. Access the portal at:
# http://localhost:8000
```

---

<h2 id="07-booking-manifest-format" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">💾 07. Booking Manifest Format</h2>

<p style="font-family: 'Bookman Old Style', 'URW Bookman', serif; font-size: 1.02rem;">
When users submit a booking reservation, a structured booking manifest file (<code>order_details.txt</code>) is dynamically packaged and downloaded:
</p>

<details open>
<summary><b>📄 Client Booking Manifest (<code>order_details.txt</code>)</b></summary>

```text
--- Automotive Hub Order Details ---

Order Date: 9/26/2026, 11:00:00 PM
Customer Name: Priyanshu Sharma
Email: priyanshu@example.com
Phone Number: +91 98765 43210
Selected Vehicle: Mahindra XUV700
Additional Details: Requesting test drive availability for the AX7 Luxury Diesel AT variant.
```
</details>

---

<h2 id="08-project-structure" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">📂 08. Project Structure</h2>

```text
automotive hub/
├── ss/                      # Single screenshots repository directory
│   ├── homepage-full-preview.png# Screenshot: Hero search & landing portal
│   ├── car-specs-showcase.png   # Screenshot: Single vehicle telemetry & specifications
│   ├── fleet-catalogue-grid.png # Screenshot: Vehicle fleet catalogue grid
│   └── booking-reservation.png  # Screenshot: Direct reservation modal
├── index.html               # Core semantic HTML5 application structure
├── style.css                # Custom CSS keyframes, scrollbar & animations
├── script.js                # Dataset, search filter engine & manifest export
├── vercel.json              # Production headers configuration
└── README.md                # Comprehensive project documentation
```

---

<h2 id="09-license" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">📜 09. License</h2>

Distributed under the **[MIT License](LICENSE)**.

<div align="center">

---

⭐ **Star this repository if you find Automotive Hub valuable for your automotive projects!** ⭐

<p style="font-family: 'Bookman Old Style', 'URW Bookman', serif; color: #94a3b8; margin-top: 8px;">
  Crafted with 🏎️ by <b> Priyanshu Pundir</b>
</p>

</div>
