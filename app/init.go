package init
 
import (
	"net/http"
    "html/template"
    //"path/filepath"
    "github.com/gin-gonic/gin"
    //"github.com/gin-gonic/contrib/renders/multitemplate"

    // Controller
    //"./controllers"
)

var server *gin.Engine
var templates map[string]*template.Template

func init() {
	loadTemplates()

    router := gin.Default()

	htmlRender := GinHTMLRender()
	htmlRender.Debug = gin.IsDebugging()
	htmlRender.Layout = "layouts/_base"
	htmlRender.TemplatesDir = "../dist/views/templates"
	htmlRender.Ext = ".html"

	router.HTMLRender = htmlRender.Create()


    // 静的ファイル配信
    router.Static("/css", "../dist/css")
    router.Static("/js", "../dist/js")
    router.Static("/image", "../dist/image")
    router.StaticFile("/favicon.ico", "../favicon.ico")
    //router.LoadHTMLGlob("../dist/views/*.html")
    //router.LoadHTMLGlob("../dist/views/**/*")
	router.RedirectTrailingSlash = true
	router.RedirectFixedPath = true

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

    router.GET("/", index)
    router.GET("/about", about)

    http.Handle("/", router)
}

// func loadTemplates(templatesDir string) multitemplate.Render {
// 	r := multitemplate.New()

// 	layouts, err := filepath.Glob(templatesDir + "layouts/*.tmpl")
// 	if err != nil {
// 		panic(err.Error())
// 	}

//     includes, err := filepath.Glob(templatesDir + "includes/*.tmpl")
//     if err != nil {
//         panic(err.Error())
//     }

// 	for _, layout := range layouts {
// 		files := append(includes, layout)
// 		r.Add(filepath.Base(layout), template.Must(template.ParseFiles(files...)))
// 	}
// 	return r
// }

// func loadTemplates(){
// 	var baseTemplate = "templates/layout/_base.html"
// 	templates = make(map[string]*template.Template)

// 	templates["index"] = template.Must(template.ParseFiles(baseTemplate, "templates/home/index.html",))
// 	templates["about"] = template.Must(template.ParseFiles(baseTemplate, "templates/home/about.html",))
// 	templates["contact"] = template.Must(template.ParseFiles(baseTemplate, "templates/home/contact.html",))
// 	templates["signin"] = template.Must(template.ParseFiles(baseTemplate, "templates/account/signin.html",))
// 	templates["signup"] = template.Must(template.ParseFiles(baseTemplate, "templates/account/signup.html",))
// }

func index(c *gin.Context) {
	server.SetHTMLTemplate(templates["index"])
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title": "wwOthlo",
	})
}


func loadTemplates() {
	const baseTemplate = "../dist/views/templates/layouts/_base.html"
	const componentTemplate = "../dist/views/templates/includes/_component.html"
	templates = make(map[string]*template.Template)

	templates["index"] = template.Must(template.ParseFiles(baseTemplate, componentTemplate, "../dist/views/index.html",))
}

