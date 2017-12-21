package share_app.com.share_app

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloControlle {

  @GetMapping("hello")
  fun hello(@RequestParam("name") name: String): String = "Hello, $name!"
}
