import { createSignal, Show, For } from "solid-js";
import styles from './Search.module.css';

export default (props) => { 

    const [showSearchResults, setShowSearchResults] = createSignal(false);
    const [searchIsFocused, setSearchIsFocused] = createSignal(false);
    const [isMouseInSearchContainer, setIsMouseInSearchContainer] = createSignal(false);
    const [searchValue, setSearchValue] = createSignal();
    const [searchTimer, setSearchTimer] = createSignal(null);
    const [searchResults, setSearchResults] = createSignal(null);

    function handleMouseLeaveSearchContainer(event) {
        if (event.clientY > 100) {
            setIsMouseInSearchContainer(false);
            if (showSearchResults() !== true && searchIsFocused() !== true) {
                hideSearch();
            }
        }
    }

    function hideSearch() {
        setTimeout(() => {
            setSearchValue("");
            showSearchResults(false);
            setSearchIsFocused(false);
            props.hideSearch();
        }, 500)
    }

    function handleSearchFocus() {
        setSearchIsFocused(true)
        props.setBlockNavigation(true);
    }

    function handleSearchBlur() {
        props.setBlockNavigation(false);
        setSearchIsFocused(false);
        if(isMouseInSearchContainer() !== true && showSearchResults() !== true) {
            hideSearch();
        }
    }

    function handleInputChange(event) {
        setSearchValue(event.target.value);
        if (searchTimer() !== null) clearTimeout(searchTimer());
        let tempTimer = setTimeout(() => {
            makeSearch(searchValue());
        }, 500)
        setSearchTimer(tempTimer)
    }

    function makeSearch(term) {
        setShowSearchResults(true);
        let results = structuredClone(props.data)
            .filter(line => line.dialogue.includes(term))
            .map(line => {
                line.dialogue = line.dialogue.replaceAll(term, `<span class="${styles.highlight}">${term}</span>`);
                return line;
            });
        if (props.numResults() > 0) {
            results = results.slice(0, props.numResults() + 1);
        }
        setSearchResults(results);
    }

    function getCharacterImage(characterName) {
        const url = `assets/images/${characterName}.png`;
        return url;
    };

    function handleSearchResultClick(idx) {
        props.setCurrentDialoguePage(idx);
        props.setShowSearch(false);
    }

    return (
        <div class={styles.search} classList={{[styles.full]: showSearchResults() === true}}>
            <div onMouseLeave={(event) => handleMouseLeaveSearchContainer(event)} onMouseEnter={() => setIsMouseInSearchContainer(true)} class={styles.searchContainer}>
                <div class={styles.searchBoxGroup}>
                    <input onFocus={() => handleSearchFocus()} onBlur={() => handleSearchBlur()} onInput={(event) => handleInputChange(event)} class={styles.searchBox} placeholder="Search" />
                    <button class={styles.closeSearch} onClick={() => props.setShowSearch(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <Show when={showSearchResults() === true}>
                <div class={styles.searchResults}>
                    <For each={searchResults()}>{(line, i) => 
                        <button onClick={() => handleSearchResultClick(line.originalIdx)} class={styles.ffbox}>
                            <Show when={props.debug() === true}>
                                {line.originalIdx}
                            </Show>
                            <div class={styles.portrait}>
                                <Show when={line.asset}>
                                    <img src={getCharacterImage(line.backlogAsset)} alt={line.character}/>
                                </Show>
                            </div>
                            <div class={styles.dialogueContent}>
                                <div class={styles.name}>{line.character}</div>
                                <div class={styles.dialogue} innerHTML={line.dialogue}></div>
                            </div>
                        </button>
                    }</For>
                </div>
            </Show>
        </div>
    )
};