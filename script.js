class News {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = new Date(date);
    }

    formatDate() {
        const now = new Date();
        const diffDays = Math.floor((now - this.date) / (1000 * 60 * 60 * 24));

        if (diffDays < 1) return "сьогодні";
        if (diffDays < 7) return `${diffDays} днів тому`;

        return `${String(this.date.getDate()).padStart(2, '0')}.${String(this.date.getMonth() + 1).padStart(2, '0')}.${this.date.getFullYear()}`;
    }
}


class NewsFeed {
    constructor() {
        this.newsList = JSON.parse(localStorage.getItem("news")) || [];
    }

    save() {
        localStorage.setItem("news", JSON.stringify(this.newsList));
    }

    addNews(news) {
        this.newsList.push(news);
        this.save();
        render();
    }

    deleteNews(index) {
        this.newsList.splice(index, 1);
        this.save();
        render();
    }

    sortByDate() {
        this.newsList.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.save();
        render();
    }

    findByTag(tag) {
        return this.newsList.filter(n => n.tags.includes(tag));
    }
}


const feed = new NewsFeed();

function render(data = feed.newsList) {
    const container = document.getElementById("newsList");
    container.innerHTML = "";

    data.forEach((n, index) => {
        const news = new News(n.title, n.text, n.tags, n.date);

        container.innerHTML += `
            <div class="news">
                <h3>${news.title}</h3>
                <p>${news.text}</p>
                <p><b>Теги:</b> ${news.tags.join(", ")}</p>
                <p><b>Дата:</b> ${news.formatDate()}</p>
                <button onclick="deleteNews(${index})">Видалити</button>
            </div>
        `;
    });
}

function addNews() {
    const title = document.getElementById("title").value;
    const text = document.getElementById("text").value;
    const tags = document.getElementById("tags").value.split(",").map(t => t.trim());

    if (!title || !text) return alert("Заповни поля");

    feed.addNews(new News(title, text, tags, new Date()));
}

function deleteNews(index) {
    feed.deleteNews(index);
}

function sortNews() {
    feed.sortByDate();
}

function searchByTag() {
    const tag = document.getElementById("searchTag").value;
    const result = feed.findByTag(tag);
    render(result);
}

render();