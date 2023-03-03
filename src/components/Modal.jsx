
import { createSignal, createEffect, Show, useTransition, onMount, onCleanup } from "solid-js";
import styles from "./Modal.module.css";
export default (props) => {
    return (
        <div class={styles.container}>
            <div class={styles.ffmodal}>
                <div class={styles.content}>
                    <h2 class={styles.heading}>
                        {props.title}
                    </h2>
                    <div class={styles.body}>
                        {props.children}
                    </div>
                </div>
                <div class={styles.buttons}>
                    <Show when={props.secondaryButtonText}>
                        <button class={styles.secondary} onClick={() => props.secondaryButtonAction()}>{props.secondaryButtonText}</button>
                    </Show>
                    <Show when={props.primaryButtonText}>
                        <button class={styles.primary} onClick={() => props.primaryButtonAction()}>{props.primaryButtonText}</button>
                    </Show>
                </div>
            </div>
        </div>
    )
}