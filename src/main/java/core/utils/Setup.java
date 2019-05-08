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

    private void initialize(){
        JSONParser parser = new JSONParser();

        try (Reader reader = new FileReader("c:\\users\\melvi\\github\\gui\\project\\practica\\src\\test\\resources\\config.json")) {

            JSONObject jsonObject = (JSONObject) parser.parse(reader);

            urlBasePath = (String) jsonObject.get("basePath");


        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

}
