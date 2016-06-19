package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func index(c *gin.Context) {
	c.HTML(http.StatusOK, "index", gin.H{
		"title": "wwOthlo",
	})
}