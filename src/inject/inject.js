chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      const input = document.querySelector("input.branch-checkout--input");

      if (!input) {
        return;
      }

      input.value = `git fetch && git checkout ${input.value}`;
    }
  }, 10);
});
