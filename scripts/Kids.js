import { getChildren } from "./database.js"

const children = getChildren

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "child") {

            const childWish = itemClicked.dataset.wish
            const childName = itemClicked.dataset.name

                window.alert(`${childName}'s wish is ${childWish}`)
            
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li 
        data-type="child"
        data-id="${child.id}" 
        data-type="child" 
        data-wish="${child.wish}"
        data-name="${child.name}"
        >${child.name}</li>`
    }

    html += "</ol>"
    return html
}

