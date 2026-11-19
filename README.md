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
  <img src="ss/Homepage.png" alt="Automotive Hub Platform Preview" width="100%" />
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

<p style="font-family: 'Bookman Old Style', 'URW Bookman', serif; font-size: 1.03rem; line-height: 1.75;">
<b>Automotive Hub</b> is an advanced, high-performance web platform engineered to transform the digital vehicle exploration, specification analysis, and dealership reservation experience. Developed with a responsive, modern architecture utilizing semantic HTML5, modular Vanilla JavaScript (ES6+), and Tailwind CSS, the application delivers a seamless, zero-latency interface tailored for car buyers, commercial fleet operators, and automobile enthusiasts alike.
</p>

<p style="font-family: 'Bookman Old Style', 'URW Bookman', serif; font-size: 1.03rem; line-height: 1.75;">
At its aesthetic core, Automotive Hub features a dark obsidian and amber gold theme, enriched with subtle glassmorphism touches, card hover elevations, and fluid transitions. The platform addresses multifaceted automotive marketplace demands by presenting an extensive, categorized vehicle fleet comprising executive sedans (such as the Honda City, Volkswagen Virtus, and Skoda Slavia), high-utility SUVs (including the Mahindra XUV700, Hyundai Creta, and Toyota Fortuner), and heavy-duty commercial logistics haulers (ranging from Tata Signa trucks to Isuzu utility pickups).
</p>

<p style="font-family: 'Bookman Old Style', 'URW Bookman', serif; font-size: 1.03rem; line-height: 1.75;">
The platform features an intelligent, real-time discovery engine capable of instant multi-attribute filtering. Users can dynamically query the entire database by automotive brand, vehicle model name, or geographical city location with instant UI grid updates. Selecting any vehicle smoothly transitions the interface into an immersive performance telemetry showcase. This hero view visualizes critical vehicle engineering metrics, including 0–100 km/h acceleration timestamps, maximum top-speed ceilings, total driving range indices, and live market valuation figures in Indian Lakhs.
</p>

<p style="font-family: 'Bookman Old Style', 'URW Bookman', serif; font-size: 1.03rem; line-height: 1.75;">
Complementing its exploration suite is a streamlined, client-side reservation pipeline. Integrated directly into the single-page application workflow, the booking console allows prospective buyers to schedule vehicle purchases or test drives with zero backend dependencies. Upon submitting contact details and vehicle preferences, the system triggers an in-browser Blob manifest compiler that dynamically serializes transaction details, generates a structured <code>order_details.txt</code> receipt file, and initiates an immediate local download for the client.
</p>

<p style="font-family: 'Bookman Old Style', 'URW Bookman', serif; font-size: 1.03rem; line-height: 1.75;">
By pairing rich telemetry visualization with intuitive search ergonomics and standalone order dispatch mechanics, Automotive Hub establishes a modern benchmark for lightweight automotive portals, offering complete responsive cross-device compatibility across desktop workstations, tablets, and mobile devices without requiring complex database infrastructure or recurring server hosting overheads. It represents a refined digital fusion of speed, elegance, and intuitive automotive consumer utility for everyone.
</p>

```
  ┌─────────────────────────┐      ┌─────────────────────────┐      ┌─────────────────────────┐
  │  🔍 Search & Filter Hub │ ──❯  │ 🏎️ Dynamic Telemetry HUD│ ──❯  │ 📝 Client Booking Form  │
  │  (Make, City, Category) │      │ (Speed / Range / 0-100) │      │  (Manifest .txt Export) │
  └─────────────────────────┘      └─────────────────────────┘      └─────────────────────────┘
```

> [!NOTE]
> **Client-Side Manifest Generation**: Automotive Hub operates seamlessly without external backend dependencies, dynamically building and initiating direct download of customized transaction receipts and booking orders.

---

<h2 id="02-portal-interface-gallery" style="font-family: 'Bookman Old Style', 'URW Bookman', 'Georgia', serif; color: #f59e0b;">📸 02. Portal Interface Gallery</h2>

<div align="center">

### 🌟 Interactive Discovery & Dynamic Showcase
<p align="center">
  <img src="ss/Homepage.png" alt="Automotive Hub Homepage" width="96%" />
</p>
<sub style="font-family: 'Bookman Old Style', 'URW Bookman', serif;"><b>◈ Figure 1.0:</b> Hero portal featuring live multi-attribute search and responsive interface layout.</sub>

<br/><br/>

### 🏎️ Single Vehicle Telemetry & Detailed Specs
<p align="center">
  <img src="ss/catalogue.png" alt="Single Vehicle Telemetry & Specifications" width="96%" />
</p>
<sub style="font-family: 'Bookman Old Style', 'URW Bookman', serif;"><b>◈ Figure 2.0:</b> Dedicated vehicle showcase featuring dynamic 0-100 km/h acceleration, top speed, driving range, and direct booking integration.</sub>

<br/><br/>

### 🚗 Vehicle Fleet Catalogue & Category Indexing
<p align="center">
  <img src="ss/verticals.png" alt="Fleet Catalogue Grid View" width="96%" />
</p>
<sub style="font-family: 'Bookman Old Style', 'URW Bookman', serif;"><b>◈ Figure 3.0:</b> Real-time category-filtered fleet grid displaying verified vehicle models, pricing, mileage, and fuel specifications.</sub>

<br/><br/>

### 📝 Client Reservation & Order Dispatch Console
<p align="center">
  <img src="ss/order.png" alt="Vehicle Booking Form" width="96%" />
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
│   ├── Homepage.png         # Screenshot: Hero search & landing portal
│   ├── catalogue.png        # Screenshot: Single vehicle telemetry & specifications
│   ├── verticals.png        # Screenshot: Vehicle fleet catalogue grid
│   └── order.png            # Screenshot: Direct reservation modal
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
