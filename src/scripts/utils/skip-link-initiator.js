const SkipLink = {
  init({ mainElement }) {
    this._mainElement = mainElement;

    this.addLinkSkipToContent();
  },

  addLinkSkipToContent() {
    const skipLink = document.querySelector('.skip_link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      this._mainElement.focus();
      this._mainElement.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });
  },
};

export default SkipLink;
