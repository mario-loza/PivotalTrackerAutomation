package steps;

import core.selenium.WebDriverManager;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import org.junit.Assert;
import pivotal.entities.Project;
import pivotal.ui.*;
import pivotal.ui.components.TopBar;
import pivotal.ui.components.TopBarProject;
import pivotal.ui.pages.IntroductionPage;
import pivotal.ui.pages.PageTransporter;
import pivotal.ui.pages.ProjectDashboardPage;
import pivotal.ui.pages.ProjectsPage;

import java.util.List;
import java.util.Map;

public class ProjectSteps {

    private Project project;

    public ProjectSteps(Project project) {
        this.project = project;
    }

    PageTransporter pageTransporter = PageTransporter.getInstance();

    //pages
    ProjectDashboardPage projectDashboardPage;
    CreateProjectPopup createProjectPopup;
    ProjectsPage projectsPage;
    TopBar topBar;
    TopBarProject topBarProject;
    ProjectsDropDownPanel projectsDropDownPanel;
    IntroductionPage introductionPage;

    @When("^I navigate to Project Dashboard page$")
    public void navigateToProjectDashboardPage() {
        projectDashboardPage = pageTransporter.navigateToProjectDashboardPage();
    }

    @And("^I create a new Project from Project Dashboard page with the following values$")
    public void createProjectFromProjectDashboard(Map<String, String> projectInformation) {
        project.setInformation(projectInformation);

        createProjectPopup = projectDashboardPage.pressCreateProjectButton();
        createProjectPopup.createNewProject(project);
    }

    @And("^I create a new Project from Projects page with the following values$")
    public void createProjectFromProyectsPage(Map<String, String> projectInformation) {
        project.setInformation(projectInformation);

        topBar = new TopBar();
        projectsDropDownPanel = topBar.PressProjectDropdownbutton();
        createProjectPopup = projectsDropDownPanel.pressCreateProjectLink();
        createProjectPopup.createNewProject(project);
    }

    @And("^I create a new Project from the Projects panel from the top bar with the following values$")
    public void createProjectFromProjectsPanel(Map<String, String> projectInformation) {
        project.setInformation(projectInformation);

        topBar = new TopBar();
        projectsDropDownPanel = topBar.PressProjectDropdownbutton();
        createProjectPopup = projectsDropDownPanel.pressCreateProjectLink();
        createProjectPopup.createNewProject(project);
    }

    @Then("^the Project page should be displayed the project name$")
    public void isDisplayedProjectNameInProjectPage() {
        topBarProject = new TopBarProject();
        Assert.assertEquals(topBarProject.GetCurrentProjectName(), project.getName());
    }

    @Then("^the Dashboard page should be displayed the Project name$")
    public void verifyIsProjectDisplayedInDashboardPage() {
        Assert.assertTrue(projectDashboardPage.projectNameIsListed(project.getName()));
    }

    @When("^I navigate to Projects page$")
    public void navigateToProjectsPage() {
        projectsPage = pageTransporter.navigateToProjectsPage();
    }

    @Then("^the Projects page should be displayed the Project name$")
    public void verifyIsProjectDisplayedInProjectPage () {
        Assert.assertTrue(projectsPage.projectNameIsListed(project.getName()));
    }

    @When("^I display the Projects panel from the top bar$")
    public void displayToProjectsMenuFromTopBar() {
        topBar = new TopBar();
        projectsDropDownPanel = topBar.PressProjectDropdownbutton();
    }

    @Then("^the Projects panel should be displayed the Project name$")
    public void verifyIsProjectDisplayedInProjectsPanel() {
        Assert.assertTrue(projectsDropDownPanel.projectNameIsListed(project.getName()));
    }

    @When("^I navigate to Introduction page$")
    public void navigateToIntroductionPage() {
        introductionPage = pageTransporter.navigateToIntroductionPage();
    }

    @And("^I create a new Project from Introduction page with the name \"([^\"]*)\"$")
    public void createFirstProjectFromIntroductionPage(String projectName) {
        introductionPage.firstProject(projectName);
        this.project.setName(projectName);
    }

//    @When("^I navigate to Projects Drop Down Panel$")
//    public void navigateToProjectsDropDownPanel() {
//        projectsDropDownPanel = pageTransporter.navigateToProjectsDropDownPanel();
//    }
//
//    @And("^close the application$")
//    public void closeTheApplication() {
//        WebDriverManager.getInstance().getWebDriver().close();
//    }
}
