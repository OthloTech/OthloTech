package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func EventsIndex(c *gin.Context) {
	c.HTML(http.StatusOK, "events/index.html", gin.H{
		"title": "wwOthlo",
	})
}

func EventsShow(c *gin.Context) {
	c.HTML(http.StatusOK, "events/show.html", gin.H{
		"title": "wwOthlo",
	})
}
