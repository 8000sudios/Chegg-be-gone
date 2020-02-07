elements = document.getElementsByClassName("srg")

if(elements.length > 0) {
    for(i = 0; i <= elements.length; i++) {

        results = elements[i]["childNodes"]

        for(i = 0; i < results.length; i++) {
            if(results[i]["innerText"].includes("www.chegg.com")) {
                results[i].remove()
                i--
            }
        }
    }
}