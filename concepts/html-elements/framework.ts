class UserForm {
  parent: HTMLElement;

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
      </div>
    `;
  }

  render(): void {
    // Create a HTML template (tag <template></template>). Type HTMLTemplateElement
    const templateElement = document.createElement('template');

    // Push the HTML string into the HTML template
    templateElement.innerHTML = this.template();

    // Stick the HTML template into the HTML element
    this.parent.append(templateElement.content);
  }
}

const userForm = new UserForm(document.getElementById('root'));
userForm.render();
