import styles from './App.module.css';
import Dialogue from './components/Dialogue';
import parseCsv from './util/parseCsv';
import Options from './components/Options';
import Backlog from './components/Backlog';
import Search from './components/Search';
import Modal from './components/Modal.jsx';
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
  const [showCreditsModal, setShowCreditsModal] = createSignal(false);

  let ticking = false;
  let showSearchTimeout;
  
  function hideSearch() {
    clearTimeout(showSearchTimeout);
    showSearchTimeout = undefined;
    setShowSearch(false);
  }

  onMount(async () => {
    document.addEventListener("wheel", (event) => {
      if (!ticking && showStartScreen() !== true) {
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
      if (showSearch() !== true && showOptions() !== true && showBacklog() !== true && showStartScreen() !== true) {
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
        if (e.key === "Escape" && showStartScreen() !== true) {
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
        <Show when={showCreditsModal() === true}>
          <Modal 
            title="Credits"
            primaryButtonText="Back"
            primaryButtonAction={() => setShowCreditsModal(false)}
          >
            <div class={styles.credits}>
              <div class={styles.creditsAttribution}>
                <h3>
                  This fan project was made by:
                </h3>
                <div>
                  <p>
                    <b>elro</b> who worked on cleaning up the script and creating midjourney assets
                  </p>
                  <a href="https://www.buymeacoffee.com/elro1822" target="_blank" rel="noopener noreferrer">Buy elro a coffee!</a>
                </div>
                <div>
                  <p>
                    <b>yust</b> who worked on designing and programming the website
                  </p>
                  <a href="https://ko-fi.com/yust_" target="_blank" rel="noopener noreferrer">Buy yust a coffee!</a>
                </div>
              </div>
              <p>
                The script was adapted from the one available on <a href="http://ajatt.com/finalfantasy/ff7p-index.htm" target="_blank" rel="noopener noreferrer">AJATT</a>.
              </p>
              <p>
                Please enjoy the the script adapted from chapters one through three of the game while we work on finalizing the assets for the rest of the chapters.
              </p>
              <p>
                We hope you enjoy your language study, and please don't forget to buy the game!
              </p>
              <h4>Disclaimer</h4>
              <p class={styles.disclaimer}>
                The content within this website may contain copyrighted material owned by © Square Enix, and used under the guidelines of fair use for educational purposes only. The views and opinions expressed in this content are those of © Square Enix and do not necessarily reflect the official policy or position of © Square Enix. The copyrighted material has been included in this content because of its relevance and importance to the educational objectives of this project. The use of this copyrighted material is not intended to infringe upon the owner's rights nor is it intended to be claimed as our own. This project is a non-commercial public resource with the purpose of aiding individuals in learning Japanese. We ask that you please buy the game if you are using this as a learning resource, as this is intended to be used as an educational resource alongside the original Final Fantasy VII game.
              </p>
            </div>
          </Modal>
        </Show>
        <div class={styles.startScreen}>
          <div class={styles.startButtonContainer}>
            <button onClick={() => {setDialoguePage(0); setShowStartScreen(false)}}>NEW GAME</button>
            <Show when={currentDialoguePage() > 0}>
              <button onClick={() => {setShowStartScreen(false)}}>Continue?</button>
            </Show>
            <button onClick={() => setShowCreditsModal(true)}>Credits</button>
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
