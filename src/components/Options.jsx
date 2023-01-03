import { createSignal, createEffect, Show, useTransition, onMount, onCleanup } from "solid-js";
import styles from './Options.module.css';

export default (props) => {
    const phrase = "選択した速度でテキストを表示した例です。快適な速度ですか？";
    
    const [fadeOptions, setFadeOptions] = createSignal(false)
    const [exampleText, setExampleText] = createSignal(phrase);
    const [textPosition, setTextPosition] = createSignal(0);
    const [soundEffectsOn, setSoundEffectsOn] = createSignal(true);
    const cursorSound = new Audio("src/assets/audio/sound-effects/cursor.mp3");
    const saveSound = new Audio("src/assets/audio/sound-effects/save.mp3");

    queueMicrotask(() => {
        if (window.localStorage.getItem('textSpeed') !== null) props.setTextSpeed(window.localStorage.getItem('textSpeed'));
        if (window.localStorage.getItem('soundEffectsOn') !== null) setSoundEffectsOn(JSON.parse(window.localStorage.getItem('soundEffectsOn')));
        if (window.localStorage.getItem('useCustomBackgroundColor') !== null) props.setUseCustomBackgroundColor(JSON.parse(window.localStorage.getItem('useCustomBackgroundColor')));
        if (window.localStorage.getItem('customBackgroundColor') !== null) props.setCustomBackgroundColor(window.localStorage.getItem('customBackgroundColor'));
        if (window.localStorage.getItem('fadeOptions') !== null) setFadeOptions(JSON.parse(window.localStorage.getItem('fadeOptions')));
    });

    

    let timeout;
    const animateText = function() {
        if(props.textSpeed() > 0) {
            setExampleText(exampleText() + phrase.charAt(textPosition()));
            if (textPosition() !== phrase.length) {
                setTextPosition(textPosition() + 1);
                clearTimeout(timeout);
                timeout = setTimeout(() => animateText(), Number(props.textSpeed()));
            } else {
                return;
            }
        } else {
            setExampleText(phrase);
        }
    }

    function playCursorSound() {
        if(soundEffectsOn() === true) {
            cursorSound.currentTime = 0;
            cursorSound.play();
        }
    }

    function playSaveSound() {
        if(soundEffectsOn() === true) {
            saveSound.currentTime = 0;
            saveSound.play();
        }
    }

    function updateSpeed(speed) {
        playCursorSound();
        props.setTextSpeed(speed);
        window.localStorage.setItem('textSpeed', speed);
        setExampleText("");
        setTextPosition(0);
        animateText();
    }

    function toggleSoundEffects(status) {
        playCursorSound();
        window.localStorage.setItem('soundEffectsOn', status);
        setSoundEffectsOn(status);
    }

    function toggleFadeOptions(status) {
        playCursorSound();

        window.localStorage.setItem('fadeOptions', status);
        setFadeOptions(status);
    }

    function toggleUseCustomBackgroundColor(status) {
        playCursorSound();

        window.localStorage.setItem('useCustomBackgroundColor', status);
        props.setUseCustomBackgroundColor(status);
    }

    function updateBackgroundColor(color) {
        playCursorSound();

        window.localStorage.setItem('customBackgroundColor', color);
        props.setCustomBackgroundColor(color);
    }

    function saveSettings() {
        playSaveSound();
        props.setShowOptions(false);
    }
    
    return (
        <div class={styles.optionsContainer} classList={{[styles.full]: props.showOptions() == true}}>
            <button onClick={() => props.setShowOptions(!props.showOptions())} classList={{[styles.buttonFull]: props.showOptions() == true, [styles.btnOptionsButton]: true, [styles.hidden]: fadeOptions() == true}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
            <Show when={props.showOptions() == true}>
                <div classList={{[styles.ffbox]: true, [styles.options]: true}}>
                    <div class={styles.ffbox}>
                        <div>
                            <h2>Text Speed</h2>
                            <div class={styles.radioGroup}>
                                <input type="radio" name="textSpeed" id="slowest" value="175" checked={Number(props.textSpeed()) === 175} onChange={(e) => updateSpeed(e.currentTarget.value)}/>
                                <label for="slowest">Slowest</label>
                            </div>

                            <div class={styles.radioGroup}>
                                <input type="radio" name="textSpeed" id="slow" value="125" checked={Number(props.textSpeed()) === 125} onChange={(e) => updateSpeed(e.currentTarget.value)}/>
                                <label for="slow">Slow</label>
                            </div>

                            <div class={styles.radioGroup}>
                                <input type="radio" name="textSpeed" id="normal" value="70" checked={Number(props.textSpeed()) === 70} onChange={(e) => updateSpeed(e.currentTarget.value)} />
                                <label for="normal">Normal</label>
                            </div>

                            <div class={styles.radioGroup}>
                                <input type="radio" name="textSpeed" id="fast" value="35" checked={Number(props.textSpeed()) === 35} onChange={(e) => updateSpeed(e.currentTarget.value)}/>
                                <label for="fast">Fast</label>
                            </div>

                            <div class={styles.radioGroup}>
                                <input type="radio" name="textSpeed" id="fastest" value="10" checked={Number(props.textSpeed()) === 10} onChange={(e) => updateSpeed(e.currentTarget.value)}/>
                                <label for="fastest">Fastest</label>
                            </div>

                            <div class={styles.radioGroup}>
                                <input type="radio" name="textSpeed" id="instant" value="0" checked={Number(props.textSpeed()) === 0} onChange={(e) => updateSpeed(e.currentTarget.value)}/>
                                <label for="instant">Instant</label>
                            </div>
                        </div>

                        <div class={styles.ffbox}>
                            {exampleText}
                        </div>
                    </div>

                    <div class={styles.ffbox}>
                        {/* <div class={styles.radioGroup}>
                            <input type="checkbox" name="autoplayAudio" id="autoplayAudio" />
                            <label for="autoplayAudio">Auto play audio clips?</label>
                        </div> */}

                        <div class={styles.radioGroup}>
                            <input type="checkbox" name="optionsHide" id="optionsHide" checked={fadeOptions() === true} onChange={(event) => toggleFadeOptions(event.target.checked)} />
                            <label for="optionsHide">Fade out options button?</label>
                        </div>

                        <div class={styles.radioGroup}>
                            <input type="checkbox" name="soundEffects" id="soundEffects" checked={soundEffectsOn() === true} onChange={(e) => toggleSoundEffects(e.target.checked)} />
                            <label for="soundEffects">Enable sound effects?</label>
                        </div>
                    </div>

                    <div class={styles.ffbox}>
                        <div class={styles.radioGroup}>
                            <input type="checkbox" name="customBackgroundColor" id="customBackgroundColor" checked={props.useCustomBackgroundColor() === true} onChange={(e) => toggleUseCustomBackgroundColor(e.target.checked)} />
                            <label for="customBackgroundColor">Use custom background color?</label>
                        </div>
                        <Show when={props.useCustomBackgroundColor() === true}>
                            <label for="colorpicker">Select a color</label>
                            <input type="color" name="colorpicker" class={styles.colorPicker} value={props.customBackgroundColor()} onChange={(e) => updateBackgroundColor(e.currentTarget.value)}>
                                Hi there
                            </input>
                        </Show>
                    </div>

                    <button classList={{[styles.ffbox]: true, [styles.saveButton]: true}} onClick={() => saveSettings()}>Save</button>
                </div>
            </Show>
        </div>
    )
}