package init
 
import (
	"net/http"
    "github.com/gin-gonic/gin"
   	"github.com/gin-gonic/contrib/renders/multitemplate"

    // Controller
    //"controllers"
    "middlewares"
)

func init() {

    router := gin.Default()
	router.HTMLRender = renderList()


    // 静的ファイル配信
    router.Static("/css", "../dist/css")
    router.Static("/js", "../dist/js")
    router.Static("/image", "../dist/image")
    router.StaticFile("/favicon.ico", "../favicon.ico")
	router.RedirectTrailingSlash = true
	router.RedirectFixedPath = true


	// MiddleWares
	router.Use(middlewares.ErrorHandler)


    // イベント
    events := router.Group("/events")
    {
    	events.GET("/:id", main)
    }

    // ブログ
    posts := router.Group("/posts")
    {
    	posts.GET("/:id", main)
    }

    // プロジェクト
    projects := router.Group("/projects")
    {
    	projects.GET("/:id", main)
    }

    router.GET("/", main)
    router.GET("/about", about)

    http.Handle("/", router)
}

func renderList() multitemplate.Render {
	const baseDir = "../dist/views/"
	const base = baseDir + "layouts/_base.html"
	const head = baseDir + "includes/_head.html"
	const header = baseDir + "includes/_header.html"
	const footer = baseDir + "includes/_footer.html"
	r := multitemplate.New()

	r.AddFromFiles("main" , base, head, header, footer, baseDir + "main.html")
	r.AddFromFiles("about", base, head, header, footer, baseDir + "about.html")
	r.AddFromFiles("400"  , base, head, header, footer, baseDir + "400.html")

	return r
}
