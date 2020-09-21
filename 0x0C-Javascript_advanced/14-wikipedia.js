function createElement(data) {
    let paragraph = document.createElement('p');
    let textNode = document.createTextNode(data);
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);
}
