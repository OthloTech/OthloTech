package events

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

func index(c *gin.Context) {
	c.HTML(http.StatusOK, "events/index", gin.H{
		"title": "wwOthlo",
	})
}

func show(c *gin.Context) {

}
