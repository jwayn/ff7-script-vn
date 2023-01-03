import styles from './Dialogue.module.css';
import { createSignal, createEffect, Show, onMount } from "solid-js";
import getCharacterImage from '../util/getCharacterImage';

function updateBackground({ useCustomBackgroundColor, customBackgroundColor, backgroundName}) {
    const backgrounds = {
        "BOMBING MISSION": "src/assets/backgrounds/ch01/midgar.jpg",
        "REACTOR EXPLOSION": "src/assets/backgrounds/ch01/midgar.jpg",
        "SECTOR 8 STREETS": "src/assets/backgrounds/ch01/midgar.jpg",
        "MIDGAR TRAIN": "src/assets/backgrounds/ch01/midgar.jpg",
        "MIGAR TRAIN TUNNEL": "src/assets/backgrounds/ch01/midgar.jpg",
        "SECTOR 7 SLUMS": "src/assets/backgrounds/ch01/midgar.jpg",
        "7th HEAVEN": "src/assets/backgrounds/ch01/midgar.jpg",
        "NIBELHEIM_TOWER": "src/assets/backgrounds/ch01/midgar.jpg",
        "MIDGAR TRAIN RED ALARM": "src/assets/backgrounds/ch01/midgar.jpg",
        "MIDGAR SECTOR 4 PLATE": "src/assets/backgrounds/ch01/midgar.jpg",
        "SECTOR 4 REACTOR": "src/assets/backgrounds/ch01/midgar.jpg",
        "NIBELHEIM REACTOR OLD": "src/assets/backgrounds/ch01/midgar.jpg",
        "SECTOR 4 WALKWAY": "src/assets/backgrounds/ch01/midgar.jpg",
    };
    if (useCustomBackgroundColor) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = customBackgroundColor;
    } else {
        document.body.style.backgroundColor = '#FFFFFF';
        document.body.style.backgroundImage = `url('${backgrounds[backgroundName]}')`;
    }
}

export default (props) => {
    const [currentDialogueLine, setCurrentDialogueLine] = createSignal(0);
    const [currentDialogueText, setCurrentDialogueText] = createSignal('');
    const [textIsAnimating, setTextIsAnimating] = createSignal(true);
    const [textPosition, setTextPosition] = createSignal(0);
    const [showBacklog, setShowBacklog] = createSignal(false);
    
    let timeout;
    createEffect(() => {
        setCurrentDialogueLine(props.data[props.currentDialoguePage()]);
        setCurrentDialogueText('');
        if (props.useCustomBackgroundColor() === true) {
            updateBackground({useCustomBackgroundColor: true, customBackgroundColor: props.customBackgroundColor()});
        } else {
            updateBackground({useCustomBackgroundColor: false, backgroundName: props.data[props.currentDialoguePage()].location});
        }
        setTextPosition(0);
        setTextIsAnimating(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => animateText(), props.textSpeed());
    });

    onMount(async () => {
        let curPage = window.localStorage.getItem('currentDialoguePage');
        if (curPage) {
            props.setCurrentDialoguePage(Number(curPage));
        }

        document.addEventListener("keyup", (e) => {
            if (e.key === " ") {
                endTextAnimationOrGoToNextDialogue();
            }
        });
    })

    const updateDialoguePage = function(num) {
        window.localStorage.setItem('currentDialoguePage', num);
        props.setCurrentDialoguePage(Number(num))
    }

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
            updateDialoguePage(Number(props.currentDialoguePage()) + 1);
        }
    }

    return (
      <div class={styles.dialogue}>
        <Show when={getCharacterImage(currentDialogueLine().character)}>
            <div class={styles.dialogueImageHolder}>
                <img class={styles.dialogueImage} src={getCharacterImage(currentDialogueLine().character)} alt={currentDialogueLine().character} />
            </div>
        </Show>
        <div class={styles.dialogueBox} onClick={() => endTextAnimationOrGoToNextDialogue()}>
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