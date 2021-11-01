let message = {
  message: "Here is a message from the background script",
};

chrome.browserAction.onClicked.addListener(function (currentTab) {
  chrome.tabs.sendMessage(currentTab.id, message);
});
