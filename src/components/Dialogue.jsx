import styles from './Dialogue.module.css';
import { createSignal, createEffect, Show, onMount } from "solid-js";

function updateBackground({ useCustomBackgroundColor, customBackgroundColor, backgroundName}) {
    if (useCustomBackgroundColor) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = customBackgroundColor;
    } else {
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.backgroundImage = `url('assets/backgrounds/ch01/${backgroundName}.png')`;
    }
}

function getCharacterImage(characterName) {
    const url = `assets/characters/${characterName}.png`;
    const img = new Image()
    img.src = url;
    if (img.complete) {
        return url;
    } else {
        img.onload = () => {
         return url;   
        }

        img.onerror = () => {
            return false;
        }
    }
};

let nextBackground;
function fetchNextBackground(backgroundName) {
    nextBackground = new Image().src = `assets/backgrounds/ch01/${backgroundName}.png`;
}

export default (props) => {
    const [currentDialogueLine, setCurrentDialogueLine] = createSignal(0);
    const [currentDialogueText, setCurrentDialogueText] = createSignal('');
    const [textIsAnimating, setTextIsAnimating] = createSignal(true);
    const [textPosition, setTextPosition] = createSignal(0);
    
    let timeout;
    createEffect(() => {
        setCurrentDialogueLine(props.data[props.currentDialoguePage()]);
        setCurrentDialogueText('');
        if (props.useCustomBackgroundColor() === true) {
            updateBackground({useCustomBackgroundColor: true, customBackgroundColor: props.customBackgroundColor()});
        } else {
            updateBackground({useCustomBackgroundColor: false, backgroundName: props.data[props.currentDialoguePage()].location});
            if (props.data[props.currentDialoguePage() + 1]) {
                fetchNextBackground(props.data[props.currentDialoguePage() + 1].location);
            }
        }
        setTextPosition(0);
        setTextIsAnimating(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => animateText(), props.textSpeed());
    });

    onMount(async () => {
        document.addEventListener("keyup", (e) => {
            if (!props.menuIsUp) {
                if ([" ", "Enter"].includes(e.key)) {
                    endTextAnimationOrGoToNextDialogue();
                } else if (["ArrowRight", "d"].includes(e.key)) {
                    goToNextDialogue();
                } else if (["ArrowLeft", "a"].includes(e.key)) {
                    goToPreviousDialogue();
                }
            }
        });
    })

    const animateText = function() {
        if (props.textSpeed() > 0) {
            setCurrentDialogueText(currentDialogueText() + currentDialogueLine().dialogue.charAt(textPosition()));
            if (textPosition() !== currentDialogueLine().dialogue.length) {
                setTextPosition(textPosition() + 1);
                clearTimeout(timeout);
                timeout = setTimeout(() => animateText(), props.textSpeed());
            } else {
                setTextIsAnimating(false);
                return;
            }
        } else {
            setTextIsAnimating(false);
            setCurrentDialogueText(currentDialogueLine().dialogue);
        }
    }

    const endTextAnimationOrGoToNextDialogue = () => {
        if (textIsAnimating() === true) {
            clearTimeout(timeout);
            setTextIsAnimating(false);
            setCurrentDialogueText(props.data[props.currentDialoguePage()].dialogue);
        } else {
            goToNextDialogue()
        }
    }

    const goToNextDialogue = () => {
        props.setCurrentDialoguePage(Number(props.currentDialoguePage()) + 1);
    }

    const goToPreviousDialogue = () => {
        props.setCurrentDialoguePage(Number(props.currentDialoguePage()) - 1)
    }

    const clickNextDialogue = () => {
        if (!window.getSelection().toString()) {
            endTextAnimationOrGoToNextDialogue();
        }
    }

    return (
      <div class={styles.dialogue}>
        <Show when={getCharacterImage(currentDialogueLine().asset)}>
            <div class={styles.dialogueImageHolder}>
                <img class={styles.dialogueImage} src={getCharacterImage(currentDialogueLine().asset)} alt={currentDialogueLine().character} />
            </div>
        </Show>
        <div class={styles.dialogueBox} onClick={() => clickNextDialogue()}>
            <div>
                <h1>{currentDialogueLine().character}</h1>
                <span class={styles.dialogueText}>{currentDialogueText()}</span>
            </div>
            <Show when={textIsAnimating() === false}>
                <nav class={styles.dialogueButtons}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                </nav>
            </Show>
        </div>
      </div>
    )
  }