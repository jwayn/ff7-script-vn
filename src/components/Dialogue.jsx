import styles from './Dialogue.module.css';
import { createSignal, createEffect, Show, onMount } from "solid-js";
import getCharacterImage from '../util/getCharacterImage';

function updateBackground({ useCustomBackgroundColor, customBackgroundColor, backgroundName}) {
    if (useCustomBackgroundColor) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = customBackgroundColor;
    } else {
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.backgroundImage = `url('assets/backgrounds/ch01/${backgroundName}.png')`;
    }
}

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
            fetchNextBackground(props.data[props.currentDialoguePage() + 1].location);
        }
        setTextPosition(0);
        setTextIsAnimating(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => animateText(), props.textSpeed());
    });

    onMount(async () => {
        document.addEventListener("keyup", (e) => {
            if (!props.menuIsUp) {
                if (e.key === " ") {
                    endTextAnimationOrGoToNextDialogue();
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
            props.setCurrentDialoguePage(Number(props.currentDialoguePage()) + 1);
        }
    }

    const clickNextDialogue = () => {
        if (!window.getSelection().toString()) {
            endTextAnimationOrGoToNextDialogue();
        }
    }

    return (
      <div class={styles.dialogue}>
        <Show when={getCharacterImage(currentDialogueLine().character)}>
            <div class={styles.dialogueImageHolder}>
                <img class={styles.dialogueImage} src={getCharacterImage(currentDialogueLine().character)} alt={currentDialogueLine().character} />
            </div>
        </Show>
        <div class={styles.dialogueBox} onClick={() => clickNextDialogue()}>
            <h1>{currentDialogueLine().character}</h1>
            <span class={styles.dialogueText}>{currentDialogueText()}</span>
            <Show when={textIsAnimating() === false}>
                <nav class={styles.dialogueButtons}>
                    。。。
                </nav>
            </Show>
        </div>
      </div>
    )
  }