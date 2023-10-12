import React from "react";

class CopyPasteComponent extends React.Component {
  componentDidMount() {
    document.addEventListener("copy", this.handleCopy);
  }

  componentWillUnmount() {
    document.removeEventListener("copy", this.handleCopy);
  }

  handleCopy = (e) => {
    e.preventDefault();
    const copiedText = window.getSelection().toString();

    if (copiedText) {
      const additionalText =
        "diambil dari web site https://web-berita-lime.vercel.app/";
      const finalText = `text ini = "${copiedText}" \n\n${additionalText}`;
      e.clipboardData.setData("text/plain", finalText);
    }
  };

  render() {
    return <></>;
  }
}

export default CopyPasteComponent;
