import { getCelebrities } from "./database.js"

const celebrities = getCelebrities

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "celebrity") {

            const celebSport = itemClicked.dataset.sport
            const celebName = itemClicked.dataset.name

                window.alert(`${celebName}'s sport is ${celebSport}`)
            
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    data-name="${star.name}"
                    >${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}
