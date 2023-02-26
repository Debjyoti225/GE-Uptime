# GE Uptime

GE Uptime is a condensed responsive web-app tool that provides monitoring services. The data fetched from the various data centers, routed through Azure clusters and containers, is visualized and monitored using a tertiary platform called Datadog. GE-Uptime-Dashboard, fetches the necessary information of the various customer dashboards and monitors and displays their respective uptimes.

The home tab displays the widgets of the established GE-Healthcare customers, each displaying their target uptimes and overall-monitoring periods. These widgets route the user to the dashboards of the respective customers for visualising the uptime of the services. The dashboard screen is sub-divided into 'Underlying SLOs' or Service Level Objectives and 'Associated Tables'. The SLO widgets constitute the dashboard as a whole. The data presented in each of these SLOs are calculated and dynamically determined values derived from the collective service uptimes of the associated monitors. On clicking the SLO widgets, the associated set of monitors with their respective details populates the Table below. The Table built using the Material UI, contains the Pagination functionality thereby allowing the user to customize the quantity of data displayed on the screens.

Overall, the project was built to suit the requirement of the DevOps team at GE Healthcare to monitor the overall uptime of the services without the necessity of logging into the Datadog platform. Additionally, this web-application relieved the users from the necessity of creating a Datadog profile and acquiring different hierarchical permissions to visualise the same.

## Tech Stack highlights

Following were the key tech-stacks explored in the course of building this project:
React js, React-bootstrap, Particle js, MUI, JavaScript, CSS, Restful-API, json, datadog, Postman
