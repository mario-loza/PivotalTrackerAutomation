package steps;

import org.openqa.selenium.WebDriver;
import pivotal.ui.PageTransporter;
import pivotal.ui.ProjectDashboardPage;

public class ProyectSteps {

    PageTransporter pageTransporter= PageTransporter.getInstance();

    //pages
    ProjectDashboardPage projectDashboardPage;
    CreateProjectPopup createProjectPopup;
    ProjectPage projectPage;

    //entities
    Project project;

    @And
            //popolate Project entity
            project.setProjectInformation(table);
    //create project by ui
}
