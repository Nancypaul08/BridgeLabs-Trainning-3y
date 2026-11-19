// Build a form from field definitions and return its values as an object.
class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
        this.render();
    }

    render() {
        const controls = this.fields.map((field, index) => {
            const id = `dynamic-field-${index}`;
            const required = field.required === false ? "" : "required";
            return `<label for="${id}">${field.label}</label><input id="${id}" name="${field.name}" type="${field.type}" ${required}>`;
        }).join("");
        this.container.innerHTML = `<form id="built-form">${controls}<button type="submit">Submit</button></form><pre id="form-data"></pre>`;
        this.container.querySelector("form").addEventListener("submit", event => {
            event.preventDefault();
            this.container.querySelector("#form-data").textContent = JSON.stringify(this.getFormData(), null, 2);
        });
    }

    getFormData() {
        return Object.fromEntries(this.fields.map(field => [field.name, this.container.querySelector(`[name="${field.name}"]`).value]));
    }
}

new FormBuilder([
    { type: "text", name: "username", label: "Username" },
    { type: "email", name: "email", label: "Email" },
    { type: "password", name: "password", label: "Password" }
], document.querySelector("#form-builder-root"));
