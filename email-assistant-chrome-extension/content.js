function getEmailContent() {
    const selectors = ['.h7', '.a3s.aiL', '.gmail_quote', '[role="presentation"]'];
    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if (content) {
            return content.innerText.trim();
        }
        return '';
    }
}

function findComposeToolbar() {
    const selectors = ['.btC', '.aDg', '[role="toolbar"]', '.gU.Up'];
    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        return toolbar;
    }
    return null;
}

function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3';
    button.style.marginRight = '8px';
    button.innerHTML = 'AI Reply';
    button.setAttribute("role", "button");
    button.setAttribute("data-tooltip", "Generate AI reply");
    return button;
}

function injectEmailAssistantButton() {
    const existingButton = document.querySelector('.ai-reply-button');
    if (existingButton) existingButton.remove();
    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("Toolbar not found");
        return;
    }
    console.log("Toolbar found, creating AI button");
    const button = createAIButton();
    button.classList.add('ai-reply-button');
    button.addEventListener('click', async () => {
        try {
            button.innerHTML = 'Generating....';
            button.disabled = true;
            const emailContent = getEmailContent();
            const response = await fetch('http://localhost:8080/api/ai/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    emailContent: emailContent,
                    tone: 'professional'

                })
            });
            if (!response.ok) {
                throw new Error("API Request Failed");
            }
            // const generatedReply = await response.text();
            // console.log('response we got ', generatedReply);
            const componseBox = document.querySelector('[role="textbox"][g_editable="true"]');
            if (!componseBox) {
                console.log("Compose box not found");
                return;
            }

            for await (const chunk of response.body.values()) {
                var t = new TextDecoder().decode(chunk);
                componseBox.focus();
                componseBox.innerText = componseBox.innerText + t;
                console.log(componseBox.innerText);
            }
            //componseBox.innerText = generatedReply;
        } catch (error) {
            console.error("Something went wrong ", error);
        } finally {
            button.innerHTML = 'AI Reply';
            button.disabled = false;
        }
    });
    toolbar.insertBefore(button, toolbar.firstChild);
}
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(
            node => node.nodeType === Node.ELEMENT_NODE &&
                (node.matches('.aDh, .btC, [role="dialog"]') ||
                    node.querySelector('.aDh, .btC, [role="dialog"]'))
        );
        if (hasComposeElements) {
            console.log("Compose Window Detected");
            setTimeout(injectEmailAssistantButton, 500);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});