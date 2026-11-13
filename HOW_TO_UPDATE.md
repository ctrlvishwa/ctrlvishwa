# 🚀 How to Update Your Portfolio & Photo (Without Touching Code)

Hey **Nikhil**! This portfolio is specially built so that **you can easily update any text, project, live links, and your photo anytime in the future without touching any HTML or CSS code**.

---

## 📸 How to Add / Change Your Photo

You can add or update your photo in **two simple ways**:

### Option 1: Place a File (Easiest)
1. Pick your picture (PNG or JPG).
2. Name it **`profile.jpg`** (or `profile.png`).
3. Place it directly inside this folder (`e:\potfolio vishwa\`).
4. Refresh your browser — your photo will show up automatically in the Hero frame!

### Option 2: 1-Click Upload from Browser
1. Open your portfolio in your browser at `http://localhost:3000/`.
2. On the Hero photo card, click **"Upload My Photo"** (or click **"Edit Info & Photo"** in the top navigation bar).
3. Select any picture from your phone or computer.
4. It instantly displays live and saves in your browser!

---

## 🌟 Method 1: The Visual Content Editor (In-Browser)

> The editor saves changes only in the current browser. It does not update the published site, and it is not password-protected: passwords in a static website's JavaScript cannot be kept secret.

1. Open your portfolio in any web browser (`http://localhost:3000/`).
2. Click **"Edit Info & Photo"** in the top navigation bar (or press `Alt + E`).
3. Use the editor tabs:
   - **Personal & Photo**: Change your photo, title, status badge, or headline.
   - **About Section**: Edit your bio and university details.
   - **Contact & Socials**: Change your email, phone number, LinkedIn, GitHub, or Instagram links.
   - **Projects**: Edit project titles, descriptions, live demo links (like Remark Chemical, KVG2Chem, Bug Catcher AI), and tags.
   - **Export data.js**: Copy or download the updated configuration file.
4. Click **"Apply & Save Live"** to preview changes in this browser. They are stored in that browser's local storage only.
5. To publish changes, open **Export data.js**, download the file, replace the project's `data.js`, then commit and push that change to GitHub. Vercel will deploy it automatically.

---

## 📝 Method 2: Direct Edit via `data.js` (Text File)

1. Open [`data.js`](./data.js) using **Notepad**, **VS Code**, or GitHub's online editor.
2. Edit what is inside the quotes `"..."` and save (`Ctrl + S`):

```javascript
personal: {
  fullName: "Nikhil Kumar Giri",
  preferredName: "Vishwa",
  roleTitle: "BCA Student specializing in AI & Data Analytics | Full-Stack & UI Developer",
  statusBadge: "Available for Internships & Freelance Work",
  avatarUrl: "profile.jpg" // Change this to your photo name or web image URL
}
```

---

## 🌐 Live Client & Freelance Projects Included

- **Remark Chemical**: [https://remarkchem.com/](https://remarkchem.com/)
- **KVG2Chem Industries**: [https://www.kvg2chem.in/](https://www.kvg2chem.in/)
- **Bug Catcher AI**: [https://bug-catcher-ai.onrender.com/](https://bug-catcher-ai.onrender.com/)
- **Streamlit Analytics Dashboards**
- **LocalMart (Ongoing Project)**
