package init
 
import (
    //"fmt"
    "net/http"
    "github.com/gin-gonic/gin"
)
 
func init() {
    router := gin.Default()

    // 静的ファイル配信
    //router.Static("/css", "./dist/css")
    //router.Static("/js", "./dist/js")
    //router.Static("/image", "./dist/image")
    //router.StaticFile("/favicon.ico", "./favicon.ico")
    router.LoadHTMLGlob("../dist/views/*.html")

    router.GET("/", staticHandler)
    router.GET("/:name", handler)


    http.Handle("/", router)
}

func handler(c *gin.Context) {
	name := c.Param("name")
	c.String(200, "Hello, %s", name)
}

func staticHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "index.tmpl.html", gin.H{
		"title": "wwOthlo",
	})
}