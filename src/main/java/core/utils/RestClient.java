package core.utils;

import org.glassfish.jersey.client.authentication.HttpAuthenticationFeature;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * Created by Melvi Caballero.
 * Class to connect to API test of Pivotal Tracker and use the command
 * Post, get, and delete.
 */
public class RestClient {
    private static final String REST_URI
            = "https://www.pivotaltracker.com/services/v5/";
    String token = "cd4715309620eea692d2cc5bb9345990";

    private Client client;

    /**
     *
     */
    public RestClient() {
        client = ClientBuilder.newClient();
        HttpAuthenticationFeature feature = HttpAuthenticationFeature.basic(Setup.getInstance().username, Setup.getInstance().password);
        client.register(feature);
    }

    /**
     * This method is for delete project used a API delete method.
     * @param id of project
     */
    public void deleteProject(Long id) {
        client
                .target(REST_URI)
                .path("projects")
                .path(String.valueOf(id))
                .request()
                .header("X-TrackerToken", Setup.getInstance().token)
                .delete();
    }

    /**
     * List all project with API method get.
     * @return result is Id of projects.
     */
    public List<Long> getAllProjects() {
        List<Long> results = new ArrayList<>();

        Response response = client
                .target(REST_URI)
                .path("projects")
                .request(MediaType.APPLICATION_JSON)
                .header("X-TrackerToken", Setup.getInstance().token)
                .get();
        String listString = response.readEntity(String.class);

        JSONParser parser = new JSONParser();
        try {
            JSONArray projects = (JSONArray) parser.parse(listString);
            Iterator<JSONObject> iterator = projects.iterator();
            // iterate through json array
            while (iterator.hasNext()) {
                // do something. Fetch fields in services array.
                results.add((Long) (iterator.next().get("id")));
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return results;
    }

    /**
     * This method delete all project of pivotal tracker.
     */
    public void deleteAllProjects() {
        List<Long> projects = getAllProjects();

        for (Long id : projects) {
            deleteProject(id);
        }
    }

    /**
     * This method is for Create a new project.
     * @param name the project name to it has been created.
     */
    public void createProject(String name) {
        Project project = new Project();
        project.setId(0);
        project.setName(name);

        client
                .target(REST_URI)
                .path("projects")
                .request(MediaType.APPLICATION_JSON)
                .header("X-TrackerToken", Setup.getInstance().token)
                .post(Entity.json("{ \"name\" : \"" + name + "\"}"));
    }

    /**
     * Project with the main attributes getters and setters.
     */
    public class Project {
        private int id;
        private String name;

        /**
         * Gets project id for the test.
         * @return project id.
         */
        public int getId() {
            return id;
        }

        /**
         * Sets project id for the test.
         * @param id is project id.
         */
        public void setId(int id) {
            this.id = id;
        }

        /**
         * Get the project name for the test.
         * @return project name.
         */
        public String getName() {
            return name;
        }

        /**
         * Set the project name for the test.
         * @param name is project name.
         */
        public void setName(String name) {
            this.name = name;
        }
    }
}


