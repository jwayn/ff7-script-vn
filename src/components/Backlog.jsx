import styles from './Backlog.module.css';
import { createEffect, createSignal, For, onMount } from "solid-js";

export default (props) => {
    let container;
    const [backlog, setBacklog] = createSignal(props.data.slice(0, props.currentDialoguePage() + 1));
    createEffect(() => {
        setBacklog(props.data.slice(0, props.currentDialoguePage() + 1));
    })

    function setDialoguePage(page) {
        props.setCurrentDialoguePage(page);
        props.setShowBacklog(false);
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

    onMount(() => {
        container.lastElementChild.scrollIntoView();
    });

    return (
        <div class={styles.backlogContainer}>
            <button class={styles.closeBacklog} onClick={() => props.setShowBacklog(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div class={styles.backlogLinesContainer} ref={container}>
                <For each={backlog()}>
                    {(line, i) =>
                        <div class={styles.backlogLine} onClick={() => setDialoguePage(i())}>
                            <div class={styles.backlogLineImage}>
                                <Show when={getCharacterImage(line.asset)}>
                                    <img src={getCharacterImage(line.asset)} alt={line.character}/>
                                </Show>
                            </div>
                            <div class={styles.backlogLineContent}>
                                <div class={styles.backlogLineName}>
                                    {line.character}
                                </div>
                                <div class={styles.backlogLineText}>
                                    {line.dialogue}
                                </div>
                            </div>
                        </div>
                    }
                </For>
            </div>
        </div>
    )
}