class CssClass {
    constructor(name) {
        this.name = name;
        this.styles = {};
    }

    setStyle(prop, value) {
        this.styles[prop] = value;
    }

    getCss() {
        let css = `.${this.name}{`;
        for (let k in this.styles) {
            css += `${k}:${this.styles[k]};`;
        }
        css += `}`;
        return css;
    }
}

class HtmlElement {
    constructor(tag, text = "") {
        this.tag = tag;
        this.text = text;
        this.attrs = {};
    }

    setAttribute(name, value) {
        this.attrs[name] = value;
    }

    getHtml() {
        let attrs = "";
        for (let k in this.attrs) {
            attrs += ` ${k}="${this.attrs[k]}"`;
        }
        return `<${this.tag}${attrs}>${this.text}</${this.tag}>`;
    }
}

class HtmlBlock {
    constructor() {
        this.css = [];
        this.html = [];
    }

    addCss(c) {
        this.css.push(c);
    }

    addHtml(e) {
        this.html.push(e);
    }

    getCode() {
        let style = "<style>";

        for (let c of this.css) {
            style += c.getCss();
        }

        style += `
.modalOverlay{
    display:none;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.55);
    backdrop-filter: blur(8px);
    justify-content:center;
    align-items:center;
}

.modalBox{
    background: rgba(255,255,255,0.9);
    padding: 25px;
    border-radius: 16px;
    width: 300px;
    text-align:center;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    animation: pop 0.25s ease;
}

@keyframes pop{
    from { transform: scale(0.7); opacity:0; }
    to { transform: scale(1); opacity:1; }
}

.btn:hover{
    transform: scale(1.05);
    background:#4b3cc4;
}

body{
    margin:0;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: Arial;
    background: linear-gradient(135deg,#667eea,#764ba2);
}
`;

        style += "</style>";

        let html = "";
        for (let e of this.html) {
            html += e.getHtml();
        }

        return style + html;
    }
}

let card = new CssClass("card");
card.setStyle("background", "rgba(255,255,255,0.95)");
card.setStyle("padding", "40px");
card.setStyle("border-radius", "18px");
card.setStyle("text-align", "center");
card.setStyle("width", "320px");
card.setStyle("box-shadow", "0 15px 35px rgba(0,0,0,0.2)");
card.setStyle("backdrop-filter", "blur(10px)");

let btn = new CssClass("btn");
btn.setStyle("padding", "12px 18px");
btn.setStyle("background", "#6c5ce7");
btn.setStyle("color", "white");
btn.setStyle("border", "none");
btn.setStyle("border-radius", "10px");
btn.setStyle("cursor", "pointer");
btn.setStyle("transition", "0.3s");

let title = new HtmlElement("h2", "OOP Modal System");
let desc = new HtmlElement("p", "Clean centered UI");

let button = new HtmlElement("button", "Open Modal");
button.setAttribute("id", "openBtn");
button.setAttribute("class", "btn");

let cardEl = new HtmlElement("div");
cardEl.setAttribute("class", "card");
cardEl.text = title.getHtml() + desc.getHtml() + button.getHtml();

let modal = `
<div id="modal" class="modalOverlay">
    <div class="modalBox">
        <h3>Hello</h3>
        <p>OOP Modal System</p>
        <button id="closeBtn" class="btn">Close</button>
    </div>
</div>
`;

let block = new HtmlBlock();

block.addCss(card);
block.addCss(btn);
block.addHtml(cardEl);

document.getElementById("app").innerHTML = block.getCode() + modal;

document.getElementById("openBtn").onclick = function () {
    document.getElementById("modal").style.display = "flex";
};

document.getElementById("closeBtn").onclick = function () {
    document.getElementById("modal").style.display = "none";
};

setTimeout(() => {
    document.getElementById("modal").style.display = "flex";
}, 3000);