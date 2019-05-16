package core.selenium;

import core.utils.Logs;
import org.apache.log4j.Logger;

import java.io.FileInputStream;
import java.util.Properties;

/**
 * Class to manage the config of web driver.
 */
public class WebDriverConfig {
    /** It creates to follow up the instruction of the class*/
    private Logger log = Logs.getInstance().getLog();

    private int implicitWaitTime;
    private int explicitWaitTime;
    private int waitSleepTime;

    private static WebDriverConfig instance;

    protected WebDriverConfig() {
        initialize();
    }
    /**
     * Constructor of WebDriverConfig.
     * Gets WebDriverConfig as Singleton.
     *
     * @return a instance.
     */
    public static WebDriverConfig getInstance() {
        if (instance == null) {
            instance = new WebDriverConfig();
        }
        return instance;
    }

    /**
     * Initializes WebDriverConfig.
     */
    public void initialize() {
        Properties properties = new Properties();
        try {
            FileInputStream in = new FileInputStream("web_driver.properties");
            properties.load(in);
            in.close();
        }catch(Exception e){
            log.error(e.getMessage());
            e.printStackTrace();

        }

        implicitWaitTime = Integer.parseInt(properties.getProperty("implicitWaitTime"));
        explicitWaitTime = Integer.parseInt(properties.getProperty("explicitWaitTime"));
        waitSleepTime = Integer.parseInt(properties.getProperty("waitSleepTime"));
    }

    /**
     * Gets the implicit wait time set for the WebDriver.
     *
     * @return The implicit time.
     */
    public int getImplicitWaitTime() {
        return implicitWaitTime;
    }

    /**
     * Gets the explicit wait time set for the WebDriver.
     *
     * @return The explicit time.
     */
    public int getExplicitWaitTime() {
        return explicitWaitTime;
    }

    /**
     * Gets the sleep time wait set for the WebDriver.
     *
     * @return Sleep time wait.
     */
    public int getWaitSleepTime() {
        return waitSleepTime;
    }
}
