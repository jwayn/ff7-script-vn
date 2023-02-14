import styles from './App.module.css';
import Dialogue from './components/Dialogue';
import parseCsv from './util/parseCsv';
import Options from './components/Options';
import Backlog from './components/Backlog';
import { createSignal, onMount } from 'solid-js'

function App() {
  const [textSpeed, setTextSpeed] = createSignal(localStorage.getItem('textSpeed') || 70);
  const [customBackgroundColor, setCustomBackgroundColor] = createSignal(false);
  const [useCustomBackgroundColor, setUseCustomBackgroundColor] = createSignal(false);
  const [currentDialoguePage, setCurrentDialoguePage] = createSignal(0);
  const [showBacklog, setShowBacklog] = createSignal(false);
  const [showOptions, setShowOptions] = createSignal(false);
  const [modalIsPresent, setModalIsPresent] = createSignal(false);

  let ticking = false;
  onMount(async () => {
    document.addEventListener("wheel", (event) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (event.deltaY < 0 && showBacklog() === false && showOptions() === false) setShowBacklog(true);
          ticking = false;
        });

        ticking = true;
      }
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          if(showBacklog() !== true && modalIsPresent() !== true) {
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
    <div class={styles.App}>
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
      />
      <Show when={showBacklog() === true}>
        <Backlog
          showBacklog={showBacklog} 
          setShowBacklog={setShowBacklog} 
          currentDialoguePage={currentDialoguePage} 
          setCurrentDialoguePage={setDialoguePage} 
          data={data} 
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
      />
    </div>
  );
}

export default App;
