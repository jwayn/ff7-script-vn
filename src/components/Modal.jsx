
import { createSignal, createEffect, Show, useTransition, onMount, onCleanup } from "solid-js";
import styles from "./Modal.module.css";
export default (props) => {
    return (
        <div class={styles.container}>
            <div class={styles.ffmodal}>
                <div class={styles.content}>
                    <div class={styles.heading}>
                        {props.title}
                    </div>
                    <div class={styles.body}>
                        {props.content}
                    </div>
                </div>
                <div class={styles.buttons}>
                    <button class={styles.secondary} onClick={() => props.secondaryButtonAction()}>{props.secondaryButtonText}</button>
                    <button class={styles.primary} onClick={() => props.primaryButtonAction()}>{props.primaryButtonText}</button>
                </div>
            </div>
        </div>
    )
}