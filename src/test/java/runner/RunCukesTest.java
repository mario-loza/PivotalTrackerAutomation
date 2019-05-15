package runner;

import core.selenium.WebDriverManager;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Reportable;
import org.testng.annotations.AfterTest;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        glue={"steps","hooks"},
        features = {"src/test/resources/feature/project.feature"},
        monochrome = true)
//, "hooks"
public class RunCukesTest extends AbstractTestNGCucumberTests {

    @AfterTest
    public void afterExecution() {

        //Generate Cucumber Report
        File reportOutputDirectory = new File("target");
        List<String> jsonFiles = new ArrayList<>();
        jsonFiles.add("target/cucumber.json");

        String buildNumber = "1";
        String projectName = "cucumberProject";
        boolean runWithJenkins = false;

        Configuration configuration = new Configuration(reportOutputDirectory, projectName);
// optional configuration - check javadoc
        configuration.setRunWithJenkins(runWithJenkins);
        configuration.setBuildNumber(buildNumber);
// addidtional metadata presented on main page
        configuration.addClassifications("Platform", "Windows");
        configuration.addClassifications("Browser", "Chrome");
        configuration.addClassifications("Branch", "release/1.0");
        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
        Reportable result = reportBuilder.generateReports();
    }
}
