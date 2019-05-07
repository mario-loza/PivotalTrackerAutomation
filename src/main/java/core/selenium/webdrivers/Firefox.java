package core.selenium.webdrivers;

import io.github.bonigarcia.wdm.FirefoxDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.CapabilityType;

import java.io.File;
import java.util.HashMap;

public class Firefox {
    /**
     * Initializes Firefox driver.
     * @return A new FireFoxDriver.
     */
    public WebDriver initDriver() {
        
        FirefoxDriverManager driverManager = new FirefoxDriverManager();
        instance = FirefoxDriverManager.getInstance().setup();
        driver = new FirefoxDriver();

        return instance;
    }
}
