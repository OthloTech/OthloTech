package init

import (
	"net/http"
    "github.com/gin-gonic/gin"
)

func handler(c *gin.Context) {
	name := c.Param("name")
	c.String(200, "Hello, %s", name)
}

func about(c *gin.Context) {
	c.HTML(http.StatusOK, "about", nil)
}


func main(c *gin.Context) {
	c.HTML(http.StatusOK, "main", nil)
}
