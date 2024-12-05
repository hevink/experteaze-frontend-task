## **Instructions to Run the Application**

1. Clone the repository:
   ```bash
   git clone https://github.com/hevink/experteaze-frontend-task.git
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

## **Project Structure**

- **`components/`**: Contains all the React components.
- **`pages/`**: Contains all the Next.js pages.
- **`public/`**: Contains all the static files.


## **Technologies Used**

- **Next.js**: A React framework for building server-side rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for styling web applications.
- **Mui** : A library for Material UI components.

## **Features**

- **Responsive Design**: The application is fully responsive and works on all screen sizes.
- **Search**: The application supports searching for a specific user by their name.
- **Sorting**: The application supports sorting the users by their name, email, and phone number.
- **Mui Components**: The application uses Material UI components for a better user experience.

## **Recommendations**

For this project, I recommend using the Next.js App Router instead of the Pages Router, as it’s more scalable, aligns with the latest advancements in Next.js, and offers better support for server components. Additionally, use TypeScript to enhance type safety and developer productivity. For the design system, consider replacing MUI with shadcn, as it provides a more modern and flexible approach to styling. Lastly, opt for Zustand over MobX for state management, as it’s lightweight, simpler to use, and works seamlessly with TypeScript