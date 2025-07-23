# Muizenberg Electricity Cooperative Website

Welcome to the official website repository for the Muizenberg Electricity Cooperative (MECC). This site serves as a central hub for information about our cooperative, its initiatives, and how community members can get involved in building local energy resilience.

## Features

This website includes:

*   **Dynamic Content:** Information about MECC's mission, services, and campaigns.
*   **Gallery:** A visual showcase of our events and projects.
*   **Membership Application:** A form for individuals to apply for MECC membership.
*   **Community Survey:** A survey to gather insights into local energy needs and priorities.
*   **Project Registration Form:** A new form for community members to register their solar and renewable energy projects, contributing to a local knowledge base.
*   **Smooth Page Transitions:** Implemented using Barba.js for a more fluid user experience.

## Technologies Used

This website is built upon a modified Bootstrap theme, leveraging standard web technologies:

*   **HTML5**
*   **CSS3** (with a focus on `css/style.css` and theme-specific styles)
*   **JavaScript** (including jQuery, Owl Carousel, ScrollReveal, and Barba.js for transitions)
*   **Bootstrap** (for responsive design and UI components)

### Theme Details

*   **Theme Name:** EstateAgency
*   **Theme URL:** https://bootstrapmade.com/real-estate-agency-bootstrap-template/
*   **Author:** BootstrapMade.com
*   **Author URL:** https://bootstrapmade.com

## Local Development Setup

To set up and run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/umbane/mecc.org.za.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd mecc.org.za
    ```
3.  **Open `index.html`:**
    Simply open the `index.html` file in your web browser. Most modern browsers will render the site correctly.

    *Note: Some features, like form submissions, rely on Netlify's backend and will not function in a purely local environment without additional setup (e.g., a local server and form handling solution).*

## Deployment

This website is designed for deployment on **Netlify**. The forms are configured to use Netlify Forms for seamless submission handling.

To deploy on Netlify:

1.  **Connect your Git repository:** Link your `mecc.org.za` GitHub repository to Netlify.
2.  **Build settings:** Netlify will automatically detect the project as a static site. Ensure your build command is empty and your publish directory is the root of the repository (`/`).
3.  **Form setup:** Netlify Forms will automatically detect the `data-netlify="true"` attribute on your forms (`survey`, `membership`, `project-registration`). Submissions will appear in your Netlify dashboard.

## Contributing

We welcome contributions to improve the website. Please feel free to fork the repository, make your changes, and submit a pull request.