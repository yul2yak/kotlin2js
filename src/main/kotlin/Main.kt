package main.kotlin

import main.kotlin.htmlBuilder.*

external fun require(module: String): dynamic

fun main(args: Array<String>) {
    println("Hello Kotlin to JavaScript!!")

    val express = require("express")
    val app = express()

    app.get("/") { _, res ->
        res.send("i am a beautiful butterfly")
    }

    app.get("/test") { _, res ->
        res.header("Content-type", "text/html")
        res.write(renderProductTable())
        res.end()
    }

    app.listen(3000) {
        println("Listening on port 3000")
    }
}

fun renderProductTable(): String {
    return html {
        table {
            tr(color = getTitleColor()) {
                td { text("일자") }
                td { text("경기") }
                td { text("선수") }
                td { text("캐릭터") }
                td { text("결과") }
                td { text("선수") }
                td { text("캐릭터") }
                td { text("결과") }
            }
            val games = getGames()
            for ((index, game) in games.withIndex()) {
                for (i in 0 until game.maxNumberOfPlayers) {
                    tr(color = getCellColor(index)) {
                        td { text(game.date) }
                        td { text(game.id) }
                        if (game.scourge.lastIndex >= i) {
                            td { text(game.scourge[i].player.name) }
                            td { text(game.scourge[i].champion) }
                            td { text(game.scourge[i].result) }
                        }
                        if (game.sentinel.lastIndex >= i) {
                            td { text(game.sentinel[i].player.name) }
                            td { text(game.sentinel[i].champion) }
                            td { text(game.sentinel[i].result) }
                        }
                    }
                }
            }
        }
    }.toString()
}

fun getTitleColor() = "#b9c9fe"
fun getCellColor(row: Int) = if (row % 2 == 0) "#dce4ff" else "#eff2ff"