package init
 
import (
	"net/http"
    "html/template"
    //"path/filepath"
    "github.com/gin-gonic/gin"
   	"github.com/gin-gonic/contrib/renders/multitemplate"

    // Controller
    //"controllers"
    "middlewares"
    //"github/com/OthloTech/wwOthlo/app/controllers/events"
    //"github.com/OthloTech/wwOthlo/app/middlewares"
)

var server *gin.Engine
var templates map[string]*template.Template

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
    	events.GET("/:id", staticHandler)
    }

    // ブログ
    posts := router.Group("/posts")
    {
    	posts.GET("/:id", staticHandler)
    }

    // プロジェクト
    projects := router.Group("/projects")
    {
    	projects.GET("/:id", staticHandler)
    }

    router.GET("/", main)
    router.GET("/about", about)

    http.Handle("/", router)
}

func renderList() multitemplate.Render {
	const baseDir = "../dist/views/"
	const base = baseDir + "layouts/_base.html"
	const component = baseDir + "includes/_component.html"
	r := multitemplate.New()

	r.AddFromFiles("main", base, component, baseDir + "main.html")
	r.AddFromFiles("about", base, component, baseDir + "about.html")
	r.AddFromFiles("400", base, component, baseDir + "400.html")

	return r
}

func loadTemplates() {
	const baseTemplate = "../dist/views/templates/layouts/_base.html"
	const componentTemplate = "../dist/views/templates/includes/_component.html"
	templates = make(map[string]*template.Template)

	templates["index"] = template.Must(template.ParseFiles(baseTemplate, componentTemplate, "../dist/views/index.html",))
}

