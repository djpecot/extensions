chrome.runtime.onMessage.addListener(received);

function received(request, sender, senderResponse) {
  console.log(request)
  let body = document.querySelector("body");
  body.style.background = "black";
}
