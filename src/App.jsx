import styles from './App.module.css';
import Dialogue from './components/Dialogue';
import parseCsv from './util/parseCsv';
import Options from './components/Options';
import Backlog from './components/Backlog';
import Search from './components/Search';
import { createSignal, onMount } from 'solid-js'

function App() {
  const [textSpeed, setTextSpeed] = createSignal(localStorage.getItem('textSpeed') || 70);
  const [customBackgroundColor, setCustomBackgroundColor] = createSignal(false);
  const [useCustomBackgroundColor, setUseCustomBackgroundColor] = createSignal(false);
  const [currentDialoguePage, setCurrentDialoguePage] = createSignal(0);
  const [showBacklog, setShowBacklog] = createSignal(false);
  const [showOptions, setShowOptions] = createSignal(false);
  const [modalIsPresent, setModalIsPresent] = createSignal(false);
  const [showSearch, setShowSearch] = createSignal(false);
  const [blockNavigation, setBlockNavigation] = createSignal(false);
  const [numSearchResults, setNumSearchResults] = createSignal(25);
  const [numBacklogResults, setNumBacklogResults] = createSignal(25);
  const [showStartScreen, setShowStartScreen] = createSignal(true);
  const [debug, setDebug] = createSignal(false);

  let ticking = false;
  let showSearchTimeout;
  
  function hideSearch() {
    clearTimeout(showSearchTimeout);
    showSearchTimeout = undefined;
    setShowSearch(false);
  }

  onMount(async () => {
    document.addEventListener("wheel", (event) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (event.deltaY < 0 && showBacklog() === false && showOptions() === false && showSearch() !== true) {
            hideSearch();
            setShowBacklog(true);
          }
          ticking = false;
        });

        ticking = true;
      }
    });

    document.addEventListener("mousemove", (event) => {
      if (showSearch() !== true && showOptions() !== true && showBacklog() !== true) {
        if (event.clientY <= 100 && !showSearchTimeout) {
          showSearchTimeout = setTimeout(() => {
            setShowSearch(true);
          }, 500)
        } else if (event.clientY > 100 && showSearchTimeout) {
          hideSearch();
        }
      }
    })

    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          if(showSearch() == true && modalIsPresent() !== true) {
            hideSearch();
          } else if(showBacklog() !== true && modalIsPresent() !== true) {
            setShowOptions(!showOptions());
          } else {
            setShowBacklog(false);
          }
        }
    });

    if (window.localStorage.getItem('currentDialoguePage')) {
      setCurrentDialoguePage(JSON.parse(window.localStorage.getItem('currentDialoguePage')));
    }
  });

  function setDialoguePage(page) {
    if (page >= 0 && page < data.length) {
      window.localStorage.setItem('currentDialoguePage', page);
      setCurrentDialoguePage(page);
    }
  }

  const data = parseCsv();
let chapters = Array.from(new Set(data.map(dialogue => dialogue.chapter)));
chapters = chapters.map(chapter => {
  return {
    chapter,
    index: data.indexOf(data.find(dialogue => dialogue.chapter === chapter)),
  }
});

  return (
    <>
      <Show when={showStartScreen() === true}>
        <div class={styles.startScreen}>
          <div class={styles.startButtonContainer}>
            <button onClick={() => {setDialoguePage(0); setShowStartScreen(false)}}>NEW GAME</button>
            <Show when={currentDialoguePage() > 0}>
              <button onClick={() => {setShowStartScreen(false)}}>Continue?</button>
            </Show>
          </div>
        </div>
      </Show>
      <Show when={showStartScreen() !== true}>
        <div class={styles.App}>
          <Show when={showSearch() === true}>
            <Search 
              hideSearch={hideSearch}
              setBlockNavigation={setBlockNavigation}
              setShowSearch={setShowSearch}
              numResults={numSearchResults}
              setCurrentDialoguePage={setDialoguePage}
              data={data}
              debug={debug}
            />
          </Show>
          <Options 
            setTextSpeed={setTextSpeed} 
            textSpeed={textSpeed} 
            customBackgroundColor={customBackgroundColor} 
            setCustomBackgroundColor={setCustomBackgroundColor} 
            useCustomBackgroundColor={useCustomBackgroundColor} 
            setUseCustomBackgroundColor={setUseCustomBackgroundColor}
            showOptions={showOptions}
            setShowOptions={setShowOptions}
            setModalIsPresent={setModalIsPresent}
            setCurrentDialoguePage={setDialoguePage}
            chapters={chapters}
            numBacklogResults={numBacklogResults}
            setNumBacklogResults={setNumBacklogResults}
            setNumSearchResults={setNumSearchResults}
            numSearchResults={numSearchResults}
            debug={debug}
            setDebug={setDebug}
            totalDialogueLines={data.length}
          />
          <Show when={showBacklog() === true}>
            <Backlog
              showBacklog={showBacklog} 
              setShowBacklog={setShowBacklog} 
              currentDialoguePage={currentDialoguePage} 
              setCurrentDialoguePage={setDialoguePage}
              numResults={numBacklogResults}
              data={data} 
              debug={debug}
            />
          </Show>
          <Dialogue 
            data={data} 
            textSpeed={textSpeed} 
            customBackgroundColor={customBackgroundColor} 
            useCustomBackgroundColor={useCustomBackgroundColor} 
            currentDialoguePage={currentDialoguePage} 
            setCurrentDialoguePage={setDialoguePage}
            menuIsUp={showBacklog() === true || showOptions() === true}
            blockNavigation={blockNavigation}
            debug={debug}
          />
        </div>
      </Show>
    </>
  );
}

export default App;
