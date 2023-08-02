chrome.runtime.onInstalled.addListener((details) => {
  console.log(details);
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu",
    contexts: ["page", "selection"],
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    //   console.log(event);
    //   chrome.search.query({
    //       disposition: "NEW_TAB",
    //       text:` IMDB ${event.selectionText}`
    //   })
    //   chrome.tabs.query({
    //       currentWindow:true,
    //   }, (tabs) => {
    //       console.log(tabs)
    //   })
      chrome.tabs.create(
        {
          url: `https://www.imdb.com/find/?q=${event.selectionText}&ref_=nv_sr_sm`,
        },
      );
  });
//   chrome.contextMenus.create({
//     title: "Test Context Menu 1",
//     id: "contextMenu1",
//     parentId: "contextMenu",
//     contexts: ["page", "selection"],
//   });
//   chrome.contextMenus.create({
//     title: "Test Context Menu 2",
//     id: "contextMenu2",
//     parentId: "contextMenu",

//     contexts: ["page", "selection"],
  //});
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  console.log(sendResponse);
})

console.log(`background script running`);
