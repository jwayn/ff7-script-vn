import styles from './Backlog.module.css';
import { createEffect, createSignal, For } from "solid-js";
import getCharacterImage from '../util/getCharacterImage';

export default (props) => {
    let container;
    const [backlog, setBacklog] = createSignal(props.data.slice(0, props.currentDialoguePage() + 1));
    createEffect(() => {
        setBacklog(props.data.slice(0, props.currentDialoguePage() + 1));
    })
    return (
        <Show when={props.showBacklog() === true}>
            <div class={styles.backlogContainer}>
                <button class={styles.closeBacklog} onClick={() => props.setShowBacklog(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div class={styles.backlogLinesContainer} ref={container}>
                    <For each={backlog()}>
                        {(line, i) =>
                            <div class={styles.backlogLine}>
                                <div class={styles.backlogLineImage}>
                                    <Show when={getCharacterImage(line.character)}>
                                        <img src={getCharacterImage(line.character)} alt={line.character}/>
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
        </Show>
    )
}