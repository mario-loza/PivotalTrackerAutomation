package core.selenium;

import core.selenium.webdrivers.Chrome;
import core.selenium.webdrivers.Firefox;
import pivotal.utils.Setup;

public class WebDriverFactory {

    public IDriverInit GetDriverInit(){
        if (Setup.getInstance().browser.equals("Chrome"))
            return new Chrome();
        else
            return new Firefox();
    }
}
