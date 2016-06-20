package init

import (
	"net/http"
    "github.com/gin-gonic/gin"
)

func about(c *gin.Context) {
	c.HTML(http.StatusOK, "about.html", nil)
}

func main(c *gin.Context) {
	c.HTML(http.StatusOK, "main.html", gin.H{
		"title": "wwOthlo",
	})
}

/* events */
func eventsIndex(c *gin.Context) {
	c.HTML(http.StatusOK, "events/index.html", gin.H{
		"title": "wwOthlo",
	})
}
