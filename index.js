const express = require("express");
const port = 3000;
const app = express();
const updates = [];

app.use(express.static("public"));
app.use(express.json());

app.post("/updates", function(request, response) {
  console.log(request.body);
  if (request.body.clientUpdates.length > 0) {
    request.body.clientUpdates.forEach(update => updates.push(update));
  }
  newUpdates = updates.slice(request.body.lengthOfLastServerUpdate);
  response.send({
    serverUpdates: newUpdates,
    lengthOfLastServerUpdate: updates.length
  });
});
app.listen(port);

// Bitmap.prototype.setColor = function(row, col, color) {
//     this.grid[row][col] = color;
//     this.cells[row][col].style.background = color;
//     let clientUpdate = [row,col,color];
//     clientUpdates.push(clientUpdate)
// }
// Bitmap.prototype.handleEvents = function(row, col, color) {
//     if(event.type === "click") {
//         let row = parseInt(event.currentTarget.dataset.row)
//         (event.currentTarget.dataset.row);
//         let col = parseInt(event.currentTarget.dataset.col)
//         (event.currentTarget.dataset.col)
//     }
// }
// Bitmap.prototype.applyUpdatesFromServer = function(row, col, color) {
//     this.grid[row][col] = color;
//     this.cells[row][col] = style.background = color;
// }
