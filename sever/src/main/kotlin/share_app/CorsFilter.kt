/* package share_app;
import com.mpaw.app.controllers.Apply;
import java.util.HashMap;
import spark.Filter;
import spark.Request;
import spark.Response;
import spark.Spark;
/**
 * Really simple helper for enabling CORS in a spark application;
 */
public class CorsFilter {
  private final HashMap<String, String> corsHeaders = new HashMap<>();
   constructor() {
    corsHeaders.put("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    corsHeaders.put("Access-Control-Allow-Origin", "*")
    corsHeaders.put("Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,")
    corsHeaders.put("Access-Control-Allow-Credentials", "true")
  }

  @Override
  fun Apply() {
    var filter =  Filter() {
      @Override
      fun handle(Request request, Response response) {
        corsHeaders.forEach((key, value)->{
          response.header(key, value);
        });
      }

    };
    Spark.after(filter);
  }

} */
