let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_SearchEl = document.querySelector(".recent_Search")

let recentArray = ["mobile", "phone"]
form_search.addEventListener("submit", (e) => {
    e.preventDefault()
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
})


function renderRecent() {
    let recent_Search_html = ''
    recentArray.forEach(el => {
        recent_Search_html += `
        <div class="recent_list">
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>${el}</p>
        </div>
    ` 
    })

    recent_SearchEl.innerHTML = recent_Search_html;
}
renderRecent()


