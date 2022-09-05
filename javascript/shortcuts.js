keyboard$.subscribe(function (key) {
    if (key.mode === "global" && key.type === "\\") {
        alert("?")
        key.claim()
    }
})
