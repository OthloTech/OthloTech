package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func EventsIndex(c *gin.Context) {
	c.HTML(http.StatusOK, "events/index", gin.H{
		"title": "wwOthlo",
	})
}