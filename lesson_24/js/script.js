"use strict";
class ApiService {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async fetchData() {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }
}
class MarkupBuilder {
    container;
    constructor(container) {
        this.container = container;
    }
    renderLoading() {
        this.container.innerHTML = '<p>Loading cat facts...</p>';
    }
    renderFacts(facts) {
        this.container.innerHTML = '<h2>Random Cat Facts</h2>';
        const ul = document.createElement('ul');
        facts.forEach(fact => {
            const li = document.createElement('li');
            li.style.marginBottom = '10px';
            li.textContent = fact;
            ul.appendChild(li);
        });
        this.container.appendChild(ul);
    }
    renderError(message) {
        this.container.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
    }
}
const container = document.getElementById('factsContainer');
const refreshBtn = document.getElementById('refreshBtn');
if (container && refreshBtn) {
    const apiService = new ApiService('https://catfact.ninja/fact');
    const markupBuilder = new MarkupBuilder(container);
    async function loadAndRender() {
        markupBuilder.renderLoading();
        const results = await Promise.all(Array.from({ length: 5 }, () => apiService.fetchData()));
        const facts = results
            .filter((item) => item !== null)
            .map(item => item.fact);
        if (facts.length > 0) {
            markupBuilder.renderFacts(facts);
        }
        else {
            markupBuilder.renderError('Failed to load facts. Try again later');
        }
    }
    refreshBtn.addEventListener('click', () => {
        loadAndRender();
    });
    loadAndRender();
}
