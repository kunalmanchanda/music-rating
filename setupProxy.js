const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.API_KEY}", {
            target: "http://api.musixmatch.com/ws/1.1",
            changeOrigin: true
        })
    )
}