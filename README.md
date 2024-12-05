# **Experteaze - Frontend Developer Technical Assessment**

## **Objective**

This assessment evaluates your ability to build a visually appealing, functional, and responsive frontend for the **Experteaze** platform using **Next.js**, **MobX for state management**, and **MUI Components** along with custom styling.

Try your best to stick with MUI Components and avoid using HTML Elements unless there is no other way.

---

## **Task Description**

You are tasked with building a **Home Services Search and Comparison Page** for Experteaze. The page should allow users to search for home services offered by freelancers and compare their prices and details.

---

### **Functional Requirements**

1. **Homepage Layout**
   - Design a landing page with:
     - A header containing a logo placeholder, navigation links, and a "Login" button.
     - A search bar prominently displayed in a hero section.
     - A placeholder hero image/banner, same as what's on the current experteaze.ca landing page.
2. **Search Functionality**
   - Implement a search bar where users can type the type of service they’re looking for (e.g., "Yard Work," "Painting").
   - Dynamically display a list of services matching the search query.
3. **Service Cards**
   - Display search results as styled cards, each containing:
     - Service Name
     - Freelancer Name
     - Price (e.g., "$50/hour")
     - Ratings
     - A "Compare" button.
4. **Comparison Table**
   - Allow users to select up to **3 services** for comparison using the "Compare" button on each card.
   - Display a comparison table at the bottom of the page that shows:
     - Freelancer Names
     - Prices
     - Ratings (hardcoded dummy data).

---

### **Technical Requirements**

1. **State Management**
   - Use **MobX** to manage:
     - Search results.
     - Selected services for comparison.
2. **Styling**
   - Use **MUI Styling** for component-specific styling.
   - Ensure the design is fully responsive across mobile and desktop views.
3. **Componentization**
   - Break the page into reusable components:
     - `Header`
     - `SearchBar`
     - `ServiceCard`
     - `ComparisonTable`
     - etc.
4. **API Simulation**
   - Use a mock data file (e.g., `services.json`) to simulate API responses for the search functionality.
5. **Additional Features (Optional)**
   - Add a sorting filter for services by price or rating.
   - Implement a theme toggle (light/dark) using **MUI's ThemeProvider**.

---

## **Instructions to Run the Application**

1. Clone the repository:
   ```bash
   git clone https://github.com/experteaze-interview/frontend-assessment.git
   cd experteaze-frontend-assessment
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## **Evaluation Criteria**

1. **Code Quality**
   - Code should be well-organized, modular, and maintainable.
2. **Feature Completion**
   - Ensure all required functionality is implemented.
3. **User Experience**
   - The design should be polished, intuitive, and responsive.
4. **State Management**
   - Proper usage of **MobX** to handle the state effectively.

---

## **Submission Details**

1. Push your code to this **GitHub repository** with the following branch name structure **YourFullName/experteaze-assessment**.
2. Include a `Pull Request` description with:
   - A brief description of your approach and solution.
3. Submit the repository link within the given time frame, a maximum of 5 hours.

---

## **Good Luck!**

We look forward to seeing your creativity and technical expertise in action.
