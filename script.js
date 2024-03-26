let model = {
    app: 'startPage',
    input: {
        sender: null,
        receiver: null,
        text: null,
        picture: null,
    }
}

const app = document.getElementById("app");

function updateView() {
    if (model.app == 'startPage') {
        app.innerHTML = startPage();
    } else if (model.app == 'createCard') {
        app.innerHTML = createCard();
    } else if (model.app == 'showPic') {
        app.innerHTML = showPic();
    }
}

function startPage() {
    return /*HTML*/`
        <div class="overskrift">
            <h1>Påskekort Generator</h1>
        </div>
        <div class="container">
            <div class="inputs">
                <h3>Sender</h3>
                <input oninput="model.input.sender = this.value" value="${model.input.sender ?? ''}">
                <h3>Receiver</h3>
                <input oninput="model.input.receiver = this.value" value="${model.input.receiver ?? ''}">
                <h3>Message</h3>
                <textarea class="textinput" type="text" oninput="model.input.text = this.value" value="${model.input.text ?? ''}"></textarea>
                <h3>Picture Link</h3>
                <input oninput="model.input.picture = this.value" value="${model.input.picture ?? ''}">
                <button onclick="model.app = 'createCard';updateView()">Create Card</button>
            </div>
        </div>
        
    `
}

updateView()


function createCard() {
    return /*HTML*/`
        <div onclick="model.app = 'showPic';updateView()"class="card">
            <h3>Til ${model.input.receiver ?? ''}</h3>
            <h3>${model.input.text ?? ''}</h3>
            <h3>Frå ${model.input.sender ?? ''}</h3>
        </div>
        <div onclick="model.app = 'startPage';updateView()" class="buttonDiv">
        <button>Back to Card Creator</button></div>
    `
}

function showPic() {
    return /*HTML*/ `
    <div class="imgDiv">
        <img src="${model.input.picture}" onclick="model.app = 'createCard';updateView()">
    </div>
    <div onclick="model.app = 'startPage';updateView()" class="buttonDiv">
        <button>Back to Card Creator</button></div>
        `
}

