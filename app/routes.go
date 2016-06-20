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
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title": "wwOthlo",
	})
}

/* posts */
func postsIndex(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title": "wwOthlo",
	})
}

/* projectss */
func projectsIndex(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title": "wwOthlo",
	})
}
