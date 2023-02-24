import styles from './Backlog.module.css';
import { createEffect, createSignal, For, onMount } from "solid-js";

export default (props) => {
    let container;
    // please kill me
    const firstBacklogPage = props.numResults() > 0 
        ? props.currentDialoguePage() + 1 - props.numResults() > 0 ? 
            props.currentDialoguePage() + 1 - props.numResults() 
            : 0
        : 0;
    const [backlog, setBacklog] = createSignal(props.data.slice(firstBacklogPage, props.currentDialoguePage() + 1));
    createEffect(() => {
        setBacklog(props.data.slice(firstBacklogPage, props.currentDialoguePage() + 1));
    })

    function setDialoguePage(page) {
        props.setCurrentDialoguePage(page);
        props.setShowBacklog(false);
    }

    function getCharacterImage(characterName) {
        const url = `assets/images/${characterName}.png`;
        return url;
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
                        <div class={styles.backlogLine} onClick={() => setDialoguePage(line.originalIdx)}>
                            <div class={styles.backlogLineImage}>
                                <Show when={line.asset}>
                                    <img src={getCharacterImage(line.backlogAsset)} alt={line.character}/>
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