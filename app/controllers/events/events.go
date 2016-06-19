package events

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "events/index", gin.H{
		"title": "wwOthlo",
	})
}

func Show(c *gin.Context) {
	c.HTML(http.StatusOK, "events/show", gin.H{
		"title": "wwOthlo",
	})
}
