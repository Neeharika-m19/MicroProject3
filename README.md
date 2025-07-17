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

```

## 📦 Installation & Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/Neeharika-m19/your-project-name.git
    cd your-project-name
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure and Run MongoDB**

    Make sure MongoDB is running locally at:

    ```bash
    mongodb://127.0.0.1:27017
    ```

    Create a database named `RestaurantInventory` with a collection `kitchen`

    > 💡 (Optional) Seed with sample using MongoDB Compass or Mongo Shell.

4. **Run the Server**

    ```bash
    npm start or node Server.js
    The app will listen on http://localhost:5000/
    ```
## 📡 Routes & Usage

| Method | Path              | Description                                 |
|--------|-------------------|---------------------------------------------|
| GET    | `/`               | List all kitchen items (homepage.ejs)       |
| GET    | `/create`         | Show “Add Item” form (add.ejs)              |
| POST   | `/AddData`        | Save new item to the `kitchen` collection   |
| GET    | `/updatequantity` | Show “Update Item” form (update.ejs)        |
| POST   | `/update`         | Increment quantity & update reorder level   |
| GET    | `/deleteitem`     | Show “Delete Item” form (delete.ejs)        |
| POST   | `/delete`         | Delete item by `ItemID`                     |
| GET    | `/AddData`        | Render bar chart of quantities (bar.ejs)    |

---

## 📊 Data Visualization

On the **“Visual”** link (`GET /AddData`), the server compiles:

- **labels**: array of `ItemName`  
- **data**: corresponding `Quantity`

It then renders a responsive Chart.js bar chart inside `bar.ejs`.
