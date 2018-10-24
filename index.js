const express = require("express")
const port = 3000
const app = express()
const updates = [];

app.use(express.static('public'))
app.use(express.json())

// Fill in your request handlers here

app.post('/updates', function(request, response) {
    console.log(request.body)
    if(req.body.clientUpdatess.length > 0) {
        req.body.clientUpdates.forEach(update => updates.push(update))
    }
    newUpdates = updates.slice(req.body.lengthOfLastServerUpdate)
    res.send({
        "serverUpdates": newUpdates
    })
})
app.listen(port)

Bitmap.prototype.setColor = function(row, col, color) {
    this.grid[row][col] = color;
    this.cells[row][col].style.background = color;
    let clientUpdate = [row,col,color];
    clientUpdates.push(clientUpdate)
}
Bitmap.prototype.handleEvents = function(row, col, color) {
    if(event.type === "click") {
        let row = parseInt(event.currentTarget.dataset.row)
        (event.currentTarget.dataset.row);
        let col = parseInt(event.currentTarget.dataset.col)
        (event.currentTarget.dataset.col)
    }
}
Bitmap.prototype.applyUpdatesFromServer = function(row, col, color) {
    this.grid[row][col] = color;
    this.cells[row][col] = style.background = color;
}