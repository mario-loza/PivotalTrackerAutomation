package pivotal.entities;

import core.utils.Logs;
import org.apache.log4j.Logger;

import java.util.Map;

/**
 * Created by Melvi Caballero.
 * Class to attributes project.
 */
public class Project {
    /** It creates to follow up the instruction of the class*/
    private Logger log = Logs.getInstance().getLog();

    String name;
    String account;
    String privacy;

    /**
     * Gets the project name with that the tests are being executed.
     * @return project name.
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the project name with that the tests are being executed.
     * @param name of the project.
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the account for a pivotal tracker with that the tests are being executed.
     * @return  pivotal tracker account.
     */
    public String getAccount() {
        return account;
    }

    /**
     * Sets the account for pivotal tracker with that the tests are being executed.
     * @param account for the project.
     */
    public void setAccount(String account) {
        this.account = account;
    }

    /**
     * Gets the attribute privacy (public or private) project name with that the tests are being executed.
     * @return public or private.
     */
    public String getPrivacy() {
        return privacy;
    }

    /**
     * Sets the attribute privacy with that the tests are being executed.
     * @param privacy (public or private)
     */
    public void setPrivacy(String privacy) {
        this.privacy = privacy;
    }

    /**
     * Sets information about attributes of the new project for test.
     * @param projectInformation map with datas.
     */
    public void setInformation(final Map<String, String> projectInformation) {
        log.info("Set information of project.");
        setName(projectInformation.get("Project Name"));
        setAccount(projectInformation.get("Account"));
        setPrivacy(projectInformation.get("Project Privacy"));
    }
}
