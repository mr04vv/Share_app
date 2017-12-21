package share_app.com.share_app

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class ShareAppApplication

fun main(args: Array<String>) {
    SpringApplication.run(ShareAppApplication::class.java, *args)
}
