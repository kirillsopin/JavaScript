class SvgElement {
    constructor(tag) {
        this.tag = tag;
        this.attrs = {};
        this.styles = {};
        this.children = [];
    }

    setAttribute(name, value) {
        this.attrs[name] = value;
    }

    setStyle(name, value) {
        this.styles[name] = value;
    }

    appendChild(child) {
        this.children.push(child);
    }

    getSvg() {
        const attrs = Object.entries(this.attrs)
            .map(([k, v]) => `${k}="${v}"`)
            .join(" ");

        const styles = Object.entries(this.styles)
            .map(([k, v]) => `${k}:${v};`)
            .join(" ");

        const styleAttr = styles ? ` style="${styles}"` : "";

        const children = this.children
            .map(c => c.getSvg())
            .join("");

        return `<${this.tag} ${attrs}${styleAttr}>${children}</${this.tag}>`;
    }
}

class SvgStyle {
    constructor(className) {
        this.className = className;
        this.styles = {};
    }

    setStyle(name, value) {
        this.styles[name] = value;
    }

    removeStyle(name) {
        delete this.styles[name];
    }

    getCss() {
        const styles = Object.entries(this.styles)
            .map(([k, v]) => `${k}: ${v};`)
            .join(" ");

        return `.${this.className} { ${styles} }`;
    }
}

class SvgBlock {
    constructor() {
        this.styles = [];
        this.root = new SvgElement("svg");

        this.root.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        this.root.setAttribute("width", 300);
        this.root.setAttribute("height", 200);
    }

    addStyle(style) {
        this.styles.push(style);
    }

    getCode() {
        const css = this.styles.map(s => s.getCss()).join("\n");
        const svg = this.root.getSvg();

        return `<style>${css}</style>${svg}`;
    }
}

const redStyle = new SvgStyle("red");
redStyle.setStyle("fill", "red");
redStyle.setStyle("stroke", "black");

const blueStyle = new SvgStyle("blue");
blueStyle.setStyle("fill", "blue");

const circle = new SvgElement("circle");
circle.setAttribute("cx", 80);
circle.setAttribute("cy", 80);
circle.setAttribute("r", 40);
circle.setAttribute("class", "red");

const rect = new SvgElement("rect");
rect.setAttribute("x", 150);
rect.setAttribute("y", 50);
rect.setAttribute("width", 100);
rect.setAttribute("height", 80);
rect.setAttribute("class", "blue");

const group = new SvgElement("g");
group.appendChild(circle);
group.appendChild(rect);

const block = new SvgBlock();
block.addStyle(redStyle);
block.addStyle(blueStyle);

block.root.appendChild(group);

document.getElementById("app").innerHTML = block.getCode();

class Animator {
    constructor(el) {
        this.el = el;
        this.name = "moveAnim";
    }

    createAnimation() {
        const style = document.createElement("style");

        style.innerHTML = `
        @keyframes ${this.name} {
            0% { transform: translate(0px, 0px); }
            50% { transform: translate(200px, 80px); }
            100% { transform: translate(0px, 0px); }
        }`;

        document.head.appendChild(style);
    }

    start() {
        this.el.style.animation = `${this.name} 3s linear infinite`;
    }

    pause() {
        this.el.style.animationPlayState = "paused";
    }

    resume() {
        this.el.style.animationPlayState = "running";
    }

    stop() {
        this.el.style.animation = "none";
    }
}

const box = document.createElement("div");
box.style.width = "60px";
box.style.height = "60px";
box.style.background = "tomato";
box.style.position = "relative";

document.getElementById("animBox").appendChild(box);

const animator = new Animator(box);
animator.createAnimation();

function startAnim() {
    animator.start();
}

function pauseAnim() {
    animator.pause();
}

function resumeAnim() {
    animator.resume();
}

function stopAnim() {
    animator.stop();
}