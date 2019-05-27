package pivotal.utils;

import core.utils.Logs;
import org.apache.log4j.Logger;

import java.io.FileInputStream;
import java.util.Properties;

/**
 * Setup.
 */
public class Setup {
    private static Setup instance;
    private String urlBasePath;
    private String browser;
    private String username;
    private String password;
    private String resturi;
    private String token;

    /**
     * getRunWithJenkins.
     * @return String
     */
    public String getRunWithJenkins() {
        return runWithJenkins;
    }

    /**
     * setRunWithJenkins.
     * @param runWithJenkins value
     */
    public void setRunWithJenkins(String runWithJenkins) {
        this.runWithJenkins = runWithJenkins;
    }

    private String runWithJenkins;

    /**
     * getUrlBasePath.
     * @return String
     */
    public String getUrlBasePath() {
        return urlBasePath;
    }

    /**
     * setUrlBasePath.
     * @param urlBasePath base path
     */
    public void setUrlBasePath(final String urlBasePath) {
        this.urlBasePath = urlBasePath;
    }

    /**
     * getBrowser.
     * @return String
     */
    public String getBrowser() {
        return browser;
    }

    /**
     * setBrowser.
     * @param browser browser
     */
    public void setBrowser(final String browser) {
        this.browser = browser;
    }

    /**
     * getUsername.
     * @return String
     */
    public String getUsername() {
        return username;
    }

    /**
     * setUsername.
     * @param username user name
     */
    public void setUsername(final String username) {
        this.username = username;
    }

    /**
     * getPassword.
     * @return String
     */
    public String getPassword() {
        return password;
    }

    /**
     * setPassword.
     * @param password password
     */
    public void setPassword(final String password) {
        this.password = password;
    }

    /**
     * getResturi.
     * @return String
     */
    public String getResturi() {
        return resturi;
    }

    /**
     * setResturi.
     * @param resturi the rest uri
     */
    public void setResturi(final String resturi) {
        this.resturi = resturi;
    }

    /**
     * getToken.
     * @return String
     */
    public String getToken() {
        return token;
    }

    /**
     * setToken.
     * @param token the token
     */
    public void setToken(final String token) {
        this.token = token;
    }

    /**
     * It creates to follow up the instruction of the class.
     */
    private Logger log = Logs.getInstance().getLog();

    /**
     * Constructor of page WebDriverManager.
     */
    protected Setup() {
        initialize();
    }

    /**
     * Constructor of Setup.
     * Gets Setup as Singleton.
     *
     * @return a instance.
     */
    public static Setup getInstance() {
        if (instance == null) {
            instance = new Setup();
        }
        return instance;
    }

    /**
     * Initialize.
     */
    private void initialize() {
        Properties properties = new Properties();
        try {
            FileInputStream in = new FileInputStream("app.properties");
            properties.load(in);
            in.close();
        } catch (Exception e) {
            log.info(e.getMessage());
            e.printStackTrace();
        }

        urlBasePath = properties.getProperty("basepath");
        browser = properties.getProperty("browser");
        username = properties.getProperty("username");
        password = properties.getProperty("password");
        resturi = properties.getProperty("resturi");
        token = properties.getProperty("token");
        runWithJenkins = properties.getProperty("runWithJenkins");
    }
}
