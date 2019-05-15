package core.utils;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.Properties;


public class Setup {

    private static Setup instance;

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

    public String urlBasePath;
    public String browser;
    public String username;
    public String password;
    
    public String resturi;
    public String token;

    private void initialize(){
        Properties properties = new Properties();
        try {
            FileInputStream in = new FileInputStream("app.properties");
            properties.load(in);
            in.close();
        }catch(Exception e){
            e.printStackTrace();
        }

        urlBasePath = properties.getProperty("basepath");
        browser = properties.getProperty("browser");
        username = properties.getProperty("username");
        password = properties.getProperty("password");
        resturi = properties.getProperty("resturi");
        token = properties.getProperty("token");
    }
}
