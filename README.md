# 🍔 Shake Shack Inventory Management

A full‑stack **Node.js** + **Express** + **MongoDB** application with **EJS** views for managing a restaurant’s kitchen inventory. Track items, adjust quantities, delete outdated entries, and visualize stock levels with a bar chart — all wrapped in the AdminLTE dashboard theme.

---

## 🚀 Features

- 📋 **CRUD Operations**  
  - **Add** new inventory items  
  - **Update** quantity, reorder level & status  
  - **Delete** items by ID  
- 🔍 **Search & List** all kitchen items on the homepage  
- 📊 **Data Visualization** with Chart.js bar chart  
- 🎨 **Responsive UI** built on AdminLTE + DataTables  
- 🔒 **Static Assets** served from `public/` (CSS, JS, logo)  

---

## 🛠️ Tech Stack

| Category     | Technology                             |
|-------------|-----------------------------------------|
| Runtime      | Node.js                                 |
| Web Framework| Express.js                              |
| Templating   | EJS                                     |
| Database     | MongoDB                                 |
| UI Theme     | AdminLTE (Bootstrap & Font Awesome)     |
| Charts       | Chart.js                                |
| Tables       | DataTables                              |
| Dev Tools    | nodemon, body‑parser                    |

---

## 📁 Project Structure

```bash
MicroProject3/
├── public/  
│   ├── css/         # custom styles, AdminLTE assets  
│   ├── js/          # AdminLTE scripts, Chart.js  
│   └── logo.jpg     # Shake Shack logo  
├── views/           # EJS templates  
│   ├── add.ejs  
│   ├── delete.ejs  
│   ├── homepage.ejs  
│   ├── update.ejs  
│   └── bar.ejs      # bar chart view  
├── Server.js        # Express server & route handlers  
├── package.json  
└── README.md

