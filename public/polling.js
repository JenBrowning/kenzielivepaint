const timeoutLength = 1000;
let lengthOfLastServerUpdate = 0;
let clientUpdates = [];

const pollServer = async function() {
  let body = JSON.stringify({
    clientUpdates: clientUpdates,
    lengthOfLastServerUpdate: lengthOfLastServerUpdate
  });

  clientUpdates = [];

  let res = await fetch("/updates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: body
  });
  res = await res.json();
  res.serverUpdates.forEach(update => {
    bitmap.applyUpdatesFromServer(update[0], update[1], update[2]);
  });
  lengthOfLastServerUpdate = res.lengthOfLastServerUpdate;

  setTimeout(pollServer, timeoutLength);
};
setTimeout(pollServer, timeoutLength);
