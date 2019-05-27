package core.selenium;

import core.selenium.webdrivers.Chrome;
import core.selenium.webdrivers.Firefox;
import pivotal.utils.Setup;

/**
 * WebDriverFactory.
 */
public class WebDriverFactory {
    /**
     * Init Driver.
     *
     * @return DriverInit
     */
    public IDriverInit getDriverInit() {
        if (Setup.getInstance().getBrowser().equals("Chrome")) {
            return new Chrome();
        } else {
            return new Firefox();
        }
    }
}
