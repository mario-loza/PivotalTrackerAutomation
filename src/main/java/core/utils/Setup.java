package core.utils;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

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
    public String token;

    private void initialize(){
        JSONParser parser = new JSONParser();
        String configFile = getClass().getClassLoader().getResource("config.json").getPath();

        try (Reader reader = new FileReader(configFile)) {

            JSONObject jsonObject = (JSONObject) parser.parse(reader);

            urlBasePath = (String) jsonObject.get("basePath");
            browser = (String) jsonObject.get("browser");
            username = (String) jsonObject.get("username");
            password = (String) jsonObject.get("password");
            token = (String) jsonObject.get("token");

        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

}
