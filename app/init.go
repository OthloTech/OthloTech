package init
 
import (
    //"fmt"
    "net/http"
    "github.com/gin-gonic/gin"
)
 
func init() {
    router := gin.Default()
    router.GET("/", func(c *gin.Context) {
    	c.String(200, "Hello, world!")
    })

    router.GET("/:name", handler)


    http.Handle("/", router)
}

func handler(c *gin.Context) {
	name := c.Param("name")
	c.String(200, "Hello, %s", name)
}